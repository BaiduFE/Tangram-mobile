/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.lang;
///import baidu.lang.isArray;
///import baidu.lang.isFunction;

/**
 * 将一个变量转换成array
 * @name baidu.lang.toArray
 * @function
 * @grammar baidu.lang.toArray(source)
 * @param {mix} source 需要转换成array的变量
 * @version 1.3
 * @meta standard
 * @returns {array} 转换后的array
 */
baidu.lang.toArray = function (source) {
    if (source === null || source === undefined)
        return [];
    if (baidu.lang.isArray(source))
        return source;

    // The strings and functions also have 'length'
    if (typeof source.length !== 'number' || typeof source === 'string' || baidu.lang.isFunction(source)) {
        return [source];
    }

    return [].slice.call(source);
};
