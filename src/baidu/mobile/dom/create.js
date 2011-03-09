/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/create.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.dom;

/**
 * 创建 Element 对象。
 * @author berg
 * @name baidu.mobile.dom.create
 * @function
 * @grammar baidu.mobile.dom.create(tagName[, options])
 * @param {string} tagName 标签名称.
 * @param {Object} opt_attributes 元素创建时拥有的属性，如style和className.
 * @version 1.3
 *
 * @return {HTMLElement} 创建的 Element 对象
 */
baidu.mobile.dom.create = function(tagName, opt_attributes) {
    var el = document.createElement(tagName),
        attributes = opt_attributes || {};
    return baidu.mobile.dom.setAttrs(el, attributes);
};

baidu.mobile.create = baidu.mobile.dom.create;