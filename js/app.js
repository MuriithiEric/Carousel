/* Template Name: Invoza - Bootstrap 4 Landing Page Tamplate
   Author: Themesdesign
   File Description: Main JS file of the template
*/


! function($) {
    "use strict";

    var Invoza = function() {};

    Invoza.prototype.initStickyMenu = function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
        
            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
                //Add the other class below this
            } else {
                //Add the other class below this
                $(".sticky").removeClass("nav-sticky");
            }
        });
    },

    Invoza.prototype.initSmoothLink = function() {
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    Invoza.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset:20
        });
    },

    Invoza.prototype.initTesticarousel = function() {
        $('#testi-carousel').owlCarousel({
            items: 1,
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                576:{
                    items:2
                },
     
            }
        });
    },

    Invoza.prototype.initCounter = function() {
        // Counter Number
        var a = 0;
        $(window).scroll(function() {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                            countNum: countTo
                        },

                        {

                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                });
                a = 1;
            }
        });

    },


    feather.replace()

    Invoza.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
        this.initTesticarousel();
        this.initCounter();
    },
    //init
    $.Invoza = new Invoza, $.Invoza.Constructor = Invoza
}(window.jQuery),


//initializing
function($) {
    "use strict";
    $.Invoza.init();
}(window.jQuery);


/*
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  3000);
  //Add the urls to the images here
  var images = ['images/temp_bg.jpg',
                'images/bg1.jpg',
                'images/bg2.jpg',
                'images/bg3.jpg',
                'images/bg4.jpg'];
  var currentIndex = 0;
  // This will do all the magic stuff!
  setInterval(function() { 
  $('#example').fadeOut(1000).css('background', `linear-gradient(to bottom, rgba(29, 31, 41, 0.52), rgba(14, 53, 90, 0.73)), url(${images[currentIndex]}) no-repeat cover`).fadeIn(1000).end();
  currentIndex = (currentIndex < images.length -1) ? (currentIndex + 1) : 0;
  },  3000); */
  
/*
 
 var element = document.querySelector("div");
 var colors = [
    "black",
    "red",
    "green",
    "blue",
 ];
 var index = 1;
 var carouselInterval = setInterval(() => {
    if (index === colors.length)
       index = 0;
    element.style.background = colors[index];
    index += 1;
 }, 3000);


  var element = document.querySelector("div");
var colors = [
   "black",
   "red",
   "green",
   "blue",
];
var index = 1;
var carouselInterval = setInterval(() => {
   if (index === colors.length)
      index = 0;
   element.style.background = colors[index];
   index += 1;
}, 3000);
*/


/* Jquery from Ali*/

$("#hero-section-5 > div:gt(0)").hide();

setInterval(function(){
	$('#hero-section-5 > div:first')
	.fadeout(1000)
	.next()
	.fadeIn(1000)
	.end()
	.appendTo('#hero-section-5');
},	3000);	

  
