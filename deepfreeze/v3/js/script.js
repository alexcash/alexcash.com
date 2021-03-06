/* Author:

*/

//insure last block content and footer take up whole screen
function flex(){
	var adjust = window.innerHeight - 875;
	if(adjust > 0)
  		$("#flex").height(adjust);
}

//pull in the tweet
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

//smooth scroll !IMPORTANT! flex() also called at end
$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          $('#fix').css('height', '1px');
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
            $('#fix').css('height', '0px');
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
  
  flex();
   
});

//call flex on window resize
$(window).resize(flex);