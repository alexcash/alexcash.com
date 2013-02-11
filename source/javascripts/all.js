//= require jquery-1.8.3.js
//= require jquery.tweet.js
//= require jquery.last.fm.js


//doc ready
$(function($){
    
    //populate tweets
    $(".tweet").tweet({
        username: "alexcash",
        join_text: "auto",
        avatar_size: null,
        count: 7,
        auto_join_text_default: "",
        auto_join_text_ed: "",
        auto_join_text_ing: "",
        auto_join_text_reply: "",
        auto_join_text_url: "",
        loading_text: "loading tweets...",
        template: "{text} - {time}"
    });

    //populate top albums
    $('.albums').lfm({
        APIkey: "4583963e1d8402859dd8f6e3893625fe",
        User: "alex-cash",
        limit: 8,
        Behavior: "click"
    });

});

//analytics
var _gaq=[['_setAccount','UA-29834387-1'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s);}(document,'script'));
