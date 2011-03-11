/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All right reserved.
 *
 * path: baidu/mobile/wrap.js
 * author: berg,walter
 * version: 1.0.0
 * date: 2011-03-10
 */
///import baidu.fn.methodize;
///import baidu.fn.multize;
///import baidu.array.each;
///import baidu.lang.toArray;


(function(){

    var m = function(selector, context){
        return new m.fn.init(selector, context);
    };
    
    var chain = {
        wrapFirstReturnValue: {},
        
        wrapAllReturnValue: {
            "dom": "addClass removeClass toggleClass setStyle setStyles setAttr setAttrs empty hide show insertHTML toggle getParent getWindow g q query",
            "event": "on un  once",
            "fx": "cube fade flip pop rotate scale slide start stop translate"
        },
        
        notWrapReturnValue: {
            "dom": "remove getText getAttr getPosition getStyle hasClass hasAttr"
        }
    };
    
    /**
     * 包装函数的返回值，使其在能按照index指定的方式返回.
     */
    function wrapReturnValue(func, wrapper, index){
        index = index | 0;
        return function(){
            var ret = func.apply(this, arguments);
            
            if (index > 0) {
                return new wrapper(arguments[index - 1]);
            }
            if (!index) {
                return new wrapper(ret);
            }
            
            return ret;
        }
    }
    
    /**
     * 包装静态方法，使其变成一个链条方法。先把静态方法multize化，让其支持接受数组参数，然后包装返回值，最后把静态方法methodize化，让其变成一个对象方法.
     */
    function wrapFn(wrapper, item, mode){
        var proto = wrapper.prototype, func;
        for (var name in item) {
            baidu.each(item[name].split(' '), function(fn){
                if (baidu['mobile'][name] && baidu['mobile'][name][fn]) {
                    func = baidu.fn.multize(baidu['mobile'][name][fn]);
                    proto[fn] = proto[fn.replace(/^get[A-Z]/g, stripGet)] = 
                        baidu.fn.methodize(wrapReturnValue(func, wrapper, mode), '_dom');
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
            var gNode = baidu.mobile.dom.g(selector);
            if (!gNode && baidu.mobile.dom.query) {
                gNode = baidu.mobile.dom.query(selector, context);
            }
            this._dom = baidu.lang.toArray(gNode);
        },
        
        each: function(iterator){
            baidu.array.each(this._dom, function(node){
                iterator.call(this);
            });
        }
    };
    
    m.fn.init.prototype = m.fn;
    
    wrapFn(m, chain.wrapFirstReturnValue, 1);
    wrapFn(m, chain.wrapAllReturnValue, 0);
    wrapFn(m, chain.notWrapReturnValue, -1);
    
    m.extend = m.fn.extend = function(obj){
        for(var k in obj){
            m.prototype[key] = wrapFn(obj[k], -1);
        }
        return this;
    };
    
    if (!window.m) {
        window.m = window.mobileTangram = m;
    }
})();


