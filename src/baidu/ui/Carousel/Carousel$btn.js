/*
* Tangram
* Copyright 2011 Baidu Inc. All rights reserved.
*/
///import baidu.ui.Carousel;
///import baidu.event.tap;
///import baidu.ui.Base.addEventListener;
///import baidu.ui.Base.each;
///import baidu.ui.Base.on;

/**
 * 为滚动组件添加控制按钮插件
 */
baidu.ui.Carousel.register( function(me) {
	me.addEventListener('onload', function() {
		me.each('prev', function(item) {
			me.on(item.element, 'tap', function() {
				me.goToItem('right');
				me.dispatchEvent('prev');
			});
		});
		me.each('next', function(item) {
			me.on(item.element, 'tap', function() {
				me.goToItem('left');
				me.dispatchEvent('next');
			});
		});
	});
});