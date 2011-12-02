module("baidu.event.on");

test("test on", function(){
	var div = document.body.appendChild(document.createElement('div'));
	baidu.on(div, 'click', function(e){
		ok(true, '事件正确捕获');
	});
	ua.click(div);
	document.body.removeChild(div);
});

test("test case sensitive", function() {

	expect(1);
	stop();
	ua.importsrc('baidu.event.un', function() {
		var div = document.createElement('div');
		document.body.appendChild(div);
		baidu.on(div, 'DOMNodeInserted', function() {
			ok(true, '用DOMNodeInserted测试大小写敏感事件的on绑定');
			baidu.un(div, 'DOMNodeInserted');
		});
		div.appendChild(document.createElement('div'));

		start();
	}, 0, 'baidu.event.on');
});