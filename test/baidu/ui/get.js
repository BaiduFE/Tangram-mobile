module('baidu.ui.get');

test('get', function() {
	stop();
	ua.importsrc('baidu.ui.Button', function() {
		var button = document.createElement('button');
		button.setAttribute('t-ui', 'button');
		document.body.appendChild(button);

		var ui = new baidu.ui.Button({
			element: button
		});

		ui.setup();

		equal(ui.guid, baidu.ui.get(button).guid, 'check button guid');
		te.dom.push(button);
		start();
	}, '', '');
});