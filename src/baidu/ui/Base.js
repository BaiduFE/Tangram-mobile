/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui;
///import baidu.dom.$remove;
///import baidu.lang.guid;
///import baidu.lang._instances;

baidu.ui.Base = function(guid) {
    this.guid = guid || baidu.lang.guid();
    window[baidu.guid]._instances[this.guid] = this;
};

baidu.ui.Base.prototype = {
    /**
     * 渲染UI
     */
    setup: function() {
        var me = this;
        me._create();
        me._setup();
        me._init();
    },
    
    /**
     * 设置样式和guid
     */
    _create: function(){
        var me = this;
        me.element.setAttribute('t-guid', me.guid);
    },
    
    /**
     * 读取页面配属项
     */
    _setup: function() {
		
    },
    
   /**
     * 渲染页面元素
     * @private
     */
    _init: function() {

    },

    /**
     * 销毁当前实例
     */
    dispose: function() {
        var me = this;
        delete window[baidu.guid]._instances[me.guid];
        baidu.dom.remove(me.element);
        me.dispatchEvent("dispose");
    }
};
