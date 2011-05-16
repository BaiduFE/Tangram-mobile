module('baidu.fx.start');

test('start', function(){
	expect(2);
	
	var div = document.createElement('div');
	document.body.appendChild(div);
	
	baidu.fx.start(div, {
		from: {
			width: '30px'
		},
		to: {
			width: '200px'
		},
		onstart: function(){
			ok(true, 'on start');
		},
		onfinish: function(){
			ok(true, 'on finish');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('from', function(){
	expect(1);
	
	var div = document.createElement('div');
	document.body.appendChild(div);
	
	baidu.fx.start(div, {
		from: {
			width: '30px'
		},
		to: {
			width: '200px'
		},
		onstart: function(){
			equal(div.style.width, '30px', 'check from width');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('to', function(){
	expect(1);
	
	var div = document.createElement('div');
	document.body.appendChild(div);
	
	baidu.fx.start(div, {
		from: {
			width: '30px'
		},
		to: {
			width: '200px'
		},
		onfinish: function(){
			equal(div.style.width, '200px', 'check to width');
			start();
		}
	});
	
	te.dom.push(div);
	stop();
});

test('delay', function(){
	expect(1);
	
	var div = document.createElement('div');
	document.body.appendChild(div);
	
	var flag = false;
	
	baidu.fx.start(div, {
		from: {
			width: '30px'
		},
		to: {
			width: '200px'
		},
		delay: 50,
		onstart: function(){
			flag = true;
		}
	});
	
	setTimeout(function(){
		equal(flag, false, 'check start');
		start();
	}, 30);
	
	te.dom.push(div);
	stop();
});

test('duration', function(){
	expect(1);
	
	var div = document.createElement('div');
	document.body.appendChild(div);
	
	var startTime;
	
	baidu.fx.start(div, {
		duration: 800,
		from: {
			width: '30px'
		},
		to: {
			width: '200px'
		},
		onstart: function(){
			startTime = new Date().getTime();
		},
		onfinish: function(){
			var time = new Date().getTime();
			ok(time - startTime >= 800, 'check duration');
			start();
		}
	});	
	
	te.dom.push(div);
	stop();
});