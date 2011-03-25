/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/browser/isSupportTouch.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.browser;

/**
 * 返回是否支持touch事件
*/
baidu.browser.isSupportTouch = ('ontouchstart' in window);