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

function RangedDMG(actor,target) {

this.Actor = actor;
this.Target = target;
this.Crit = (WonderGenie(Actor.Stats.PCrit[0])+(Actor.Stats.DEX*.03);
this.PHitC = (WonderGenie(Actor.Stats.PHitChance[0])+(Actor.Stats.DEX * .01);
this.CrDmg = ((Actor.Stats.PCritDMG[0]+150)+((Actor.Stats.DEX*.05)+(Actor.Stats.INT*1));
this.Damage=0;
this.EqWeapon = Actor.Equipment.MainHand;

this.StatMod1 = Actor.Stats.STR*2; // Actor's STR stat
this.StatMod2 = Actor.Stats.DEX*5; // Actor's DEX stat
this.ModdedStat = StatMod1 + StatMod2; // combined melee attack power from stats
this.minDmg = Math.floor(Math.random()*(EqWeapon.MinDmg+ModdedStat)); //Weapon's MinDmg +Stat mods = Actor's ranged minimum damage
this.maxDmg = Math.floor(Math.random()*(EqWeapon.MaxDmg+ModdedStat)); //Weapon's MaxDmg +Stat mods =Actor's ranged maximum damage

if(EqWeapon.Element === "Flame"){ // a set of test cases to determine which spell elemental resist is to be used in dmg calculations
	 TargArm = Target.Stats.FlDef;
 }
  else if (EqWeapon.Element === "Frost"){
	 TargArm = Target.Stats.FrDef;
 }
  else if (EqWeapon.Element === "Electric"){
	 TargArm = Target.Stats.EleDef;
 }
  else if (EqWeapon.Element === "Poison"){
	 TargArm = Target.Stats.PsnDef;
 }
  else if (EqWeapon.Element === "Gale"){
	 TargArm = Target.Stats.GaleDef;
 }
  else if (EqWeapon.Element === "Tide"){
	 TargArm = Target.Stats.TideDef;
 }
  else if (EqWeapon.Element === "Solar"){
	 TargArm = Target.Stats.SolarDef;
 }
  else if (EqWeapon.Element === "Solarfrost"){
	 TargArm = Target.Stats.SolarfrDef;
 }
 else if (EqWeapon.Element === "Stone"){
	 TargArm = Target.Stats.StoneDef;
 }
 else if (EqWeapon.Element === "Shade"){
	 TargArm = Target.Stats.ShadeDef;
 }
 else if (EqWeapon.Element === "Shadeflame"){
	 TargArm = Target.Stats.ShadeflDef;
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
	Console.log("Invalid target. Target is dead.");
}

else if(// Checks if target is within shooting range
(Actor.Map.XCORDS[0]+(Actor.Stats.AttScope[0]*32)) < Target.Map.XCORDS[0] || 
(Actor.Map.XCORDS[0]-(Actor.Stats.AttScope[0]*32)) > Target.Map.XCORDS[0] ||
(Actor.Map.YCORDS[0]+(Actor.Stats.AttScope[0]*32)) < Target.Map.YCORDS[0] ||
(Actor.Map.YCORDS[0]-(Actor.Stats.AttScope[0]*32)) > Target.Map.YCORDS[0] ||
 Actor.Map.ZCORDS[0]+(Actor.Stats.AttScope[2]) != Target.Map.ZCORDS[0]
){
	console.log(Target.Name+" is not within range.");
	return;
	
}
else if((PHitC-(Target.Stats.Dodge/100)) <= .25){
	console.log("Your hit was dodged."); 
	CritHit = false;
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
if(Actor.EquipBonus.OnHit.length > 0){
	for(var i=0; i < Actor.EquipBonus.OnHit.length; i++){
	this.roll = Math.random() + Actor.EquipBonus.OnHit[i][1];
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
}



else { // calculate and return critcal dmg output
 CritHit= true;
 var TrueDmgX = Damage;
 var TDmg = TrueDmgX +(TrueDmgX/100 * CrDmg);
 console.log("You critcally hit "+Target.Name+" for "+TDmg+".");
 CritHit = false;
 Target.Stats.Health[0]-= TDmg;
 if(Actor.EquipBonus.OnHit.length > 0){
	for(var i=0; i < Actor.EquipBonus.OnHit.length; i++){
	this.roll = Math.random() + Actor.EquipBonus.OnHit[i][1].iSpecStat[2];
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
