/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/setStyle.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.dom;
///import baidu.dom.setStyle;

/**
 * 设置DOM元素的样式值
 * 
 * @param {HTMLElement|string}  element 目标元素或目标元素的id
 * @param {string}              key     要设置的样式名
 * @param {string}              value   要设置的样式值
 * @return {HTMLElement} 被操作的DOM元素
 */
baidu.mobile.dom.setStyle = function(element, key, value){
    var el = baidu.mobile.dom.g(element);
    
    key = key.replace(/\-[a-z]/g, function(m){
        return m[1].toUpperCase();
    });
    
    el.style[key] = value;
    
    return el;
}

baidu.mobile.setStyle = baidu.mobile.dom.setStyle;
