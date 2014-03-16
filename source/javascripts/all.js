//= require jquery-2.1.0.js
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
        $('.tweets').append($('.stream ol', $('iframe').first().contents()));
    }, 1000);


});
