/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.dom;

/**
 * 获取目标元素的上一个兄弟元素节点
 * @name baidu.dom.prev
 * @function
 * @grammar baidu.dom.prev(element)
 * @param {HTMLElement} element 目标元素
 * @see baidu.dom.first,baidu.dom.last,baidu.dom.next
 *             
 *             
 * @returns {HTMLElement|null} 目标元素的上一个兄弟元素节点，查找不到时返回null
 */
baidu.dom.prev = function (element) {
    return element.previousElementSibling;
};
