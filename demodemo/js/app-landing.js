"use strict";

$(function() {
    // Cover screen carousel
    var dot = $('#singleScreenCarousel .dot');
    var pos1 = $('#singleScreenCarousel ol.carousel-indicators li.active').position();
    dot.stop().animate({
        left: pos1.left,
        top: pos1.top
    }, 500, );

    $('#singleScreenCarousel').on('slid.bs.carousel', function() {
        pos1 = $('#singleScreenCarousel ol.carousel-indicators li.active').position();
        dot.stop().animate({
            left: pos1.left,
            top: pos1.top
        }, 500, );
    })

    $(window).resize(function() {
        pos1 = $('#singleScreenCarousel ol.carousel-indicators li.active').position();
        dot.stop().animate({
            left: pos1.left,
            top: pos1.top
        }, 500, );
    });

    // End Cover screen carousel


    // App screen showcase carousel
    var appScreenCarousel = $('.app-screen-owlcarousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        center: true,

        // center: true,
        navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
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
        },
        onInitialized: callback
    });

    appScreenCarousel.owlCarousel({
        callbacks: true
    });

    function callback(event) {
        var element = $(event.target);
        var elementWidth = element.find('.owl-item')[0].clientWidth;
        $('.carousel-wrapper .mobile-device').css("width", elementWidth + 5);
    }

    checkClasses();

    appScreenCarousel.on('translated.owl.carousel', function(event) {
        checkClasses();
    });

    function checkClasses() {
        var total = $('.app-screen-owlcarousel .owl-stage .owl-item.active').length;

        $('.app-screen-owlcarousel .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');

        $('.app-screen-owlcarousel .owl-stage .owl-item.active').each(function(index) {
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
    // End App screen showcase carousel
});