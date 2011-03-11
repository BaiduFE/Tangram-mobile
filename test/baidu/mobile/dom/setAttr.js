module('baidu.mobile.dom.setAttr')

test('基础测试',
		function() {
			expect(2);
			var div = document.createElement('div');
			baidu.mobile.dom.setAttr(div, 'title', "div_getAttri");
			equal(div.getAttribute("rel"), null, "div gets no rel attribute");
			equal(div.getAttribute("title"), "div_getAttri",
					"div gets title attribute");
		});

