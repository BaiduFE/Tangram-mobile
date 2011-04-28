/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.browser;

/**
 * 判断是否支持CSS3 3D变换
 * @return {boolean}
 */
baidu.browser.has3d = function() {
    return ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix());
};
