/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.dom;
///import baidu.dom.g;

/**
 * 获取目标元素的直接子元素列表
 * @name baidu.dom.children
 * @function
 * @grammar baidu.dom.children(element)
 * @param {HTMLElement|String} element 目标元素或目标元素的id
 * @meta standard
 *             
 * @returns {Array} 目标元素的子元素列表，没有子元素时返回空数组
 */
baidu.dom.children = function (element) {
    element = baidu.dom.g(element);

    for (var children = [], tmpEl = element.firstChild; tmpEl; tmpEl = tmpEl.nextSibling) {
        if (tmpEl.nodeType == 1) {
            children.push(tmpEl);
        }
    }
    
    return children;    
};
