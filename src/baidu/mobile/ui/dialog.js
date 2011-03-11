/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/ui/dialog.js
 * author: bang
 * version: 1.0.0
 * date: 2011/1/7
 */

///import baidu.mobile.ui.floater;
///import baidu.string.format;
///import baidu.mobile.event._customEvent.tap;


/**
 * dialog组件
 * @param {Object} options 选项  更多请看floater选项
 *     {
            title : ""  //标题
        }
 */ 

baidu.mobile.ui.dialog = function(options) {
    var me = this;
    options = baidu.extend({
        title : ""
    }, options || {});
    
    var tplHead = ['<div id="#{headId}" class="#{headClass}">',
                            '<span class="#{titleClass}" id="#{titleId}">#{title}</span>',
                            '<span class="#{closeClass}" id="#{closeId}"></span>',
                        '</div>',
                        '<div class="#{contentClass}" id="#{contentId}">#{content}</div>'].join(''),
        html = baidu.format(tplHead, {
            headClass : me.getClass("head"),
            headId : me.getId("head"),
            titleClass : me.getClass("title"),
            titleId : me.getId("title"),
            closeClass : me.getClass("close"),
            closeId : me.getId("close"),
            contentClass : me.getClass("content"),
            contentId : me.getId("content"),
            
            title : options.title,
            content : options.content,
        });
    
    options.content = html;
    baidu.m.ui.floater.call(this, options);
    
    baidu.m.on(me.getId("close"), "tap", function(e) {
        me.hide();
    });
};
 
baidu.mobile.ui.dialog.prototype = {
    __proto__ : baidu.m.ui.floater.prototype,
    uiType : "dialog",
}