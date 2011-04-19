/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
* path: baidu/ui/Event.js
* author: walter
* version: 1.0.0
* date: 2011/4/17
*/

///import baidu.ui;
///import baidu.event.on;
///import baidu.event.turn;
///import baidu.lang.instance;
///import baidu.dom.ready;

(function() {

    function dispatchEvent(e, fn) {
        var ui = baidu.ui.get(e.target);

        while(ui) {
            ui[fn] && ui[fn](e);
            ui = ui.parent;
        }
    }
    
    baidu.dom.ready( function() {
        baidu.event.on(document, 'tap', function(e) {
            dispatchEvent(e, '_ontap');
        }, true);
        
        baidu.event.on(document, 'dbtap', function(e) {
            dispatchEvent(e, '_ondbtap');
        }, true);
        
        baidu.event.on(document, 'taphold', function(e) {
            dispatchEvent(e, '_ontaphold');
        }, true);
        
        baidu.event.on(document, 'swipe', function(e) {
            dispatchEvent(e, '_onswipe');
        }, true);
        
        baidu.event.on(document, 'pinch', function(e) {
            dispatchEvent(e, '_onpinch');
        }, true);
        
        baidu.event.on(document, 'turn', function(e) {
           
        }, true);
    });
    
})();
