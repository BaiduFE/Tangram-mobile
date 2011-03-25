/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/browser/has3d.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.browser;

/**
 * 判断是否支持CSS3 3D变换
 * @return {boolean}
 */
baidu.browser.has3d = function() {
    return ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix());
};