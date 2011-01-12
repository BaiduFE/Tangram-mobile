/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/ui/floater.js
 * author: bang
 * version: 1.0.0
 * date: 2011/1/10
 */

///import baidu.dom.addClass;
///import baidu.dom.g;
///import baidu.lang.guid;
///import baidu.object.extend;
 
///import baidu.mobile.ui;
///import baidu.mobile.setStyles;
///import baidu.mobile.event._customEvent.turn;
///import baidu.mobile.event._customEvent.tap;

/**
 * 浮动层组件floater
 * @param {Object} options 选项
 *     {
            zIndex : 1000,        
            width : 100,
            height : 100,
            left : null,    //默认居中
            top : null,    //默认居中
            content : '',    //内容
            className : "tangram_floater",    //外层div的className
            id : "tangram_floater-" + baidu.lang.guid(),    //外层div的id
            parent : document.body,        //附加到的dom，默认为body
        }
 */        

baidu.mobile.ui.floater = function(options) {
    var me = this,
        doc = document;
    
    baidu.extend(me, options || {});
    
    me.dom = doc.createElement("div");
    me.dom.innerHTML = me.content;
    me.dom.id = me.getId();
    baidu.dom.addClass(me.dom, me.getClass());
    baidu.m.setStyles(me.dom, {
        width : me.width,
        height : me.height,
        zIndex : me.zIndex,
        position : "absolute"
    });
    
    me.wrapper = new baidu.m.ui.wrapper(
        baidu.extend({
            zIndex : (me.zIndex - 1)
        }, options.wrapperOptions || {})
    );
    me.wrapper.on("tap", function(e) {
        me.hide();
    });
    
    me.parent.appendChild(me.dom);
    
    baidu.m.on(window, "turn", function(e){me.update()});
}

baidu.mobile.ui.floater.prototype = {
    classPrefix : "tangram",
    uiType : "floater",
    guid : baidu.lang.guid(),
    //默认属性
    zIndex : 1000,
    width : 100,
    height : 100,
    left : null,
    top : null,
    content : '',
    parent : document.body,
    
    show : function() {
        var me = this;
        baidu.m.setStyles(me.dom, {
            display : "",
            left : me.left || (window.innerWidth - me.width) / 2,
            top : me.top || (window.innerHeight - me.height) / 2
        })
        me.wrapper.show();
    },
    
    hide : function() {
        var me = this;
        baidu.m.setStyle(me.dom, "display", "none");
        me.wrapper.hide();
    },
    
    dispose : function() {
        var me = this;
        me.wrapper = null;
        me.dom.parentNode.removeChild(me.dom);
    },
    
    update : function() {
        var me = this;
        baidu.m.setStyles(me.dom, {
            left : me.left || (window.innerWidth - me.width) / 2,
            top : me.top || (window.innerHeight - me.height) / 2
        })
        baidu.g("test").innerHTML += "turn ";
    },
    
    getId : function(key) {
        return this.classPrefix + "_" + this.uiType + (key ? ("_" + key) : "") + "_" + this.guid;
    },
    getClass : function(key) {
        return this.classPrefix + "_" + this.uiType + (key ? ("_" + key) : "");
    }
}