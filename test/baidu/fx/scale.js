module('baidu.fx.scale');

test('scale', function() {
	var scaleOpen = 'scale' + (baidu.browser.has3d ? '3d(' : '('),
		scaleClose = ')',
		getScale = function(x, y, z) {
			x = x || 1;
			y = y || x;
			z = z || 1;
			return baidu.browser.has3d ?
			scaleOpen + x + ", " + y + ", " + z + scaleClose :
			scaleOpen + x + ", " + y + scaleClose;
		}
	
	expect(2);

	var div = document.createElement('div');
	document.body.appendChild(div);

	baidu.fx.scale(div, [2, 2], [1, 1], {
		onstart: function() {
			equal(div.style.webkitTransform, getScale(1,1,1), 'check start scale');
		},
		onfinish: function() {
			equal(div.style.webkitTransform, getScale(2,2,1), 'check finish scale');
			start();
		}
	});

	te.dom.push(div);
	stop();
});