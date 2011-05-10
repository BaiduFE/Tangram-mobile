/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*/

///import baidu.dom.setStyles;
///import baidu.fx.getTranslate;
///import baidu.browser.isSupportTouch;
///import baidu.ui.createUI;
///import baidu.event.turn;
///import baidu.event.getTouchInfo;

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
baidu.ui.Scroller = baidu.ui.createUI( function(options) {

}).extend({
    uiType: 'scroller',
    
    lockX: true,

    lockY: false,
    
    /**
     * 数据初始化
     * @private 
     */
    _setup: function() {
        var me = this;

        baidu.ui.Base._setup.call(me);
        me.wrapper = me.element.parentNode;
        me.x = 0;
        me.y = 0;
        me.update();
        me.dispatchEvent('setup');
    },
    
    /**
     * 初始化 添加事件
     * @private
     */
    _init: function() {
        var me = this,
            element = me.element;

        baidu.setStyles(element, {
            webkitTransitionProperty : '-webkit-transform',
            webkitTransitionTimingFunction : 'cubic-bezier(0,0,0.25,1)',
            webkitTransitionDuration : '0',
            webkitTransform : baidu.fx.getTranslate(0,0)
        });
        
        baidu.setStyle(me.wrapper, "overflow", "hidden");
        
        me.on(element, 'touchstart', '_onTouchStart');
        me.on(element, 'touchmove', '_onTouchMove');
        me.on(element, 'touchend', '_onTouchEnd');
        me.on(window, 'turn', '_onTurn');
        me.on(element, 'DOMSubtreeModified', '_onDOMModified');
        
        me.dispatchEvent("onload");
    },
    
    /**
     * 更新区域信息
     */
    update : function() {
        var me = this;

        me.wrapperWidth = me.wrapper.clientWidth;
        me.wrapperHeight = me.wrapper.clientHeight;
        me.elemWidth = me.element.offsetWidth;
        me.elemHeight = me.element.offsetHeight;

        me.minScrollX = me.wrapperWidth - me.elemWidth;
        me.minScrollY = me.wrapperHeight - me.elemHeight;
        me.lockScrollX = (me.minScrollX >= 0 && me.lockX);
        me.lockScrollY = (me.minScrollY >= 0 && me.lockY);
        
        me.dispatchEvent("update");
    },
    
    /**
     * Dom修改时更新区域信息
     * @private
     */
    _onDOMModified : function(e) {
        var me = this;
        if (me.element.offsetHeight != me.elemHeight) {
            me.refresh();
        }
    },
    
    /**
     * touchstart侦听器
     * @param {Object}  e  事件对象
     * @private
     */
    _onTouchStart : function(e) {
        var me = this,
            touch = e.targetTouches ? e.targetTouches[0] : e,
            matrix = new WebKitCSSMatrix(window.getComputedStyle(me.element).webkitTransform);

        //获取滚动元素的translateX translateY值，让它定位到这个位置
        me._setPosition(matrix.e, matrix.f);
        me._setTransitionTime(0);
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
    _onTouchMove : function(e) {
        //提高性能，在pc上mousemove时能立即返回减少处理
        if (!this.scrolling) {
            return;
        }

        var me = this,
            touch = baidu.event.getTouchInfo(e),
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
            me._setPosition(newX, newY);
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
    _onTouchEnd : function(e) {
        var me = this,
            newX = me.x,
            newY = me.y,
            deltaTime = e.timeStamp - me.startTime,
            duration = 0,
            momentum;
            
        if (!me.scrolling) {
            return;
        }

        me.scrolling = false;

        //动力加速
        if (me._getMomentum && me.momentum) {
            momentum = me._getMomentum(deltaTime);
            newX = momentum.x;
            newY = momentum.y;
            duration = momentum.duration;
        }

        //由于touchstart处preventDefault 单击时已无法触发click事件
        //所以在此处判断如果是单击则触发click事件
        if (!me.moved) {
            if (baidu.browser.isSupportTouch) {
                var touch = e.changedTouches[0],
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
            me._resetPosition();
        }
    },
    
    /**
     * 设置滚动区动画运行时间
     * @param {String} time  运行时间(需带单位)
     * @private
     */
    _setTransitionTime: function(time) {
        var me = this;
        time = time || '0'
        baidu.setStyle(me.element, "webkitTransitionDuration", time);
        me.dispatchEvent("settime", {
            time: time
        });
    },
    
    /**
     * 滚动到指定位置
     * @param {Number} destX  目标X坐标
     * @param {Number} destY  目标Y坐标
     * @param {String}   time     动画运行时间(需带单位)
     */
    scrollTo: function (destX, destY, time) {
        var me = this;
        me._setTransitionTime(time || '350ms');
        me._setPosition(destX, destY);
    },
    
    /**
     * 跳到指定位置
     * @param {Number} x  目标X坐标
     * @param {Number} y  目标Y坐标
     * @private
     */
    _setPosition : function(x, y) {
        var me = this;
        
        me.x = x;
        me.y = y;
        baidu.setStyle(me.element, 
                       "webkitTransform", 
                       baidu.fx.getTranslate(me.x, me.y));
        
         me.dispatchEvent("setposition");
    },
    
    /**
     * 重设位置，超出边界时滚动到边界
     * @private
     */
    _resetPosition: function () {
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
        
        me.dispatchEvent("resetposition");
    }
});