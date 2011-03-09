/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/setAttrs.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.dom;

/**
 * 批量设置目标元素的attribute值
 * @name baidu.mobile.dom.setAttrs
 * @function
 * @grammar baidu.mobile.dom.setAttrs(element, attributes)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {Object} attributes 要设置的attribute集合
 * @shortcut setAttrs
 * @meta standard
 * @see baidu.mobile.dom.setAttr,baidu.mobile.dom.getAttr
 *             
 * @returns {HTMLElement} 目标元素
 */
baidu.mobile.dom.setAttrs = function(element, attributes){
    element = baidu.mobile.dom.g(element);
    
    for (var key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    
    return element;
};

baidu.mobile.setAttrs = baidu.mobile.dom.setAttrs