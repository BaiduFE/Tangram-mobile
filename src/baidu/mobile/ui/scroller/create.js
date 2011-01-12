/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/ui/scroller/create.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.ui.scroller;
///import baidu.mobile.ui.scroller.Scroller;

/**
 * 获取一个Scroller实例
 * @param {String|HTMLElment} 目标元素
 * @param {Object} options 选项
 *     {
            momentum: true,        //是否启用动力加速
            scrollbar: true,  //是否显示滚动条
            desktopCompat: true   //是否应用到桌面浏览器
        }
 * 
 * @return baidu.mobile.ui.scroller.Scroller实例
 */
baidu.mobile.ui.scroller.create = function(elem, options) {
    return new baidu.mobile.ui.scroller.Scroller(elem, options);
};