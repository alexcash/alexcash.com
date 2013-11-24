//= require jquery-1.8.3.js
//= require jquery.last.fm.js


//doc ready
$(function($){
    'use strict';
    //populate top albums
    $('.albums').lfm({
        APIkey: '4583963e1d8402859dd8f6e3893625fe',
        User: 'alex-cash',
        limit: 12,
        Behavior: 'hover'
    });

    setTimeout(function () {
        console.log($('.timeline', $('iframe').first().contents()));
        console.log($('.tweets'));
        $('.tweets').append($('.stream ol', $('iframe').first().contents()));
    }, 1000);


});

//analytics
var _gaq=[['_setAccount','UA-29834387-1'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s);}(document,'script'));
