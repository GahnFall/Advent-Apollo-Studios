function mxHpF(Entity) {
	this.Level = Entity.Stats.Level;
	this.CON = Entity.Stats.CON;
	Entity.Stats.MaxHp = (Level*40+CON*10);
	
	}; // max hp formula

function PCombatant (ID,Name,MapData,Img){
	
	let.PCombatant = {
	
	this.ID = ID;
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
STR = 5;
DEX = 5;
INT = 5;
CON = 5;

Level = 1;
MuvSpd = [8,8]; // Px per input
Stamina = [100,100]; // [0] current Stamina [1] Max Stamina
StamRegen = [2,1000], // [0]amount regenerated [1]speed of regeneration in ms
MaxHp = 90;
Health = [90,MaxHp]; // [0] current Health [1] Max Health
AttScope = [1,1];  // [0] current attack range    [1] Base attack range (32px/1tile) 
AttSpeed =[1500,1500];    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed =[0,0];   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance =[0,0];  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN =[0,0]; // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX =[0,0]; // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit =[0,0]; // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG =[0,0]; // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN =[0,0]; // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX =[0,0]; // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance =[0,0]; // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit = [0,0];     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG =[0,0];   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor =[0,0];		// [0] current Physical Armor [1] Base Physical Armor
PBlock =[0,0];	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge =[0,0]; // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry =[0,0]; // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding =[0,0]; // [0] current magic defense [1] Base Magic Defense
SpellBlock =[0,0]; // [0] Current Magical Block Chance [1] Base Magical Block Chance
Manabolt =0;
Replenish=0;
FlDef= 0;
FrDef= 0;
EleDef= 0;
PsnDef= 0;
GaleDef= 0;
TideDef= 0;
SolarDef= 0;
SolarfrDef= 0;
StoneDef= 0;
ShadeDef= 0;
ShadeflDef = 0;
PassiveEffects = []; // container for currently active passive effects
curExp =0;	// Current Experience Points
ExpTNL =30; // Experience points needed until next level up
ThreatMeter = []; //tracks threat

},
this.Status = []; // container for status ailments
this.Equipment = {
	MainHand: {
		Name,
		MinDmg,
		MaxDmg,
		Dura,
		DuraMax,
		Descpt,
		Img,
		Runeslots,
		Element
		},
	OffHand: {
		Name,
		MinDmg,
		MaxDmg,
		Dura,
		DuraMax,
		Descpt,
		Img
		},
	HeadArmor:{
		Name,
		Dura,
		DuraMax,
		Descpt,
		Img
		},
	BodyArmor: {
		Name,
		Dura,
		DuraMax,
		Descpt,
		Img
		},
	HandArmor: {
		Name,
		Dura,
		DuraMax,
		Descpt,
		Img
		},
	LegArmor: {
		Name,
		Dura,
		DuraMax,
		Descpt,
		Img
		},
	FootArmor: {
		Name,
		Dura,
		DuraMax,
		Descpt,
		Img
		},
		
	Accessory1: {
		Name,
		Dura,
		DuraMax,
		Descpt,
		Img
		},
	Accessory2: {
		Name,
		Dura,
		DuraMax,
		Descpt,
		Img
		},
	Necklace: {
		Name,
		Dura,
		DuraMax,
		Descpt,
		Img
		},
	CapeArmor: {
		Name,
		Dura,
		DuraMax,
		Descpt,
		Img
		},
		
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
this.Cooldownz = []; //
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
	
	Database.Players.push(PCombatant); // creates a new entry in the database with newly created character data appended
	return;
};

function EquipArmor(uiID, player){
	this.equipping = uiID;
	this.Actor = player;
	
	if (equipping.StatLvlReq[0] > Actor.Stats.STR ||
equipping.StatLvlReq[1] > Actor.Stats.DEX ||
equipping.StatLvlReq[2] > Actor.Stats.INT ||
equipping.StatLvlReq[3] > Actor.Stats.CON){
	console.log("Player does not meet the requirements to equip!");
} 
else {
	Actor.Equipment.(equipping.iType).Name = equipping.iName;
	Actor.Equipment.(equipping.iType).Dura = equipping.iDura;
	Actor.Equipment.(equipping.iType).iDuraMax = equipping.iDuraMax;
	Actor.Equipment.(equipping.iType).Img = equipping.iImgLocation;
	Actor.Equipment.(equipping.iType).Descpt = equipping.iDescpt;
	
	Actor.Stats.STR+=(equipping.Stat1[0] + equipping.Stat2[0]);
	Actor.Stats.DEX+=(equipping.Stat1[1] + equipping.Stat2[1]);
	Actor.Stats.INT+=(equipping.Stat1[2] + equipping.Stat2[2]);
	Actor.Stats.CON+=(equipping.Stat1[3] + equipping.Stat2[3]);
	Actor.Stats.PCrit+=(equipping.AdvStat1[0]);
	Actor.Stats.Dodge+=(equipping.AdvStat1[1]);
	Actor.Stats.PHitChance+=(AdvStat1[2]);
	Actor.Stats.Block+=(equipping.AdvStat1[3]);
	Actor.Stats.MCrit+=(equipping.AdvStat2[0]);
	Actor.Stats.Parry+=(equipping.AdvStat2[1]);
	Actor.Stats.MHitChance+=(equipping.AdvStat2[2]);
	Actor.Stats.SpellBlock+=(equipping.AdvStat2[3]);
	Actor.Stats.MDef +=(equipping.iResiStat[0]);
	Actor.Stats.FlDef +=(equipping.iResiStat[1]);
	Actor.Stats.FrDef +=(equipping.iResiStat[2]);
	Actor.Stats.EleDef +=(equipping.iResiStat[3]);
	Actor.Stats.PsnDef +=(equipping.iResiStat[4]);
	Actor.Stats.GaleDef +=(equipping.iResiStat[5]);
	Actor.Stats.TideDef +=(equipping.iResiStat[6]);
	Actor.Stats.SolarDef +=(equipping.iResiStat[7]);
	Actor.Stats.SolarfrDef +=(equipping.iResiStat[8]);
	Actor.Stats.StoneDef +=(equipping.iResiStat[9]);
	Actor.Stats.ShadeDef +=(equipping.iResiStat[10]);
	Actor.Stats.ShadeflDef +=(equipping.iResiStat[11]);
	
	console.log(equipping.iName+" was equipped.");
	
	return;
	}
	},
	};
	
	
