/// <reference path="../typings/tsd.d.ts" />

var messages = ['foo', 'bar', 'quux'];

class App implements MithrilModule {
	controller() {
		return {
			messages: m.prop(messages)
		}
	}
	
	view(ctrl) {
		var items = ctrl.messages().map(x => {
			return m('li', x);
		});
		
		return m('ul', items);
	}
}

var socket = io();

socket.on('notify', (msg) => {
	m.startComputation();
	messages.push(msg);
	m.endComputation();
});

m.module(document.getElementById('container'), new App());