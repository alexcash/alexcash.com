//= require_tree .

jQuery(function($){
    $(".tweet").tweet({
        username: "alexcash",
        join_text: "auto",
        avatar_size: null,
        count: 10,
        auto_join_text_default: "",
        auto_join_text_ed: "",
        auto_join_text_ing: "",
        auto_join_text_reply: "",
        auto_join_text_url: "",
        loading_text: "loading tweets..."
    });
});
