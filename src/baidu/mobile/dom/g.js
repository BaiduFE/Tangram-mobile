/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/g.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.dom;
///import baidu.dom.g;

/**
 * 从文档中获取指定的DOM元素
 * @name baidu.mobile.dom.g
 * @function
 * @grammar baidu.mobile.dom.g(id)
 * @param {string|HTMLElement} id 元素的id或DOM元素
 * @shortcut g,G
 * @meta standard
 * @see baidu.mobile.dom.q
 *             
 * @returns {HTMLElement|null} 获取的元素，查找不到时返回null,如果参数不合法，直接返回参数
 */
baidu.mobile.g = baidu.mobile.G = baidu.mobile.dom.g = baidu.dom.g;
