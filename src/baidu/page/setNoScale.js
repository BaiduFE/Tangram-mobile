/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom.insertHTML;
///import baidu.page;

/**
 * 设置页面默认不缩放，并且不可缩放
 */
baidu.page.setNoScale = function() {
    var head = document.getElementsByTagName("head")[0],
        meta = '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no;"/>';
    baidu.dom.insertHTML(head, "beforeEnd", meta);
};
