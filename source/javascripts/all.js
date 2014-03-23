//= require modernizr.js
//= require jquery-2.1.0.js
//= require lodash.js
//= require moment.js

//doc ready
$(function($){
    'use strict';

    var _ = window._,
        moment = window.moment,
        imageGridTemplate = $('#image-grid').html(),
        lfmKey = '4583963e1d8402859dd8f6e3893625fe',
        lfmUserName = 'alex-cash',
        linkify = function(text) {
            text = text.replace(/(https?:\/\/\S+)/gi, function (s) {
                return '<a href="' + s + '">' + s + '</a>';
            });

            text = text.replace(/(^|)@(\w+)/gi, function (s) {
                return '<a href="http://twitter.com/' + s + '">' + s + '</a>';
            });

            text = text.replace(/(^|)#(\w+)/gi, function (s) {
                return '<a href="http://search.twitter.com/search?q=' + s.replace(/#/,'%23') + '">' + s + '</a>';
            });
            return text;
        },
        processNowPlaying = function(data, status){
            if(status !== 'success') {
                console.log('network error');
                return undefined;
            }

            var track;


            // sometimes the most recent track is an array. I dunno why.
            if (data.recenttracks.track.length) {
                // lastfm gives us a hint with an attr. try to use it
                _.each(data.recenttracks.track, function(enumTrack){
                    if(enumTrack['@attr']) { //lastfm says this track is playing
                        track = enumTrack;
                        return;
                    }

                    // but sometimes it won't have artwork, and others in the array
                    // will have the correct artwork. use it.
                    if(track && (enumTrack.name === track.name || (enumTrack.album['#text'] != '' && enumTrack.album['#text'] === track.album['#text'])) && enumTrack.image && enumTrack.image[track.image.length-1]['#text'] != '') {
                        track = enumTrack;
                    }
                });

                // ok so sometimes there will be none with the @attr.
                // grab the most recent.
                if(!track) {
                    track = _(data.recenttracks.track).sortBy(function(enumTrack) {
                        if(enumTrack.date) {
                            return enumTrack.date.uts;
                        }
                        return 0;
                    }).first();
                }
            } else {
                // if lastfm only decides to return one track use it.
                track = data.recenttracks.track;
            }

            // if the track has a date and was played more than 10 minutes ago
            // it's stale.
            if(track.date && Date.now() - (track.date.uts*1000) > 600000) {
                console.log('too old');
                return undefined;
            }


            var imgURL = track.image[track.image.length-1]['#text'];
            
            // it has to have a picture we can use
            if (imgURL.indexOf('noimage') > -1 || imgURL.indexOf('.gif') > -1) {
                console.log('unsatisfactory image');
                return undefined;
            }

            return {
                imgURL: imgURL,
                linkURL: track.url,
                title: track.name,
                artist: track.artist['#text']
            };
        },
        processTopAlbums = function(data, status){
            if(status !== 'success') {
                return undefined;
            }
            var albums = [];

            _.each(data.topalbums.album, function(album){
                var imgURL = album.image[album.image.length-1]['#text'];
                if (imgURL.indexOf('noimage') > -1 || imgURL.indexOf('.gif') > -1) {
                    return;
                }
                albums.push ({
                    imgURL: imgURL,
                    linkURL: album.url,
                    title:   album.name,
                    artist: album.artist.name,
                    played: album.playcount
                });
            });

            return albums.slice(0,12);
        };


    _.templateSettings = {
        evaluate:    /\{\{#([\s\S]+?)\}\}/g,            // {{# console.log("blah") }}
        interpolate: /\{\{[^#\{]([\s\S]+?)[^\}]\}\}/g,  // {{ title }}
        escape:      /\{\{\{([\s\S]+?)\}\}\}/g,         // {{{ title }}}
    };


    if ($('.lfm').length) {
        var nowPlayingPromise = $.ajax({
                url: 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + lfmUserName + '&limit=1&nowplaying=true&api_key=' + lfmKey + '&format=json',
                type: 'get',
                dataType: 'jsonp',
            }),
            topAlbumsPromise = $('.lfm').length && $.ajax({
                url: 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=' + lfmUserName + '&period=6month&api_key=' + lfmKey + '&format=json&limit=20',
                type: 'get',
                dataType: 'jsonp',
            });

        $.when(nowPlayingPromise, topAlbumsPromise).always(function(nowPlayingArgs, topAlbumsArgs){
            var nowPlaying = processNowPlaying(nowPlayingArgs[0], nowPlayingArgs[1]) || false,
                topAlbums = processTopAlbums(topAlbumsArgs[0], nowPlayingArgs[1]);

            topAlbums && $('.lfm').append(_.template(imageGridTemplate, {
                top: nowPlaying,
                elements: topAlbums
            })).show();
        });
    }


    // twitter
    $('.tweets').length && $.ajax({
        url:'https://spreadsheets.google.com/feeds/list/0AnMG6z98bgj6dGJCTlJMc3FvZVdiY3FOTjVteklKQWc/od6/public/values?alt=json',
        type:'get',
        dataType: 'jsonp',
    }).always(function(data, status){
        if(status !== 'success') {
            return;
        }
        var tweetObjects = data.feed.entry,
            tweets = [],
            outTweets = [];

        _.each(tweetObjects, function(tweetObject){
            tweets.push(_.pick(tweetObject, function(value, key){
                return key.indexOf('gsx') > -1;
            }));
        });

        _.each(tweets, function(tweet){
            var vals = [];
            _.forIn(tweet, function(value){
                vals.push(value['$t']);
            });
            outTweets.unshift({
                handle: vals[1],
                body: linkify(vals[2]),
                url: vals[3],
                timestamp: moment(vals[0], 'MMM DD, YYYY at hh:mma').fromNow()
            });
        });

        $('.tweets').append(_.template($('#tweets-template').html(), {
            tweets: outTweets
        })).show();
    });

    // instagram image-grid
    $('.instagram') && $.ajax({
        type: 'GET',
        url: 'https://api.instagram.com/v1/users/227221390/media/recent/?client_id=d29dc6d5e6ad41018cacb4d8916612a4',
        dataType: 'jsonp',
    }).always(function(data, status){
        if(status !== 'success') {
            return;
        }
        var photos = [];

        _.each(data.data, function(imgObj){
            photos.push({
                imgURL: imgObj.images.low_resolution.url,
                linkURL: imgObj.link
            });
        });

        $('.instagram').append(_.template(imageGridTemplate, {
            elements: photos
        })).show();
    });

});
