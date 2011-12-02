/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.array;

/**
 * 清空一个数组
 * @name baidu.array.empty
 * @function
 * @grammar baidu.array.empty(source)
 * @param {Array} source 需要清空的数组.
 * @author berg
 */
baidu.array.empty = function(source) {
    source.length = 0;
};
