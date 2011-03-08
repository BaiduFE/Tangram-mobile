/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/getParent.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.dom;
///import baidu.dom._g;

/**
 * 获得元素的父节点
 * @name baidu.mobile.dom.getParent
 * @function
 * @grammar baidu.mobile.dom.getParent(element)
 * @param {HTMLElement|string} element   目标元素或目标元素的id
 * @return {HTMLElement|null} 父元素，如果找不到父元素，返回null
 */
baidu.mobile.dom.getParent = function (element) {
    element = baidu.dom._g(element);
    return element.parentNode || null;
};
