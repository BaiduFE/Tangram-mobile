/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/array/each.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/8
 */

///import baidu.mobile.array;
///import baidu.array.each;

/**
 * 遍历数组中所有元素
 * @name baidu.mobile.array.each
 * @function
 * @grammar baidu.mobile.array.each(source, iterator)
 * @param {Array} source 需要遍历的数组
 * @param {Function} iterator 对每个数组元素进行调用的函数，该函数有两个参数，第一个为数组元素，第二个为数组索引值，function (item, index)。
 * @remark
 * each方法不支持对Object的遍历,对Object的遍历使用baidu.object.each 。
 * @shortcut each
 * @meta standard
 *             
 * @returns {Array} 遍历的数组
 */
 
baidu.mobile.each = baidu.mobile.array.each = baidu.array.each;
