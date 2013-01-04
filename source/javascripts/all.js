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