//app.js
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var serv = require('http').Server(app);
var mongo = require('mongodb');
 
app.get('/',function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));
 
serv.listen(2000);
console.log("Server started.");

 AtlasGenie = {
	 function upDateStates(players){
		 let Players = players;
		 for(let i = 0; i < Players.length; i++){
			 
		 }
	 }
	 Genierator = {},
 MessengerGenie = {
	 Delivery: function(Sender,Data,Receiver){
		 
		 
	 }
 }, // handles communication between genies and communications between genies and players
 JudgeGenie =  {
	 AddToDB: function(data){} // Takes some data and writes a new entry in the database
	 RmvFrmDB: function(data){}//removes an entry from a database
 }, // handles communication with database
 BattleGenie = {}, // handles combat data and logs
  LoginPool = {},// holds players logged into the game
 
 Maps: {
	ID000:{

TileData:"",// location of JSON tile data information

MobCounter: 1,// current amount of monsters on the map
SpwdMobs:[],// current monsters on the map w/ X,Y,Z Cords
Players:[],// current players on the map w/ X,Y,Z Cords
SpwdObjs:[],// current interactive objects on the map w/ X,Y,Z cords and status
SpwdRsNodes:[],// current resource nodes on the map w/ X,Y,Z Cords and type

	FarmGenie: {
	PlantCounter: 0,
	
		function Farming(player,uPlantID,TileData){
this.Plant = uPlantID;
this.Farmer = player;
this.TileInfo = TileData;
if(TileInfo.FarmPlot[0] == True && TileInfo.FarmPlot[1] == "empty"){//checks  if plot is farmable and if its empty
TileInfo.FarmPlot[1] = "planted";
if(TileInfo.FarmPlot[1] == "planted") {
TileInfo.FarmLayer.Img ="DirtStatePLANTED.png";
return;
}
else if(TileInfo.FarmPlot[1] == "seedling"){
TileInfo.FarmLayer.Img ="DirtStateSEEDLING.png";
return;
}
else if(TileInfo.FarmPlot[1] == "plantling"){
TileInfo.FarmLayer.Img ="DirtStatePLANTLING.png";
return TileInfo;
}
else if(TileInfo.FarmPlot[1] == "blossom"){
TileInfo.FarmLayer.Img ="DirtStateBLOSSOM.png";
TileInfo.PlantLayer.Img =Plant.Blossom;
return TileInfo;
}
else if(TileInfo.FarmPlot[1] == "harvest"){
TileInfo.FarmLayer.Img ="DirtStateHARVEST.png";
TileInfo.PlantLayer.Img =Plant.Harvest;
return TileInfo;
}
else {
	console.log("Errr..something went wrong chief, we gotta check the system again!");
	
}

} 


};

}
}
},














PlayerConnect = function(socket,player){
    this.Plyr = player;
	this.Socket = socket;
	
AtlasGenie.LoginPool.push(BondingGenie(Plyr.Name,Plyr,Plyr.ImgLoc,Socket));
}

function BondingGenie(Name,Img,socket){
	var Player = {
	this.socketID = socket; 
	this.ID = Math.random() * 3 * Math.random() * Math.random();
	this.Name = Name;
	this.MapData = MapData;
	this.Img = Img;
	this.Map = {
	this.ID = MapData[0];
	this.Name = MapData[1];
	this.XCords = [MapData[2][0],MapData[2][1]]; // [2][0]current X Coordinates [2][1] previous X Coordinates
	this.YCords = [MapData[3][0],MapData[3][1]]; // [3][0]current Y Coordinates [3][1] previous Y Coordinates
	this.ZCords = [MapData[4][0],MapData[4][1]]; // [4][0]current Z Coordinates [4][1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
},

this.Stats = {
this.STR = 5;
this.DEX = 5;
this.INT = 5;
this.CON = 5;

this.Level = 1;
this.MuvSpd = [8,8]; // Px per input
this.Stamina = [100,100]; // [0] current Stamina [1] Max Stamina
this.StamRegen = [2,1000], // [0]amount regenerated [1]speed of regeneration in ms
this.Health = [90,90]; // [0] current Health [1] Max Health
this.AttScope = [1,1];  // [0] current attack range    [1] Base attack range (32px/1tile) 
this.AttSpeed =[500,500];    //  [0] current Attack Speed  [1] Base Attack Speed
this.CastSpeed =[0,0];   //  [0] current Casting Speed [1] Base Casting Speed
this.PHitChance =[0,0];  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
this.PAttackMIN =[0,0]; // [0] current Min Physical Attack	[1] Base Min Physical Attack
this.PAttackMAX =[0,0]; // [0] current Max Physical Attack	[1] Base Max Physical Attack
this.PCrit =[0,0]; // [0] current Physical Crit Chance [1] Base Physical Crit Chance
this.PCritDMG =[0,0]; // [0] current Physical Crit Damage [1] Base Physical Crit Damage
this.MAttackMIN =[0,0]; // [0] current Min Magic Attack [1] Base Min Magic Attack
this.MAttackMAX =[0,0]; // [0] current Max Magic Attack [1] Base Max Magic Attack
this.MHitChance =[0,0]; // [0] current Spell Hit Chance [1] Base Spell Hit Chance
this.MCrit = [0,0];     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
this.MCritDMG =[0,0];   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
this.PArmor =[0,0];		// [0] current Physical Armor [1] Base Physical Armor
this.PBlock =[0,0];	// [0] current Physical Block Chance [1] Base Physical Block Chance
this.Dodge =[0,0]; // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
this.Parry =[0,0]; // [0] Current chance to parry attacks [1] Base chance to parry attacks
this.MWarding =[0,0]; // [0] current magic defense [1] Base Magic Defense
this.SpellBlock =[0,0]; // [0] Current Magical Block Chance [1] Base Magical Block Chance
this.Manabolt =0;
this.Replenish=0;
this.FlDef= 0;
this.FrDef= 0;
this.EleDef= 0;
this.PsnDef= 0;
this.GaleDef= 0;
this.TideDef= 0;
this.SolarDef= 0;
this.SolarfrDef= 0;
this.StoneDef= 0;
this.ShadeDef= 0;
this.ShadeflDef = 0;
this.PassiveEffects = []; // container for currently active passive effects
this.curExp =0;	// Current Experience Points
this.ExpTNL =30; // Experience points needed until next level up


},
this.ThreatMeter = []; //tracks threat
this.Status = []; // container for status ailments
this.Equipment = {
	this.MainHand = {
		this.Name;
		this.MinDmg;
		this.MaxDmg;
		this.Dura;
		this.DuraMax;
		this.Descpt;
		this.Img;
		this.Runeslots;
		};
		this.OffHand={
		this.Name=;
		this.MinDmg=;
		this.MaxDmg=;
		this.Dura=,
		this.DuraMax=,
		this.Descpt=,
		this.Img=
		};
	this.HeadArmor= {
		this.Name=,
		this.Dura=,
		this.DuraMax=,
		this.Descpt=,
		this.Img=
		};
	this.BodyArmor = {
		this.Name=,
		this.Dura=,
		this.DuraMax=,
		this.Descpt=,
		this.Img=
		};
	this.HandArmor= {
		this.Name=,
		this.Dura=,
		this.DuraMax=,
		this.Descpt=,
		this.Img=
		};
	this.LegArmor = {
		this.Name=,
		this.Dura=,
		this.DuraMax=,
		this.Descpt=,
		this.Img=
		};
	this.FootArmor= {
		this.Name=,
		this.Dura=,
		this.DuraMax=,
		this.Descpt=,
		this.Img=
		};
		
	this.Accessory1= {
		this.Name=,
		this.Dura=,
		this.DuraMax=,
		this.Descpt=,
		this.Img=
		};
	this.Accessory2= {
		this.Name=,
		this.Dura=,
		this.DuraMax=,
		this.Descpt=,
		this.Img=
		};
	this.Necklace= {
		this.Name=,
		this.Dura=,
		this.DuraMax=,
		this.Descpt=,
		this.Img=
		};
	this.CapeArmor= {
		this.Name=,
		this.Dura=,
		this.DuraMax=,
		this.Descpt=,
		this.Img=
		};
		
	this.EquipBonus = {
		
		OnHit:[], // submit in pairs [x][0] = Name | [x][1] = spellId | [x][2] = the amount of times to call the spellcast
		OnBlock:[], // submit in pairs [x][0] = Name | [x][1] = spellId
		OnDmgTaken:[], // submit in pairs [x][0] = Name | [x][1] = spellId
		OnDodge:[], // submit in pairs [x][0] = Name | [x][1] = spellId
		OnParry:[], // submit in pairs [x][0] = Name | [x][1] = spellId
		OnCast:[]// submit in pairs [x][0] = Name | [x][1] = spellId | [x][2] = the amount of times to call the spellcast
		
		
	}
		
		
	
};
this.SksNSpsList = []; // Skills and Spells List; a collection of spells and skills currently at the user's disposal
this.Cooldownz = [];
this.RuneTracker = [0,0];// [0] Maximum amount of slots [1] current amount of free slots and slot current slot position #
this.RuneTable = [0,0,0,0,0,0,0,0,0,0,0,0,0];
this.Timerz =[
["BLD",0,0,0], // [0]Bleeding Duration, stack, Spell ID
["PSN",0,0,0], // [1]Poison Duration, stack, Spell ID
["STN",0,0], // [2]Stun Duration, Spell ID
["ZzZ",0,0], // [3]Sleep Duration, Spell ID
["SLW",0,0], // [4]Slow Duration, Spell ID
["SLN",0,0], // [5]Silence Duration, Spell ID
["RTD",0,0],// [6]Root Duration, Spell ID
["IMM",0,0], // [7]Elemental Immunity Duration, Spell ID
["INV",0,0], // [8]Invulnerability Duration, Spell ID
["LRK",0,0],// [9]Invisibility/Lurking Duration, Spell ID
["ARB",0,0], // [10]Flight Duration, Spell ID
["DSH",0,0], // [11]Sprint Duration, Spell ID
["HST",0,0], // [12]Haste Duration, Spell ID
["ZNE",0,0] // [13]Zone Duration, Spell ID
];
	}
return Player;
};
 
PlayerDisconnect = function(socket){
    delete AtlasGenie.LoginPool[socket.id];
}
Player.update = function(){
    var pack = [];
    for(var i in Player.list){
        var player = Player.list[i];
        player.update();
        pack.push({
            x:player.x,
            y:player.y,
            number:player.number
        });    
    }
    return pack;
}
 
 /*
var Projectile = function(angle){
    var self = LivingObj();
    self.id = Math.random();
    self.spdX = Math.cos(angle/180*Math.PI) * 10;
    self.spdY = Math.sin(angle/180*Math.PI) * 10;
   
    self.timer = 0;
    self.toRemove = false;
    var super_update = self.update;
    self.update = function(){
        if(self.timer++ > 100)
            self.toRemove = true;
        super_update();
    }
    Projectile.list[self.id] = self;
    return self;
}
Projectile.list = {};
 
Projectile.update = function(){
    if(Math.random() < 0.1){
        Projectile(Math.random()*360);
    }
   
  /*  var pack = [];
    for(var i in Projectile.list){
        var projectile = Projectile.list[i];
        projectile.update();
        pack.push({
            x:projectile.x,
            y:projectile.y,
        });    
    }
    return pack;
}
 */


 }