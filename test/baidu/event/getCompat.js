module("baidu.browser.getCompat");

test("getCompat", function() {
	var evt = baidu.event.getCompat(document, 'touchstart');
	('ontouchstart' in window) ? ok('touchstart' == evt.name, 'should be ' + evt.name) : ok(
			'mousedown' == evt.name, 'should be ' + evt.name);
});