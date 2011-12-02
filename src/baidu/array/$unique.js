/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.array;

/**
 * 过滤数组中的相同项
 * @name baidu.array.unique
 * @function
 * @grammar baidu.array.unique(source)
 * @param {Array} source 需要过滤相同项的数组
 *
 * @returns {Array} 过滤后的新数组
 */
baidu.array.unique = function (source) {
	var len = source.length,
		result = [],
		i;

	for(i=0;i<len;i++)
		if(result.indexOf(source[i]) < 0)
			result.push(source[i]);

	return result;
};