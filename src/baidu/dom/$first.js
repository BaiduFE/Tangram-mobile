/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom;

/**
 * 获取目标元素的第一个元素节点
 * @name baidu.dom.first
 * @function
 * @grammar baidu.dom.first(element)
 * @param {HTMLElement} element 目标元素
 * @see baidu.dom.last,baidu.dom.prev,baidu.dom.next
 * @meta standard
 * @returns {HTMLElement|null} 目标元素的第一个元素节点，查找不到时返回null
 */
baidu.dom.first = function (element) {
    return element.firstElementChild;
};
