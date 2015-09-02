/// <reference path="../typings/tsd.d.ts" />

var socket = io();

socket.on('notify', (msg) => {
	console.log(msg);
});

socket.emit('command', 'foo bar quux');