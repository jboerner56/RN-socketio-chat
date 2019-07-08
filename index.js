const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const port = 3000;


// setup socket.io connection with a log to show it is working
io.on('connection', socket => {
    console.log('user connected')
});

// will show that the server is listnening on the given port.
server.listen(port, () => 
    console.log('listening on port ' + port)
);