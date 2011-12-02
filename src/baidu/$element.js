/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All right reserved.
 *
 */

///import baidu.fn.methodize;
///import baidu.fn.multize;
///import baidu.array.$each;
///import baidu.dom.$query;
///import baidu.lang.toArray;
///import baidu.lang.isString;
///import baidu.lang.isFunction;

(function(){

    var m = function(selector, context) {
        if(!m._init) {
            wrapFn(m, chain.wrapFirstReturnValue, 1);
            wrapFn(m, chain.wrapAllReturnValue, 0);
            wrapFn(m, chain.notWrapReturnValue, -1);
            wrapFn(m, staticChain, 0, true);
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
            "dom": "remove addClass removeClass toggleClass setStyle setStyles setAttr setAttrs " + 
                   "empty hide show insertAfter insertBefore insertHTML toggle getParent children " + 
                   "next first last prev getAncestorByClass getAncestorBy getAncestorByTag removeStyle",
            "event": "on un once fire",
            "fx": "cube fade flip pop rotate scale slide start stop translate"
        },
        
        //不包装返回值
        notWrapReturnValue: {
            "dom": "getPosition getComputedStyle getStyle hasClass contains"
        }
    }, staticChain = {
		"browser": "android blackberry has3d ipad iphone isSupportTouch webkit webos",
		"array": "each indexOf lastIndexOf map reduce unique inArray",
		"json": "encode decode parse stringify",
		"lang": "inherts isArray isBoolean isDate isElement isFunction isNumber isString toArray",
		"object": "extend",
		"page": "hideBar getOrientation setNoScale setWebApp",
		"string": "trim format decodeHTML encodeHTML escapeReg",
		"url": "escapeSymbol getQueryValue jsonToQuery queryToJson",
		"ajax": "request from get post"
	};
    
    /**
	 * 包装函数的返回值，使其在能按照index指定的方式返回。<br/>如果其值为-1，直接返回返回值。 <br/>如果其值为0，返回"返回值"的包装结果。<br/> 如果其值大于0，返回第i个位置的参数的包装结果（从1开始计数）
	 * @param {function} func    需要包装的函数
	 * @param {function} wrapper 包装器
	 * @param {number} 包装第几个参数
	 * @return {function} 包装后的函数
	 */
    function wrapReturnValue(func, wrapper, mode) {
	    mode = mode | 0;
	    return function(){
	        var ret = func.apply(this, arguments); 
	
	        if(mode > 0){
	            return new wrapper(arguments[mode - 1]);
	        }
	        if(!mode){
	            return new wrapper(ret);
	        }
	        return ret;
	    }
	};
    
    /**
     * 包装静态方法，使其变成一个链条方法。先把静态方法multize化，让其支持接受数组参数，然后包装返回值，最后把静态方法methodize化，让其变成一个对象方法.
     */
    function wrapFn(wrapper, item, mode, attr){
        var proto = wrapper.prototype, func;
        for (var name in item) {
            baidu.each(item[name].split(' '), function(fn){
                if (baidu[name] && baidu[name][fn]) {
                	if(attr){
                		m[fn] = baidu[name][fn];
                	}else{
                		func = baidu.fn.multize(baidu[name][fn]);
	                    proto[fn] = proto[fn.replace(/^get[A-Z]/g, stripGet)] = 
	                        baidu.fn.methodize(wrapReturnValue(func, wrapper, mode), '_dom');
                	}
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
            baidu.array.each(this._dom, function(node, i){
                iterator.call(node, node, i);
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
    
    'T' in window || (window.T = m);
})();