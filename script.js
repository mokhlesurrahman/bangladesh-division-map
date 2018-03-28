$ = new jQuery.noConflict();
$(document).ready(function(){
	$(".division").click(function(){
		var division_name = $(this).attr('id');
		var url = "https://en.wikipedia.org/wiki/"+division_name+"_District";
		var win = window.open(url, '_blank');
  		win.focus();
	})
})
