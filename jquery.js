
$(document).ready(function(){
	$(function(){
		$('.btn-navbar').click(function(){
			$(this).children('ul.mini-nav-block').stop(false, true).slideDown(300);
		}, function(){
			$(this).children('ul.mini-nav-block').stop(false, true).slideUp(300);
		});
	});
});
