jQuery(function ($) {
    "use strict";

    // Fixed navbar
    $(window).on("scroll", function () {
        // Checks if window is scrolled more than 500px, toggles class for nav background
        if ($(this).scrollTop() > 60) {
            $("#mainNav").addClass("affix");
        } else {
            $("#mainNav").removeClass("affix");
        }
    });

    // Page scrolling with jQuery Easing plugin
    $(function () {
        $(document).on("click", "a.page-scroll", function (event) {
            var $anchor = $(this);
            $("html, body")
                .stop()
                .animate(
                    {
                        scrollTop: $($anchor.attr("href")).offset().top - 60,
                    },
                    900,
                    "easeInOutExpo"
                );
            event.preventDefault();
        });
    });

    // Close the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function (event) {
        if (!$(this).parent().hasClass("dropdown")) {
            $(".navbar-collapse").collapse("hide");
            $("#mainNav").removeClass("bg-primary");
        }
    });

    // Toggle the nav background when expanded and primary background is transparent
    $(".navbar .navbar-toggler").on("click", function (event) {
        if (!$(this).hasClass("collapsed")) {
            $("#mainNav").removeClass("bg-primary");
        } else {
            $("#mainNav").addClass("bg-primary");
        }
    });

    AOS.init({ once: true });
});
