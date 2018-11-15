// AttScope[1] = Z Scale Ex. 0 = you can only hit monsters on your level, ground attacks can be evaded by jumping. However, there is a higher chance of being vulnerable to attacks when landing (10% more damage while airborne but 50% less armor for 1 sec after jumping);
var uiID0000 = { // replace # with uiID number
iType:"Axe", AttCost:4, iSlot:"MH",
iName:"Hatchet",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:3,
iMaxDmg:11,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1550,
iMaxAttSpd:500, // fastest possible weapon speed
AttScope:[1,0],  // AttScope[0] = attack range Ex. 1 = 32px/1tile  2 = 64px/2tile etc.. 
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELL CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force iSpecStat[4] is the number of times the spell is called (1 - 3 times max)
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,// [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0001 = { // replace # with uiID number
iType:"Axe", AttCost:4, iSlot:"MH",
iName:"Tomahawk",
iRarity:"common",
iSkLvlreq:5,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:6,
iMaxDmg:14,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1850,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0002 = { // replace # with uiID number
iType:"Axe", AttCost:4, iSlot:"MH",
iName:"Double Axe",
iRarity:"common",
iSkLvlreq:12,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:4,
iMaxDmg:16,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2600,
iMaxAttSpd:500, AttScope:[2,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0003 = { // replace # with uiID number
iType:"Axe", AttCost:4, iSlot:"MH",
iName:"Battle Axe",
iRarity:"common",
iSkLvlreq:16,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:10,
iMaxDmg:18,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2350,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0004 = { // replace # with uiID number
iType:"Axe", AttCost:4, iSlot:"MH",
iName:"Steel Axe",
iRarity:"common",
iSkLvlreq:24,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:8,
iMaxDmg:24,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2700,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0005 = { // replace # with uiID number
iType:"Axe", AttCost:4, iSlot:"MH",
iName:"Stone Axe",
iRarity:"common",
iSkLvlreq:8,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:3,
iMaxDmg:14,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2650,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0006 = { // replace # with uiID number
iType:"Bow", AttCost:4, iSlot:"MH",
iName:"Ash Bow",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:1,
iMaxDmg:4,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2150,
iMaxAttSpd:500, AttScope:[15,1], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0007 = { // replace # with uiID number
iType:"Bow", AttCost:4, iSlot:"MH",
iName:"Pine Bow",
iRarity:"common",
iSkLvlreq:6,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:2,
iMaxDmg:8,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2000,
iMaxAttSpd:500, AttScope:[15,1], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0008 = { // replace # with uiID number
iType:"Bow", AttCost:4, iSlot:"MH",
iName:"Spruce Bow",
iRarity:"common",
iSkLvlreq:14,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:4,
iMaxDmg:14,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2250,
iMaxAttSpd:500, AttScope:[15,1], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0009 = { // replace # with uiID number
iType:"Bow", AttCost:4, iSlot:"MH",
iName:"Fir Bow",
iRarity:"common",
iSkLvlreq:18,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:6,
iMaxDmg:12,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1700,
iMaxAttSpd:500, AttScope:[16,1], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0010 = { // replace # with uiID number
iType:"Bow", AttCost:4, iSlot:"MH",
iName:"Cedar Bow",
iRarity:"common",
iSkLvlreq:24,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:8,
iMaxDmg:16,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1900,
iMaxAttSpd:500, AttScope:[16,1], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0011 = { // replace # with uiID number
iType:"Bow", AttCost:4, iSlot:"MH",
iName:"Hemlock Bow",
iRarity:"common",
iSkLvlreq:10,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:3,
iMaxDmg:12,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1950,
iMaxAttSpd:500, AttScope:[18,1], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0012 = { // replace # with uiID number
iType:"Dagger", AttCost:3, iSlot:"MH",
iName:"Stone Dagger",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:1,
iMaxDmg:3,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1600,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0013 = { // replace # with uiID number
iType:"Dagger", AttCost:3, iSlot:"MH",
iName:"Copper Shank",
iRarity:"common",
iSkLvlreq:6,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:3,
iMaxDmg:5,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1400,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0014 = { // replace # with uiID number
iType:"Dagger", AttCost:3, iSlot:"MH",
iName:"Bronze Shiv",
iRarity:"common",
iSkLvlreq:11,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:4,
iMaxDmg:8,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1400,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0015 = { // replace # with uiID number
iType:"Dagger", AttCost:3, iSlot:"MH",
iName:"Steel Kris",
iRarity:"common",
iSkLvlreq:16,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:8,
iMaxDmg:12,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1800,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0016 = { // replace # with uiID number
iType:"Dagger", AttCost:3, iSlot:"MH",
iName:"Titanium Piercer",
iRarity:"common",
iSkLvlreq:20,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:5,
iMaxDmg:10,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1050,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0017 = { // replace # with uiID number
iType:"Dagger", AttCost:3, iSlot:"MH",
iName:"Serrated Knife",
iRarity:"common",
iSkLvlreq:24,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:8,
iMaxDmg:16,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1400,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0018 = { // replace # with uiID number
iType:"Mace", AttCost:5, iSlot:"MH",
iName:"Hammer",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:3,
iMaxDmg:8,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2200,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0019 = { // replace # with uiID number
iType:"Mace", AttCost:5, iSlot:"MH",
iName:"Morning Star",
iRarity:"common",
iSkLvlreq:5,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:6,
iMaxDmg:12,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2100,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0020 = { // replace # with uiID number
iType:"Mace", AttCost:5, iSlot:"MH",
iName:"Steel Mace",
iRarity:"common",
iSkLvlreq:11,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:5,
iMaxDmg:14,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2000,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0021 = { // replace # with uiID number
iType:"Mace", AttCost:5, iSlot:"MH",
iName:"Bronze Sledgehammer",
iRarity:"common",
iSkLvlreq:15,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:8,
iMaxDmg:18,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2450,
iMaxAttSpd:500, AttScope:[2,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0022 = { // replace # with uiID number
iType:"Mace", AttCost:5, iSlot:"MH",
iName:"Hefty Club",
iRarity:"common",
iSkLvlreq:21,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:6,
iMaxDmg:16,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2000,
iMaxAttSpd:500, AttScope:[2,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0023 = { // replace # with uiID number
iType:"Mace", AttCost:5, iSlot:"MH",
iName:"War Hammer",
iRarity:"common",
iSkLvlreq:26,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:10,
iMaxDmg:22,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2800,
iMaxAttSpd:500, AttScope:[2,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0024 = { // replace # with uiID number
iType:"Shield", iSlot:"OH",
iName:"Buckler",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[5,0,0,0],    //STR,DEX,INT,CON
iMinDmg:0,
iMaxDmg:0,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:3000, // Block has internal CD of 3 seconds but this can be reset by block chance activation from shields
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,10,0,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0025 = { // replace # with uiID number
iType:"Shield", iSlot:"OH",
iName:"Wooden Shield",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[8,0,0,0],    //STR,DEX,INT,CON
iMinDmg:0,
iMaxDmg:0,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:3000,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,15,0,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0026 = { // replace # with uiID number
iType:"Shield", iSlot:"OH",
iName:"Round Shield",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[12,0,0,0],    //STR,DEX,INT,CON
iMinDmg:0,
iMaxDmg:0,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:3000,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,18,0,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0027 = { // replace # with uiID number
iType:"Shield", iSlot:"OH",
iName:"Tower Shield",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[15,0,0,0],    //STR,DEX,INT,CON
iMinDmg:0,
iMaxDmg:0,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:3000,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,20,0,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0028 = { // replace # with uiID number
iType:"Shield", iSlot:"OH",
iName:"Steel Shield",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[19,0,0,0],    //STR,DEX,INT,CON
iMinDmg:0,
iMaxDmg:0,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:3000,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,22,0,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0029 = { // replace # with uiID number
iType:"Shield", iSlot:"OH",
iName:"Kite Shield",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[24,0,0,0],    //STR,DEX,INT,CON
iMinDmg:0,
iMaxDmg:0,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:3000,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,26,0,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0030 = { // replace # with uiID number
iType:"Staff", AttCost:3, iSlot:"MH",
iName:"Bo Staff",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:4,
iMaxDmg:6,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2000,
iMaxAttSpd:500, AttScope:[2,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0031 = { // replace # with uiID number
iType:"Staff", AttCost:3, iSlot:"MH",
iName:"Enchanted Walking Stick",
iRarity:"common",
iSkLvlreq:5,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:6,
iMaxDmg:9,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2100,
iMaxAttSpd:500, AttScope:[3,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0032 = { // replace # with uiID number
iType:"Staff", AttCost:3, iSlot:"MH",
iName:"Oaken Branch",
iRarity:"common",
iSkLvlreq:9,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:4,
iMaxDmg:8,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1800,
iMaxAttSpd:500, AttScope:[2,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0033 = { // replace # with uiID number
iType:"Staff", AttCost:3, iSlot:"MH",
iName:"Braided Cedar Branch Staff",
iRarity:"common",
iSkLvlreq:14,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:8,
iMaxDmg:12,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2000,
iMaxAttSpd:500, AttScope:[3,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0034 = { // replace # with uiID number
iType:"Staff", AttCost:3, iSlot:"MH",
iName:"Hemlock Rod",
iRarity:"common",
iSkLvlreq:19,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:6,
iMaxDmg:13,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1850,
iMaxAttSpd:500, AttScope:[3,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0035 = { // replace # with uiID number
iType:"Staff", AttCost:3, iSlot:"MH",
iName:"Treated Fir Staff",
iRarity:"common",
iSkLvlreq:25,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:4,
iMaxDmg:10,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1250,
iMaxAttSpd:500, AttScope:[3,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0036 = { // replace # with uiID number
iType:"Sword", AttCost:4, iSlot:"MH",
iName:"Blessed Wooden Sword",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:1,
iMaxDmg:4,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1300,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[5,usID0000,.6,30,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0037 = { // replace # with uiID number
iType:"Sword", AttCost:4, iSlot:"MH",
iName:"Scimitar",
iRarity:"common",
iSkLvlreq:4,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:3,
iMaxDmg:6,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1300,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0038 = { // replace # with uiID number
iType:"Sword", AttCost:4, iSlot:"MH",
iName:"Cutlas",
iRarity:"common",
iSkLvlreq:10,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:2,
iMaxDmg:3,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1350,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0039 = { // replace # with uiID number
iType:"Sword", AttCost:4, iSlot:"MH",
iName:"Rapier",
iRarity:"common",
iSkLvlreq:16,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:4,
iMaxDmg:11,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1150,
iMaxAttSpd:500, AttScope:[2,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0040 = { // replace # with uiID number
iType:"Sword", AttCost:4, iSlot:"MH",
iName:"Talwar",
iRarity:"common",
iSkLvlreq:21,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:8,
iMaxDmg:14,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1400,
iMaxAttSpd:500, AttScope:[3,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0041 = { // replace # with uiID number
iType:"Sword", AttCost:4, iSlot:"MH",
iName:"Claymore",
iRarity:"common",
iSkLvlreq:26,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:10,
iMaxDmg:17,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1600,
iMaxAttSpd:500, AttScope:[2,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0042 = { // replace # with uiID number
iType:"Sceptre", AttCost:1, iSlot:"MH",
iName:"Glowing Twig",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:1,
iMaxDmg:3,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1000,
iMaxAttSpd:500, AttScope:[16,1], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,12,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0043 = { // replace # with uiID number
iType:"Sceptre", AttCost:1, iSlot:"MH",
iName:"Simple Wand",
iRarity:"common",
iSkLvlreq:5,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:2,
iMaxDmg:5,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1000,
iMaxAttSpd:500, AttScope:[16,1], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,14,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0044 = { // replace # with uiID number
iType:"Sceptre", AttCost:1, iSlot:"MH",
iName:"Accolyte Wand",
iRarity:"common",
iSkLvlreq:9,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:3,
iMaxDmg:8,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1100,
iMaxAttSpd:500, AttScope:[16,1], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,16,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0045 = { // replace # with uiID number
iType:"Sceptre", AttCost:1, iSlot:"MH",
iName:"Blessed Sceptre",
iRarity:"common",
iSkLvlreq:14,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:5,
iMaxDmg:11,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:900,
iMaxAttSpd:500, AttScope:[16,1], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,18,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0046 = { // replace # with uiID number
iType:"Sceptre", AttCost:1, iSlot:"MH",
iName:"Hemlock Mage Waver",
iRarity:"common",
iSkLvlreq:19,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:9,
iMaxDmg:13,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1200,
iMaxAttSpd:500, AttScope:[18,1], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,20,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0047 = { // replace # with uiID number
iType:"Sceptre", AttCost:1, iSlot:"MH",
iName:"Pinestone Runeweaver",
iRarity:"common",
iSkLvlreq:24,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:7,
iMaxDmg:14,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1000,
iMaxAttSpd:500, AttScope:[18,1], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,22,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0048 = { // replace # with uiID number
iType:"Chalice", AttCost:1, iSlot:"MH",
iName:"Wooden Hookah",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:3,
iMaxDmg:3,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:500,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,6], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0049 = { // replace # with uiID number
iType:"Chalice", AttCost:1, iSlot:"MH",
iName:"Glasswoven Bong",
iRarity:"common",
iSkLvlreq:5,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:6,
iMaxDmg:12,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2800,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,10], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0050 = { // replace # with uiID number
iType:"Chalice", AttCost:1, iSlot:"MH",
iName:"Tempered Glass Bong",
iRarity:"common",
iSkLvlreq:9,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:4,
iMaxDmg:14,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2500,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,9], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0051 = { // replace # with uiID number
iType:"Chalice", AttCost:1, iSlot:"MH",
iName:"Glasswoven Hookah",
iRarity:"common",
iSkLvlreq:14,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:8,
iMaxDmg:18,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2600,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,10], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0052 = { // replace # with uiID number
iType:"Chalice", AttCost:1, iSlot:"MH",
iName:"Tempered Glass Hookah",
iRarity:"common",
iSkLvlreq:19,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:12,
iMaxDmg:20,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2600,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,14], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0053 = { // replace # with uiID number
iType:"Chalice", AttCost:1, iSlot:"MH",
iName:"Cloud Surfer's Draught",
iRarity:"common",
iSkLvlreq:25,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:10,
iMaxDmg:18,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2000,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,16], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0054 = { // replace # with uiID number
iType:"Fist Weapon", AttCost:2, iSlot:"MH",
iName:"Brawler's Gloves",
iRarity:"common",
iSkLvlreq:0,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:3,
iMaxDmg:3,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1000,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[1,0,0,8,0,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0055 = { // replace # with uiID number
iType:"Fist Weapon", AttCost:2, iSlot:"MH",
iName:"Fadefist",
iRarity:"common",
iSkLvlreq:8,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:4,
iMaxDmg:8,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:800,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[1,0,0,10,0,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0056 = { // replace # with uiID number
iType:"Fist Weapon", AttCost:2, iSlot:"MH",
iName:"Blazefist",
iRarity:"common",
iSkLvlreq:16,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:4,
iMaxDmg:5,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:500,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[2,0,0,10,0,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0057 = { // replace # with uiID number
iType:"Fist Weapon", AttCost:2, iSlot:"MH",
iName:"Dark Strike",
iRarity:"common",
iSkLvlreq:24,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:8,
iMaxDmg:10,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:750,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[3,0,0,14,0,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0058 = { // replace # with uiID number
iType:"Fist Weapon", AttCost:2, iSlot:"MH",
iName:"Saitamian Flurry",
iRarity:"uncommon",
iSkLvlreq:29,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:10,
iMaxDmg:10,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:500,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[12,4,2,0,0,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0059 = { // replace # with uiID number
iType:"Fist Weapon", AttCost:2, iSlot:"MH",
iName:"Shinning fist",
iRarity:"uncommon",
iSkLvlreq:38,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:9,
iMaxDmg:20,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:700,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,5,20,0,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0060 = { // replace # with uiID number
iType:"Sword", AttCost:4, iSlot:"MH",
iName:"Blade of the Undead Warrior, King",
iRarity:"rare",
iSkLvlreq:60,
iStatLvlreq:[60,0,0,0],    //STR,DEX,INT,CON
iMinDmg:36,
iMaxDmg:68,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2000,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,12,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,4], //STR,DEX,INT,CON
iAdvStat1:[4,0,0,0,0,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,20,0,0,0,0], // CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[5,usID0001,.2,80,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value to be multiplied by a random number between 0 and 1(i.e Math.random()) then added to the damage or healing roll when determining its spell force
iPlusLvl:0, 
iElement: "Fire",
iDura:500, Runeslots:0,
iDuraMax:500, Price:10000000,
iDescpt:"A blade once used by the Undead Warrior 'King'. It's bloodsoaked history has left it drenched in unholy flames. Unique Effect: Flaming Shadows. Flaming shadows sometimes engulf a target struck by this blade, dealing bursts of Shadeflame damage.",
iImgLocation:""

}


var uiID0061 = { // replace # with uiID number
iType:"Sword", AttCost:4, iSlot:"MH",
iName:"Helsinger Edge",
iRarity:"rare",
iSkLvlreq:70,
iStatLvlreq:[20,20,20,20],    //STR,DEX,INT,CON
iMinDmg:60,
iMaxDmg:84,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2200,
iMaxAttSpd:500, 
AttScope:[1,1], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[40,50,0,0], //STR,DEX,INT,CON
iStat2:[0,0,30,50], //STR,DEX,INT,CON
iAdvStat1:[5,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[10,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[5,usID0009,.2,250,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, 
iElement: "Solarfrost",
iDura:500, Runeslots:0,
iDuraMax:500, Price:10000000,
iDescpt:"'The legendary Slayer', Ramal, earned his title carrying this very blade into countless battles. It is said he infused his soul into the blade before he used it to cleave an entire continent in two. Granting the user immense power, it's no surprise this blade was sealed away. Be wary, adventurer, some say the blade is cursed. This blade occasionally triggers a 3-hit combo attack dealing massive solarfrost damage. ",
iImgLocation:""

}


var uiID0062 = { // replace # with uiID number
iType:"Sword", AttCost:5, iSlot:"MH",
iName:"Darkblade of Asta",
iRarity:"very rare",
iSkLvlreq:30,
iStatLvlreq:[76,0,0,0],    //STR,DEX,INT,CON
iMinDmg:110,
iMaxDmg:200,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:3000,
iMaxAttSpd:500, AttScope:[3,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,30], //STR,DEX,INT,CON
iStat2:[0,30,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,50,5,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,70,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"A tribrute to a great warrior, err..i mean wizard.",
iImgLocation:""

}


var uiID0063 = { // replace # with uiID number
iType:"Axe", AttCost:6, iSlot:"MH",
iName:"Hefty Severance",
iRarity:"uncommon",
iSkLvlreq:70,
iStatLvlreq:[60,0,0,0],    //STR,DEX,INT,CON
iMinDmg:30,
iMaxDmg:98,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1750,
iMaxAttSpd:500, AttScope:[4,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[20,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,15], //STR,DEX,INT,CON
iAdvStat1:[3,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0064 = { // replace # with uiID number
iType:"Axe", AttCost:6, iSlot:"MH",
iName:"Vane's Edge",
iRarity:"rare",
iSkLvlreq:50,
iStatLvlreq:[90,0,0,10],    //STR,DEX,INT,CON
iMinDmg:50,
iMaxDmg:130,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2000,
iMaxAttSpd:500, AttScope:[3,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,30], //STR,DEX,INT,CON
iStat2:[0,5,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[5,usID0011,.1,(Actor.Stats.STR/5),1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0065 = { // replace # with uiID number
iType:"Axe", AttCost:4, iSlot:"MH",
iName:"Lotharian Cleaver",
iRarity:"rare",
iSkLvlreq:100,
iStatLvlreq:[0,100,0,0],    //STR,DEX,INT,CON
iMinDmg:40,
iMaxDmg:90,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1250,
iMaxAttSpd:500, AttScope:[2,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[5,10,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0066 = { // replace # with uiID number
iType:"Axe", AttCost:6, iSlot:"MH",
iName:"Daum Splittle",
iRarity:"uncommon",
iSkLvlreq:60,
iStatLvlreq:[10,10,0,0],    //STR,DEX,INT,CON
iMinDmg:26,
iMaxDmg:70,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1500,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[10,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,10], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[5,usID0012,.05,((Actor.Stats.STR)/10),1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0067 = { // replace # with uiID number
iType:"Axe", AttCost:7, iSlot:"MH",
iName:"Splicing Wind",
iRarity:"very rare",
iSkLvlreq:30,
iStatLvlreq:[100,0,0,0],    //STR,DEX,INT,CON
iMinDmg:36,
iMaxDmg:158,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1800,
iMaxAttSpd:500, AttScope:[4,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,30,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[4,0,4,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[6,usID0013,(.2+((Actor.Stats.Int)/1000)),((Actor.Stats.INT)*2)),3], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... 6: on-hit dbl cast 7: on-hit trpl cast effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0068 = { // replace # with uiID number
iType:"Axe", AttCost:8, iSlot:"MH",
iName:"Sol-Jhur's Reaper",
iRarity:"very rare",
iSkLvlreq:100,
iStatLvlreq:[0,0,0,50],    //STR,DEX,INT,CON
iMinDmg:52,
iMaxDmg:126,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2200,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[15,15,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[10,0,6,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[5,usID0014,.1,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0069 = { // replace # with uiID number
iType:"Axe", AttCost:4, iSlot:"MH",
iName:"Grimsteel Chopper",
iRarity:"common",
iSkLvlreq:80,
iStatLvlreq:[30,30,0,0],    //STR,DEX,INT,CON
iMinDmg:22,
iMaxDmg:84,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1800,
iMaxAttSpd:500, AttScope:[2,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,10,0,5], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[2,0,2,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0070 = { // replace # with uiID number
iType:"Axe", AttCost:6, iSlot:"MH",
iName:"Ironbone Reaver",
iRarity:"common",
iSkLvlreq:55,
iStatLvlreq:[46,0,0,0],    //STR,DEX,INT,CON
iMinDmg:28,
iMaxDmg:100,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:2000,
iMaxAttSpd:500, AttScope:[2,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[20,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,2,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0071 = { // replace # with uiID number
iType:"Bow", AttCost:4, iSlot:"MH",
iName:"Riddler",
iRarity:"rare",
iSkLvlreq:40,
iStatLvlreq:[20,60,0,0],    //STR,DEX,INT,CON
iMinDmg:14,
iMaxDmg:36,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1400,
iMaxAttSpd:500, AttScope:[18,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,30,0,10], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[6,0,6,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[5,usID0015,.4,14,2], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0072 = { // replace # with uiID number
iType:"Bow", AttCost:4, iSlot:"MH",
iName:"Stingshot",
iRarity:"uncommon",
iSkLvlreq:60,
iStatLvlreq:[20,20,0,0],    //STR,DEX,INT,CON
iMinDmg:18,
iMaxDmg:32,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:1200,
iMaxAttSpd:500, AttScope:[18,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,10], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[3,0,1,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[5,usID0016,.3,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0073 = { // replace # with uiID number
iType:"Bow", AttCost:8, iSlot:"MH",
iName:"Spiderstring Harp",
iRarity:"very rare",
iSkLvlreq:100,
iStatLvlreq:[30,70,0,0],    //STR,DEX,INT,CON
iMinDmg:10,
iMaxDmg:18,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:800,
iMaxAttSpd:500, AttScope:[18,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,10,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,20], //STR,DEX,INT,CON
iAdvStat1:[0,0,6,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[5,usID0017,1,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0074 = { // replace # with uiID number
iType:"Bow", AttCost:6, iSlot:"MH",
iName:"Barkskin Bow",
iRarity:"common",
iSkLvlreq:30,
iStatLvlreq:[10,50,0,0],    //STR,DEX,INT,CON
iMinDmg:16,
iMaxDmg:28,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0075 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0076 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0077 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0078 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0079 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0080 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0081 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0082 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0083 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0084 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0085 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0086 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0087 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0088 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0089 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0090 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0091 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0092 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0093 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0094 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0095 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0096 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0097 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0098 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0099 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID0100 = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}


var uiID# = { // replace # with uiID number
iType:"", AttCost:, iSlot:"",
iName:",
iRarity:",
iSkLvlreq:,
iStatLvlreq:[0,0,0,0],    //STR,DEX,INT,CON
iMinDmg:,
iMaxDmg:,
iMinAttSpd:3500, // Slowest possible weapon speed
iBaseAttSpd:,
iMaxAttSpd:500, AttScope:[1,0], // fastest possible weapon speed | AttScope 1 = 32px/1tile  2: 64px/2tile etc..
iStat1:[0,0,0,0], //STR,DEX,INT,CON
iStat2:[0,0,0,0], //STR,DEX,INT,CON
iAdvStat1:[0,0,0,0,0,0], //MELEE CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iAdvStat2:[0,0,0,0,0,0], //SPELLS  CRIT, CRITDMG, HIT, BLOCK, MANABOLT, REPLENISH
iSpecStat:[0,0,0,0,1], // the number here in iSpecStat[0] corresponds to 0: normal, 1: on-block, 2: on-dmgtaken, 3: on-dodge, 4: on-parry, 5:on-hit... effects linked to the weapon or armor iSpecStat[1] is the unique spell ID of the spell being callled when the condition has been met iSpecStat[2] is the value added to the roll that checks to see if the the spell should be cast iSpecStat[3] is the value added to the damage or healing roll when determining its spell force
iPlusLvl:0, iElement: "Normal",
iDura:500, Runeslots:0,
iDuraMax:500, Price:100000,
iDescpt:"",
iImgLocation:""

}

