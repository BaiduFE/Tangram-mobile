module('baidu.fx.cube');

test('cube left', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.cube(div, {
		direction: 'left',
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateY(0deg) translateZ(0px)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('cube right', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.cube(div, {
		direction: 'right',
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateY(0deg) translateZ(0px)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('cube up', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.cube(div, {
		direction: 'up',
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateX(0deg) translateZ(0px)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('cube down', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.cube(div, {
		direction: 'down',
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateX(0deg) translateZ(0px)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('cube left out', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.cube(div, {
		direction: 'left',
		out: true,
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateY(-90deg) translateZ(100px)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('cube right out', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.cube(div, {
		direction: 'right',
		out: true,
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateY(90deg) translateZ(100px)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('cube up out', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.cube(div, {
		direction: 'up',
		out: true,
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateX(90deg) translateZ(20px)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('cube down out', function(){
	expect(1);
	
	var div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '20px';
	document.body.appendChild(div);
	
	baidu.fx.cube(div, {
		direction: 'down',
		out: true,
		onfinish: function(){
			equal(div.style.webkitTransform, 'rotateX(-90deg) translateZ(20px)', 'check finish rotate');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});