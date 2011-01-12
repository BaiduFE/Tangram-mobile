/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu.mobile/browser/isSupportTouch.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.browser;

/**
 * 返回是否支持touch事件
*/
baidu.mobile.browser.isSupportTouch = ('ontouchstart' in window);