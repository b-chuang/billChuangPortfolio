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
        });

        //Smooth scroll 
        $('a').smoothScroll({ offset: -1, speed: 700 });

        //close slider
        $(document).ready(function () {

            

        });