/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.getParent;
///import baidu.ui.getAttribute;
///import baidu.ui.getAttributesByRole;
///import baidu.dom.g;
///import baidu.dom.remove;
///import baidu.event.on;
///import baidu.lang.isString;

baidu.ui.Base = {

    /**
     * 渲染UI
     */
    setup: function() {
        var me = this;
        me._setup();
        me._init();
    },
    
    /**
     * 读取页面配属项
     */
    _setup: function() {
        var me = this,
            element = me.element = baidu.dom.g(me.element);

        me.parent = baidu.ui.getParent(element);
        me.roles = baidu.ui.getAttributesByRole(element);
        baidu.object.extend(me, baidu.ui.getAttribute(element));

        element.setAttribute('t-guid', me.guid);
    },
    
    /**
     * 获得class，支持skin
     *
     * @param {string} optional key
     * @return {string} className
     */
    getClass: function(key) {
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
     * 为目标元素添加事件监听器
     * 
     * @param {HTMLElement|string|window} element  目标元素或目标元素id
     * @param {string}                    type     事件类型
     * @param {function}                  listener 事件监听器
     * @param {args* 0..n}                args 函数执行时附加到执行时函数前面的参数
     * @return {HTMLElement} 目标元素
     */
    on: function(elem, type, listener){
        var me = this,
            xargs = arguments.length > 3 ? [].slice.call(arguments, 3) : null,
            handler = function () {
                var fn = baidu.lang.isString(listener) ? me[listener] : listener,
                    args = (xargs) ? xargs.concat([].slice.call(arguments, 0)) : arguments;
                return fn.apply(me, args);
            };
            
        baidu.event.on(elem, type, handler, true);
    },
    
    /**
     * 查找指定类型的父UI实例
     * @param {String} uiType ui类型
     * @return {Object} 查找到的父UI实例
     */
    findParentUI: function(uiType){
        var me = this,
            instance = me.parent;
            
        while(instance) {
            if(instance.uiType == uiType) {
                return instance;
            }
            instance = instance.parent;
        }
        
        return null;
    },

    /**
     * 销毁当前实例
     */
    dispose: function() {
        var me = this,
            element = me.element;
            
        baidu.lang.Class.prototype.dispose.call(me);
        baidu.dom.remove(element);
        me.dispatchEvent("dispose");
    }
};
