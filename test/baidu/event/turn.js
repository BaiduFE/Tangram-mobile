module("baidu.event.turn");

test("turn", function() {
	baidu.event.on(window, 'turn', function(){
		ok('true', 'on turn');
		start();
	});
	
	baidu.event.fireCustomEvent(window, 'turn');
	stop();
});