/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom.insertHTML;
///import baidu.page;

/**
 * 设置添加到iphone主屏幕作为app的相关参数
 * @param {Object} options  参数：
 *     {
 *         barType : {string} "while" | "black"   app上方横栏的颜色
 *         icon : {string}              图标地址  尺寸：158*158
 *         iconGloss : {boolean}    图标是否自动加上高亮
 *         startup : {string}          启动画面图片地址 尺寸：320*460
 *     }
 */
baidu.page.setWebApp = function(options) {
    var head = document.getElementsByTagName("head")[0],
        barType = (options.barType == "black") ? "black" : "while",
        precomposed = (options.iconGloss) ? '' : '-precomposed',
        meta = '<meta name="apple-mobile-web-app-capable" content="yes" />';
        
    meta += '<meta name="apple-mobile-web-app-status-bar-style" content="' + barType + '" />';
                
    options.icon && (meta += '<link rel="apple-touch-icon' + precomposed + '" href="' + options.icon + '" />');
    options.startup && (meta += '<link rel="apple-touch-startup-image" href="' + options.startup + '" />');
    
    baidu.dom.insertHTML(head, "beforeEnd", meta);
};
