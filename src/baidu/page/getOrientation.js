/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
* path: baidu/ui/getOrientation.js
* author: walter
* version: 1.0.0
* date: 2011/4/2
*/

/**
 * 获取页面翻转状态
 * @return {String = 'portrait' || 'landscape'} 
 */

baidu.page.getOrientation = function() {
    if ("orientation" in window) {
        return (window.orientation == 0 || window.orientation == 180) ? 'portrait' : 'landscape';
    } else {
        return (window.innerHeight > window.innerWidth) ? 'portrait' : 'landscape';
    }
};