/*
* Tangram Mobile
* Copyright 2010 Baidu Inc. All rights reserved.
*
*/

///import baidu.page;

/**
 * 隐藏地址栏
 *
 * @param {Function}   fn 回调函数
 */
baidu.page.hideBar = function (fn) {
	document.body.style.height = Math.max(window.innerHeight, window.innerWidth) * 2 + 'px';
	setTimeout( function() {
		window.scrollTo(0, 1);
		setTimeout( function() {
			document.body.style.height = window.innerHeight + 'px';
			fn && fn();
		}, 200);
	}, 100);
};