/*
 * jQuery.last.fm
 *
 * A jQuery plugin that populates the given element with
 * album artwork based upon the given parameters. At this time,
 * only for top albums.
 *
 * Copyright © 2013 Alex Cash
 * Dual licensed under the MIT and GPL licenses.
 */
(function(e){e.fn.lfm=function(t){function s(t){for(var r=0;r<i.length;r++){var s=e("<div class='album'><div class='front'><img src='"+i[r].art+"'><div class='alpha'></div></div><div class='back'><h2>"+i[r].artist+"</h2><h1>"+i[r].name+"</h1><h3>"+i[r].played+" tracks played</h3></div></div>");t.append(s)}n.Behavior=="hover"?t.find(".album").hover(function(){e(this).addClass("flip")},function(){e(this).removeClass("flip")}):(e(document).bind("click",function(t){e(".flip").removeClass("flip")}),t.find(".album").click(function(t){t.stopPropagation(),e(".flip")[0]===this?e(this).removeClass("flip"):(e(".flip").removeClass("flip"),e(this).addClass("flip"))}))}var n=e.extend({APIkey:null,User:null,Behavior:"hover",limit:20,period:"3month"},t),r="http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user="+n.User+"&period="+n.period+"&api_key="+n.APIkey+"&format=json&limit="+n.limit+"&callback=?",i=[];return this.each(function(){var t=e(this);e.getJSON(r,function(n){e(n.topalbums.album).each(function(){i.push({name:this.name,artist:this.artist.name,played:this.playcount,art:this.image[this.image.length-1]["#text"]})}),s(t)})})}})(jQuery);