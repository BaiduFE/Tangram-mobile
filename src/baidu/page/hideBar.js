/*
* Tangram Mobile
* Copyright 2010 Baidu Inc. All rights reserved.
*
*/

///import baidu.page;
///import baidu.dom.ready;

/**
 * 隐藏地址栏
 *
 * @param {Function}   fn 回调函数
 */
baidu.page.hideBar = function (fn) {
	function setBody() {//保证body有足够的高度
		var bigHeight = Math.max(window.innerHeight, window.innerWidth) * 2;
		baidu.dom.setStyle(document.body, 'height', bigHeight);
	}

	function hideFunc() {
		if(!window.pageYOffset) {
			setBody();
			setTimeout( function() {
				window.scrollTo(0, 1);
				setTimeout( function() {
					baidu.dom.setStyle(document.body, 'height', window.innerHeight);//还原body高度
					fn && fn();
				}, 200);
			}, 100);
		} else {
			fn && fn();
		}
	}

	baidu.dom.ready(hideFunc);
};