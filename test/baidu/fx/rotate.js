module('baidu.fx.rotate');

test('rotate', function(){
	expect(2);
	
	var div = document.createElement('div');
	document.body.appendChild(div);
	
	baidu.fx.rotate(div, 180, 0, {
		onstart: function(){
			equal(div.style.webkitTransform, '', 'check start rotate');
		},
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotate(180deg)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});
