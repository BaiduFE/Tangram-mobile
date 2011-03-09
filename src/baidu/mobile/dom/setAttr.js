/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/setAttr.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.dom;
///import baidu.dom.setAttr;

/**
 * 设置目标元素的attribute值
 * @name baidu.mobile.dom.setAttr
 * @function
 * @grammar baidu.mobile.dom.setAttr(element, key, value)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {string} key 要设置的attribute键名
 * @param {string} value 要设置的attribute值
 * @remark
 * 
            设置object的自定义属性时，由于浏览器限制，无法设置。
        
 * @shortcut setAttr
 * @meta standard
 * @see baidu.mobile.dom.getAttr,baidu.mobile.dom.setAttrs
 *             
 * @returns {HTMLElement} 目标元素
 */
baidu.mobile.dom.setAttr = function(element, key, value){
    element = baidu.mobile.dom.g(element);
    
    if ('style' == key) {
        element.style.cssText = value;
    }
    else {
        element.setAttribute(key, value);
    }
    
    return element;
};

baidu.mobile.setAttr = baidu.mobile.dom.setAttr;