function RemoveArmor(uiID, player){
	this.equipping = uiID;
	this.Actor = player;

	Actor.Equipment.(equipping.iType).Name = "";
	Actor.Equipment.(equipping.iType).Dura = "";
	Actor.Equipment.(equipping.iType).iDuraMax = "";
	Actor.Equipment.(equipping.iType).Img = "";
	Actor.Equipment.(equipping.iType).Descpt = "";
	
	Actor.Stats.STR-=(equipping.Stat1[0] + equipping.Stat2[0]);
	Actor.Stats.DEX-=(equipping.Stat1[1] + equipping.Stat2[1]);
	Actor.Stats.INT-=(equipping.Stat1[2] + equipping.Stat2[2]);
	Actor.Stats.CON-=(equipping.Stat1[3] + equipping.Stat2[3]);
	Actor.Stats.PCrit-=(equipping.AdvStat1[0]);
	Actor.Stats.Dodge-=(equipping.AdvStat1[1]);
	Actor.Stats.PHitChance-=(AdvStat1[2]);
	Actor.Stats.Block-=(equipping.AdvStat1[3]);
	Actor.Stats.MCrit-=(equipping.AdvStat2[0]);
	Actor.Stats.Parry-=(equipping.AdvStat2[1]);
	Actor.Stats.MHitChance-=(equipping.AdvStat2[2]);
	Actor.Stats.SpellBlock-=(equipping.AdvStat2[3]);
	console.log(equipping.iName+" was unequipped.");
	return;
	
};	
	
