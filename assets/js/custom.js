
// header menu

jQuery(function(){
	jQuery('#menu').slicknav({
		label: '',
		allowParentLinks:false,
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});
});
(jQuery);	
jQuery(".menu_bar").click(function() { 
	jQuery('.mobile_menu').addClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideDown('slow'); 
	jQuery("body").addClass("body_overlay");
});
jQuery(".menu_close").click(function() { 
	jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideUp('slow'); 
	jQuery("body").removeClass("body_overlay");
});

jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 5) {
       jQuery('.header_container').addClass('header_position');
    } else {
       jQuery('.header_container').removeClass('header_position');
    }
});

jQuery(".read_more_btn a").click(function() { 
	jQuery('.sm_hide_text').show(); 
	jQuery(this).hide(); 
	
});

 

jQuery(document).ready(function(){
	if(matchMedia('only screen and (min-width: 1280px)').matches) {
	    jQuery(".menu-item-has-children").mouseover(function(){
	        jQuery("body").addClass("body_overlay");
	    });
	    jQuery(".menu-item-has-children*").mouseleave(function(){
	        jQuery("body").removeClass("body_overlay");
	    });
	 }
});


(function($){
	jQuery( ".toggle_view_item h4" ).click(function(e) {
		if(jQuery(this).hasClass('active')) {
		} else {
			$( ".toggle_view_item h4" ).each(function() {
				if(jQuery(this).hasClass('active')) {
					jQuery(this).toggleClass('active');
					jQuery(this).next('.show_details').slideToggle('hide');
				}
			});
		}
		jQuery(this).toggleClass('active');
		jQuery(this).next('.show_details').slideToggle('slow');
		e.preventDefault();
	});

	jQuery( ".toggle_view_item h4" ).click(function(e) {
		if(jQuery(this).parent('.toggle_view_item').hasClass('active_bg')) {
		} else {
			$( ".toggle_view_item h4" ).each(function() {
				if(jQuery(this).parent('.toggle_view_item').hasClass('active_bg')) {
					jQuery(this).parent('.toggle_view_item').toggleClass('active_bg');
				}
			});
		}
		jQuery(this).parent('.toggle_view_item').toggleClass('active_bg');
		e.preventDefault();
	});


if(matchMedia('only screen and (max-width:1280px)').matches) {
    $(".megamenu_item").remove();
}


//banner slider

	jQuery('.banner_slider').owlCarousel({
		loop:true,
		items:4,
		nav:true,
		dots:false,
		mouseDrag: true,
		touchDrag: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:false,
				margin: 0,
				nav:true,
			},
			1090:{
	            nav:true,
				items:3,
				margin:24,
		
			},
			1280:{
				nav:true,
				items:4,
				margin:24,
			},
			1400:{
				items:4,
				margin:32,
		     
			},
			1450:{
				items:4,
				margin:24,
		     
			},
			1922:{
				items:5,
				margin:32,
		     
			},

		},
	});



	jQuery('.hero_item_wrap').owlCarousel({
		loop:true,
		nav:true,
		dots:false,
		mouseDrag: true,
		touchDrag: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:false,
				margin: 0,
				dots:true,
				
			},

			768:{
				items:2,
		        dots:false,
				nav:false,
				mouseDrag: false,
				touchDrag: false,
			},
			
			
		},
	});

	jQuery('.partner_slider').owlCarousel({
		loop:true,
		items:4,
		nav:true,
		dots:false,
		mouseDrag: true,
		touchDrag: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:true,
				margin: 0,
				nav:true,
				dotsEach:3,
			},
			768:{
	            nav:true,
				items:3,
				margin:75,
		
			},
			992:{
	            nav:true,
				items:3,
				margin:75,
		
			},
			1280:{
				nav:true,
				items:5,
				margin:40,
			},

			1440:{
				nav:true,
				items:5,
				margin:50,
			},
			1450:{
				items:5,
				margin:40,
		     
			},
			1922:{
				items:6,
				margin:48,
		     
			},

		},
	});



	jQuery('.our_partner_box').owlCarousel({
		loop:true,
		items:4,
		nav:true,
		dots:false,
		mouseDrag: true,
		touchDrag: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:true,
				margin: 0,
				nav:true,
				dotsEach:2,
			},
			768:{
	            nav:true,
				items:2,
				margin:102,
		
			},
			992:{
	            nav:true,
				items:3,
				margin:85,
		
			},
			1280:{
				nav:true,
				items:4,
				margin:102,
			},

			1440:{
				nav:true,
				items:4,
				margin:126,
			},
			1450:{
				items:4,
				margin:104,
				nav:true,

		     
			},
			1922:{
				items:5,
				margin:107,
				nav:true,
		     
			},

		},
	});



	jQuery('.testimonials_slider').owlCarousel({
		loop:true,
		items:4,
		nav:true,
		dots:false,
		mouseDrag: true,
		touchDrag: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:true,
				margin: 0,
				nav:true,
				dotsEach:2,
			},
			768:{
	            nav:true,
				items:1,
			},
			992:{
	            nav:true,
				items:2,
			},
			1280:{
				nav:true,
				items:3,
			},
			1450:{
				items:4,
				nav:true,

		     
			},
			1922:{
				items:5,
				nav:true,
		     
			},

		},
	});


	jQuery('.our_news_box').owlCarousel({
		loop:true,
		items:4,
		nav:true,
		dots:false,
		mouseDrag: true,
		touchDrag: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:true,
				margin: 0,
				nav:true,
				dotsEach:2,
			},
		},
	});

})(jQuery);

