function NumbuhGenie(){ 
return Math.random();
}; // generates a random number between 0 and 1

function WonderGenie(Stat) { 
this.NumberGenie = NumbahGenie();
this.stat = Stat;
var magik = (stat/100) + NumberGenie;
console.log(magik);
return magik;
};// Grabs the Attacker's stat to be checked from the stats object in the player object, then divides it by 100, then adds that ammount to the NumberGenie

function MeleeDMG(actor,target) {

this.Actor = actor;
this.Target = target;
this.Crit = WonderGenie(Actor.Stats.PCrit[0])+(Actor.Stats.DEX * .1);
this.PHitC = WonderGenie(Actor.Stats.PHitChance[0])+(Actor.Stats.DEX *.003);
this.CrDmg = (Actor.Stats.PCritDMG[0]+120)+((Actor.Stats.DEX * .02) + (Actor.Stats.STR * .03));
var Damage=0;
this.EqWeapon = Actor.Equipment.MainHand;

this.StatMod1 = Actor.Stats.STR*6; // Actor's STR stat
this.StatMod2 = Actor.Stats.DEX*2; // Actor's DEX stat
this.ModdedStat = StatMod1 + StatMod2; // combined melee attack power from stats
this.minDmg = Math.floor(Math.random()*(EqWeapon.MinDmg+ModdedStat)); //Weapon's MinDmg +Stat mods = Actor's ranged minimum damage
this.maxDmg = Math.floor(Math.random()*(EqWeapon.MaxDmg+ModdedStat)); //Weapon's MaxDmg +Stat mods =Actor's ranged maximum damage


if(EqWeapon.Element === "Flame"){ // a set of test cases to determine which spell elemental resist is to be used in dmg calculations
	 TargArm = Math.floor((Target.Stats.FlDef+(Target.Stats.PArmor/35)));
 }
  else if (EqWeapon.Element === "Frost"){
	 TargArm = Math.floor((Target.Stats.FrDef+(Target.Stats.PArmor/35)));
 }
  else if (EqWeapon.Element === "Electric"){
	 TargArm = Math.floor((Target.Stats.EleDef+(Target.Stats.PArmor/35)));
 }
  else if (EqWeapon.Element === "Poison"){
	 TargArm = Math.floor((Target.Stats.PsnDef+(Target.Stats.PArmor/35)));
 }
  else if (EqWeapon.Element === "Gale"){
	 TargArm = Math.floor((Target.Stats.GaleDef +(Target.Stats.PArmor/35)));
 }
  else if (EqWeapon.Element === "Tide"){
	 TargArm = Math.floor((Target.Stats.TideDef +(Target.Stats.PArmor/35)));
 }
  else if (EqWeapon.Element === "Solar"){
	 TargArm = Math.floor((Target.Stats.SolarDef +(Target.Stats.PArmor/35)));
 }
  else if (EqWeapon.Element === "Solarfrost"){
	 TargArm = Math.floor((Target.Stats.SolarfrDef +(Target.Stats.PArmor/35)));
 }
 else if (EqWeapon.Element === "Stone"){
	 TargArm = Math.floor((Target.Stats.StoneDef +(Target.Stats.PArmor/35)));
 }
 else if (EqWeapon.Element === "Shade"){
	 TargArm = Math.floor((Target.Stats.ShadeDef +(Target.Stats.PArmor/35)));
 }
 else if (EqWeapon.Element === "Shadeflame"){
	 TargArm = Math.floor((Target.Stats.ShadeflDef+(Target.Stats.PArmor/35)));
 } 
 else {
	 TargArm = Target.Stats.PArmor;
}

this.Testb = NumbuhGenie();
if (Testb <= .33 && Testb > 0){
Damage = minDmg - TargArm;} 
else if (Testb <= .66 && Testb >= .34){
Damage = (minDmg+(Math.floor(Math.random()*3*3))) - TargArm;
} 
else {
Damage = Math.floor((Math.random()*maxDmg)+minDmg)- TargArm;
}

if(Target.Stats.Health[0]<=0){
	console.log("Invalid target. Target is dead.");
	return;
}
else if(// Checks if target is within melee range
(Actor.Map.XCORDS[0]+(Actor.Stats.AttScope[0]*32)) < Target.Map.XCORDS[0] || 
(Actor.Map.XCORDS[0]-(Actor.Stats.AttScope[0]*32)) > Target.Map.XCORDS[0] ||
(Actor.Map.YCORDS[0]+(Actor.Stats.AttScope[0]*32)) < Target.Map.YCORDS[0] ||
(Actor.Map.YCORDS[0]-(Actor.Stats.AttScope[0]*32)) > Target.Map.YCORDS[0] ||
 Actor.Map.ZCORDS[0]+(Actor.Stats.AttScope[2]) != Target.Map.ZCORDS[0]
){
	console.log(Target.Name+" is not within melee range.");
	return;
	
}

else if((PHitC-(Target.Stats.Dodge/100)) <= .25){console.log("Your hit was dodged."); CritHit = false;
return;} //Checks for successful hits
else if((PHitC-(Target.Stats.Block/100)) <= .25){console.log("Your hit was blocked."); CritHit = false;
return;}
else if((PHitC-(Target.Stats.Parry/100)) <= .25){console.log("Your hit was parried."); CritHit = false;
return;}

else if (Crit<= .90 &&  Crit > 0){
// checks for successful crits
var TrueDmg = Damage;
console.log("You hit "+Target.Name+" for "+TrueDmg+"."); 
Target.Stats.Health[0]-= TrueDmg;
// check for on-hit effects
if(Actor.Equipment.EquipBonus.OnHit.length > 0){
	for(var i=0; i < Actor.Equipment.EquipBonus.OnHit.length; i++){
	this.roll = Math.random() + Actor.Equipment.EquipBonus.OnHit[i][1];
	if(roll > .90){
		if(Actor.Equipment.EquipBonus.OnHit[i][2] === 1){// check for single cast
		SpellCast(Actor.Equipment.EquipBonus.OnHit[i][1],Actor,Target);
		} else if (Actor.Equipment.EquipBonus.OnHit[i][2] === 2) {// check for double cast
			SpellCast(Actor.Equipment.EquipBonus.OnHit[i][1],Actor,Target);
			SpellCast(Actor.Equipment.EquipBonus.OnHit[i][1],Actor,Target);
			}
			else if(Actor.Equipment.EquipBonus.OnHit[i][2] === 3){// check for triple cast
				SpellCast(Actor.Equipment.EquipBonus.OnHit[i][1],Actor,Target);
				SpellCast(Actor.Equipment.EquipBonus.OnHit[i][1],Actor,Target);
				SpellCast(Actor.Equipment.EquipBonus.OnHit[i][1],Actor,Target);
				
			}
	}
	else {
		//no onhit effects
		console.log("No on hit effects were triggered");
		return;
	}
	}
}
}



else { // calculate and return critcal dmg output
 CritHit= true;
 var TrueDmgX = Damage;
 var TDmg = TrueDmgX +(TrueDmgX/100 * CrDmg);
 console.log("You critcally hit "+Target.Name+" for "+TDmg+".");
 CritHit = false;
 Target.Stats.Health[0]-= TDmg;
 if(Actor.Equipment.EquipBonus.OnHit.length > 0){
	for(var i=0; i < Actor.Equipment.EquipBonus.OnHit.length; i++){
	this.roll = Math.random() + Actor.Equipment.EquipBonus.OnHit[i][1].iSpecStat[2];
	if(roll > .90){
		if(Actor.Equipment.EquipBonus.OnHit[i][2] === 1){// check for single cast
		SpellCast(Actor.Equipment.EquipBonus.OnHit[i][1],Actor,Target);
		} else if (Actor.Equipment.EquipBonus.OnHit[i][2] === 2) {// check for double cast
			SpellCast(Actor.Equipment.EquipBonus.OnHit[i][1],Actor,Target);
			SpellCast(Actor.Equipment.EquipBonus.OnHit[i][1],Actor,Target);
			}
			else if(Actor.Equipment.EquipBonus.OnHit[i][2] === 3){// check for triple cast
				SpellCast(Actor.Equipment.EquipBonus.OnHit[i][1],Actor,Target);
				SpellCast(Actor.Equipment.EquipBonus.OnHit[i][1],Actor,Target);
				SpellCast(Actor.Equipment.EquipBonus.OnHit[i][1],Actor,Target);
				
			}
	}
	}
 }
	else {
		//no onhit effects
		console.log("No on hit effects were triggered");
		return;
	}
	}
}
return;
}
