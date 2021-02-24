//Mention everything using  <script src="chat.js"></script>
// Whatever parameters are used as ID
//Need to replace the username with firebase
const firebase = require('../db');

$(function(){

    var username = firebase.auth().currentUser.displayName;

    var socket = io.connect('http://localhost:3000/chat')

    //buttons and inputs 
    var message = $("#message")
    var username = $("#username")
    var send_message = $("#send_message")
    var send_username = $("#send_username")
    var chatroom = $("#chatroom")
	var feedback = $("#feedback")

    //Give the message
    send_message.click(function(){
        socket.emit('new_message', {message : message.val()})
    });
    message.keypress( e => {
        let keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode == '13'){
            socket.emit('new_message', {message : message.val()})
        }
    })

    //Listen on new_message
    socket.on("new_message", (data) => {
        if (myUsername == data.username){
            chatroom.append('       <div class="card bg-primary rounded w-75 z-depth-0 float-right  mb-1 message-text"><div class="card-body p-2"><p class="card-text black-text">' + data.message + '</p></div></div>')
        } else {
            chatroom.append('       <div class="card bg-light rounded w-75 z-depth-0 mb-1 message-text"><div class="card-body p-2"><p class="card-text black-text">' + data.message + '</p></div></div>')
        }
    })

    //Emit typing
    message.bind("keypress", () => {
        socket.emit('typing')
    })

    //Listen on typing
    socket.on('typing', (data) => {
        feedback.html("<p><i>" + data.username + " is typing a message... " + "</i></p>")
        setTimeout(function(){ feedback.html("") }, 1000);

    })

    
})