function EquipMainHandItem(uiID, player){
	this.equipping = uiID;
	this.Actor = player;
	
	if (equipping.StatLvlReq[0] > Actor.Stats.STR ||
equipping.StatLvlReq[1] > Actor.Stats.DEX ||
equipping.StatLvlReq[2] > Actor.Stats.INT ||
equipping.StatLvlReq[3] > Actor.Stats.CON){
	console.log("Player does not meet the stat requirements to equip!");
return;
	
	}
else if(equipping.SkLvlReq > Player.SksNSpsList.(equipping.iType)[0]) {
	console.log("Player does not meet skill level requirements to equip.");
	return;
	}
else {
	Actor.Equipment.MainHand.Name = equipping.iName;
	Actor.Equipment.MainHand.Dura = equipping.iDura;
	Actor.Equipment.MainHand.DuraMax = equipping.iDuraMax;
	Actor.Equipment.MainHand.Img = equipping.iImgLocation;
	Actor.Equipment.MainHand.Descpt = equipping.iDescpt;
	Actor.Equipment.MainHand.MinDmg = equipping.iMinDmg;
	Actor.Equipment.MainHand.MaxDmg = equipping.iMaxDmg;
	Actor.Equipment.MainHand.Runeslots = equipping.Runeslots;
	Actor.RuneTracker[0] = equipping.Runeslots;
	Actor.Stats.STR+=(equipping.iStat1[0] + equipping.iStat2[0]);
	Actor.Stats.DEX+=(equipping.iStat1[1] + equipping.iStat2[1]);
	Actor.Stats.INT+=(equipping.iStat1[2] + equipping.iStat2[2]);
	Actor.Stats.CON+=(equipping.iStat1[3] + equipping.iStat2[3]);
	Actor.Stats.PCrit[0]+=(equipping.iAdvStat1[0]);
	Actor.Stats.PCritDMG[0]+=(equipping.iAdvStat1[1]);
	Actor.Stats.PHitChance[0]+=(equipping.iAdvStat[2]);
	Actor.Stats.Block[0]+=(equipping.iAdvStat1[3]);
	Actor.Stats.MCrit[0]+=(equipping.iAdvStat2[0]);
	Actor.Stats.MCritDMG[0]+=(equipping.iAdvStat2[1]);
	Actor.Stats.MHitChance[0]+=(equipping.iAdvStat2[2]);
	Actor.Stats.SpellBlock[0]+=(equipping.iAdvStat2[3]);
	Actor.Stats.Manabolt += (equipping.iAdvStat1[4] + equipping.iAdvStat2[4]);
	Actor.Stats.Replenish +=(equipping.iAdvStat2[5] + equipping.iAdvStat1[5]);
	Actor.Stats.AttSpeed[0] = equipping.iBaseAttSpd;
	Actor.Stats.AttScope[0] += (equipping.AttScope)-1;
	if(equipping.iSpecStat[1] != 0 && equipping.iSpecStat[0] != 0 && equipping.iSpecStat[0] === 5){ Actor.Equipment.EquipBonus.OnHit.push([equipping.iSpecStat[1].Name, equipping.iSpecStat[2]]); console.log(equipping.iName+" was equipped."); return;}

	else if(equipping.iSpecStat[1] != 0 && equipping.iSpecStat[0] != 0 && equipping.iSpecStat[0] === 6){Actor.Equipment.EquipBonus.OnHit.push([equipping.iSpecStat[1].Name, equipping.iSpecStat[2], equipping.iSpecStat[4]);
console.log(equipping.iName+" was equipped."); return;} 
	else if(equipping.iSpecStat[1] != 0 && equipping.iSpecStat[0] != 0 && equipping.iSpecStat[0] === 7){Actor.Equipment.EquipBonus.OnHit.push([equipping.iSpecStat[1].Name, equipping.iSpecStat[2], equipping.iSpecStat[4]); console.log(equipping.iName+" was equipped."); return;} 

else {
	console.log(equipping.iName+" was equipped.");
	return;
}

	};
	}	
	}
 function RemoveMainHandItem(uiID, player){
	this.equipping = uiID;
	this.Actor = player;
	
	Actor.Equipment.MainHand.Name = "Empty";
	Actor.Equipment.MainHand.Dura = "Empty";
	Actor.Equipment.MainHand.DuraMax = "Empty";
	Actor.Equipment.MainHand.Img = "Empty";
	Actor.Equipment.MainHand.Descpt = "Empty";
	Actor.Equipment.MainHand.MinDmg = "Empty";
	Actor.Equipment.MainHand.MaxDmg = "Empty";
	Actor.Equipment.MainHand.Runeslots = [];
	
	Actor.Stats.STR-=(equipping.iStat1[0] + equipping.iStat2[0]);
	Actor.Stats.DEX-=(equipping.iStat1[1] + equipping.iStat2[1]);
	Actor.Stats.INT-=(equipping.iStat1[2] + equipping.iStat2[2]);
	Actor.Stats.CON-=(equipping.iStat1[3] + equipping.iStat2[3]);
	Actor.Stats.PCrit[0]-=(equipping.iAdvStat1[0]);
	Actor.Stats.PCritDMG[0]-=(equipping.iAdvStat1[1]);
	Actor.Stats.PHitChance[0]-=(equipping.iAdvStat[2]);
	Actor.Stats.Block[0]-=(equipping.iAdvStat1[3]);
	Actor.Stats.MCrit[0]-=(equipping.iAdvStat2[0]);
	Actor.Stats.MCritDMG[0]-=(equipping.iAdvStat2[1]);
	Actor.Stats.MHitChance[0]-=(equipping.iAdvStat2[2]);
	Actor.Stats.SpellBlock[0]-=(equipping.iAdvStat2[3]);
	Actor.Stats.Manabolt -= (equipping.iAdvStat1[4] + equipping.iAdvStat2[4]);
	Actor.Stats.Replenish -=(equipping.iAdvStat2[5] + equipping.iAdvStat1[5]);
	Actor.Stats.AttSpeed[0] -= equipping.iBaseAttSpd;
	Actor.Stats.AttScope[0] -=(equipping.AttScope)-1;
	if(equipping.iSpecStat[1] != 0 && equipping.iSpecStat[0] != 0 && equipping.iSpecStat[0] === 5){
		for(let i=0; i > Actor.Stats.Equipment.EquipBonus.OnHit.length; i++){
		
		if(Actor.Stats.Equipment.EquipBonus.OnHit[i][0] === equipping.iSpecStat[1].Name){		
Actor.Equipment.EquipBonus.OnHit.Slice(i, 1); // removes the onhit effect when you take the item off
console.log(equipping.iName+" was removed.");
		} else {
			console.log("No match!");
		}
}
	}
else {
	console.log(equipping.iName+" was removed.");
}
};
	
function AddRune(player,Type){
	this.Element = Type;
	this.Player = player;
	// check for a free rune slot
	if(Player.RuneTracker[0] == 0 || Player.RuneTracker[1] === 0){
		console.log("No runeslot available.");
	}
	else {
		// append runedata to
		var adRune = switch (Llement){
			case "Normal": Player.RuneTable[0] +=1; Player.RuneTracker[1] -=1;
			break;
			case "Flame": Player.RuneTable[1] +=1; Player.RuneTracker[1] -=1;
			break;
			case "Frost": Player.RuneTable[2] +=1; Player.RuneTracker[1] -=1;
			break;
			case "Forest": Player.RuneTable[3] +=1; Player.RuneTracker[1] -=1;
			break;
			case "Electric": Player.RuneTable[4] +=1;Player.RuneTracker[1] -=1;
			break;
			case "Poison": Player.RuneTable[5] +=1; Player.RuneTracker[1] -=1;
			break;
			case "Gale": Player.RuneTable[6] +=1; Player.RuneTracker[1] -=1;
			break;
			case "Tide": Player.RuneTable[7] +=1; Player.RuneTracker[1] -=1;
			break;
			case "Solar": Player.RuneTable[8] +=1; Player.RuneTracker[1] -=1;
			break;
			case "Solarfrost": Player.RuneTable[9] +=1; Player.RuneTracker[1] -=1;
			break;
			case "Stone": Player.RuneTable[10] +=1; Player.RuneTracker[1] -=1;
			break;
			case "Shade": Player.RuneTable[11] +=1; Player.RuneTracker[1] -=1;
			break;
			case "Shadeflame":Player.RuneTable[12] +=1; Player.RuneTracker[1] -=1;
			break;
			default: console.log("Error, invalid rune data.");
			break;
		}
adRune(Element);
		}

}

function AddItem(uiID, qty, container){};
}
function StaminaRegen(actor){
	this.Actor = actor;
	if(Actor.Stats.Stamina[0] < Actor.Stats.Stamina[1]) { //checks if stam is full
	Actor.Stats.Stamina[0] += ((Actor.Stats.StamRegen[1]+(Actor.Stats.CON*.1));
	} else {
		console.log("Stamina is full!");
		return;
	}
};
function HpRegen(actor){
	this.Actor = actor;
	if(Actor.Stats.Health[0] < Actor.Stats.Health[1]) { //checks if hp is full
	Actor.Stats.Health[0] += ((Actor.Stats.Health[1]/100)+(Actor.Stats.CON*.2);
	} else {
		console.log("Health is full!");
		return;
	}
};

function Monster(uMID){
	this.MonsterData = uMID;
	this.Name = MonsterData.Name;
	this.Img = MonsterData.Img;
	this.Map = {
this.ID = MonsterData.MapData.ID;
this.Name = MonsterData.MapData.Name;
this.XCords = MonsterData.MapData.XCORDS; // [2][0]current X Coordinates [2][1] previous X Coordinates
this.YCords = MonsterData.MapData.YCORDS; // [3][0]current Y Coordinates [3][1] previous Y Coordinates
this.ZCords = MonsterData.MapData.ZCORDS; // [4][0]current Z Coordinates [4][1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
	};
 this.Stats = {
this.Health = MonsterData.Stats.Health; // [0] current Health [1] Max Health
this.Stamina =MonsterData.Stamina; // [0] current Stamina [1] Max Stamina
this.StamRegen = [MonsterData.Stats.StamRegen[0],MonsterData.Stats.StamRegen[1]], // [0]amount regenerated [1]speed of regeneration in ms
this.AttSpeed =MonsterData.Stats.AttSpeed;    //  [0] current Attack Speed in Ms  [1] Base Attack Speed in Ms
this.CastSpeed =MonsterData.Stats.CastSpeed;   //  [0] current Casting Speed in Ms [1] Base Casting Speed in Ms
this.PHitChance =MonsterData.Stats.PHitChance;  // [0] current Physical Hit Chance [1] Base Hit Chance
this.PAttackMIN =MonsterData.Stats.PAttackMIN; // [0] current Min Physical Attack	[1] Base Min Physical Attack
this.PAttackMAX =MonsterData.Stats.PAttackMAX; // [0] current Max Physical Attack	[1] Base Max Physical Attack
this.AttScope = MonsterData.Stats.AttScope;


this.MAttackMIN =MonsterData.Stats.MAttackMIN; // [0] current Min Magic Attack [1] Base Min Magic Attack
this.MAttackMAX =MonsterData.Stats.MAttackMAX; // [0] current Max Magic Attack [1] Base Max Magic Attack
this.MHitChance =MonsterData.Stats.MHitChance; // [0] current Spell Hit Chance [1] Base Spell Hit Chance

this.PArmor=MonsterData.Stats.PArmor;		// [0] current Physical Armor [1] Base Physical Armor
this.PBlock=MonsterData.Stats.PBlock;	// [0] current Physical Block Chance [1] Base Physical Block Chance
this.Dodge=MonsterData.Stats.Dodge; // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
this.Parry=MonsterData.Stats.Parry; // [0] Current chance to parry attacks [1] Base chance to parry attacks
this.MWarding=MonsterData.Stats.MWarding; // [0] current magic defense [1] Base Magic Defense
this.PassiveEffects=[]; // container for currently active passive effects
this.SpellBlock=MonsterData.Stats.SpellBlock; // [0] Current Magical Block Chance [1] Base Magical Block Chance
this.FlDef= MonsterData.Stats.FlDef;
this.FrDef= MonsterData.Stats.FrDef;
this.EleDef= MonsterData.Stats.EleDef;
this.PsnDef= MonsterData.Stats.PsnDef;
this.GaleDef= MonsterData.Stats.GaleDef;
this.TideDef= MonsterData.Stats.TideDef;
this.SolarDef= MonsterData.Stats.SolarDef;
this.SolarfrDef= MonsterData.Stats.SolarfrDef;
this.StoneDef= MonsterData.Stats.StoneDef;
this.ShadeDef= MonsterData.Stats.ShadeDef;
this.ShadeflDef = MonsterData.Stats.ShadeflDef;
	}
this.Status = []; // container for status ailments
this.SksNSpsList = MonsterData.SksNSpsList; // Skills and Spells List; a collection of spells and skills currently at the user's disposal
this.LootTable=MonsterData.LootTable;
this.Cooldownz = [];
this.Timerz =[
[BLD,0,0,0], // [0]Bleeding Duration, stack, Spell ID
[PSN,0,0,0], // [1]Poison Duration, stack, Spell ID
[STN,0,0], // [2]Stun Duration, Spell ID
[ZzZ,0,0], // [3]Sleep Duration, Spell ID
[SLW,0,0], // [4]Slow Duration, Spell ID
[SLN,0,0], // [5]Silence Duration, Spell ID
[RTD,0,0],// [6]Root Duration, Spell ID
[IMM,0,0], // [7]Elemental Immunity Duration, Spell ID
[INV,0,0], // [8]Invulnerability Duration, Spell ID
[LRK,0,0],// [9]Invisibility/Lurking Duration, Spell ID
[ARB,0,0], // [10]Flight Duration, Spell ID
[DSH,0,0], // [11]Sprint Duration, Spell ID
[HST,0,0], // [12]Haste Duration, Spell ID
[ZNE,0,0] // [13]Zone Duration, Spell ID
];
};
var Inventory = {
	this.SlotCounter = 0;
this.Spaces = [
[
["empty",0,"","Slot1"],["empty",0,"","Slot2"],["empty",0,"","Slot3"],["empty",0,"","Slot4"],["empty",0,"","Slot5"],
["empty",0,"","Slot6"],["empty",0,"","Slot7"],["empty",0,"","Slot8"],["empty",0,"","Slot9"],["empty",0,"","Slot10"], 
["empty",0,"","Slot11"],["empty",0,"","Slot12"],["empty",0,"","Slot13"],["empty",0,"","Slot14"],["empty",0,"","Slot15"],
["empty",0,"","Slot16"],["empty",0,"","Slot17"],["empty",0,"","Slot18"],["empty",0,"","Slot19"],["empty",0,"","Slot20"],
["empty",0,"","Slot21"],["empty",0,"","Slot22"],["empty",0,"","Slot23"],["empty",0,"","Slot24"],["empty",0,"","Slot25"],
["empty",0,"","Slot26"],["empty",0,"","Slot27"],["empty",0,"","Slot28"],["empty",0,"","Slot29"],["empty",0,"","Slot30"]]
];

 this.AddItem = function(container,qty,uiID){
	 this.Container = container;
	 this.iID = Container.Inventory.SlotCounter;
	 this.Item = uiID;
	 this.Quantity = qty;
	 
	 Container.Inventory.Spaces[0][iID][0] = Item.iName;
	 Container.Inventory.Spaces[0][iID][1] = Quantity;
	 Container.Inventory.Spaces[0][iID][2] = Item.iImgLocation;
	 Container.Inventory.SlotCounter++;
 }
this.ShowImgs = function (slots){
	var Slots = slots;
	for(var i=0; i < Container.Inventory.Spaces[0].length; i++){// loops through inventory spaces changing their innerHTML to item Images
			x = Container.Inventory.Spaces[0][i][3];
	var BP = document.getElementById(x).innerHTML= "<img src="+Inventory.Spaces[0][i][2]+" > "+Inventory.Spaces[0][i][1]+" " ;
	}
}

setInterval(ShowImgs(Player.Inventory.Spaces), 1000); // refreshes backpack every second
}



var Actor = new PCombatant("uPID00000000","Aahln",["0000","Beginner Island",[0,0],[0,0],[7,7]],"C://asdw"); // Using Actor instead of just PCombant,that way other types of AI can use the same system and we can modify attributes individually

setInterval(Actor.Stats.StaminaRegen(Actor), 2000); // calling stamina regen function on Actor every 2000ms
setInterval(Actor.Stats.HpRegen(Actor), 3000); // calling hp regen function on Actor every 3000ms
setInterval(mxHpF(Actor), 500); //checks max hp every half second
EquipArmor(ArmorData.uiID0000,Actor); //equips Handspun Tunic to "Actor"
console.log(Actor);
Actor.Inventory = new Inventory;
var Target = new Monster(); //target is similar to Actor, a placeholder
 

/*
var NumberGenie = NumbahGenie(); // assigns the value of calling NumbahGenie function to NumberGenie variable


 
z = Actor.Stats.PCrit;
x = WonderGenie(z);
console.log(x);


var CritHit = false; // a flag for determining if a crit strike needs to be calculated

 // this function next determines physical damage dealt after armor is factored in
 
function PStrike(actor,target) {

this.Actor = actor;
var hit = NumbahGenie();
this.Target = target;

function DMG(actor,target,Hit){
	this.hit = Hit;
	this.Actor = actor;
	this.Target = target;
 if (hit <= .10 && hit > 0){ 
 var DMG = hit *  - Target.Stats.PArmor[0];
 console.log(DMG); return DMG;
 } 
else if(hit <= .20 && hit > .10){
 var DMG = hit * Actor.Stats.PAttackMAX[0] - Target.Stats.PArmor[0];
 console.log(DMG); return DMG;
}
else if(hit <= .30 && hit > .20){
 var DMG = hit * Actor.Stats.PAttackMIN[0] - Target.Stats.PArmor[0];
 console.log(DMG); return DMG;
}
else if(hit <= .40 && hit > .30){
 var DMG = hit * Actor.Stats.PAttackMAX[0] - Target.Stats.PArmor[0];
 console.log(DMG); return DMG;
}
else if(hit <= .50 && hit > .40){
 var DMG = hit * Actor.Stats.PAttackMIN[0] - Target.Stats.PArmor[0];
 console.log(DMG); return DMG;
}
else if(hit <= .60 && hit > .50){
 var DMG = hit * Actor.Stats.PAttackMAX[0] - Target.Stats.PArmor[0];
 console.log(DMG); return DMG;
}
else if(hit <= .70 && hit > .60){
var DMG = hit * Actor.Stats.PAttackMIN[0];
 console.log(DMG); return DMG;
}
else if(hit <= .80 && hit > .70){
var DMG = hit * Actor.Stats.PAttackMAX[0] - Target.Stats.PArmor[0];
 console.log(DMG); return DMG;
}
else if(hit <= .90 && hit > .80){
var DMG = hit * Actor.Stats.PAttackMIN[0] - Target.Stats.PArmor[0];
 console.log(DMG); return DMG;
}
else {
var DMG = hit * Actor.Stats.PAttackMAX[0] - Target.Stats.PArmor[0];
 console.log(DMG); 
 

}
}
var DDMG = DMG(Actor,Target,hit);

function DmgCalc(actor,DMG,target){
	var Actor = actor;
	var Target = target;
	this.Hit = Actor.Stats.PHitChance[0];
	this.CrDmg = Actor.Stats.PCritDMG[0];
	this.Crit = WonderGenie(Actor.Stats.PCrit);
	this.DMG = DMG;
if((Hit-(Target.Dodge/100)) <= .25){console.log("You missed."); CritHit = false;} //Checks for successful hits
else if (Crit<= .60 &&  > 0){console.log("You hit "+Target.Name+" for "+DMG+".");} // checks for successful crits
}
else { // calculate and return critcal dmg output
 CritHit= true;
 var TDmg = DMG*(CrDmg/100);
 console.log("You critcally hit "+Target.Name+" for "+TDmg+".");
 CritHit = false;
return TDmg;
}
DmgCalc(Actor,DDMG,Target);
};
PStrike(Actor,Target);
*\


