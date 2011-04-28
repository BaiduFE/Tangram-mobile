/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All right reserved.
 *
 */
///import baidu.fn.methodize;
///import baidu.fn.multize;
///import baidu.fn.wrapReturnValue;
///import baidu.array.each;
///import baidu.dom.query;
///import baidu.dom.ready;
///import baidu.lang.toArray;
///import baidu.lang.isString;
///import baidu.lang.isFunction;

(function(){

    var m = function(selector, context) {
        if(!m._init) {
            wrapFn(m, chain.wrapFirstReturnValue, 1);
            wrapFn(m, chain.wrapAllReturnValue, 0);
            wrapFn(m, chain.notWrapReturnValue, -1);
            m._init = true;
        }
        return new m.fn.init(selector, context);
    };
    
    //链式方法列表
    var chain = {
        //包装第一个返回值
        wrapFirstReturnValue: {},
        
        //包装所有返回值
        wrapAllReturnValue: {
            "dom": "addClass removeClass toggleClass setStyle setStyles setAttr setAttrs setPosition " + 
                   "empty hide show insertAfter insertBefore insertHTML toggle getParent q children " + 
                   "next first last prev getAncestorByClass getAncestorBy getAncestorByTag",
            "event": "on un once tap dbtap pinch swipe taphold turn fire customScroll",
            "fx": "cube fade flip pop rotate scale slide start stop translate",
            "ui": "button"
        },
        
        //不包装返回值
        notWrapReturnValue: {
            "dom": "remove getText getAttr getPosition getStyle hasClass hasAttr"
        }
    };
    
    /**
     * 包装静态方法，使其变成一个链条方法。先把静态方法multize化，让其支持接受数组参数，然后包装返回值，最后把静态方法methodize化，让其变成一个对象方法.
     */
    function wrapFn(wrapper, item, mode){
        var proto = wrapper.prototype, func;
        for (var name in item) {
            baidu.each(item[name].split(' '), function(fn){
                if (baidu[name] && baidu[name][fn]) {
                    func = baidu.fn.multize(baidu[name][fn]);
                    proto[fn] = proto[fn.replace(/^get[A-Z]/g, stripGet)] = 
                        baidu.fn.methodize(baidu.fn.wrapReturnValue(func, wrapper, mode), '_dom');
                }
            });
        }
    }
    
    /**
     * 把get去掉,链里面的方法可以不以get开头调用
     */
    function stripGet(match){
        return match.charAt(3).toLowerCase();
    }
    
    m.fn = m.prototype = {
        init: function(selector, context){
            if(baidu.lang.isString(selector)) {
                this._dom = baidu.dom.query(selector);
            } else if(baidu.lang.isFunction(selector)) {
                baidu.dom.ready(selector);
            } else {
                this._dom = baidu.lang.toArray(selector);
            }
        },
        
        each: function(iterator){
            baidu.array.each(this._dom, function(node){
                iterator.call(this);
            });
        }
    };
    
    m.fn.init.prototype = m.fn;
    
    m.extend = m.fn.extend = function(obj){
        for(var k in obj){
            m.prototype[key] = wrapFn(obj[k], -1);
        }
        return this;
    };
    
    baidu.m = m;
})();


