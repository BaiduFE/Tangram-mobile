/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/getPosition.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.dom;

/**
 * 获取目标元素相对于整个文档左上角的位置
 * @name baidu.dom.getPosition
 * @function
 * @grammar baidu.dom.getPosition(element)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @meta standard
 *
 * @returns {Object} 目标元素的位置，键值为top和left的Object。
 */
baidu.mobile.dom.getPosition = function(element){
    var pos = {"left":0,"top":0},
        el = baidu.mobile.dom.g(element);

    do {
        pos.top += element.offsetTop || 0;
        pos.left += element.offsetLeft || 0;
        el = el.offsetParent;
    }
    while (el);
   
    return pos;
};
