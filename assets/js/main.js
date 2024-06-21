(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		
		
		/*magnificPopup active*/
		$(".menu-trigger").click(function(){
			$(".menu-trigger, .slideMenu").toggleClass("active");
		});
		


		$(document).ready(function() {
			// Toggle submenu display on clicking a menu item
			$('.slideMenu ul li').click(function(e) {
				e.stopPropagation(); // Prevent bubbling up to parent elements
				var $submenu = $(this).children('ul');
				$('.slideMenu ul ul').not($submenu).slideUp(); // Hide other submenus
				$submenu.slideToggle(); // Toggle the clicked submenu
			});

			// Hide submenu when clicking outside
			$(document).click(function() {
				$('.slideMenu ul ul').slideUp();
			});
		});
		
	});

	$(window).on('load', function(){
		//===== Prealoder
		$("#preloader").fadeOut("slow");
	  });
  

    jQuery(window).load(function(){


    });


}(jQuery));	


