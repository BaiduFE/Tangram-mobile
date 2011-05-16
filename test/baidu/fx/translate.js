module('baidu.fx.translate');

test('translate', function(){
	expect(1);
	
	var div = document.createElement('div');
	document.body.appendChild(div);
	
	baidu.fx.translate(div, ['100px', 0], [0, 0], {
		onfinish: function(){
			equal(div.style.webkitTransform, baidu.fx.getTranslate(100, 0), 'check finish webkitTransform');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});