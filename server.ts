/// <reference path="typings/tsd.d.ts" />

const PORT = 3000;

import express = require('express');

var app = express();
var http = require('http').Server(app);
var io: SocketIO.Server = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket: SocketIO.Socket) => {
	var id = socket.id;
	
	console.log(`${id} connected`);
	
	socket.on('command', (msg) => {
		// TODO
	});
	
	setTimeout(() => {
		socket.emit('notify', 'frotz');
	}, 5000);

	socket.on('disconnect', () => {
		console.log(`${id} disconnected`);
	});
});

http.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});