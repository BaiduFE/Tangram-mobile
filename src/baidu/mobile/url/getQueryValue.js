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
///import baidu.url.getQueryValue;

/**
 * 根据参数名从目标URL中获取参数值
 * @name baidu.mobile.url.getQueryValue
 * @function
 * @grammar baidu.mobile.url.getQueryValue(url, key)
 * @param {string} url 目标URL
 * @param {string} key 要获取的参数名
 * @meta standard
 * @see baidu.mobile.url.jsonToQuery
 *             
 * @returns {string|null} 获取的参数值，获取不到时返回null
 */
baidu.mobile.url.getQueryValue = baidu.url.getQueryValue;
