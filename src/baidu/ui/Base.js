/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 *
 * path: baidu/ui/Base.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/15
 */

///import baidu.ui.Event;
///import baidu.ui.getAttribute;
///import baidu.ui.getParent;
///import baidu.ui.getAttributesByRole;
///import baidu.event.on;
///import baidu.dom.g;

baidu.ui.Base = {
    
    /**
     * 渲染UI
     */
    render: function(){
        var me = this;
        me._setup();
        me._init();
    },
    
    /**
     * 读取页面配属项
     */
    _setup: function(){
        var me = this,
            element = me.element = baidu.dom.g(me.element);
        
        me.parent = baidu.ui.getParent(element);
        me.roles = baidu.ui.getAttributesByRole(element);
        baidu.object.extend(me, baidu.ui.getAttribute(element));
        
        element.setAttribute('data-guid', me.guid); 
        me.setup && me.setup();
        
        me.dispatchEvent("onsetup");
    },
    
    /**
     * 初始化页面
     */
    _init: function(){
        var me = this;
        me.init && me.init();  
        me.dispatchEvent("onload");
    },
    
    /**
     * 获取target最近的一个父亲role节点
     */
    getRoleElement: function(target){
        while(target) {
            if(target == document.body || target == this.element) {
                return null;
            }

            if(target.getAttribute('t-role')) {
                return target;
            }

            target = target.parentNode;
        }
    },
    
    /**
     * 获取target最近的一个父亲role类型
     */
    getRoleType: function(target){
        var role = this.getRoleElement(target);
        
        if(role){
            return role.getAttribute('t-role');
        }
        
        return null;
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
            e: e
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
