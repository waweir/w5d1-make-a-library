// Your DOM library code goes here inside of an IIFE and must set a global variables called md.
(function() {
    'use strict'

    // one(): Find one matching element using any CSS selector
    var one = function(selector) {
        return document.querySelector(selector)
    }

    // all(): Find all matching elements using any CSS selector
    var all = function(selector) {
        return document.querySelectorAll(selector)
    }

    // remove(): Remove an element
    var remove = function(selector) {
        return document.querySelector(selector).remove()
    }

    // addClass(): Add a CSS class to an element
    var addClass = function(selector, className) {
        document.querySelector(selector).classList.add(className)
        return document.querySelector(selector)
    }

    // removeClass(): Remove a CSS class from an element
    var removeClass = function(selector, className) {
        document.querySelector(selector).classList.remove(className)
        return document.querySelector(selector)
    }

    // hasClass(): Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
    var hasClass = function(selector, className) {
        return document.querySelector(selector).classList.contains(className)
    }

    // getAttr(): Get an HTML attribute from an element
    var getAttr = function(selector, attribute) {
        return document.querySelector(selector).getAttribute(attribute)
    }

    // setAttr(): Set an HTML attribute on an element
    var setAttr = function(selector, attribute, value) {
        document.querySelector(selector).setAttribute(attribute, value)
        return document.querySelector(selector)
    }

    // setHTML(): Set the innerHTML of an element
    var setHTML = function(selector, value) {
        document.querySelector(selector).innerHTML = value
        return document.querySelector(selector)
    }

    // getHTML(): Get the innerHTML of an element
    var getHTML = function(selector) {
        return document.querySelector(selector).innerHTML
    }

    window.md = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML,
    }

}())
