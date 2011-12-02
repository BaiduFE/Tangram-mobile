/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.array;

/**
 * 移除数组中的项
 * @name baidu.array.removeAt
 * @function
 * @grammar baidu.array.removeAt(source, index)
 * @param {Array} source 需要移除项的数组
 * @param {number} index 要移除项的索引位置
 * @see baidu.array.remove
 * @meta standard
 * @returns {Any} 被移除的数组项
 */
baidu.array.removeAt = function (source, index) {
    return source.splice(index, 1)[0];
};
