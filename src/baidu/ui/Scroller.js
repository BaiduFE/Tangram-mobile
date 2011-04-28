/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/ui/Scroller/Scroller.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */
 
///import baidu.dom.g;
///import baidu.object.extend;

///import baidu.dom.setStyles;
///import baidu.event.getCompat
///import baidu.browser.getTranslate;
///import baidu.browser.isSupportTouch;

///import baidu.ui;
///import baidu.ui.Scroller.create;


/**
 * Scroller类
 *         参考自iScroll http://cubiq.org/iscroll
 * @param {String|HTMLElment} 目标元素
 * @param {Object} options 选项
 *     {
            momentum: true,            //是否启用动力加速
            scrollbar: true,             //是否显示滚动条
            desktopCompat: true,   //是否应用到桌面浏览器
            fadeScrollbar : true,     //是否渐隐渐现滚动条
            shrinkScrollbar : true,   //到边界时是否收缩滚动条
            scrollbarColor : "rgba(0,0,0,0.5)"   //滚动条颜色
        }
 * @return baidu.ui.Scroller实例
 */        
baidu.ui.Scroller = function(elem, options) {
    var me = this;
    
    elem = baidu.dom.g(elem);
    me.options = baidu.object.extend({
        momentum: true,
        scrollbar: true,
        desktopCompat: false,
        lockX: true,
        lockY: false
    }, options || {});
    
    if (!baidu.browser.isSupportTouch && 
        !me.options.desktopCompat) {
        return;
    }
    
    me.elem = elem;
    me.wrapper = elem.parentNode;
    
    baidu.setStyles(elem, {
        webkitTransitionProperty : '-webkit-transform',
        webkitTransitionTimingFunction : 'cubic-bezier(0,0,0.25,1)',
        webkitTransitionDuration : '0',
        webkitTransform : baidu.browser.getTranslate(0,0)
    });
    
    baidu.setStyle(me.wrapper, "overflow", "hidden");
    me.init();
    
    return me;
};

