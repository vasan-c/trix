/*EXCLUSIVE ON themeforest.net*/

/*-----------------------------------------------------------------------------------
    Theme Name: IMPLO
    Description: The Multi-Purpose Template
    Author: Theme Friend
    Author URI: https://themeforest.net/user/theme_friend
    Version: 1.0
-----------------------------------------------------------------------------------*/

"use strict";


$(function() {

    // =================================
    // Preloader
    // =================================
    $(".pre-loader").delay(500).fadeOut("slow");
    // =================================
    // Preloader
    // =================================

    // =================================
    // Sidebar expand
    // =================================
    $(".left-bar .hamburger").on("click", function(argument) {
        // body...
        $(".expandable-panel .navik-fixed-sidebar")
            .toggleClass("show");
        $(this).toggleClass("is-active");
    });
    // =================================
    // End Sidebar expand
    // =================================

    

    // =================================
    // Header Overlay toggle
    // =================================
    $(".toggle-overlay").on("click", function(argument) {
        // body...
        $(".overlay-header .overlay-section")
            .toggleClass("show");
    });
    // =================================
    // End Header Overlay toggle
    // =================================


    // =================================
    // Header Top Fixed
    // =================================

    function makeHeaderFixed() {
        var header = $('.top-fixed');

        if ($(document).scrollTop() >= 250) {
            header.addClass('visible');
            if (header.find('.top-search').length) {
                // found!
                header.find('.top-search').css('height', $(window).height());
            }
            if(header.find('.transparent')){
                header.find('.transparent').removeClass("no-background");
            }
        } else {
            header.removeClass('visible');
        }
    }

    makeHeaderFixed();

    $(document).scroll(function() {
        makeHeaderFixed();
    });

    // =================================
    // End Header Top Fixed
    // =================================

    $(".attr-nav.search a").on('click', function() {
        $("header.navik-header .top-search").slideDown( "1000" );
    });

    $(".close-search").on('click', function() {
        $("header.navik-header .top-search").slideUp( "1000" );
    });

    // =================================
    // Making header cover height full
    // screen
    // =================================

    /*if($("nav.navbar").hasClass("transparent"))
        $('.header-cover').css('height', $(window).height());
    $('.wrap-nav-sidebar .header-cover').css('height', $(window).height());

    $(window).resize(function(){
        if($("nav.navbar").hasClass("transparent"))
            $('.header-cover').css('height', $(window).height());
        $('.wrap-nav-sidebar .header-cover').css('height', $(window).height());
    });*/
    // =================================
    // End Making header cover height full
    // screen
    // =================================


    // ======================================
    // Modal video initialize
    // ======================================
    $(".js-modal-btn.youtube-video").modalVideo({
        channel: 'youtube'
    });
    $(".js-modal-btn.vimeo-video").modalVideo({
        channel: 'vimeo'
    });

    var wow = new WOW({
        animateClass: 'animated',
        offset: 200
    });
    wow.init();
    // ======================================
    // End Modal video initialize
    // ======================================

    // ======================================
    // Projects filter
    // ======================================

    var $grid = $('.gallery_area').isotope({
        itemSelector: '.element-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function() {
        $grid.isotope('layout');
    });

    // bind filter button click
    $('.galleryFilter').on('click', '.button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on buttons
    $('.galleryFilter.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', '.button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    // ======================================
    // Magnific Popup
    // ======================================

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },

        zoom: {
            enabled: true,

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });

    $('.magnific_popup_link').magnificPopup({
        type: 'image'
    });

    // ======================================
    // End Magnific Popup
    // ======================================

    // ======================================
    // Owl Carousel (Partner section)
    // ======================================

    $('.brands-carousel-three-items').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        // nav:true,
        responsive: {
            0: {
                items: 2
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('.brands-carousel-four-items').owlCarousel({
        loop: true,
        margin: 50,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // ======================================
    // Owl Carousel (Partner section)
    // ======================================


    // ======================================
    // Owl Carousel (Blog image slider)
    // ======================================
    $('.blog-img-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        // center: true,
        navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // ======================================
    // End Owl Carousel (Blog image slider)
    // ======================================


    // ======================================
    // Owl Carousel 
    // ======================================

    $('.one-item-owlcarousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        // center: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.two-item-owlcarousel').owlCarousel({
        // loop:true,
        margin: 30,
        nav: true,
        dots: false,
        // center: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    $('.three-item-owlcarousel').owlCarousel({
        // loop:true,
        margin: 20,
        nav: true,
        dots: false,
        // center: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $('.four-item-owlcarousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        dots: false,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // ======================================
    // End Owl Carousel
    // ======================================

    // ======================================
    // Owl Carousel (index page slider)
    // ======================================

    $('.template_carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $('.header_display_carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,
        nav: false,
        dots: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    // ======================================
    // End Owl Carousel (index page slider)
    // ======================================


    // ======================================
    // Owl Carousel (team slider)
    // ======================================

    $('.team-owlcarousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        dots: false,
        center: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    // ======================================
    // End Owl Carousel (team slider)
    // ======================================

    // ======================================
    // Owl Carousel (testimonial section)
    // ======================================
    $('.testimonial-style3-owlcarousel, .testimonial-style1-owlcarousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: true,
        center: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var testimonialStyle4Owlcarousel = $('.testimonial-style4-owlcarousel').owlCarousel({
        loop: false,
        margin: 40,
        nav: true,
        dots: false,
        // center: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });

    addClassesToTestimonialS4Carousel();

    testimonialStyle4Owlcarousel.on('translated.owl.carousel', function(event) {
        addClassesToTestimonialS4Carousel();
    });


    // This function adds additional class to the
    // first and last active items
    function addClassesToTestimonialS4Carousel() {
        var total = $('.testimonial-style4-owlcarousel .owl-stage .owl-item.active').length;

        $('.testimonial-style4-owlcarousel .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');

        $('.testimonial-style4-owlcarousel .owl-stage .owl-item.active').each(function(index) {
            if (index === 0) {
                // this is the first one
                $(this).addClass('firstActiveItem');
            }
            if (index === total - 1 && total > 1) {
                // this is the last one
                $(this).addClass('lastActiveItem');
            }
        });
    }

    $('.testimonial-style5-owlcarousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        // center: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // ======================================
    // End Owl Carousel (testimonial section)
    // ======================================

    // ======================================
    // Up counter
    // ======================================
    $(".counter-number").appear(function() {
        $(".counter-number .num").each(function() {
            var end = $(this).attr("data-to");
            $(this).jQuerySimpleCounter({
                end: end,
                duration: 4000,
                complete: function() {
                    // Enter Code
                }
            });
        });
    });
    // ======================================
    // End Up counter
    // ======================================

    // =================================
    // Cicle animation
    // =================================

    $('.circle').appear(function() {

        $('.circle').circleProgress({
            startAngle: -360
        });

    });

    // =================================
    // End Cicle animation
    // =================================

    // =================================
    // Accordion icon change
    // =================================

    $('.accordion .panel').on('shown.bs.collapse', function() {
        $(this).children().find(".ti-angle-down").removeClass("ti-angle-down").addClass("ti-angle-up");

    }).on('hidden.bs.collapse', function() {
        $(this).children().find(".ti-angle-up").removeClass("ti-angle-up").addClass("ti-angle-down");
    });

    // =================================
    // End Accordion icon change
    // =================================

    // =================================
    // Light Slider
    // =================================

    $('#image-gallery').lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 9,
        slideMargin: 0,
        speed: 500,
        auto: false,
        loop: true,
        prevHtml: '<span class="ti-angle-left"></span>',
        nextHtml: '<span class="ti-angle-right"></span>',
        pause: 5000,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }
    });

    // =================================
    // End Light Slider
    // =================================

    // =================================
    // LineProgressbar
    // =================================


    $('#sd-style1').appear(function() {
        $('#sd-style1').LineProgressbar({
            percentage: 90,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#EDEDED',
        });
    });

    $('#gd-style1').appear(function() {
        $('#gd-style1').LineProgressbar({
            percentage: 95,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#EDEDED',
        });
    });


    $('#wd-style1').appear(function() {
        $('#wd-style1').LineProgressbar({
            percentage: 93,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#EDEDED',
        });
    });

    $('#seo-style1').appear(function() {
        $('#seo-style1').LineProgressbar({
            percentage: 98,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#EDEDED',
        });
    });

    $('#sd-style2').appear(function() {
        $('#sd-style2').LineProgressbar({
            percentage: 90,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#EDEDED',
        });
    });

    $('#gd-style2').appear(function() {
        $('#gd-style2').LineProgressbar({
            percentage: 95,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#05AE0E',
            backgroundColor: '#EDEDED',
        });
    });


    $('#wd-style2').appear(function() {
        $('#wd-style2').LineProgressbar({
            percentage: 93,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#3878ff',
            backgroundColor: '#EDEDED',
        });
    });

    $('#seo-style2').appear(function() {
        $('#seo-style2').LineProgressbar({
            percentage: 98,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#FF9900',
            backgroundColor: '#EDEDED',
        });
    });


    $('#sd-style3').appear(function() {
        $('#sd-style3').LineProgressbar({
            percentage: 90,
            radius: '0px',
            height: '25px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#222222',
        });
    });

    $('#gd-style3').appear(function() {
        $('#gd-style3').LineProgressbar({
            percentage: 95,
            radius: '0px',
            height: '25px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#222222',
        });
    });


    $('#wd-style3').appear(function() {
        $('#wd-style3').LineProgressbar({
            percentage: 93,
            radius: '0px',
            height: '25px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#222222',
        });
    });

    $('#seo-style3').appear(function() {
        $('#seo-style3').LineProgressbar({
            percentage: 98,
            radius: '0px',
            height: '25px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#222222',
        });
    });


    $('#sd-style4').appear(function() {
        $('#sd-style4').LineProgressbar({
            percentage: 90,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#222222',
            backgroundColor: '#EDEDED',
        });
    });

    $('#gd-style4').appear(function() {
        $('#gd-style4').LineProgressbar({
            percentage: 95,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#222222',
            backgroundColor: '#EDEDED',
        });
    });


    $('#wd-style4').appear(function() {
        $('#wd-style4').LineProgressbar({
            percentage: 93,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#222222',
            backgroundColor: '#EDEDED',
        });
    });

    $('#seo-style4').appear(function() {
        $('#seo-style4').LineProgressbar({
            percentage: 98,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#222222',
            backgroundColor: '#EDEDED',
        });
    });

    // =================================
    // End LineProgressbar
    // =================================


    // =================================
    // Bootstrap Tooltip Popover init
    // =================================

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    // =================================
    // Bootstrap Tooltip Popover init
    // =================================

    // =================================
    // Blog Masonry layout
    // =================================
    $('.masonry-blog-post').masonry({
        itemSelector: '.blog-post'
    });
    // =================================
    // End Blog Masonry layout
    // =================================

    // =================================
    // Process Section
    // =================================
    $('.process_section').appear(function() {
        var total_process_animation_area = $(".process_section .process_item").length;

        rotate_process(total_process_animation_area, 3000);

        function rotate_process(total_process_animation_area, time_out) {

            var current_item = 1;

            $(".process_section .process_item").removeClass("active");
            $(".process_section .process_item:nth-child(" + current_item + ")").addClass("active");
            $(".process_section .process_item:nth-child(" + current_item + ") .rotating_area").addClass("goUp");

            current_item++;

            setInterval(function() {
                if (current_item <= total_process_animation_area) {
                    if (current_item % 2 === 0) {
                        $(".process_section .process_item").removeClass("active");
                        $(".process_section .process_item:nth-child(" + current_item + ")").addClass("active");

                        $(".process_section .process_item:nth-child(" + current_item + ") .rotating_area").addClass("goDown");
                    } else {
                        $(".process_section .process_item").removeClass("active");
                        $(".process_section .process_item:nth-child(" + current_item + ")").addClass("active");

                        $(".process_section .process_item:nth-child(" + current_item + ") .rotating_area").addClass("goUp");
                    }
                    current_item++;
                } else {
                    $(".process_section .process_item .rotating_area").removeClass("goDown");
                    $(".process_section .process_item .rotating_area").removeClass("goUp");
                    current_item = 1;
                }
            }, time_out);
        }
    });

    // =================================
    // End Process Section
    // =================================


    // =================================
    // Scrool Parallax
    // =================================
    $('.pointparallax').pointparallax();
    // =================================
    // End Scrool Parallax
    // =================================


    // =================================
    // Section Parallax
    // =================================
    $('.parallax').parallaxie({
        "speed": 0.5
    });
    // =================================
    // End Section Parallax
    // =================================

    // =================================
    // Cart product counter
    // =================================
    $('.spinner .updown-btn:first-of-type').on('click', function() {

        $(this).parents('.spinner').find('input').
        val(parseInt($(this).parents('.spinner').find('input').val(), 10) + 1);

    });

    $('.spinner .updown-btn:last-of-type').on('click', function() {

        if (parseInt($(this).parents('.spinner').find('input').val(), 10) > 1) {
            $(this).parents('.spinner').find('input').
            val(parseInt($(this).parents('.spinner').find('input').val(), 10) - 1);
        }

    });
    // =================================
    // End Cart product counter
    // =================================

    // =================================
    // Shop Product Carousel
    // =================================
    $('.product-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    // =================================
    // End Shop Product Carousel
    // =================================

    // =================================
    // Shop Product Details
    // image slider
    // =================================

    var owl_1 = $('#single-img-slider');
    var owl_2 = $('#all-img-slider');

    owl_1.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        dots: false
    });

    owl_2.owlCarousel({
        margin: 10,
        nav: true,
        items: 4,
        dots: false
    });

    owl_2.find(".item").click(function(e) {
        var slide_index = owl_2.find(".item").index(this);
        owl_1.trigger('to.owl.carousel', [slide_index, 300]);
    });

    // =================================
    // End Shop Product Details
    // image slider
    // =================================


    // =================================
    // Shop featured product filter
    // =================================
    var $featuredProductGrid = $('.featuredProduct').isotope({
        itemSelector: '.element-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });
    // layout Isotope after each image loads
    $featuredProductGrid.imagesLoaded().progress(function() {
        $featuredProductGrid.isotope('layout');
    });

    // bind filter button click
    $('.featuredProductFilter').on('click', '.button', function() {
        var filterValue = $(this).attr('data-filter');
        $featuredProductGrid.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on buttons
    $('.featuredProductFilter.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', '.button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    // =================================
    // End Shop featured product filter
    // =================================

    // best deals product
    var $bestDealProductGrid = $('.bestDealProduct').isotope({
        itemSelector: '.element-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });
    // layout Isotope after each image loads
    $bestDealProductGrid.imagesLoaded().progress(function() {
        $bestDealProductGrid.isotope('layout');
    });

    // bind filter button click
    $('.bestDealProductFilter').on('click', '.button', function() {
        var filterValue = $(this).attr('data-filter');
        $bestDealProductGrid.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on buttons
    $('.bestDealProductFilter.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', '.button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    // =================================
    // init bootstrap  carousel
    // =================================

    $('.carousel').carousel({
        interval: 6000,
        ride: true,
        pause: false
    });


    // =================================
    // Custom effect carousel
    // =================================

    //Function to animate slider captions
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = "webkitAnimationEnd animationend";

        elems.each(function() {
            var $this = $(this),
                $animationType = $this.data("animation");
            $this.addClass($animationType).one(animEndEv, function() {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load
    var $myCarousel = $(".custom-effect-carousel .carousel"),
        $firstAnimatingElems = $myCarousel
        .find(".carousel-item:first")
        .find("[data-animation ^= 'animated']");

    $myCarousel.addClass("blur");

    // Initialize carousel
    // $myCarousel.carousel();

    // Animate captions in first slide on page load
    // doAnimations($firstAnimatingElems);

    //Other slides to be animated on carousel slide event
    $myCarousel.on("slide.bs.carousel", function(e) {
        var $animatingElems = $(e.relatedTarget).find(
            "[data-animation ^= 'animated']"
        );
        doAnimations($animatingElems);
    });

    // =================================
    // End Custom effect carousel
    // =================================


    // =================================
    // Adding swipe listener in 
    // bootstrap carousel
    // =================================

    $("#myCarousel").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },

        allowPageScroll: "vertical"

    });


    // =================================
    // End Adding swipe listener in 
    // bootstrap carousel
    // =================================


    // =================================
    // Mouse parallax
    // =================================

    $(".mouse-parallax").mousemove(function(e) {
        parallaxIt(e, ".left_image", -50);
        parallaxIt(e, ".right_image", -50);
        parallaxIt(e, ".lg_image", -20);

    });

    function parallaxIt(e, target, movement) {
        var $this = $(".mouse-parallax");
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement,
            y: (relY - $this.height() / 2) / $this.height() * movement
        });
    }

    // =================================
    // End Mouse parallax
    // =================================

    // =================================
    // Portfolio image animation
    // =================================
    $(".author-image").addClass("img-zoom-out");
    $(".cover-circle").addClass("circle-animation");
    // =================================
    // End Portfolio image animation
    // =================================

    // =================================
    // Scroll to Top
    // =================================

    // declare variable
    var scrollTop = $(".scrollTopButton");

    $(window).on('scroll', function() {
        // declare variable
        var topPos = $(this).scrollTop();

        // Show scroll to top button while scrolling
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");
        } else {
            $(scrollTop).css("opacity", "0");
        }
    });

    $(scrollTop).on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);

        return false;
    });

    // =================================
    // End Scroll to Top
    // =================================

    $("li.dropdown_menu").hover(function(){
        $(this).children(':nth-child(2)').addClass("menu-block");
        var menu_space      = $(this).children(':nth-child(2)').offset().left + $(this).children(':nth-child(2)').width(),
            window_space    = $(window).width();
        
        console.log("menu_space"+menu_space);
        window_space = window_space - 20;
        console.log("window_space"+window_space);

        if (menu_space>window_space) {
            console.log("true");
            $(this).addClass("submenu-right");
        }
            // $(this).addClass("submenu-right");
        }, function(){
    });


    $('.owl-carousel.header-cover-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        smartSpeed:500,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    // Bootstrap Form Validation

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

});