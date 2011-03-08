/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/string/escapeString.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.string;
///import baidu.string.filterFormat.escapeString;

/**
 * 对字符串做安全转义,转义字符包括: 单引号,双引号,左右小括号,斜杠,反斜杠,上引号.
 * @name baidu.mobile.string.escapeString
 * @function
 * @grammar baidu.mobile.string.escapeString(source)
 * @param {String} source 待转义字符串
 * 
 * @see baidu.mobile.string.escapeJs,baidu.mobile.string.toInt
 * @version 1.2
 * @return {String} 转义之后的字符串
 */
baidu.mobile.string.e = baidu.mobile.string.escapeString = baidu.string.filterFormat.escapeString;
