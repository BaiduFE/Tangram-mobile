/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/event.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.dom.g;
///import baidu.mobile.dom;
///import baidu.string.toCamelCase;
/**
 * 获取DOM元素样式值
 * @param {HTMLElement|string}  element 目标元素或目标元素的id
 * @param {string}       name 样式名
 * @param {boolean}    computed 是否取得计算过后的样式
 * @return {string}       样式值
 */
baidu.mobile.dom.getStyle = function(elem, name, computed) {
    var 
        elem = baidu.dom.g(elem),
		name = baidu.string.toCamelCase(name),
        style = elem.style,
        ret, defaultView = elem.ownerDocument.defaultView;

    if (style && style[name] && !computed) {
        ret = style[name];
    } else {
        var computedStyle = defaultView.getComputedStyle(elem, null);
        ret = computedStyle.getPropertyValue(name);
        if (name == "opacity" && ret === "") {
            ret = "1";
        }
    }
    return ret;
}

baidu.mobile.getStyle = baidu.mobile.dom.getStyle;