/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.createUI;

/**
 * 
 */
baidu.ui.Listview = baidu.ui.createUI(function(){
    
}).extend({
    uiType: 'listview',
    
    _setup: function(){
      var me = this;
      baidu.ui.Base._setup.call(me);  
      me.dispatchEvent('setup');
    },
    
    _init: function(){
      var me = this;
      me.dispatchEvent('load');
    }
});
