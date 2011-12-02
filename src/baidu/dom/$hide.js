/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom;

/**
 * 隐藏目标元素
 * @name baidu.dom.hide
 * @function
 * @grammar baidu.dom.hide(element)
 * @param {HTMLElement} element 目标元素
 * @shortcut hide
 * @meta standard
 * @see baidu.dom.show,baidu.dom.toggle
 *             
 * @returns {HTMLElement} 目标元素
 */
baidu.dom.hide = function (element) {
    element.style.display = "none";
    return element;
};

// 声明快捷方法
baidu.hide = baidu.dom.hide;
