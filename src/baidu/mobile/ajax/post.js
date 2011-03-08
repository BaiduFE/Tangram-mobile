/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/ajax/post.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/3
 */

///import baidu.mobile.ajax;
///import baidu.mobile.ajax.request;

/**
 * 发送一个post请求
 * @name baidu.mobile.ajax.post
 * @function
 * @grammar baidu.mobile.ajax.post(url, data[, onsuccess])
 * @param {string} 	url 		发送请求的url地址
 * @param {string} 	data 		发送的数据
 * @param {Function} [onsuccess] 请求成功之后的回调函数，function(XMLHttpRequest xhr, string responseText)
 * @meta standard
 * @see baidu.mobile.ajax.get,baidu.mobile.ajax.request
 *             
 * @returns {XMLHttpRequest} 	发送请求的XMLHttpRequest对象
 */
baidu.mobile.ajax.post = function (url, data, onsuccess) {
    return baidu.mobile.ajax.request(
        url, 
        {
            'onsuccess': onsuccess,
            'method': 'POST',
            'data': data
        }
    );
};
