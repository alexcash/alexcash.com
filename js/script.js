/* Author:

*/
$(document).ready(function(){
	$(".bg").hover(function() {
		$(this).animate({ backgroundColor: "#666666" }, 500);
	},function() {
		$(this).animate({ backgroundColor: "#999967" }, 500);
	});
});

jQuery(function($){
    jQuery(function($){
        $(".tweet").tweet({
            username: "alexcash",
            join_text: "auto",
            avatar_size: null,
            count: 1,
			template:"&quot;{text}&quot;  ...{time}",
            loading_text: "loading most recent tweet..."
        });
    });
});



