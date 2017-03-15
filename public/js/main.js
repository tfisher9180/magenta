$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.navbar').addClass('navbar-slim');
		} else {
			$('.navbar').removeClass('navbar-slim');
		}
	});
});