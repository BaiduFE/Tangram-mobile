/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.array;

/**
 * 从后往前，查询数组中指定元素的索引位置
 * @name baidu.array.lastIndexOf
 * @function
 * @grammar baidu.array.lastIndexOf(source, match)
 * @param {Array} source 需要查询的数组
 * @param {Any} match 查询项
 * @param {number} [fromIndex] 查询的起始位索引位置，如果为负数，则从source.length+fromIndex往前开始查找
 * @see baidu.array.indexOf
 *             
 * @returns {number} 指定元素的索引位置，查询不到时返回-1
 */

baidu.array.lastIndexOf = function (source, match, fromIndex) {
    return source.lastIndexOf(match, fromIndex);
};
