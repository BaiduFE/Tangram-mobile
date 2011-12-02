module('baidu.fx.pop');

test('popIn', function(){
	expect(2);
	
	var div = document.createElement('div');
	document.body.appendChild(div);
	
	baidu.fx.pop(div, {
		out: false,
		onstart: function(){
			equal(div.style.opacity, 0, 'check start opacity');
		},
		onfinish: function(){
			equal(div.style.opacity, 1, 'check finish opacity');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('popOut', function(){
	expect(2);
	
	var div = document.createElement('div');
	document.body.appendChild(div);
	
	baidu.fx.pop(div, {
		out: true,
		onstart: function(){
			equal(div.style.opacity, 1, 'check start opacity');
		},
		onfinish: function(){
			equal(div.style.opacity, 0, 'check finish opacity');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});