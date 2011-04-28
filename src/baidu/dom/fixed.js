/*
* Tangram Mobile
* Copyright 2010 Baidu Inc. All rights reserved.
*
*/

///import baidu.dom.g;
///import baidu.dom._styleFilter.px;
///import baidu.dom.setStyles;
///import baidu.event.customScroll;
///import baidu.event.on;
///import baidu.lang.isNumber;

/**
 * 固定元素
 * @param {HTMLelem} elem  目标元素
 * @param {Object} options 选项  {top, left, right, bottom}
 */
baidu.dom.fixed = function(elem, options) {
    elem = baidu.dom.g(elem);
    options = options || {};
    
    function setPos() {
        var top = options.top,
            bottom = options.bottom,
            left = options.left,
            right = options.right,
            isNumber = baidu.lang.isNumber;

        if(isNumber(top)) {
            top += window.pageYOffset;
        } else if(isNumber(bottom)) {
            top = window.pageYOffset + window.innerHeight - elem.offsetHeight - bottom;
        } else {
            top = window.pageYOffset;
        }
        
        if(isNumber(left)) {
            left += window.pageXOffset;
        } else if(isNumber(right)) {
            left = window.pageXOffset + window.innerWidth - elem.offsetWidth - right;
        } else {
            left = window.pageXOffset;
        }

        baidu.dom.setStyles(elem, {
            "top" : top,
            "left" : left
        });
    }
    
    baidu.dom.setStyle(elem, "position", "absolute");
    setPos();

    baidu.event.on(document, "customScroll", function(e) {
        if (e.scrollType == "scrollstop") {
            baidu.dom.setStyle(elem,"display", "");
            setPos();
        } else {
            baidu.dom.setStyle(elem,"display", "none");
        }
    }, true);
};
