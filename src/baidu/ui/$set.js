/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.$get;
///import baidu.object.extend;

/**
 * 获取元素所在的控件
 * @param {HTMLElement|string} 要查找的元素，如果是字符串，则查找这个guid为此字符串的控件
 * @param {Object} options 设置
 * @return {object} ui控件
 */
baidu.ui.set = function(element, options) {
    baidu.object.extend(baidu.ui.get(element), options || {});
};

