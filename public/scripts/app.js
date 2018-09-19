(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(function () {});

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

        event.preventDefault();

        $("nav").toggleClass("navBarOpen");
        $("main").toggleClass("mainSlideOpen");

        if ($(window).width() > 1180) {
            $("main").removeClass("mainSlideOpen");
        } else ;
    });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsWUFBWSxDQUViLENBRkQ7O0FBSUE7QUFDQSxZQUFZLElBQVosQ0FBaUIsY0FBakIsRUFBaUMsdUJBQWpDLEVBQTBELFlBQVk7QUFDbEUsWUFBUSxHQUFSLENBQVksdUNBQVo7QUFDSCxDQUZEOztBQU1RO0FBQ0EsT0FBTyxRQUFQLEVBQWlCLEtBQWpCLENBQXVCLFVBQVUsQ0FBVixFQUFhO0FBQ2hDO0FBQ0EsUUFBSSxZQUFZLEVBQUUsT0FBRixFQUFXLElBQVgsRUFBaEI7O0FBRUE7QUFDQSxNQUFFLE1BQUYsRUFBVSxJQUFWLENBQWUsWUFBWTtBQUN2QixVQUFFLE9BQUYsRUFBVyxJQUFYLENBQWdCLHdCQUFoQjtBQUNILEtBRkQ7O0FBSUE7QUFDQSxNQUFFLE1BQUYsRUFBVSxLQUFWLENBQWdCLFlBQVk7QUFDeEIsVUFBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixTQUFoQjtBQUNILEtBRkQ7O0FBSUE7QUFDQSxNQUFFLEdBQUYsRUFBTyxZQUFQLENBQW9CLEVBQUUsUUFBUSxDQUFDLENBQVgsRUFBYyxPQUFPLEdBQXJCLEVBQXBCOztBQUdBO0FBQ0EsTUFBRSxjQUFGLEVBQWtCLEtBQWxCLENBQXdCLFVBQVUsS0FBVixFQUFpQjs7QUFFckMsY0FBTSxjQUFOOztBQUVBLFVBQUUsS0FBRixFQUFTLFdBQVQsQ0FBcUIsWUFBckI7QUFDQSxVQUFFLE1BQUYsRUFBVSxXQUFWLENBQXNCLGVBQXRCOztBQUVBLFlBQUksRUFBRSxNQUFGLEVBQVUsS0FBVixLQUFvQixJQUF4QixFQUE4QjtBQUMxQixjQUFFLE1BQUYsRUFBVSxXQUFWLENBQXNCLGVBQXRCO0FBQ0gsU0FGRCxNQUVNO0FBQ1QsS0FWRDtBQVdILENBOUJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJChmdW5jdGlvbiAoKSB7XG4gICAgXG59KTtcblxuLyogcGFydGljbGVzSlMubG9hZChAZG9tLWlkLCBAcGF0aC1qc29uLCBAY2FsbGJhY2sgKG9wdGlvbmFsKSk7ICovXG5wYXJ0aWNsZXNKUy5sb2FkKCdwYXJ0aWNsZXMtanMnLCAnYXNzZXRzL3BhcnRpY2xlcy5qc29uJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdjYWxsYmFjayAtIHBhcnRpY2xlcy1qcyBjb25maWcgbG9hZGVkJyk7XG59KTtcblxuXG5cbiAgICAgICAgLy9icm93c2VyIHRpdGxlXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcbiAgICAgICAgICAgIC8vIEdldCBwYWdlIHRpdGxlXG4gICAgICAgICAgICB2YXIgcGFnZVRpdGxlID0gJChcInRpdGxlXCIpLnRleHQoKTtcblxuICAgICAgICAgICAgLy8gQ2hhbmdlIHBhZ2UgdGl0bGUgb24gYmx1clxuICAgICAgICAgICAgJCh3aW5kb3cpLmJsdXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoXCJ0aXRsZVwiKS50ZXh0KFwi8J+Riywg8J+RhywgY29tZSBiYWNrIHNvb25cIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ2hhbmdlIHBhZ2UgdGl0bGUgYmFjayBvbiBmb2N1c1xuICAgICAgICAgICAgJCh3aW5kb3cpLmZvY3VzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwidGl0bGVcIikudGV4dChwYWdlVGl0bGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vU21vb3RoIHNjcm9sbCBcbiAgICAgICAgICAgICQoJ2EnKS5zbW9vdGhTY3JvbGwoeyBvZmZzZXQ6IC0xLCBzcGVlZDogNzAwIH0pO1xuXG5cbiAgICAgICAgICAgIC8vT3BlbiBjbG9zZSBzaWRlIG5hdiBiYXIgICAgICAgICAgICBcbiAgICAgICAgICAgICQoXCIub3BlblNpZGVOYXZcIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgJChcIm5hdlwiKS50b2dnbGVDbGFzcyhcIm5hdkJhck9wZW5cIik7XG4gICAgICAgICAgICAgICAgJChcIm1haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluU2xpZGVPcGVuXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTE4MCkge1xuICAgICAgICAgICAgICAgICAgICAkKFwibWFpblwiKS5yZW1vdmVDbGFzcyhcIm1haW5TbGlkZU9wZW5cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAiXX0=