baidu.ui.Scroller.prototype = {
    x : 0,
    y : 0,
    
    /**
     * 初始化 添加事件
     * @private
     */
    init : function() {
        var me = this;
        
        me.handler = {
            touchstart : function(e){
                me.touchStart(e);
            },
            touchmove : function(e){
                me.touchMove(e);
            },
            touchend : function(e){
                me.touchEnd(e);
            },
            orientationchange : function(e){
                me.refresh(e);
            },
            resize : function(e){
                me.refresh();
            },
            DOMSubtreeModified : function(e) {
                me.onDOMModified(e);
            }
        }
        
        baidu.object.each(me.handler, function(evtFunc, evtName) {
            evtName = baidu.event.getCompat(evtName);
            me.elem.addEventListener(evtName, evtFunc, false);
        });
        
        if (baidu.ui.Scroller.createBar && me.options.scrollbar) {
            baidu.ui.Scroller.createBar(me);
        }
        me.refresh();
    },
    
    /**
     * 更新区域信息
     */
    refresh : function() {
        var me = this;
        
        me.wrapperWidth = me.wrapper.clientWidth;
        me.wrapperHeight = me.wrapper.clientHeight;
        me.elemWidth = me.elem.offsetWidth;
        me.elemHeight = me.elem.offsetHeight;
        
        me.minScrollX = me.wrapperWidth - me.elemWidth;
        me.minScrollY = me.wrapperHeight - me.elemHeight;
        me.lockScrollX = (me.minScrollX >= 0 && me.options.lockX);
        me.lockScrollY = (me.minScrollY >= 0 && me.options.lockY);
    },
    
    /**
     * Dom修改时更新区域信息
     * @private
     */
    onDOMModified : function(e) {
        var me = this;
        if (me.elem.offsetHeight != me.elemHeight) {
            me.refresh();
        }
    },
    
    /**
     * touchstart侦听器
     * @param {Object}  e  事件对象
     * @private
     */
    touchStart : function(e) {
        var me = this,
            touch = e.targetTouches ? e.targetTouches[0] : e,
            matrix = new WebKitCSSMatrix(window.getComputedStyle(me.elem).webkitTransform);

        //获取滚动元素的translateX translateY值，让它定位到这个位置
        me.setPosition(matrix.e, matrix.f);
        me.setTransitionTime(0);
        e.preventDefault();
        
        me.startTime = e.timeStamp;
        
        me.pageX = touch.pageX;
        me.pageY = touch.pageY;
                
        me.startX = me.x;
        me.startY = me.y;
        
        me.distX = 0;
        me.distY = 0;
        
        me.scrolling = true;
        me.moved = false;
    },
    
    /**
     * touchmove侦听器
     * @param {Object}  e  事件对象
     * @private
     */
    touchMove : function(e) {
        //提高性能，在pc上mousemove时能立即返回减少处理
        if (!this.scrolling) {
            return;
        }
        
        var me = this,
            touch = e.targetTouches ? e.targetTouches[0] : e,
            deltaX = me.lockScrollX ? 0 : (touch.pageX - me.pageX),
            deltaY = me.lockScrollY ? 0 : (touch.pageY - me.pageY),
            newX = me.x + deltaX,
            newY = me.y + deltaY;
        
        if (newX >= 0 || newX < me.minScrollX) {
            newX = Math.round(me.x + deltaX / 3); 
        }
        if (newY >= 0 || newY < me.minScrollY) { 
            newY = Math.round(me.y + deltaY / 3);
        }
        
        me.pageX = touch.pageX;
        me.pageY = touch.pageY;
        me.moved = true;
        e.preventDefault();
        e.stopPropagation();
        
        if (me.distX + me.distY > 5) {
            me.setPosition(newX, newY);
        } else {
            me.distX += Math.abs(deltaX);
            me.distY += Math.abs(deltaY);
        }
        
    },
    
    /**
     * touchend侦听器
     * @param {Object}  e  事件对象
     * @private
     */
    touchEnd : function(e) {
        if (!this.scrolling) {
            return;
        }
        
        var me = this,
            newX = me.x,
            newY = me.y,
            deltaTime = e.timeStamp - me.startTime,
            duration = 0;
            
        me.scrolling = false;
                
        //动力加速
        if (baidu.ui.Scroller._getMomentum && me.options.momentum) {
            var o = baidu.ui.Scroller._getMomentum(me, deltaTime);
            newX = o.x;
            newY = o.y;
            duration = o.duration;
        }
        
        //由于touchstart处preventDefault 单击时已无法触发click事件
        //所以在此处判断如果是单击则触发click事件
        if (!me.moved) {
            if (baidu.browser.isSupportTouch) {
                var touch = e.changedTouches[0]
                    target = touch.target;
                while (target.nodeType != 1) {
                    target = target.parentNode;
                }
                var ev = document.createEvent('MouseEvents');
                ev.initMouseEvent('click', true, true, e.view, 1,
                    touch.screenX, touch.screenY, touch.clientX, touch.clientY,
                    e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
                    0, null);
                ev._fake = true;
                target.dispatchEvent(ev);
            }
        }
        
        if (newX != me.x || newY != me.y) {
            me.scrollTo(newX, newY, duration);
        } else {
            me.resetPosition();
        }
    },
    
    /**
     * 设置滚动区动画运行时间
     * @param {String} time  运行时间(需带单位)
     * @private
     */
    setTransitionTime: function(time) {
        baidu.setStyle(this.elem, "webkitTransitionDuration", time || '0');
    },
    
    /**
     * 滚动到指定位置
     * @param {Number} destX  目标X坐标
     * @param {Number} destY  目标Y坐标
     * @param {String}   time     动画运行时间(需带单位)
     */
    scrollTo: function (destX, destY, time) {
        var me = this;
        me.setTransitionTime(time || '350ms');
        me.setPosition(destX, destY);
    },
    
    /**
     * 跳到指定位置
     * @param {Number} destX  目标X坐标
     * @param {Number} destY  目标Y坐标
     * @param {String}   time     动画运行时间(需带单位)
     * @private
     */
    setPosition : function(x, y) {
        var me = this;
        me.x = x;
        me.y = y;
        baidu.setStyle(me.elem, "webkitTransform", baidu.browser.getTranslate(me.x, me.y));
    },
    
    /**
     * 重设位置，超出边界时滚动到边界
     * @private
     */
    resetPosition: function () {
        var me = this,
            resetX = me.x,
            resetY = me.y;
        
        if (me.x >= 0) {
            resetX = 0;
        } else if (me.x < me.minScrollX) {
            resetX = me.minScrollX;
        }

        if (me.y >= 0 || me.minScrollY > 0) {
            resetY = 0;
        } else if (me.y < me.minScrollY) {
            resetY = me.minScrollY;
        }
        
        if (resetX != me.x || resetY != me.y) {
            me.scrollTo(resetX, resetY);
        }
    }
    
};
