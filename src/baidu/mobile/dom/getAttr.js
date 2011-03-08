/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/getAttr.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */
///import baidu.mobile.dom;
///import baidu.dom.getAttr;

/**
 * 获取目标元素的属性值
 * @name baidu.mobile.dom.getAttr
 * @function
 * @grammar baidu.mobile.dom.getAttr(element, key)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {string} key 要获取的attribute键名
 * @shortcut getAttr
 * @meta standard
 * @see baidu.mobile.dom.setAttr,baidu.mobile.dom.setAttrs
 *             
 * @returns {string|null} 目标元素的attribute值，获取不到时返回null
 */
baidu.mobile.getAttr = baidu.mobile.dom.getAttr = baidu.dom.getAttr;

