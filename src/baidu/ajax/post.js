/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.ajax;

/**
 * 发送一个post请求
 * @name baidu.ajax.post
 * @function
 * @grammar baidu.ajax.post(url, data[, onsuccess])
 * @param {string} 	url 		发送请求的url地址
 * @param {string} 	data 		发送的数据
 * @param {Function} [onsuccess] 请求成功之后的回调函数，function(XMLHttpRequest xhr, string responseText)
 * @meta standard
 * @see baidu.ajax.get,baidu.ajax.request
 *             
 * @returns {XMLHttpRequest} 	发送请求的XMLHttpRequest对象
 */
baidu.ajax.post = function (url, data, onsuccess) {
	var	xhr = new XMLHttpRequest();

	xhr.open('POST', url, true);
	
	function stateChangeHandler() {
        var stat = xhr.status;
        if (xhr.readyState == 4) {
            if ((stat >= 200 && stat < 400) || stat == 0) {
            	onsuccess && onsuccess(xhr, xhr.responseText);
            }
        }
    }

	xhr.onreadystatechange = stateChangeHandler;

	if (method == "POST") {
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	}

	xhr.send(data);
};
