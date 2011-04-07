/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
* path: baidu/ui/hideBarFn.js
* author: walter
* version: 1.0.0
* date: 2011/4/2
*/

///import baidu.ui;
///import baidu.dom.setStyle;

/**
 * 隐藏地址栏逻辑函数
 * @return {Boolean = true} 返回true，则调用隐藏地址栏函数;返回false，不调用
 */
baidu.ui.hideBarFn = function() {
    if(!window.pageYOffset) {
        baidu.dom.setStyle(document.body,
                           'height',
                           Math.max(window.innerHeight, window.innerWidth) * 2);
        
        return true;
    }
    return false;
};
