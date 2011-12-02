/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.ajax;

/**
 * 发送一个ajax请求
 * @name baidu.ajax.request
 * @function
 * @grammar baidu.ajax.request(url[, options])
 * @param {string} 	url 发送请求的url
 * @param {Object} 	[options] 发送请求的选项参数
 * @config {String} 	[method] 			请求发送的类型。默认为GET
 * @config {String} 	[data] 				需要发送的数据。如果是GET请求的话，不需要这个属性
 * @config {Function} [onsuccess] 		请求成功时触发，function(XMLHttpRequest xhr, string responseText)。
 * @config {Function} [onfailure] 		请求失败时触发，function(XMLHttpRequest xhr)。
 * @meta standard
 * @see baidu.ajax.get,baidu.ajax.post,baidu.ajax.form
 *
 * @returns {XMLHttpRequest} 发送请求的XMLHttpRequest对象
 */
baidu.ajax.request = function(url, options) {
	options = options || {};

	var data = options.data || "",
		method = (options.method || "GET").toUpperCase(),
		xhr = new XMLHttpRequest();

	if (method == 'GET') {
		url += (url.indexOf('?') >= 0 ? '&' : '?');
		if (data) {
			url += data + '&';
			data = null;
		}
	}

	xhr.open(method, url, true);
	
	function stateChangeHandler() {
        var stat = xhr.status;
        if (xhr.readyState == 4) {
            if ((stat >= 200 && stat < 400) || stat == 0) {
            	options['onsuccess'] && options['onsuccess'](xhr, xhr.responseText);
            } else {
                options['onsuccess'] && options['onfailure'](xhr);
            }
        }
    }

	xhr.onreadystatechange = stateChangeHandler;

	if (method == "POST") {
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	}

	xhr.send(data);
};