// Effects for the main page

(function( $ ){

	$(document).ready(function () {

		var homeEffects = function() {

			var last_pos = 0,
					hidden_header = false;

		  function animateCallback(done) {
				hidden_header = done || false;
			}

			var hideHeader = function() {

				$('.main-header-content').addClass('animated fadeOutRightBig');
				$('.main-header-content').removeClass('fadeInRightBig');
			}

			var showHeader = function() {
	
				var current_pos = $(window).scrollTop();

				$('.main-header-content').addClass('animated fadeInRightBig');
				$('.main-header-content').removeClass('fadeOutRightBig');
			}							

			$(window).scroll(function() {

				var current_pos = $(window).scrollTop();

				if (last_pos < current_pos) {
					// We are scrolling down
					if (!hidden_header && current_pos > 200) hideHeader();
				} else {
					// We are scrolling up
					if (!hidden_header && current_pos < 200) showHeader();
				}		

				last_pos = $(window).scrollTop();

			});
		}

		var postEffects = function() {

			var scrollCallback = function() {

				var current_pos,
					  display;

				$(window).scroll(function() {

					current_pos = $(window).scrollTop();

					if (current_pos > 635) { display = "block" } else { display = "none"; }

					$(".scrolltop").css("display", display);

				});		
			}

			var scrollToTop = function() {

				$(window).off("scroll");

				$('html, body').animate(
					{ scrollTop: 0 },
					"slow",
					function() { scrollCallback(); }
				);		

			}			

			/* Events */

			$(".gohome").hover(function() {
				$(".content-overlay").css('z-index', 1);
			}, function() {
				$(".content-overlay").css('z-index', -1);
			});	

			$(".scrolltop").mousedown(function() {
				scrollToTop();
			});

			scrollCallback();	

		}		

		/* Page detection */
		
		if ( $('.home-template').length != 0 ) {
			homeEffects();
		} else if ( $('.post-template').length != 0 ) {
			postEffects();
		}

	});

})(window.jQuery);