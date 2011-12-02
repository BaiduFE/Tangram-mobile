module('baidu.ui.getParent');

test('getParent', function() {
	stop();
	ua.importsrc('baidu.ui.Button', function() {
		var button = document.createElement('div');
		button.setAttribute('t-ui', 'button');

		var innerbutton = document.createElement('button');
		innerbutton.setAttribute('t-ui', 'button');

		button.appendChild(innerbutton);
		document.body.appendChild(button);

		var ui = new baidu.ui.Button({
			element: button
		});

		ui.setup();

		equal(ui.guid, baidu.ui.getParent(innerbutton).guid, 'check parent guid');
		te.dom.push(button);
		start();
	}, '', '');
});