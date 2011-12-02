/*
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */
///import baidu.ui.Carousel;
///import baidu.dom.$addClass;
///import baidu.dom.$removeClass;
///import baidu.ui.Base.addEventListener;
///import baidu.ui.Base.getClass;

/**
 * 为滚动组件添加导航条插件
 */
baidu.ui.Carousel.register(function(me) {
	if(!me.roles.navigator){
		return;
	}
	
	var nav = me.roles.navigator[0].element.children;
	
	me.addEventListener('onload', function(){		
		baidu.dom.addClass(nav[me.activeIndex], me.getClass('nav-focus'));
	});
	
    me.addEventListener('onswipe', function() {
		baidu.dom.removeClass(nav[me.lastActiveIndex], me.getClass('nav-focus'));		
		baidu.dom.addClass(nav[me.activeIndex], me.getClass('nav-focus'));
    });
});