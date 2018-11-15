

var socket = io;

// Emitter functions to Client
socket.emit('CombatBegins', function(player){
	for(let i =0; i < Player.ThreatMeter.length; i++){
		Combat(Player.ThreatMeter[i]);
	}
	
})
socket.emit('CombatEnds', function(){
	
})
socket.emit('CombatBegins',function(){})
socket.emit('CombatEnds',function(){})

window.addEventListener('keydown', function(player){ // player movement
	let Player = player;
	if(event.keyCode === '37'){// move west flags
		LftKeyDwn = true;
		RhtKeyDwn = false;
	}
	else if(event.keyCode === '65' ) {
		
		AKeyDwn = true;
		DKeyDwn = false;
	}
	else if(event.keyCode === '39') { // move east flags
		RhtKeyDwn = true;
		LftKeyDwn= false;
	}
	else if(event.keyCode === '68') {
		DKeyDwn = true;
		AKeyDwn = false;
	}
	else if(event.keyCode === '38') {// move north flags
		UpKeyDwn = true;
		DwnKeyDwn = false;
	}
	else if(event.keyCode === '87' ) {
		WKeyDwn = true;
		SKeyDwn = false;
	}
	else if(event.keyCode === '40') {// move south flags
		
	}
	else if(event.keyCode === '83') {
		SKeyDwn = true;
		WKeyDwn = false;
	}
	else{
	SKeyDwn = false;
	AKeyDwn = false;
	DKeyDwn = false;
	WKeyDwn = false;
	UpKeyDwn = false;
	LftKeyDwn = false;
	DwnKeyDwn = false;
	RhtKeyDwn = false;
	}
	while(RhtKeyDwn||DKeyDwn){
		Player.Map.XCORDS+= Player.Stats.MuvSpd;
	}
	while(LftKeyDwn||AKeyDwn){
		Player.Map.XCORDS-= Player.Stats.MuvSpd;
	}
	while(WKeyDwn||UpKeyDwn){
		Player.Map.YCORDS+= Player.Stats.MuvSpd;
	}
	while(SKeyDwn||DwnKeyDwn){
		Player.Map.YCORDS-= Player.Stats.MuvSpd;
	}
})
socket.emit('updatePos',function(){})
socket.emit('txt2chatSrv',function(){})
socket.emit(,function(){})
socket.emit(,function(){})
socket.emit(,function(){})
socket.emit(,function(){})
socket.emit(,function(){})
socket.emit(,function(){})
socket.emit(,function(){})
socket.emit(,function(){})
socket.emit(,function(){})
socket.emit(,function(){})
socket.emit(,function(){})


//Listener functions for Client
socket.on('CombatBegins', function(){
	
})
socket.on('CombatEnds', function(){
	
})
socket.on('updatePos', function(){
	
})
socket.on('txt2chatSrv', function(){})
socket.on('', function(){})
socket.on('', function(){})
socket.on('', function(){})
socket.on('', function(){})
socket.on('', function(){})
socket.on('', function(){})
socket.on('', function(){})
socket.on('', function(){})
socket.on('', function(){})
socket.on('', function(){})
socket.on('', function(){})
socket.on('', function(){})


//Emitter functions to Server
socket.emit('Hermes', function(){
	let packet = {
		PlayersPositions: [],
		MonsterPositions:[],
		LivingObjStates: [],
		
		
	}
	AtlasGenie.MessengerGenie.MovementStream(packet);
})