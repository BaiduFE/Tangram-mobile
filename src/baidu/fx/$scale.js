/*
* Tangram Mobile
* Copyright 2010 Baidu Inc. All rights reserved.
*
*/

///import baidu.object.extend;
///import baidu.fx.$start;

/**
 * 缩放动画
 *     注：目前无法与transform其他属性translate rotate等做动画叠加
 * @param {HTMLelem} elem  目标元素
 * @param {array} to      目标缩放尺度[x,y,z] (可以只传[x] [x,y])
 * @param {array} from  初始缩放尺度[x,y,z] (可选)
 * @param {Object} options 选项 参照baidu.fx.start
 * @return {DOMElement} 目标元素
 */
baidu.fx.scale = function(elem, to, from, options) {
	function getScale(x, y) {
		return 'scale(' + (x || 1) + ", " + (y || 1) + ')';
	}

	options = baidu.object.extend(options || {}, {
		from :
		from ? {
			webkitTransform : getScale(from[0], from[1])
		}: {},
		to : {
			webkitTransform :  getScale(to[0], to[1])
		}
	});
	baidu.fx.start(elem, options);
	return elem;
};