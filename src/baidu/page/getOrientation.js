/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.page;

/**
 * 获取页面翻转状态
 * @return {String = 'portrait' || 'landscape'} 
 */
baidu.page.getOrientation = function() {
    if ("onorientationchange" in window) {
        return (window.orientation == 0 || window.orientation == 180) ? 'portrait' : 'landscape';
    } else {
        return (window.innerHeight > window.innerWidth) ? 'portrait' : 'landscape';
    }
};
