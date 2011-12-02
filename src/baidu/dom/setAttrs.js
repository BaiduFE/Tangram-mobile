/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom;
///import baidu.dom.g;

/**
 * 批量设置目标元素的attribute值
 * @name baidu.dom.setAttrs
 * @function
 * @grammar baidu.dom.setAttrs(element, attributes)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {Object} attributes 要设置的attribute集合
 * @shortcut setAttrs
 * @meta standard
 *             
 * @returns {HTMLElement} 目标元素
 */
baidu.dom.setAttrs = function(element, attributes){
    element = baidu.dom.g(element);
    
    for (var key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    
    return element;
};
