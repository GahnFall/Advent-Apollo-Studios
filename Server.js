

// SERVER
//Emitter functions

//Listener functions
io.on('connection', function(socket){
  socket.emit('request', /* */); // emit an event to the socket
  io.emit('broadcast', /* */); // emit an event to all connected sockets
  socket.on('reply', function(){ /* */ }); // listen to the event
  socket.on('runeXpire',  function(){}){
	Player.RuneTracker[1]+=1;
}
});

