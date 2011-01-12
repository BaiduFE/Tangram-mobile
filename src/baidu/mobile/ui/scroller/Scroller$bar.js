/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu.mobile/ui/scroller/Scroller$bar.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.object.extend;
///import baidu.lang.isFunction;

///import baidu.mobile.dom.setStyles;
///import baidu.mobile.browser.getTranslate;
///import baidu.mobile.ui.scroller.Scroller;

/**
 * Scroller滚动条
 *         参考自iScroll http://cubiq.org/iscroll
 * @param {Object}  scroller       Scroller实例
 * @private
 */
baidu.mobile.ui.scroller.createBar = function(scroller) {

    var options = baidu.object.extend({
        fade : true,
        shrink : true,
        color : "rgba(0,0,0,0.5)"
    }, scroller.options);
    
    var  inject = {
    
        refresh : function() {
            var scroller = this;
            
			function setScroller(direct) {
				var isHori = direct == "x",
					bar = isHori ? "scrollBarX" : "scrollBarY",
					wrapper = isHori ? "wrapperWidth" : "wrapperHeight",
					elem = isHori ? "elemWidth" : "elemHeight",
					lock = isHori ? "lockScrollX" : "lockScrollY";
					
				if (!scroller[lock]) {
					scroller[bar] = scroller[bar] 
						|| new baidu.mobile.ui.scroller.Bar(isHori ? 'hori' : 'vert', scroller.wrapper, options.fade, options.shrink, options.color);
					scroller[bar].init(scroller[wrapper], scroller[elem]);
				} else if (scroller[bar]) {
					scroller[bar] = scroller[bar].remove();
				}
			}
			setScroller("x");
			setScroller("y");
        },
        
        setPosition : function(x, y) {
            var scroller = this;
            scroller.scrollBarX &&
                scroller.scrollBarX.setPosition(scroller.x);
            scroller.scrollBarY &&
                scroller.scrollBarY.setPosition(scroller.y);
        },
        
        setTransitionTime: function(time) {
            var scroller = this;
            time = time || '0';
            
            
            scroller.scrollBarX &&
                baidu.mobile.setStyle(scroller.scrollBarX.bar, "webkitTransitionDuration", time);
            scroller.scrollBarY &&
                baidu.mobile.setStyle(scroller.scrollBarY.bar, "webkitTransitionDuration", time);
        },
        
        resetPosition: function() {
            var scroller = this;
            scroller.scrollBarX && scroller.scrollBarX.hide();
            scroller.scrollBarY && scroller.scrollBarY.hide();
        }
    };
    
    //让inject里的方法在Scroller同名方法后运行
    for (var p in scroller) {
        if (baidu.lang.isFunction(scroller[p])) {
            (function(){
                var oldName = p,
                    newName = "__" + p;
                
                scroller[newName]  = scroller[oldName];
                scroller[oldName] = function() {
                    var ret = scroller[newName].apply(scroller, arguments);
                    inject[oldName] && inject[oldName].apply(scroller, arguments);
                    return ret;
                }
            })()
        }
    }
};

baidu.mobile.ui.scroller.Bar = function(dir, wrapper, fade, shrink, color) {
    var me = this,
        doc = document;
        
    me.isHori = dir == 'hori';
    me.fade = fade;
    me.shrink = shrink;

    //滚动条
    me.bar = doc.createElement('div');
    me.bar.style.cssText = 'position:absolute;top:0;left:0;-webkit-transition-timing-function:cubic-bezier(0,0,0.25,1);pointer-events:none;-webkit-transition-duration:0;-webkit-transition-delay:0;-webkit-transition-property:-webkit-transform;z-index:10;background:' + color + ';' +
        '-webkit-transform:' + baidu.mobile.browser.getTranslate(0,0) + ';' +
        (me.isHori ? '-webkit-border-radius:3px 2px;min-width:6px;min-height:5px' : '-webkit-border-radius:2px 3px;min-width:5px;min-height:6px');
        
    //滚动条外壳
    me.wrapper = doc.createElement('div');
    me.wrapper.style.cssText = 'position:absolute;z-index:10;pointer-events:none;overflow:hidden;opacity:0;-webkit-transition-duration:' + (fade ? '300ms' : '0') + ';-webkit-transition-delay:0;-webkit-transition-property:opacity;' +
        (me.isHori ? 'bottom:2px;left:2px;right:7px;height:5px' : 'top:2px;right:2px;bottom:7px;width:5px;');

    me.wrapper.appendChild(me.bar);
    wrapper.appendChild(me.wrapper);
}

baidu.mobile.ui.scroller.Bar.prototype = {
    init: function (scroll, size) {
        var me = this,
            doc = document,
            pi = Math.PI,
            ctx;

        me.isHori ?
            me.maxSize = me.wrapper.offsetWidth:
            me.maxSize = me.wrapper.offsetHeight;
            
        me.size = Math.max(Math.round(me.maxSize * me.maxSize / size), 6);
        me.maxScroll = me.maxSize - me.size;
        me.toWrapperProp = me.maxScroll / (scroll - size);
        me.bar.style[me.isHori ? 'width' : 'height'] = me.size + 'px';
    },
    
    setPosition: function (pos) {
        var me = this;
        
        if (me.wrapper.style.opacity != '1') {
            me.show();
        }

        pos = Math.round(me.toWrapperProp * pos);

        if (pos < 0) {
            pos = me.shrink ? pos + pos*3 : 0;
            if (me.size + pos < 7) {
                pos = -me.size + 6;
            }
        } else if (pos > me.maxScroll) {
            pos = me.shrink ? pos + (pos-me.maxScroll)*3 : me.maxScroll;
            if (me.size + me.maxScroll - pos < 7) {
                pos = me.size + me.maxScroll - 6;
            }
        }

        pos = me.isHori ? 
            baidu.mobile.browser.getTranslate(pos, 0):
            baidu.mobile.browser.getTranslate(0, pos);

        me.bar.style.webkitTransform = pos;
    },

    show: function () {
        baidu.mobile.setStyles(this.wrapper, {
            webkitTransitionDelay : '0',
            opacity : 1
        });
    },

    hide: function () {
        baidu.mobile.setStyles(this.wrapper, {
            webkitTransitionDelay : '350ms',
            opacity : 0
        });
    },
    
    remove: function () {
        this.wrapper.parentNode.removeChild(this.wrapper);
        return null;
    }
};
