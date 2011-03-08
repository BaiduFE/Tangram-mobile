/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/ajax.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/2
 */

///import baidu.mobile;
/**
 * @namespace baidu.ajax 对XMLHttpRequest请求的封装。
 * @property onfailure 请求失败的全局事件，function(XMLHttpRequest xhr)
 * @property onbeforerequest 请求发送前触发的全局事件，function(XMLHttpRequest xhr)
 * @property onStatusCode 状态码触发的全局事件，function(XMLHttpRequest xhr),注意：onStatusCode中的StatusCode需用404,320等状态码替换。如on404
*/
baidu.mobile.ajax = baidu.mobile.ajax || {};
