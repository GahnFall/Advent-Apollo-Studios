function AI(host, type, hostbody){// Host = NPC or Monster | type = Basic , Guard, Patrol, Shop | data = mob or npc info
this.Host = host;
this.Type = type;
this.HostBody = hostbody;
function chase(target){// if true, make a specific move based on a certain variable towards a given target
// generate a route. Map the cords in tiles to the target's current location, check for obstacles i.e anything flagged with collision including players,npcs, and monsters, remove those tiles as options and recalculate the route update every 500ms
let Target = target;
	while
(Host.Map.XCORDS[0]+(Host.Stats.AttScope[0]*32)) < Target.Map.XCORDS[0] || 
(Host.Map.XCORDS[0]-(Host.Stats.AttScope[0]*32)) > Target.Map.XCORDS[0] ||
(Host.Map.YCORDS[0]+(Host.Stats.AttScope[0]*32)) < Target.Map.YCORDS[0] ||
(Host.Map.YCORDS[0]-(Host.Stats.AttScope[0]*32)) > Target.Map.YCORDS[0] || 
(Host.Map.ZCORDS[0]+(Host.Stats.AttScope[2]) != Target.Map.ZCORDS[0])){
	
	let Tcase1 = Host.Map.XCORDS[0] - Target.Map.XCORDS[0];
		if(Tcase1/32 === 0){
			let warping = Host.Map
			WarpTo(Host, [])
		} else Tcase1/-32 === 0 ){
			
		}
		
	}
};


function Scout(){};// a function that gathers tile data within a box formation 
//(5 points; 1st = user  >> calculate the starting point based on fixed set of tiles in distance from user >> mark the scan position i.e a=topLeft/ScanStartPoint and gather tile data from x amount of tiles on the X axis  and y amount of tiles on the Y axis. Both should have the same value in the case of a box formation


// create a list of Players,Monsters,Objects, and tile types with their x,y, and z cords to be added to a global array to be accessed

function Warp(){};// changes cords of user from point a to point b
function PatrolBOX(){};//follows a fixed set of cords in a box formation  ex:1=32px x10, y10  > x11, y10 > x12, y10
//                                                                                 x10, y9              V x12, y9
//                                                                                 x10, y8 < x11, y8  < V x12, y8
function PatrolLINE(){
	// follows a fixed set of cords in a line formation, traversing back and forth between two predefined points. e
	
};
function PatrolPATH(){};
function Roam(){};
if(Host == "NPC"){// NPC AIs and Behaviour types
if(Type == "Basic"){


}
else if(Type =="Guard"){ // Guard NPC AI has menu, chase, melee, spellcast, threat gen, scout, and warp.}

}
else if(Type == "Patrol"){ // Patrol NPC AI has menu, chase, melee, spellcast, threat gen, scout, warp, Patrol-BOX, Patrol-Line, and Patrol-PATH.
	
}
else if(Type == "Shop"){ // Shop NPC AI has menu, chase, melee, spellcast, threat gen, and warp.
	
}
else{
console.log("Invalid AI Type");
return;
}
}
else if(Host == "Monster"){// Monster AIs and behaviour types
if(Type == "Basic"){ // Basic Monster AI has chase, melee, spellcast, threat gen, scout, and roam.

}

else if(Type =="Guard"){// Guard Monster AI has chase, melee, spellcast, threat gen, scout, and warp.
}
else if (Type == "Patrol"){ // Patrol Monster AI has chase, melee, spellcast, threat gen, scout, warp, Patrol-BOX, Patrol-Line, and Patrol-PATH.

}
else{
console.log("Invalid AI Type");
return;
}
}
else {
	console.log("Err.. something went wrong boss, Host input is invalid");
}
};