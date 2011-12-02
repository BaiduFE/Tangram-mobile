/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Base;
///import baidu.ui.Base.dispatchEvent;
///import baidu.dom.$g;
///import baidu.object.extend;

/**
 * 创建一个UI控件类
 *
 * @param {function} constructor ui控件构造器
 * @param {object} options 选项
 *
 * @return {object} ui控件
 */
baidu.ui.createUI = function(constructor, options) {
    options = options || {};
    var superClass = options.superClass || baidu.ui.Base,
        lastStep = superClass == baidu.ui.Base ? 1 : 0,
        i,
        n,
        ui = function(opt, _inherit){// 创建新类的真构造器函数
            var me = this;
            opt = opt || {};
            // 继承父类的构造器
            superClass.call(me, !lastStep ? opt : (opt.guid || ""), true);

            //扩展静态配置到this上
            baidu.object.extend(me, ui.options);
            //扩展当前options中的项到this上
            baidu.object.extend(me, opt);

            //setup属性和role
            me.element = baidu.dom.g(me.element);
            if(baidu.ui.getRoles)
            	me.roles = baidu.ui.getRoles(me.element);
            
            if(baidu.ui.getAttribute)
            	baidu.object.extend(me, baidu.ui.getAttribute(me.element));
                        
            //执行控件自己的构造器
            constructor.apply(me, arguments);

            //执行插件的构造器
            for (i=0, n=ui._addons.length; i<n; i++) {
                ui._addons[i](me);
            }
        },
        C = function(){};

    C.prototype = superClass.prototype;

    //继承父类的原型链
    var proto = ui.prototype = new C();

    /**
     * 扩展控件的prototype
     * 
     * @param {Object} json 要扩展进prototype的对象
     *
     * @return {Object} 扩展后的对象
     */
    ui.extend = function(json){
        for (i in json) {
            ui.prototype[i] = json[i];
        }
        return ui;  // 这个静态方法也返回类对象本身
    };

    //插件支持
    ui._addons = [];
    ui.register = function(f){
        if (typeof f == "function")
            ui._addons.push(f);
    };
    
    //静态配置支持
    ui.options = {};

    return ui;
};
