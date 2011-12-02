/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.createUI;
///import baidu.event.drag;
///import baidu.event.tap;
///import baidu.dom.$setStyle;
///import baidu.fx.$getTranslate;
///import baidu.ui.Base.on;
///import baidu.ui.$getRoles;

/**
 * 拖动条控件，可用作音乐播放进度。
 * @class
 * @param      {String|HTMLElement}     element       存放滑块控件的元素，按钮会渲染到该元素内。
 * @param      {Object}                 [options]    选项layout
 * @config     {Number}                 value        记录滑块的当前进度值
 * @config     {Number}                 layout       滑块的布局[水平：horizontal,垂直：vertical]
 * @config     {Number}                 min          进度条最左边代表的值，默认值取0
 * @config     {Number}                 max          进度条最右边代表的值，默认值取100
 */
baidu.ui.Slider = baidu.ui.createUI( function(options) {

}).extend({
    uiType: 'slider',
    
    layout: 'horizontal',
    
    value: 0,
    
    min: 0,
    
    max: 100,
    
    /**
     * 位置换算
     */
    _axisHash: {
        horizontal: {
            touch: 'pageX',
            previous: 'previousX',
            clientSize: 'clientWidth',
            offsetSize: 'offsetWidth',
            delta: 0
        },
        vertical: {
            touch: 'pageY',
            previous: 'previousY',
            clientSize: 'clientHeight',
            offsetSize: 'offsetHeight',
            delta: 0
        }
    },
    
    /**
     * 数据初始化
     * @private 
     */
    _setup: function(){
      var me = this;
      me._axis = me._axisHash[me.layout];
      me._size = me.element[me._axis.clientSize];
      me._thumb = me.roles.thumb[0].element;
      me._thumbSize = me._thumb[me._axis.offsetSize];
      me.dispatchEvent('setup');
    },
    
    /**
     * 初始化列表视图
     * @private
     */
    _init: function(){
      var me = this;
      me._setThumbPosition();
      me.on(me._thumb, 'drag', '_onSlide');
      me.dispatchEvent('load');
    },
    
    /**
     * 设置滑块初始位置
     */
    _setThumbPosition: function(){
        var me = this,
            axis = me._axis;
            
        me._adjustValue();
        axis.delta += me._parseValue(me.value, 'pix');
        me._previous = axis.delta + me._thumbSize;
        me._slide();
    },
    
    /**
     * 滑动事件
     * @param {object} e event对象
     * @private
     */
    _onSlide: function(e){
        var me = this,
            axis = me._axis;
       
       axis.delta += e[axis.touch] - e[axis.previous];    
       me._slide();
       me._previous = e[axis.touch];
       me.dispatchEvent('slide');
    },
    
    /**
     * 触摸事件
     * @param {object} e event对象
     * @private
     */
    _onTap: function(e){
       var me = this,
           axis = me._axis;
       
       axis.delta += e[axis.touch] - me._previous;    
       me._slide();
       me._previous = e[axis.touch];
       me.dispatchEvent('tap');
    },
    
    /**
     * 滑动滑块
     * @private
     */
    _slide: function(){
       var me = this,
           axisHash = me._axisHash,
           translate = baidu.fx.getTranslate(axisHash.horizontal.delta, 
                                             axisHash.vertical.delta);
       
       me._adjustDelta();
       me._calcValue(); 
        
       baidu.dom.setStyle(me._thumb, 
                          '-webkit-transform', 
                          translate);
    },
    
    /**
     * 校准delta值，保证它在合理范围内
     * @private
     */
    _adjustDelta : function(){
        var me = this,
            axis = me._axis;
            
        axis.delta = Math.max(Math.min(axis.delta, me._size), 0);
    },
    
    /**
     * 校准value值，保证它在合理范围内
     * @private
     */
    _adjustValue: function(){
        var me = this;
        me.value = Math.max(Math.min(me.value, me.max), me.min);
    },

    /**
     * 将位置值转换为value
     * @private
     */
    _calcValue : function(){
        var me = this;
        
        me.value = me._parseValue(me._axis.delta, 'value');  
        me._adjustValue();
    },
    
    /**
     * 将刻度转换为像素或是将像素转换为刻度
     * @param {Number} val 刻度值或是像素
     * @param {Object} type 'pix':刻度转换为像素, 'value':像素转换为刻度
     */
    _parseValue: function(val, type){
        var me = this,
            len = me._size;
            
        if(type == 'value'){
            val = (me.max - me.min) / len * val + me.min;
        }else{//to pix
            val = Math.round(len /(me.max - me.min) * (val - me.min));
        }
        return val;
    },

    /**
     * 获得当前的value
     * @public
     * @return {Number} value     当前滑块位置的值
     */
    getValue : function(){
        return this.value;
    }
});