var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7-8 is the surface level. 14-15 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars which go down to level 5.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
AttScope: [1,1],          //  [0] current Attack Range [1] Base Attack Range
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills(as thier ID#s) currently at the user's disposal
LootTable:{ // list of items(as unique item ID#s) monster may drop upon defeat
Quest:[],// quest only items 50% chance to drop
Tier1: [], // common items 10% chance to drop
Tier2:[], // uncommon items 8% chance to drop
Tier3:[], // rare items 1% chance to drop
Tier4:[] // very rare items .05% chance to drop
}

};

var uMID0001 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0002 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0003 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0004 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0005 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0006 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0007 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0008 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0009 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0010 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0011 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0012 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0013 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0014 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0015 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

var uMID0000 = {
	Name : "",
	Img : "",
	MapData : {
ID : "",
Name : "",
XCords : [0,0], // [0]current X Coordinates [1] previous X Coordinates
YCords : [0,0], // [0]current Y Coordinates [1] previous Y Coordinates
ZCords : [0,0], // [0]current Z Coordinates [1] previous Z Coordinates. 7 is the surface level. 14 is the Upper Heavens Anything beneathe 7 is <Dark Territory> with a few minor exceptions like basements and cellars.
spawnCords:[0,0,0] // [0]x cords [1]y cords [2]z cords
	},
 Stats : {
Level : 1, ThreatTable:[],
STR : 1,
DEX : 1,
INT : 1,
CON : 5, AttScope: [1,1],   //  [0] current Attack Range [1] Base Attack Range
Stamina : [100,100], // [0] current Stamina [1] Max Stamina
Health : [50,CON*10], // [0] current Health [1] Max Health
AttSpeed :[1500,1500],    //  [0] current Attack Speed  [1] Base Attack Speed
CastSpeed :[2000,2000],   //  [0] current Casting Speed [1] Base Casting Speed
PHitChance :[90,90],  // [0] current Physical Hit Chance [1] Base Physical Hit Chance
PAttackMIN :[1,1], // [0] current Min Physical Attack	[1] Base Min Physical Attack
PAttackMAX :[1,1], // [0] current Max Physical Attack	[1] Base Max Physical Attack
PCrit :[-100,-100], // [0] current Physical Crit Chance [1] Base Physical Crit Chance
PCritDMG :[0,0], // [0] current Physical Crit Damage [1] Base Physical Crit Damage
MAttackMIN :[0,0], // [0] current Min Magic Attack [1] Base Min Magic Attack
MAttackMAX :[0,0], // [0] current Max Magic Attack [1] Base Max Magic Attack
MHitChance :[0,0], // [0] current Spell Hit Chance [1] Base Spell Hit Chance
MCrit : [0,0],     // [0] current Spell Crit Chance [1] Base Spell Crit Chance
MCritDMG :[0,0],   // [0] current Spell Crit Damage [1] Base Spell Crit Damage
PArmor :[1,1],		// [0] current Physical Armor [1] Base Physical Armor
PBlock :[0,0],	// [0] current Physical Block Chance [1] Base Physical Block Chance
Dodge :[10,10], // [0] Current chance to dodge attacks [1] Base Chance to dodge attacks
Parry :[5,5], // [0] Current chance to parry attacks [1] Base chance to parry attacks
MWarding :[0,0], // [0] current magic defense [1] Base Magic Defense
SpellBlock :[0,0], // [0] Current Magical Block Chance [1] Base Magical Block Chance
FlDef: 0,
FrDef: 0,
EleDef: 0,
PsnDef: 0,
GaleDef: 0,
TideDef: 0,
SolarDef: 0,
SolarfrDef: 0,
StoneDef: 0,
ShadeDef: 0,
ShadeflDef : 0, StamRegen:[2, 3000],
	}
Status : [], // container for status ailments
SksNSpsList :[], // Skills and Spells List, a collection of spells and skills currently at the user's disposal
LootTable:{ Quest:[], Tier1: [], Tier2:[], Tier3:[], Tier4:[] }// quest only items// list of items(as unique item ID#s) monster may drop upon defeat

};

