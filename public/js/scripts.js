/*
   
    Template Name : Rolling - Freelancer Portfolio Template
    Author : UiPasta Team
    Website : http://www.uipasta.com/
    Support : http://www.uipasta.com/support/
	
	
*/



/*
   
   Table Of Content
   
   1. Preloader
   2. Smooth Scroll
   3. Scroll Naviagation Background Change with Sticky Navigation
   4. Mobile Navigation Hide or Collapse on Click
   5. Scroll To Top
   6. Typed.js
   7. Parallax Background
   8. Portfolio Filtering
   9. Magnific Popup
  10. Testimonial Carousel/Slider
  11. Statistics Counter
  12. Google Map
 

*/

/*var json = {"d1": {"url" : "http://funny-pics.co/wp-content/uploads/funny-costumed-dog-frog.jpg",
                  "name_age" : "Sharkie 76",
                  "description": "Puis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisauteiruredolor in reprehenderit in voluptate",
                },
            "d2": {"url" : "http://funny-pics.co/wp-content/uploads/funny-costumed-dog-frog.jpg",
                  "name_age" : "Sharkie 82",
                  "description": "Puis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisauteiruredolor in reprehenderit in voluptate",
                },
            };

var data = JSON.parse(json);
*/


(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        
       /* Preloader */
		
        $(window).on('load', function() {
          $('body').addClass('loaded');
        });

        angular.module('Stupid Tinder', ['growlNotifications']);
		
		
		
       /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
		


       
       /* Scroll Naviagation Background Change with Sticky Navigation */
		 
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
		
		
		
		
       /* Mobile Navigation Hide or Collapse on Click */
		
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        
		 });
		 
		
		
		
        /* Scroll To Top */
		
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	
	    $('.scroll-to-top').click(function(){
		  $('html, body').animate({scrollTop : 0},800);
		  return false;
	    });
		
		
		
		
        /* Typed.js */
		
        $(window).load(function(){
        $(".typing").typed({
            strings: ["Welcome!", "This is Stupid Tinder", "Find your true love ;)"],    /* You can change the home section typing text from
	                                                                                            here and do not use "&" use "and" */
            typeSpeed: 50
          });
         });
        
		 
        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });

        
		
		
        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();


       
        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',
			
            gallery: { enabled: true },
			zoom: { enabled: true,
			        duration: 500
					
          },
		  
         image:{
               markup: '<div class="mfp-figure portfolio-pop-up">'+
               '<div class="mfp-close"></div>'+
               '<div class="mfp-img"></div>'+
               '<div class="mfp-bottom-bar portfolio_title">'+
               '<div class="mfp-title"></div>'+
               '<div class="mfp-counter"></div>'+
               '</div>'+
               '</div>',

               titleSrc:function(item){
                return item.el.attr('title');
              }
            }
		  
		  
          });

       
		 
        /* Testimonial Carousel/Slider */

        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            autoPlay: false,
            stopOnHover: false,
            navigation: true,
            navigationText: ["","<p style='font-size: 20px'><i class='fa fa-times fa-2x owl-navi' id='left'></i><span style='display:inline-block; width: 24px'></span> <i class='fa fa-heart fa-2x owl-navi' id='right'></i></p>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle : "backSlide"
        });

        var max = 14;
        var count = 0;

        $( "#left" ).click(function(){
          count += 1;
          console.log(count);
          
          if (count == max){
            count == 0;
            console.log("reached max");
          $('html, body').animate({
          scrollTop: $("#matches-scrollto").offset().top
          }, 1000);
          };

        });

        $( "#right" ).click(function() {
          var binary = Math.floor((Math.random() * 100) + 1);
          count += 1;
          console.log(count);
          
          if (count == max){
          count == 0;
          console.log("reached max");
          $('html, body').animate({
          scrollTop: $("#matches-scrollto").offset().top
          }, 1000);
          };

          
          if (binary % 2 == 0){
            /* The match case */
            console.log("match");

            var nameid = "#name" + count.toString();
            var descriptionid = "#description" + count.toString();
            console.log(nameid);

            var name = $(nameid).html();
            var description = $(descriptionid).html();
              $( '#matches-append' ).append("<div class='col-md-4 col-sm-6'><div class='services-detail'><h3>" + name + "</h3><hr><p>" + description + "</p></div></div>");
              $('body').append("<growl-notification>It's a match!</growl-notification>");

          } else {

            console.log("no match");

          };
        });
		
        /* Statistics Counter */
		
        $('.statistics').appear(function() {
           var counter = $(this).find('.statistics-count');
           var toCount = counter.data('count');
      
           $(counter).countTo({
           from: 0,
           to: toCount,
           speed: 25000,
           refreshInterval: 25
           })
           });
		   
		  
         
         /* Google Map */
		 
         $('#my-address').gMap({
            zoom: 12,
            scrollwheel: true,
            maptype: 'ROADMAP',
            markers:[
            {
            address: "Shanghai, New York University Shanghai",  /* You can change your address from here */
            html: "<b>Address</b>: <br> New York University Shanghai",   /* You can change display address text from here */
            popup: true
            }
            ]
            });
              
		   
            });

   })(jQuery);