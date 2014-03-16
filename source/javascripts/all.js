//= require jquery-2.1.0.js
//= require lodash.js
//= require moment.min.js
//= require jquery.last.fm.js

function linkify(text) {
    'use strict';

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
}

//doc ready
$(function($){
    'use strict';

    var _ = window._,
        moment = window.moment;

    //populate top albums
    $('.albums').lfm({
        APIkey: '4583963e1d8402859dd8f6e3893625fe',
        User: 'alex-cash',
        limit: 12,
        Behavior: 'hover'
    });

    $.ajax({
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
        }, {
            evaluate:    /\{\{#([\s\S]+?)\}\}/g,            // {{# console.log("blah") }}
            interpolate: /\{\{[^#\{]([\s\S]+?)[^\}]\}\}/g,  // {{ title }}
            escape:      /\{\{\{([\s\S]+?)\}\}\}/g,         // {{{ title }}}
        }));
    });

    $.ajax({
        type: 'GET',
        url: 'https://api.instagram.com/v1/users/227221390/media/recent/?client_id=d29dc6d5e6ad41018cacb4d8916612a4',
        dataType: 'jsonp',
    }).then(function(response){
        console.log(response);
        _.each(response.data, function(imgObj){
            $('.instagram').append('<img class=" album" src="' + imgObj.images.low_resolution.url + '">');
        });
    });

});
