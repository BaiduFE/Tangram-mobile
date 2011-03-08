/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/ajax/request.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/3
 */

///import baidu.mobile.ajax;

/**
 * 发送一个ajax请求
 * @name baidu.mobile.ajax.request
 * @function
 * @grammar baidu.mobile.ajax.request(url[, options])
 * @param {string} 	url 发送请求的url
 * @param {Object} 	[options] 发送请求的选项参数
				
 * @config {String} 	[method] 			请求发送的类型。默认为GET
 * @config {Boolean} [async] 			是否异步请求。默认为true（异步）
 * @config {String} 	[data] 				需要发送的数据。如果是GET请求的话，不需要这个属性
 * @config {Object} 	[headers] 			要设置的http request header
 * @config {String} 	[username] 			用户名
 * @config {String} 	[password] 			密码
 * @config {Function} [onsuccess] 		请求成功时触发，function(XMLHttpRequest xhr, string responseText)。
 * @config {Function} [onfailure] 		请求失败时触发，function(XMLHttpRequest xhr)。
 * @config {Function} [onbeforerequest]	发送请求之前触发，function(XMLHttpRequest xhr)。
 * @config {Function} [on{STATUS_CODE}] 	当请求为相应状态码时触发的事件，如on302、on404、on500，function(XMLHttpRequest xhr)。3XX的状态码浏览器无法获取，4xx的，可能因为未知问题导致获取失败。
 * @config {Boolean} [noCache] 			是否需要缓存，默认为false（缓存），1.1.1起支持。
 * 
 * @meta standard
 * @see baidu.mobile.ajax.get,baidu.mobile.ajax.post,baidu.mobile.ajax.form
 *             
 * @returns {XMLHttpRequest} 发送请求的XMLHttpRequest对象
 */
baidu.mobile.ajax.request = function (url, options) {
	options = options || {};
    var data        = options.data || "",
        async       = !(options.async === false),
        username    = options.username || "",
        password    = options.password || "",
        method      = (options.method || "GET").toUpperCase(),
        headers     = options.headers || {},
        eventHandlers = {},
        key, xhr;
    /**
     * readyState发生变更时调用
     * 
     * @ignore
     */
    function stateChangeHandler() {
        var stat = xhr.status;
        if (xhr.readyState == 4) {
            if ((stat >= 200 && stat < 400) || stat == 0) {
                fire('success');
            } else {
                fire('failure');
            }
        }
    }
    
    /**
     * 触发事件
     * 
     * @ignore
     * @param {String} type 事件类型
     */
    function fire(type) {
        type = 'on' + type;
        var handler = eventHandlers[type],
            globelHandler = baidu.mobile.ajax[type];
        
        // 不对事件类型进行验证
        if (handler) {
            if (type != 'onsuccess') {
                handler(xhr);
            } else {
                handler(xhr, xhr.responseText);
            }
        } else if (globelHandler) {
            //onsuccess不支持全局事件
            if (type == 'onsuccess') {
                return;
            }
            globelHandler(xhr);
        }
    }
      
    for (key in options) {
        eventHandlers[key] = options[key];
    }
    
    headers['X-Request-With'] = 'XMLHttpRequest';
      
    try {
        xhr = new XMLHttpRequest();
        
        if (method == 'GET') {
            url += (url.indexOf('?') >= 0 ? '&' : '?');
            if (data) {
                url += data + '&';
                data = null;
            }
            if(options['noCache'])
                url += 'b' + (new Date()).getTime() + '=1';
        }
        
        if (username) {
            xhr.open(method, url, async, username, password);
        } else {
            xhr.open(method, url, async);
        }
        
        if (async) {
            xhr.onreadystatechange = stateChangeHandler;
        }
        
        // 在open之后再进行http请求头设定
        if (method == 'POST') {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        
        for (key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
        
        fire('beforerequest');
        xhr.send(data);
        
        if (!async) {
            stateChangeHandler();
        }
    } catch (ex) {
        fire('failure');
    }
    
    return xhr;
};
