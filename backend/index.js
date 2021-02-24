'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const Userroute = require('./routes/UserRoutes');
const Booksroute = require('./routes/BookRoutes');


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', Userroute.routes);
app.use('/books',Booksroute.routes);
const server = app.listen(config.port, () => console.log("App is listening on url http://localhost:" + config.port))

// Added Socket.io instansiation
const io = require('socket.io')(server);

//On connection
io.on('connection', (socket) => {
	console.log('New user connected')

    socket.username = "World-changer"

    socket.on('change_username', (data) => {
        socket.username = data.username
    })

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', {message : data.message, username : socket.username});
    })

    //listen on typing
    socket.on('typing', (data) => {
    	socket.broadcast.emit('typing', {username : socket.username})
    })
})

