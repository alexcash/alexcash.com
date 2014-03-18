//= require jquery-2.1.0.js
//= require lodash.js
//= require moment.js

//doc ready
$(function($){
    'use strict';

    var _ = window._,
        moment = window.moment,
        imageGridTemplate = $('#image-grid').html(),
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
        };

    _.templateSettings = {
        evaluate:    /\{\{#([\s\S]+?)\}\}/g,            // {{# console.log("blah") }}
        interpolate: /\{\{[^#\{]([\s\S]+?)[^\}]\}\}/g,  // {{ title }}
        escape:      /\{\{\{([\s\S]+?)\}\}\}/g,         // {{{ title }}}
    };


    // last.fm image-grid
    $('.albums').length && $.ajax({
        url: 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=alex-cash&period=6month&api_key=4583963e1d8402859dd8f6e3893625fe&format=json&limit=20',
        type: 'get',
        dataType: 'jsonp',
    }).then(function(data){
        var albums = [];

        _.each(data.topalbums.album, function(album){
            var imgURL = album.image[album.image.length-1]['#text'];
            if (imgURL.indexOf('noimage') > -1 || imgURL.indexOf('.gif') > -1) {
                return;
            }
            albums.push ({
                image_url: imgURL,
                link_url: album.url,
                // info: {
                //     name:   album.name,
                //     artist: album.artist.name,
                //     played: album.playcount
                // }
            });
        });
        albums = albums.slice(0,12);

        $('.albums').append(_.template(imageGridTemplate, {
            elements: albums
        }));
    });

    // twitter
    $('.tweets').length && $.ajax({
        url:'https://spreadsheets.google.com/feeds/list/0AnMG6z98bgj6dGJCTlJMc3FvZVdiY3FOTjVteklKQWc/od6/public/values?alt=json',
        type:'get'
    }).then(function(data){
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
                body: linkify(_.escape(vals[2])),
                url: vals[3],
                timestamp: moment(vals[0], 'MMM DD, YYYY at hh:mma').fromNow()
            });
        });

        $('.tweets').append(_.template($('#tweets-template').html(), {
            tweets: _.first(outTweets, 10)
        }));
    });

    // instagram image-grid
    $('.instagram') && $.ajax({
        type: 'GET',
        url: 'https://api.instagram.com/v1/users/227221390/media/recent/?client_id=d29dc6d5e6ad41018cacb4d8916612a4',
        dataType: 'jsonp',
    }).then(function(response){
        var photos = [];

        _.each(response.data, function(imgObj){
            photos.push({
                image_url: imgObj.images.low_resolution.url,
                link_url: imgObj.link
            });
        });

        $('.instagram').append(_.template(imageGridTemplate, {
            elements: photos
        }));
    });

});
