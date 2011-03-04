/*
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/ajax/get.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/3
 */

///import baidu.mobile.ajax;
///import baidu.mobile.ajax.request;

/**
 * 发送一个get请求
 * @name baidu.mobile.ajax.get
 * @function
 * @grammar baidu.mobile.ajax.get(url[, onsuccess])
 * @param {string} 	url 		发送请求的url地址
 * @param {Function} [onsuccess] 请求成功之后的回调函数，function(XMLHttpRequest xhr, string responseText)
 * @meta standard
 * @see baidu.mobile.ajax.post,baidu.mobile.ajax.request
 *             
 * @returns {XMLHttpRequest} 	发送请求的XMLHttpRequest对象
 */
baidu.mobile.ajax.get = function (url, onsuccess) {
    return baidu.mobile.ajax.request(url, {'onsuccess': onsuccess});
};
