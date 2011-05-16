module('baidu.fx.slide');

test('slide left', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.slide(div, {
		direction: 'left',
		onfinish: function(){
			equal(div.style.webkitTransform, baidu.fx.getTranslate(0, 0), 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('slide right', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.slide(div, {
		direction: 'right',
		onfinish: function(){
			equal(div.style.webkitTransform, baidu.fx.getTranslate(0, 0), 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('slide up', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.slide(div, {
		direction: 'up',
		onfinish: function(){
			equal(div.style.webkitTransform, baidu.fx.getTranslate(0, 0), 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('slide down', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.slide(div, {
		direction: 'down',
		onfinish: function(){
			equal(div.style.webkitTransform, baidu.fx.getTranslate(0, 0), 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('slide left out', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.slide(div, {
		direction: 'left',
		out: true,
		onfinish: function(){
			equal(div.style.webkitTransform, baidu.fx.getTranslate(-100, 0), 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('slide right out', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.slide(div, {
		direction: 'right',
		out: true,
		onfinish: function(){
			equal(div.style.webkitTransform, baidu.fx.getTranslate(100, 0), 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('slide up out', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.slide(div, {
		direction: 'up',
		out: true,
		onfinish: function(){
			equal(div.style.webkitTransform, baidu.fx.getTranslate(0, -20), 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('slide down out', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.slide(div, {
		direction: 'down',
		out: true,
		onfinish: function(){
			equal(div.style.webkitTransform, baidu.fx.getTranslate(0, 20), 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});