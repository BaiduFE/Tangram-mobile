/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */

///import baidu.dom;

/**
 * 显示目标元素，即将目标元素的display属性还原成默认值。默认值可能在stylesheet中定义，或者是继承了浏览器的默认样式值
 * @author allstar, berg
 * @name baidu.dom.show
 * @function
 * @grammar baidu.dom.show(element)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @shortcut show
 * @meta standard
 * @see baidu.dom.hide,baidu.dom.toggle
 *             
 * @returns {HTMLElement} 目标元素
 */
baidu.dom.show = function (element) {
    element.style.display = "";
    return element;
};

// 声明快捷方法
baidu.show = baidu.dom.show;
