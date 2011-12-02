/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/
///import baidu.array;

/**
 * 移除数组中的项
 * @name baidu.array.remove
 * @function
 * @grammar baidu.array.remove(source, match)
 * @param {Array} source 需要移除项的数组
 * @param {Any} match 要移除的项
 * @meta standard
 * @see baidu.array.removeAt
 *             
 * @returns {Array} 移除后的数组
 */
baidu.array.remove = function (source, match) {
    var len = source.length;
        
    while (len--) {
        if (len in source && source[len] === match) {
            source.splice(len, 1);
        }
    }
    return source;
};
