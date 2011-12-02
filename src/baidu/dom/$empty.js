/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom;

/**
 * 删除一个节点下面的所有子节点。
 * @name baidu.dom.empty
 * @function
 * @grammar baidu.dom.empty(element)
 * @param {HTMLElement|string} element 目标元素
 * @version 1.3
 *             
 * @returns {HTMLElement} 目标元素      
 */
baidu.dom.empty = function (element) {
    element.textContent = "";
    return element;
};
