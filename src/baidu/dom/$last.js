/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.dom;

/**
 * 获取目标元素的最后一个元素节点
 * @name baidu.dom.last
 * @function
 * @grammar baidu.dom.last(element)
 * @param {HTMLElement} element 目标元素
 * @see baidu.dom.first,baidu.dom.prev,baidu.dom.next
 *             
 * @returns {HTMLElement|null} 目标元素的最后一个元素节点，查找不到时返回null
 */
baidu.dom.last = function (element) {
    return element.lastElementChild;
};
