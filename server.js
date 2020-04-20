const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const server = app.listen(3000);


var socket = require("socket.io")
var socketServer = socket(server);

socketServer.on("connect", function (socket) {
    console.log(socket.id);
    
    socket.on("message", function (message) {
        console.log(message.type);
        socket.broadcast.emit("notice", message);

    });
});


