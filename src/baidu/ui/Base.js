/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 *
 * path: baidu/ui/base.js
 * author: berg,walter
 * version: 1.0.0
 * date: 2011/3/15
 */


baidu.ui.Base = {
    
     uiType : "",
     
    /**
     * 获得class，支持skin
     *
     * @param {string} optional key
     *
     * @return {string} className
     */
    getClass : function(key){
        var me = this,
            className = me.classPrefix,
            skinName = me.skin;
         if (key) {
             className += '-' + key;
             skinName += '-' + key;
         }
         if (me.skin) {
             className += ' ' + skinName;
         }
         return className;
    },

    /**
     * 销毁当前实例
     */
    dispose : function(){
        this.dispatchEvent("dispose");
        baidu.lang.Class.prototype.dispose.call(this);
    }
};
