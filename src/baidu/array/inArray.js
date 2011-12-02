/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.array;
///import baidu.array.$indexOf;

/**
 * 判断一个数组中是否包含给定元素
 * @name baidu.array.contains
 * @function
 * @grammar baidu.array.contains(source, obj)
 * @param {Array} source 需要判断的数组.
 * @param {Any} obj 要查找的元素.
 * @return {boolean} 判断结果.
 * @author berg
 */
baidu.array.inArray = function(source, obj) {
    return (baidu.array.indexOf(source, obj) >= 0);
};
