/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/ui/wrapper.js
 * author: bang
 * version: 1.0.0
 * date: 2011/1/10
 */

///import baidu.page.getHeight;
///import baidu.object.extend;
 
///import baidu.mobile.ui;
///import baidu.mobile.setStyles;
///import baidu.mobile.event._customEvent.turn;

baidu.m.ui.wrapper = function(options) {
    var me = this,
        doc = document,
        p = baidu.page;
            
    me.options = baidu.extend({
        onHide : function(){},
        onShow : function(){},
        color : "#000",
        opacity : 0.2,
        zIndex : 100,
    }, options || {});
    
    me.dom = doc.createElement("div");
    doc.body.appendChild(me.dom);
    baidu.m.setStyles(me.dom, {
        width: window.innerWidth,
        height: p.getHeight(),
        position: "absolute",
        left: 0,
        top : 0,
        backgroundColor: me.options.color,
        opacity: me.options.opacity, 
        zIndex: me.options.zIndex,
        display : "none"
    });
    
    baidu.m.on(window, "turn", function(e){me.update()});
};

baidu.m.ui.wrapper.prototype = {
    
    show : function (options) {
        var me = this;
        baidu.m.setStyle(me.dom, "display", "");
        me.options.onShow();
    },
    
    hide : function () {
        var me = this;
        baidu.m.setStyle(me.dom, "display", "none");
        me.options.onHide();
    },
    
    update : function () {
        var p = baidu.page;
        baidu.m.setStyles(this.dom, {
            width: window.innerWidth,
            height: p.getHeight()
        })
    },
    
    dispose : function() {
        var me = this;
        me.dom.parentNode.removeChild(me.dom);
    },
    
    on : function (type, listener) {
        baidu.m.on(this.dom, type, listener);
    }
};