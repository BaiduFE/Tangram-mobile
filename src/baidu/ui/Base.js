/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 *
 * path: baidu/ui/Base.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/15
 */
///import baidu.ui;
///import baidu.event.on;
///import baidu.dom.g;

baidu.ui.Base = {
    
    /**
     * 渲染UI
     */
    render: function(){
        var me = this;
        
        me.element = baidu.dom.g(me.element);

        if(me._onTurn) {
            me.turnHandler = baidu.fn.bind('_onTurn', me);
            baidu.event.on(window, 'turn', me.turnHandler);
        }
        
        baidu.dom.setAttr(me.element, 'data-guid', me.guid);
        
        me._render();
    },
    
    /**
     * 获得class，支持skin
     *
     * @param {string} optional key
     * @return {string} className
     */
    getClass: function(key){
        var me = this,
            className = me.classPrefix,
            skinName = me.skin;
         if (key) {
             className += '-' + key;
             skinName += '-' + key;
         }
         if (me.skin) {
             className += ' ' + skinName;
         }
         return className;
    },
    
    /** 
     * 触发事件
     * @public
     * @param {String} eventName   要触发的事件名称
     * @param {Object} e           事件event
     */
    fire: function(eventType,e) {
        this.dispatchEvent(eventType.toLowerCase(), {
            DOMEvent: e
        });
    },
    
    /**
     * 销毁当前实例
     */
    dispose: function(){
        this.dispatchEvent("dispose");
        baidu.lang.Class.prototype.dispose.call(this);
    }
};
