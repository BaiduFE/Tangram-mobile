module('baidu.dom.ready');

test('页面载入完毕后调用该方法？', function() {
	stop();
	expect(1);
	baidu.dom.ready(function() {
		ok(true);
		start();
	});
});
