/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/string/escapeJs.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.string;
///import baidu.string.filterFormat.escapeJs;

/**
 * 对js片段的字符做安全转义,编码低于255的都将转换成\x加16进制数
 * @name baidu.mobile.string.escapeJs
 * @function
 * @grammar baidu.mobile.string.escapeJs(source)
 * @param {String} source 待转义字符串
 * 
 * @see baidu.mobile.string.escapeString,baidu.mobile.string.toInt
 * @version 1.2
 * @return {String} 转义之后的字符串
 */
baidu.mobile.string.js = baidu.mobile.string.escapeJs = baidu.string.filterFormat.escapeJs;
