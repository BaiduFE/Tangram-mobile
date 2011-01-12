/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu.mobile/browser/has3d.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.browser;

/**
 * 判断是否支持CSS3 3D变换
 * @return {boolean}
 */
baidu.mobile.browser.has3d = function() {
    return ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix());
};