/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom;
///import baidu.dom.g;

/**
 * 删除一个节点下面的所有子节点。
 * @name baidu.dom.empty
 * @function
 * @grammar baidu.dom.empty(element)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @version 1.3
 *             
 * @returns {HTMLElement} 目标元素      
 */
baidu.dom.empty = function (element) {
    element = baidu.dom.g(element);
    
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }

    return element;
};
