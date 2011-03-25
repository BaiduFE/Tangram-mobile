/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/dom/fixed.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */
 
///import baidu.dom.g;
///import baidu.page.getScrollTop;
///import baidu.page.getScrollLeft;
///import baidu.page.getWidth;
///import baidu.page.getHeight;

///import baidu.dom.setStyles;
///import baidu.event.customScroll;
///import baidu.event.on;
///import baidu.browser.android;

/**
 * 固定元素
 * @param {HTMLelem} elem  目标元素
 * @param {Object} options 选项  {top, left, right, bottom, fixedCompat(是否在桌面浏览器使用position:fixed)}
 */
baidu.dom.fixed = function(elem, options) {
    elem = baidu.g(elem);
    options = options || {};
    
    if (options.fixedCompat && baidu.m.browser.android > 2.1) {
        baidu.m.setStyles(elem, {
            position: "fixed",
            left: options.right ? "none" : options.left,
            right: options.left ? "none" : options.right,
            top: options.bottom ? "none" : options.top,
            bottom: options.top ? "none" : options.bottom
        });
        return;
    }
    
    baidu.m.setStyle(elem, "position", "absolute");
    var setPos = function(){
        var p = baidu.page;
        baidu.m.setStyles(elem, {
			//top,bottom left,right 同时出现时，以left,top为准
            "top" : options.top ? p.getScrollTop() + (options.top || 0) : "none",
            "left" : options.left ? p.getScrollLeft() + (options.left || 0) : "none",
            "right" : options.left ? "none" : p.getWidth() - p.getScrollLeft() - window.innerWidth + (options.right || 0),
            "bottom" : options.top ? "none" : p.getHeight() - p.getScrollTop() - window.innerHeight  + (options.bottom || 0)
        });
    }
    setPos();
    
    baidu.m.event.on(document, "customScroll", function(e) {
        if (e.scrollType == "scrollstop") {
            setPos();
            baidu.m.setStyle(elem,"display", "");
        } else {
            baidu.m.setStyle(elem,"display", "none");
        }
    }, true);
};