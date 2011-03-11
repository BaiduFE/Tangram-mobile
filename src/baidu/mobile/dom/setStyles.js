/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/setStyles.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.dom;
///import baidu.mobile.dom.setStyle;

/**
 * 批量设置DOM元素的样式值
 * 
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {Object}             styles  要设置的样式集合
 * @return {HTMLElement}    elem  被操作的DOM元素
 */
baidu.mobile.dom.setStyles = baidu.mobile.setStyles = function (element, styles) {
    element = baidu.mobile.dom.g(element);

    for (var key in styles) {
        baidu.mobile.dom.setStyle(element, key, styles[key]);
    }

    return element;
};