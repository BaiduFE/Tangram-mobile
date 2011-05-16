module('baidu.fx.flip');

test('flip left', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.flip(div, {
		direction: 'left',
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateY(0deg) scale(1)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('flip right', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.flip(div, {
		direction: 'right',
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateY(0deg) scale(1)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('flip up', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.flip(div, {
		direction: 'up',
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateX(0deg) scale(1)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('flip down', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.flip(div, {
		direction: 'down',
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateX(0deg) scale(1)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('flip left out', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.flip(div, {
		direction: 'left',
		out: true,
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateY(-180deg) scale(0.8)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('flip right out', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.flip(div, {
		direction: 'right',
		out: true,
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateY(180deg) scale(0.8)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('flip up out', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.flip(div, {
		direction: 'up',
		out: true,
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateX(-180deg) scale(0.8)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('flip down out', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.flip(div, {
		direction: 'down',
		out: true,
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateX(180deg) scale(0.8)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});