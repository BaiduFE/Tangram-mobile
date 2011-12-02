/*
* Tangram Mobile
* Copyright 2010 Baidu Inc. All rights reserved.
*/

///import baidu.dom.setStyles;
///import baidu.fx.getTranslate;
///import baidu.ui.Scroller;

baidu.ui.Scroller.Bar = baidu.ui.createUI( function(options) {

}).extend({
    layout: 'horizontal',
    
    _setup: function(){
        
    },
    
    _init: function() {
        var me = this;
            
        me.isHori = layout == 'horizontal';

        //滚动条
        me.bar = doc.createElement('div');
        me.bar.style.cssText = 'position:absolute;top:0;left:0;-webkit-transition-timing-function:cubic-bezier(0,0,0.25,1);pointer-events:none;-webkit-transition-duration:0;-webkit-transition-delay:0;-webkit-transition-property:-webkit-transform;z-index:10;background:' + color + ';' +
        '-webkit-transform:' + baidu.fx.getTranslate(0,0) + ';' +
        (me.isHori ? '-webkit-border-radius:3px 2px;min-width:6px;min-height:5px' : '-webkit-border-radius:2px 3px;min-width:5px;min-height:6px');

        //滚动条外壳
        me.wrapper = doc.createElement('div');
        me.wrapper.style.cssText = 'position:absolute;z-index:10;pointer-events:none;overflow:hidden;opacity:0;-webkit-transition-duration:' + (fade ? '300ms' : '0') + ';-webkit-transition-delay:0;-webkit-transition-property:opacity;' +
        (me.isHori ? 'bottom:2px;left:2px;right:7px;height:5px' : 'top:2px;right:2px;bottom:7px;width:5px;');

        me.wrapper.appendChild(me.bar);
        document.body.appendChild(me.wrapper);

        me.maxSize = me.isHori ? me.wrapper.offsetWidth : me.wrapper.offsetHeight;
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
        baidu.fx.getTranslate(pos, 0):
        baidu.fx.getTranslate(0, pos);

        me.bar.style.webkitTransform = pos;
    },
    
    show: function () {
        baidu.setStyles(this.wrapper, {
            webkitTransitionDelay : '0',
            opacity : 1
        });
    },
    
    hide: function () {
        baidu.setStyles(this.wrapper, {
            webkitTransitionDelay : '350ms',
            opacity : 0
        });
    },
    
    remove: function () {
        this.wrapper.parentNode.removeChild(this.wrapper);
        return null;
    }
});


/**
 * Scroller滚动条
 *         参考自iScroll http://cubiq.org/iscroll
 */

baidu.ui.Scroller.extend({
    fade : true,

    shrink : true,

    color : "rgba(0,0,0,0.5)",

    _setScroller: function(direct) {
        var isHori = direct == "x",
            bar = isHori ? "scrollBarX" : "scrollBarY",
            wrapper = isHori ? "wrapperWidth" : "wrapperHeight",
            elem = isHori ? "elemWidth" : "elemHeight",
            lock = isHori ? "lockScrollX" : "lockScrollY";

        if (!scroller[lock]) {
            scroller[bar] = scroller[bar]
            || new baidu.ui.Scroller.Bar(isHori ? 'hori' : 'vert', scroller.wrapper, options.fade, options.shrink, options.color);
            scroller[bar].init(scroller[wrapper], scroller[elem]);
        } else if (scroller[bar]) {
            scroller[bar] = scroller[bar].remove();
        }
    }
});

baidu.ui.Scroller.register( function(me) {
    me.addEventListener('onupdate', function() {
        me._setScroller("x");
        me._setScroller("y");
    });
    
    me.addEventListener('onsetposition', function() {
            me.scrollBarX && me.scrollBarX.setPosition(me.x);
            me.scrollBarY && me.scrollBarY.setPosition(me.y);
    });
    
    me.addEventListener('onsettime', function(data) {
        me.scrollBarX &&
        baidu.setStyle(me.scrollBarX.bar, "webkitTransitionDuration", data.time);
        me.scrollBarY &&
        baidu.setStyle(me.scrollBarY.bar, "webkitTransitionDuration", data.time);
    });
    
    me.addEventListener('onresetposition', function() {
        me.scrollBarX && me.scrollBarX.hide();
        me.scrollBarY && me.scrollBarY.hide();
    });
});