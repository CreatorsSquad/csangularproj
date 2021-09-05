/**
* Template Name: Anyar - v2.2.1
* Template URL: https://bootstrapmade.com/anyar-free-multipurpose-one-page-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function ($) {
  "use strict";
  // Preloader
  $(window).on('load', function () {
    // var preloader = document.getElementById('loader');
    // function preLoaderHandler() {
    //   preloader.style.display = 'none';
    // }
    if ($('#preloader').length) {
      $('#preloader').delay(1000).fadeOut('slow', function () {
        $(this).remove();
      });
    }
    // $(".se-pre-con").fadeOut("slow");
  });

  // function getTheDays() {

  //   var dt = new Date();

  //   var month = dt.getMonth(),
  //     year = dt.getFullYear();

  //   var FirstDay = new Date(year, month, 2);

  //   var weekday = new Array();
  //   weekday[0] = "Sunday";
  //   weekday[1] = "Monday";
  //   weekday[2] = "Tuesday";
  //   weekday[3] = "Wednesday";
  //   weekday[4] = "Thursday";
  //   weekday[5] = "Friday";
  //   weekday[6] = "Saturday";

  //   if (typeof weekday[FirstDay.getDay()] != 'undefined') {
  //     document.getElementById('fday').innerHTML = weekday[FirstDay.getDay()] +
  //       ' (' + FirstDay.toDateString('dd/mon/yyyy') + ')';
  //   }
  //   else {
  //     document.getElementById('fday').innerHTML = '';
  //   }
  // }


  // $(document).on('click', '.closebtn', function (e) {
  //   alert();
  //   document.getElementById("mySidenav").style.width = "0";
  // });

  // $(document).on('click', '.openbtn', function (e) {
  //   alert();
  //   document.getElementById("mySidenav").style.width = "100%";
  // });



  // $('.gallery').flashy({
  // 	prevShowClass: 'fx-bounceInLeft',
  // 	nextShowClass: 'fx-bounceInRight',
  // 	prevHideClass: 'fx-bounceOutRight',
  // 	nextHideClass: 'fx-bounceOutLeft'
  // });

  // $('.custom').flashy({
  // 	showClass: 'fx-fadeIn',
  // 	hideClass: 'fx-fadeOut'
  // });


  // $(window).on('load', function () {
  //   alert(0);
  //   $("#clear").click(function () {
  //     alert(0);
  //     $("#searchbox").val("");
  //   });
  // });

  // $(document).on('click', '#clear', function () {
  //   $(".searchbox").val("");
  // });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn(400);
    } else {
      $('.back-to-top').fadeOut(400);
    }
  });
  $(".back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 2500, 'easeInOutExpo');
  });

  // Toggle nav menu
  $(document).on('click', '.nav-toggle', function (e) {
    $('.nav-menu').toggleClass('nav-menu-active');
    $('.nav-toggle').toggleClass('nav-toggle-active');
    $('.nav-toggle i').toggleClass('bx-x bx-menu');

  });

  // Toogle nav menu drop-down items
  $(document).on('click', '.nav-menu .drop-down > a', function (e) {
    e.preventDefault();
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass('active');
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 2;
  $(document).on('click', '.nav-menu a, .scrollto, #main a, a .back-to-top', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .active').removeClass('active');
          $(this).closest('li').addClass('active');
          $('.nav-menu').removeClass('nav-menu-active');
          $('.nav-toggle').removeClass('nav-toggle-active');
          $('.nav-toggle i').toggleClass('bx-x bx-menu');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#topbar').addClass('topbar-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#topbar').removeClass('topbar-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
    $('#topbar').addClass('topbar-scrolled');
  }

  // Back to top button

  //   $(window).on("scroll", function () {
  //     if ($(this).scrollTop() > 100) {
  //       $(".back-to-top").fadeIn(400);
  //     } else {
  //       $('.back-to-top').fadeOut(400);
  //     }
  //   });
  //   $(".back-to-top").on("click",function() {
  //     $("html, body").animate({scrollTop: 0}, 1200);
  //  });
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 100) {
  //     $('.back-to-top').fadeIn('slow');
  //   } else {
  //     $('.back-to-top').fadeOut('slow');
  //   }
  // });

  // $('.back-to-top').click(function() {
  //   $('html, body').animate({
  //     scrollTop: 0
  //   }, 1500, 'easeInOutExpo');
  //   return false;
  // });

  // Intro carousel
  var heroCarousel = $("#heroCarousel");

  heroCarousel.on('slid.bs.carousel', function (e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
  });

  // Clients carousel (uses the Owl Carousel library)
  // $(".clients-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   responsive: {
  //     0: {
  //       items: 2
  //     },
  //     768: {
  //       items: 4
  //     },
  //     900: {
  //       items: 6
  //     }
  //   }
  // });

  // Porfolio isotope and filter
  // $(window).on('load', function() {
  //   var portfolioIsotope = $('.portfolio-container').isotope({
  //     itemSelector: '.portfolio-item',
  //     layoutMode: 'fitRows'
  //   });

  //   $('#portfolio-flters li').on('click', function() {
  //     $("#portfolio-flters li").removeClass('filter-active');
  //     $(this).addClass('filter-active');

  //     portfolioIsotope.isotope({
  //       filter: $(this).data('filter')
  //     });
  //     aos_init();
  //   });

  //   // Initiate venobox (lightbox feature used in portofilo)
  //   $(document).ready(function() {
  //    // $('.venobox').venobox();
  //   });
  // });

  // var carousel = function () {
  //   $('.featured-carousel').owlCarousel({
  //     loop: true,
  //     autoplay: true,
  //     autoHeight: false,
  //     margin: 30,
  //     animateOut: 'fadeOut',
  //     animateIn: 'fadeIn',
  //     nav: true,
  //     dots: true,
  //     autoplayHoverPause: false,
  //     items: 1,
  //     navText: ["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>", "<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],
  //     responsive: {
  //       0: {
  //         items: 1
  //       },
  //       600: {
  //         items: 1
  //       },
  //       1000: {
  //         items: 1
  //       }
  //     }
  //   });

  // };
  // carousel();

  // Scroll to a section with hash in url
  $(window).on('load', function () {

    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var target_hash = $(initial_nav);
        var scrollto_hash = target_hash.offset().top - $('#header').outerHeight();
        $('html, body').animate({
          scrollTop: scrollto_hash
        }, 1500, 'easeInOutExpo');
        $('.nav-menu .active, .mobile-nav .active').removeClass('active');
        $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      }
    }

  });

  // Portfolio details carousel
  // $(".portfolio-details-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   items: 1
  // });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function () {
    aos_init();
  });


})(jQuery);

function changeselect_layout() {
  $(".select2").select2({
    placeholder: 'Please Select'
  });
  // $('.js-example-basic-single').select2();
}

// function ChangePrice(getprice) {
//   alert("the price is changed", + getprice);
// }
