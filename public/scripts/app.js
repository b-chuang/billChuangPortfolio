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
});

//Smooth scroll 
$('a').smoothScroll({ offset: -1, speed: 700 });

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsWUFBWSxDQUViLENBRkQ7O0FBSUE7QUFDQSxZQUFZLElBQVosQ0FBaUIsY0FBakIsRUFBaUMsdUJBQWpDLEVBQTBELFlBQVk7QUFDbEUsWUFBUSxHQUFSLENBQVksdUNBQVo7QUFDSCxDQUZEOztBQU1RO0FBQ0EsT0FBTyxRQUFQLEVBQWlCLEtBQWpCLENBQXVCLFVBQVUsQ0FBVixFQUFhO0FBQ2hDO0FBQ0EsUUFBSSxZQUFZLEVBQUUsT0FBRixFQUFXLElBQVgsRUFBaEI7O0FBRUE7QUFDQSxNQUFFLE1BQUYsRUFBVSxJQUFWLENBQWUsWUFBWTtBQUN2QixVQUFFLE9BQUYsRUFBVyxJQUFYLENBQWdCLHdCQUFoQjtBQUNILEtBRkQ7O0FBSUE7QUFDQSxNQUFFLE1BQUYsRUFBVSxLQUFWLENBQWdCLFlBQVk7QUFDeEIsVUFBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixTQUFoQjtBQUNILEtBRkQ7QUFHSCxDQWJEOztBQWVBO0FBQ0EsRUFBRSxHQUFGLEVBQU8sWUFBUCxDQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFYLEVBQWMsT0FBTyxHQUFyQixFQUFwQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZnVuY3Rpb24gKCkge1xuICAgIFxufSk7XG5cbi8qIHBhcnRpY2xlc0pTLmxvYWQoQGRvbS1pZCwgQHBhdGgtanNvbiwgQGNhbGxiYWNrIChvcHRpb25hbCkpOyAqL1xucGFydGljbGVzSlMubG9hZCgncGFydGljbGVzLWpzJywgJ2Fzc2V0cy9wYXJ0aWNsZXMuanNvbicsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnY2FsbGJhY2sgLSBwYXJ0aWNsZXMtanMgY29uZmlnIGxvYWRlZCcpO1xufSk7XG5cblxuXG4gICAgICAgIC8vYnJvd3NlciB0aXRsZVxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gICAgICAgICAgICAvLyBHZXQgcGFnZSB0aXRsZVxuICAgICAgICAgICAgdmFyIHBhZ2VUaXRsZSA9ICQoXCJ0aXRsZVwiKS50ZXh0KCk7XG5cbiAgICAgICAgICAgIC8vIENoYW5nZSBwYWdlIHRpdGxlIG9uIGJsdXJcbiAgICAgICAgICAgICQod2luZG93KS5ibHVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwidGl0bGVcIikudGV4dChcIvCfkYssIPCfkYcsIGNvbWUgYmFjayBzb29uXCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENoYW5nZSBwYWdlIHRpdGxlIGJhY2sgb24gZm9jdXNcbiAgICAgICAgICAgICQod2luZG93KS5mb2N1cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJChcInRpdGxlXCIpLnRleHQocGFnZVRpdGxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL1Ntb290aCBzY3JvbGwgXG4gICAgICAgICQoJ2EnKS5zbW9vdGhTY3JvbGwoeyBvZmZzZXQ6IC0xLCBzcGVlZDogNzAwIH0pO1xuXG5cbiAgICAgICJdfQ==
