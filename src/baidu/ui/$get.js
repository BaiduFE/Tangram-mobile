/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui;
///import baidu.lang.instance;

/**
 * 获取元素所在的控件
 * @param {HTMLElement|string} 要查找的元素或者元素id
 * @return {object} ui控件
 */
baidu.ui.get = function(element) {
    return baidu.lang.instance(element.getAttribute('t-guid'));
};

