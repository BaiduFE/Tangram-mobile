/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.ajax;

/**
 * 发送一个get请求
 * @name baidu.ajax.get
 * @function
 * @grammar baidu.ajax.get(url[, onsuccess])
 * @param {string} 	url 		发送请求的url地址
 * @param {Function} [onsuccess] 请求成功之后的回调函数，function(XMLHttpRequest xhr, string responseText)
 * @meta standard
 * @see baidu.ajax.post,baidu.ajax.request
 *
 * @returns {XMLHttpRequest} 	发送请求的XMLHttpRequest对象
 */
baidu.ajax.get = function (url, onsuccess) {
	var xhr = new XMLHttpRequest();

	function stateChangeHandler() {
		var stat = xhr.status;
		if (xhr.readyState == 4) {
			if ((stat >= 200 && stat < 400) || stat == 0) {
				onsuccess && onsuccess(xhr, xhr.responseText);
			}
		}
	}

	xhr.open("GET", url, true);
	xhr.onreadystatechange = stateChangeHandler;
	xhr.send();
};