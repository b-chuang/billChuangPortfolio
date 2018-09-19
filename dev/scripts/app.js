$(function () {
    
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles-js config loaded');
});



        //browser title
        jQuery(document).ready(function ($) {
            // Get page title
            var pageTitle = $("title").text();

            // Change page title on blur
            $(window).blur(function () {
                $("title").text("👋, 👇, come back soon");
            });

            // Change page title back on focus
            $(window).focus(function () {
                $("title").text(pageTitle);
            });

            //Smooth scroll 
            $('a').smoothScroll({ offset: -1, speed: 700 });


            //Open close side nav bar            
            $(".openSideNav").click(function (event) {
                console.log('hello bill');
                event.preventDefault();
                $("nav").toggleClass("navBarOpen");
                $("main").toggleClass("mainSlideOpen");


                if ($(window).width() > 1180) {
                    $("main").removeClass("mainSlideOpen");
                } else;
            });
        });
        