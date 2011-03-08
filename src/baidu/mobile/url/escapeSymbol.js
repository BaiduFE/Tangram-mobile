/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/url/escapeSymbol.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.url;
///import baidu.url.escapeSymbol;


/**
 * 对字符串进行%&+/#=和空格七个字符进行url转义
 * @name baidu.mobile.url.escapeSymbol
 * @function
 * @grammar baidu.mobile.url.escapeSymbol(source)
 * @param {string} source 需要转义的字符串
 * @return {string} 转义之后的字符串.
 * @remark
 * 用于get请求转义。在服务器只接受gbk，并且页面是gbk编码时，可以经过本转义后直接发get请求。
 *             
 * @returns {string} 转义后的字符串
 */
baidu.mobile.url.escapeSymbol = baidu.url.escapeSymbol;
