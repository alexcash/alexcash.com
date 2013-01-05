//= require_tree .


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
        loading_text: "loading tweets..."
    });

});

//analytics
var _gaq=[['_setAccount','UA-29834387-1'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s);}(document,'script'));
