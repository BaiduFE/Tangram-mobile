/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.dom;

/**
 * 改变目标元素的显示/隐藏状态
 * @name baidu.dom.toggle
 * @function
 * @grammar baidu.dom.toggle(element)
 * @param {HTMLElement|string} element 目标元素
 * @meta standard
 * @see baidu.dom.show,baidu.dom.hide
 *             
 * @returns {HTMLElement} 目标元素
 */
baidu.dom.toggle = function (element) {
    element.style.display = element.style.display == "none" ? "" : "none";
    return element;
};
