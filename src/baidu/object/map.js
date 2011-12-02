/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.object;

/**
 * 遍历object中所有元素，将每一个元素应用方法进行转换，返回转换后的新object。
 * @name baidu.object.map
 * @function
 * @grammar baidu.object.map(source, iterator)
 * 
 * @param 	{Array}    source   需要遍历的object
 * @param 	{Function} iterator 对每个object元素进行处理的函数
 * @return 	{Array} 			map后的object
 */
baidu.object.map = function (source, iterator) {
    var results = {};
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            results[key] = iterator(source[key], key);
        }
    }
    return results;
};
