/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/string/toInt.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.string;
///import baidu.string.filterFormat.toInt;

/**
 * 对数字做安全转义,确保是十进制数字;否则返回0.
 * @name baidu.mobile.string.toInt
 * @function
 * @grammar baidu.mobile.string.toInt(source)
 * @param {String} source 待转义字符串
 * 
 * @see baidu.mobile.string.escapeJs,baidu.mobile.string.escapeString
 * @version 1.2
 * @return {Number} 转义之后的数字
 */
baidu.mobile.string.i = baidu.mobile.string.toInt = baidu.string.filterFormat.toInt;
