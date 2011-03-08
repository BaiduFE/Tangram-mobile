/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/remove.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.dom;
///import baidu.dom.remove;

/**
 * 从DOM树上移除目标元素
 * @name baidu.mobile.dom.remove
 * @function
 * @grammar baidu.mobile.dom.remove(element)
 * @param {HTMLElement|string} element 需要移除的元素或元素的id
 * @remark
 * <b>注意：</b>对于移除的dom元素，IE下会释放该元素的空间，继续使用该元素的引用进行操作将会引发不可预料的问题。
 * @meta standard
 */
baidu.mobile.dom.remove = baidu.dom.remove;