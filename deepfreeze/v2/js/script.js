/* Author:

*/

jQuery(function($){
    jQuery(function($){
        $(".tweetr").tweet({
            username: "alexcash",
            join_text: "auto",
            avatar_size: null,
            count: 1,
			template:"&quot;{text}&quot;  ...{time}",
            loading_text: "loading most recent tweet..."
        });
    });
});



