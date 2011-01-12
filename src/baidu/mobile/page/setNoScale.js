/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/page/setNoScale.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.dom.insertHTML;
///import baidu.mobile.page;

/**
 * 设置页面默认不缩放，并且不可缩放
 */
baidu.mobile.page.setNoScale = function() {
    var head = document.getElementsByTagName("head")[0],
        meta = '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no;"/>';
    baidu.dom.insertHTML(head, "beforeEnd", meta);
};