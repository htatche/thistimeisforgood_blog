// Effects for the main page

(function( $ ){

	$(document).ready(function () {

		var homeEffects = function() {

			var last_pos = 0,
					hidden_header = false,
					animation = false // Prevents from calling the callback several times;

		  function animateCallback(done) {
				hidden_header = done || false;
				animation = false; 
			}

			var hideHeader = function() {
				animation = true;

				$('html, body').animate(
					{ scrollTop: $('#content').offset().top	},
					"slow",
					function() { animateCallback(true); } 
				);			

				$('.main-header-content').addClass('animated fadeOutRightBig');
				$('.main-header-content').removeClass('fadeInRightBig');
			}

			var showHeader = function() {
				animation = true;

				$('html, body').animate(
					{ scrollTop: 0 },
					"slow",
					function() { animateCallback(); }
				);		

				$('.main-header-content').addClass('animated fadeInRightBig');
				$('.main-header-content').removeClass('fadeOutRightBig');
			}							

			$(window).scroll(function() {

				var current_pos = $(window).scrollTop();

				if (last_pos < current_pos) {
					// We are scrolling down
					if (!animation && !hidden_header && current_pos > 200) hideHeader();
				} else {
					// We are scrolling up
					if (!animation && hidden_header && current_pos < 700)  showHeader();
				}		

				last_pos = $(window).scrollTop();

			});
		}

		var postEffects = function() {

			var scrollToTop = function() {

				$('html, body').animate(
					{ scrollTop: 0 },
					"slow"
				);		

			}							

			$(".scrolltop").click(function() {
				scrollToTop();
			});

		}		

		if ( $('.home-template').length != 0 ) {
			homeEffects();
		} else if ( $('.post-template').length != 0 ) {
			postEffects();
		}

	});

})(window.jQuery);