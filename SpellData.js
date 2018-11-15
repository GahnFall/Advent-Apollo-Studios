 var usID0000= {  //  replace # with Spell ID number
 Type:2, // spell type i.e 1=Buff,2=Heal,3=Debuff,4=Dmg
 Ttype:1, // spell targeting type i.e 1=direct, 2=area, 3=line, 4=cone
 StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false],  //Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor 8= 9= 10= 11= 12= 13= 14= 15= 16= 17= 18= 19=  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef  
 Element:"Solar", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 SklvlReq:0,// Skill level of the spell's element required to invoke the spell
 cast_time:1400, castRange:15,// amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target 1=2meters i.e 1 tile 2=4meters i.e 2 tiles 3=6meters i.e 3 tiles etc..
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame
 stamCost:12, // the amount stamina it cost to invoke the spell
 durtn:0, // the duration of the spell(over time spell only)
 DmgOheal:30, // Spell damage amount or Spell Healing amount 
 cDown:500, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Recovers a small amount of health of a single target. Spell Potency: 30 CD: Instant", // a description of the spell,it's effects, and cooldown 
 Frameset:,// the group of frames used for the spell's rendering and animation
 Name:"Blessed Recovery", // name of the spell being invoked
};


 var usID0001 = {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
 Type:4, // spell type i.e Buff, Heal, Debuff,Dmg
 StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false],  //Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef 
 Element:"Shadeflame", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"Flaming Shadows", // name of the spell being invoked
 SklvlReq:0,// Skill level required to invoke the spell
 cast_time:500, castRange:2, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:0, // the amount stamina it cost to invoke the spell
 durtn:0, // the duration of the spell(over time spell only)
 DmgOheal:100, // Spell damage amount or Spell Healing amount 
 cDown:500, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap/instant cast
 desc:"Weapon Effect for Blade of the Undead Warrior King. Internal CD: Instant", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0002= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
 Type:4, // spell type i.e Buff, Heal, Debuff,Dmg
 StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false],  //Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef 
 Element:"Shade", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"Soul Reap", // name of the spell being invoked
 SklvlReq:30,// Skill level required to invoke the spell
 cast_time:500, castRange:10, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,1,0,0,0,0,1,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:20, // the amount stamina it cost to invoke the spell
 durtn:0, // the duration of the spell(over time spell only)
 DmgOheal:800, // Spell damage amount or Spell Healing amount 
 cDown:24000, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Vanish briefly into the shadows then pierce your target with a lethal strike to their vitals dealing massive shade damage. Spell Potency: 800 CD: 24s", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0003= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
 Type:4, // spell type i.e Buff, Heal, Debuff,Dmg
 StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false],  //Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef 
 Element:"Electric", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"Lightning Bolt", // name of the spell being invoked
 SklvlReq:20,// Skill level required to invoke the spell
 cast_time:1300, castRange:18, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,1,0,1,1,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:8, // the amount stamina it cost to invoke the spell
 durtn:0, // the duration of the spell(over time spell only)
 DmgOheal:130, // Spell damage amount or Spell Healing amount 
 cDown:500, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Call down a lightning bolt to strike your target dealing electric damage.  Spell Potency 130 CD: Instant", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0004= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
 Type:2, // spell type i.e Buff, Heal, Debuff,Dmg 
 StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], //Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef  
 Element:"Forest", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"Super Toke", // name of the spell being invoked
 SklvlReq:24,// Skill level required to invoke the spell
 cast_time:2300, castRange:4, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,2,0,0,0,0,1,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:24, // the amount stamina it cost to invoke the spell
 durtn:0, // the duration of the spell(over time spell only)
 DmgOheal:600, // Spell damage amount or Spell Healing amount 
 cDown:18000, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Take a super bong rip to recover a large amount of your health. Spell Potency: 600 CD: 18s", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0005= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
 Type:1, // spell type i.e 1=Buff, 2=Heal, 3=Debuff,4=Dmg
 StTarget: [7,[0,0,0,0,0,0,0,0,0,0,0,0,0], false],  //Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=MaxStam, 6=StamRgnAMT 7=Armor 8=StamRgnSpd  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef 
 Element:"Stone", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"Emboulden", // name of the spell being invoked
 SklvlReq:20,// Skill level required to invoke the spell
 cast_time:2500, castRange:15, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[1,0,0,0,0,0,0,0,0,0,2,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:10, // the amount stamina it cost to invoke the spell
 durtn:6000000, // the duration of the spell(over time spell only)
 DmgOheal:40, // Spell damage, Healing, and/or Buff, amount 
 cDown:1000, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Incase a target in stone armor, increasing their physical defense. Spell Potency 40 CD: 1s", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0006= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
 Type:1, StTarget: [6,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e 1=Buff, 2=Heal, 3=Debuff,4=Dmg 
 //Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:"Electric", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"Replenish", // name of the spell being invoked
 SklvlReq:0,// Skill level required to invoke the spell
 cast_time:1300, castRange:1, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:0, // the amount stamina it cost to invoke the spell
 durtn:8000, // the duration of the spell(over time spell only)
 DmgOheal:2, // Spell damage amount or Spell Healing amount 
 cDown:500, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Innate Chalice ability: Recovers 2 stamina every second for 8 seconds. Duration: 8s CD: Instant", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0007= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
Type:1, StTarget: [6,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:"Solar", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"Blessing of the Chalice", // name of the spell being invoked
 SklvlReq:10,// Skill level required to invoke the spell
 cast_time:1500, castRange:15, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:0, // the amount stamina it cost to invoke the spell
 durtn:10000, // the duration of the spell(over time spell only)
 DmgOheal:2, // Spell damage amount or Spell Healing amount 
 cDown:500, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"A blessing applied to a player when a Chalice has been passed to them. Duration: 10s CD: Instant", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0008= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
 Type:2, 
 StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:"Forest", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"Smiling Essence", // name of the spell being invoked
 SklvlReq:0,// Skill level required to invoke the spell
 cast_time:1000, castRange:18, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,1,0,0,1,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:3, // the amount stamina it cost to invoke the spell
 durtn:3000, // the duration of the spell(over time spell only)
 DmgOheal:120, // Spell damage amount or Spell Healing amount 
 cDown:500, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Heals a friendly target every second for 3 seconds. Spell Potency: 120 CD: None", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0009= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
Type:Dmg, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor 8=StamRgnSpd 9=AttScope 10=AttSpeed StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:"Solarfrost", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"Continental Sunder", // name of the spell being invoked
 SklvlReq:0,// Skill level required to invoke the spell
 cast_time:500, castRange:18, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:0, // the amount stamina it cost to invoke the spell
 durtn:0, // the duration of the spell(over time spell only)
 DmgOheal:150, // Spell damage amount or Spell Healing amount 
 cDown:1500, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Weapon Effect for Helsinger Edge: Deals massive solarfrost damage to a single target. Spell Potency: 150 CD: 1.5s", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0010= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
Type:2, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:"Solar", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"Sacred Hymm", // name of the spell being invoked
 SklvlReq:20,// Skill level required to invoke the spell
 cast_time:2100, castRange:20, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[1,0,0,0,0,0,0,0,2,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:6, // the amount stamina it cost to invoke the spell
 durtn:6000, // the duration of the spell(over time spell only)
 DmgOheal:105, // Spell damage amount or Spell Healing amount 
 cDown:3000, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Chant a sacred hymm healing a friendly target every .5 seconds for 6 seconds. Spell Potency: 105 CD: 6s", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0011= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
Type:4, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:"Normal", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"Vaneglorious", // name of the spell being invoked
 SklvlReq:0,// Skill level required to invoke the spell
 cast_time:500, castRange:2, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:0, // the amount stamina it cost to invoke the spell
 durtn:4000, // the duration of the spell(over time spell only)
 DmgOheal:120, // Spell damage amount or Spell Healing amount 
 cDown:3000, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Weapon Effect for Vane's Edge", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0012= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
Type:4, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:"Stone", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"OnHit:Stun", // name of the spell being invoked
 SklvlReq:0,// Skill level required to invoke the spell
 cast_time:500, castRange:2, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:0, // the amount stamina it cost to invoke the spell
 durtn:3000, // the duration of the spell(over time spell only)
 DmgOheal:40, // Spell damage amount or Spell Healing amount 
 cDown:16000, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Weapon Effect: Stuns target for 3 seconds.", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0013= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
Type:4, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:"Gale", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"OnHit:Razoring Winds", // name of the spell being invoked
 SklvlReq:0,// Skill level required to invoke the spell
 cast_time:500, castRange:8, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:0, // the amount stamina it cost to invoke the spell
 durtn:0, // the duration of the spell(over time spell only)
 DmgOheal:100, // Spell damage amount or Spell Healing amount 
 cDown:0, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap with a few exceptions
 desc:"Weapon Effect: Slices an enemy with razor like winds dealing gale damage.", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0014= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
Type:3, StTarget: [7,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:"Normal", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"OnHit:Primal Instinct", // name of the spell being invoked
 SklvlReq:0,// Skill level required to invoke the spell
 cast_time:500, castRange:4, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:0, // the amount stamina it cost to invoke the spell
 durtn:2500, // the duration of the spell(over time spell only)
 DmgOheal:(Target.Stats.PArmor[0]), // Spell damage amount or Spell Healing amount 
 cDown:20000, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Weapon Effect for Sul-Jhur's Reaper: Chance on hit to Reduce target's armor to 0 for 2.5 seconds. 20 second internal cd", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0015= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
Type:4, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:"Forest", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"OnHit:Jester Arrows", // name of the spell being invoked
 SklvlReq:0,// Skill level required to invoke the spell
 cast_time:500, castRange:18, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:0, // the amount stamina it cost to invoke the spell
 durtn:0, // the duration of the spell(over time spell only)
 DmgOheal:(60+((Caster.Stats.DEX)/3), // Spell damage amount or Spell Healing amount 
 cDown:6000, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Weapon Effect for Riddler: Chance on hit to fire 2 extra arrows at a target that deal forest damage. 6 second internal cd", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0016= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
Type:4, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:"Poison", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"OnHit:Greystinger", // name of the spell being invoked
 SklvlReq:0,// Skill level required to invoke the spell
 cast_time:500, castRange:18, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:0, // the amount stamina it cost to invoke the spell
 durtn:4000, // the duration of the spell(over time spell only)
 DmgOheal:(40+(Caster.Stats.DEX/5)), // Spell damage amount or Spell Healing amount 
 cDown:14000, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Weapon Effect for Stingshot: Chance on hit to fire a poisonous stinger at your target that deals poison damage over 4 seconds. 14 second internal cd", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0017= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
Type:3, StTarget: [16,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef StTarget[2] = flag/boolean to denote if resistances are effected by the spell
 Element:"Forest", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"OnHit:HeartStrings", // name of the spell being invoked
 SklvlReq:0,// Skill level required to invoke the spell
 cast_time:500, castRange:6, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:1, // the amount stamina it cost to invoke the spell
 durtn:3000, // the duration of the spell(over time spell only)
 DmgOheal:4, // Spell damage amount or Spell Healing amount 
 cDown:12000, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Weapon Effect for Spiderstring Harp: Shooting a target within 6 tiles slows their movement speed by 4 for 3 seconds. 12second Internal CD", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID0018= {  //  replace # with Spell ID number
 Ttype:1, // spell targeting type i.e direct, area, line, cone
Type:2, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:"Solar", // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:"Agolias", // name of the spell being invoked
 SklvlReq:12,// Skill level required to invoke the spell
 cast_time:4000, castRange:20, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,1,1,0,0,1,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:28, // the amount stamina it cost to invoke the spell
 durtn:500, // the duration of the spell(over time spell only)
 DmgOheal:1, // Spell damage amount or Spell Healing amount 
 cDown:10000, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"Revive a target from death, restoring a small portion of their health.", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};



 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


 var usID#0000= {  //  replace # with Spell ID number
 Ttype:, // spell targeting type i.e direct, area, line, cone
Type:, StTarget: [0,[0,0,0,0,0,0,0,0,0,0,0,0,0], false], // spell type i.e Buff, Heal, Debuff,Dmg  Stat target i.e 0 = none, 1=STR,2=DEX,3=INT, 4=CON, 5=Stam, 6=StamRgn 7=Armor  StTarget[1]=MDEF[][0]Normal/MDEF [1]FlDef [2]FrDef [3]EleDef [4]PsnDef [5]GaleDef [6]TideDef [7]SolarDef [8]SolarfrDef [9]StoneDef [10]ShadeDef [11]ShadeflDef
 Element:, // element of the spell being used i.e Normal,Flame,Frost,Forest,Electric,Poison,Gale,Tide,Solar, Solarfrost,Stone, Shade, Shadeflame
 Name:, // name of the spell being invoked
 SklvlReq:,// Skill level required to invoke the spell
 cast_time:, castRange:, // amount of time before spellcast calling function is used and the maximum distance it can be cast from at its target
 RuneForm:[0,0,0,0,0,0,0,0,0,0,0,0,0], // the spell catalyst formula, i.e the CORRECT combination of TOTAL runes in one's equipped armor and/or weapons [0]Normal,[1]Flame,[2]Frost,[3]Forest,[4]Electric,[5]Poison,[6]Gale,[7]Tide,[8]Solar, [9]Solarfrost,[10]Stone, [11]Shade, [12]Shadeflame 
 stamCost:, // the amount stamina it cost to invoke the spell
 durtn:, // the duration of the spell(over time spell only)
 DmgOheal:, // Spell damage amount or Spell Healing amount 
 cDown:, // the amount of time it takes before a spell can be recast .5seconds(500ms) is the hard cap
 desc:"", // a description of the spell,it's effects, and cooldown 
 Frameset: // the group of frames used for the spell's rendering and animation
};


