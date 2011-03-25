/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/ui/Scroller/create.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.ui.Scroller;

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
 * @return baidu.ui.Scroller实例
 */
baidu.ui.Scroller.create = function(elem, options) {
    return new baidu.ui.Scroller(elem, options);
};