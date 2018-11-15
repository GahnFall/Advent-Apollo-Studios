var Casting = function(spell,caster,target){
this.Caster = caster;
this.Spell = spell;
this.Target = target;
var castTime = Spell.cast_time - Caster.Stats.Castspeed[0];
var x = SpellCast(Spell,Caster,Target);
setTimeout(x, castTime);
};

function SpellCast(spell,caster,target){
this.SpellData = spell;
this.Caster = caster;
this.Target = target;
var Testa = Math.random();
var spellHit = ((Caster.Stats.MHitchance[0]/100) + Testa)-((Target.Stats.Dodge[0]/100)+(Target.Stats.SpellBlock[0]/100));
var spellCrit = ((Caster.Stats.MCrit[0]/100) + Testa);
var spellForceMin = Caster.Stats.INT * 3;
var spellForceMax = Caster.Stats.INT * 5;
var TargArm;

for(var i=0; i<= Caster.Cooldownz.length; i++){// checks player cooldowns for spellname
if(Caster.Cooldownz[i] == SpellData.Name){
	console.log("Spell fizzled. Still recharging.");
	return;
	
	
} 
else { //check for target type


 if(SpellData.Element === "Flame"){ // a set of test cases to determine which spell elemental resist is to be used in dmg calculations
	 TargArm = Target.Stats.FlDef;
 }
  else if (SpellData.Element === "Frost"){
	 TargArm = Target.Stats.FrDef;
 }
  else if (SpellData.Element === "Electric"){
	 TargArm = Target.Stats.EleDef;
 }
  else if (SpellData.Element === "Poison"){
	 TargArm = Target.Stats.PsnDef;
 }
  else if (SpellData.Element === "Gale"){
	 TargArm = Target.Stats.GaleDef;
 }
  else if (SpellData.Element === "Tide"){
	 TargArm = Target.Stats.TideDef;
 }
  else if (SpellData.Element === "Solar"){
	 TargArm = Target.Stats.SolarDef;
 }
  else if (SpellData.Element === "Solarfrost"){
	 TargArm = Target.Stats.SolarfrDef;
 }
 else if (SpellData.Element === "Stone"){
	 TargArm = Target.Stats.StoneDef;
 }
 else if (SpellData.Element === "Shade"){
	 TargArm = Target.Stats.ShadeDef;
 }
 else if (SpellData.Element === "Shadeflame"){
	 TargArm = Target.Stats.ShadeflDef;
 } 
 else {
	 TargArm = Target.Stats.MWarding;
}



if(Caster.Stats.Stamina[0] < SpellData.stamCost){
console.log("Spell fizzled, not enough stamina to cast!");
return;
}

for(var i=0; i < SpellData.RuneForm.length; i++){// check if correct runes are present
	var Tes = SpellData.RuneForm[i];
	if(Tes != Caster.Equipment.MainHand.Runeslots[i]){
		console.log("Unable to cast, make sure you have the proper runes slotted to cast this spell.");
		return;33
	}
	else {
		console.log("So far so good.");
}
 console.log("Correct runeform detected moving on..");
}
/* 
else if(SpellData.Ttype === 2){// area spells

this.CursorX = event.clientX;
this.CursorY = event.clientY;

this.MowssLoc = [CursorX,CursorY];

function TargSCAN(){
	
};

}
else if(SpellData.Ttype === 3){// line spells
this.CursorX = event.clientX;
this.CursorY = event.clientY;	
}
else if(SpellData.Ttype === 4){// cone spells
this.CursorX = event.clientX;
this.CursorY = event.clientY;	
}*/
else{// direct spells
else if(Caster.Map.XCORDS+(SpellData.castRange) < Target.Map.XCORDS || Caster.Map.YCORDS+(SpellData.castRange) < Target.Map.YCORDS){// checks if target is within spellcasting range
console.log("You are not close enough to cast this spell.");
return;
}
else if (Target.Stats.Health[0] < 0 && SpellData.type !=4){ // checks if target is dead
	console.log("Invalid target. "+Target.Name+" is dead.");
	return;
}
if(SpellData.cDown > 500){ // appends spell cd data to caster's cooldowns and timerz lists
		Caster.Cooldownz.push(SpellData.Name);
		Caster.Timerz.push([SpellData.Name, SpellData.cDown]);
		
	}
	else {
else if(SpellData.Type === 1){ // a function that handles buff spell calculations
	 // base Stat to be modified
	var b = SpellData.StTarget[1]; // resistance stat to be modified
	var v = [SpellData.Name,SpellData.durtn];
	Target.PassiveEffects.push(v);
	
	var seal = switch(Z){
		case "1":return Target.Stats.STR += (SpellData.DmgOheal+(Caster.Stats.INT/50));//STR
		break;
		case "2":return Target.Stats.DEX += (SpellData.DmgOheal+Caster.Stats.INT/50));// DEX
		break;
		case "3":return Target.Stats.INT += (SpellData.DmgOheal+Caster.Stats.INT/50));//INT
		break;
		case "4":return Target.Stats.CON += (SpellData.DmgOheal+Caster.Stats.INT/50));// CON
		break;
		case "5": return Target.Stats.Stamina[1] += (SpellData.DmgOheal+Caster.Stats.INT/50));//Max Stam
		break;
		case "6": return Target.Stats.StamRegen[0] += (SpellData.DmgOheal+Caster.Stats.INT/50));// Stam regen amount
		break;
		case "7": return Target.Stats.PArmor[0] += (SpellData.DmgOheal+Caster.Stats.INT/50)); // physical armor
		break;
		case "8": return Target.Stats.StamRegen[1] -= (SpellData.DmgOheal+(Caster.Stats.INT));// stam regen speed in ms, 500 is the speed cap
		break;
		case "9": return Target.Stats.AttScope[0] += SpellData.DmgOheal;// Melee and Ranged max attacking distance
		break;
		case "10": return Target.Stats.AttSpeed[0] +=SpellData.DmgOheal;// Melee and Ranged Physical Attack Speed
		break;
		case "11": return Target.Stats.PCrit[0] += SpellData.DmgOheal;// Melee and Ranged Physical Crit Chance
		break;
		case "12": return Target.Stats.Block[0] += SpellData.DmgOheal; // Melee and Ranged Physical Block Chance
		break;
		case "13": return Target.Stats.MCrit[0] += SpellData.DmgOheal;// Spell Crit Chance
		break;
		case "14": return Target.Stats.Dodge[0] += SpellData.DmgOheal;// Dodge Chance
		break;
		case "15": return Target.Stats.Parry[0] += SpellData.DmgOheal;// Parry Chance
		break;
		case "16": return Target.Stats.MuvSpd[0] += SpellData.DmgOheal;// Move Speed
		break;
		case "17": return Target.Stats.;
		break;
		case "18": return Target.Stats.;
		break;
		case "19": return Target.Stats.;
		break;
		default: console.log("Err.. something went wrong spell buff mana flows, Chief!!"); return;
		};
		seal(a);
if(SpellData.StTarget[2] == false){
			return;
		} else {
	for(var i=0; i<=b.length-1; i++){// loops through resistance array and applies resistance boost based on value in each array slot
		var testcase = b[i];
		
		if(testcase =! 0){
			if (i === 1){
				console.log("Defense level is currently"+Target.Stats.FlDef+".");
				return Target.Stats.FlDef += (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.FlDef+".");
			}
			else if (i === 2){
				console.log("Defense level is currently"+Target.Stats.FrDef+".");
				return Target.Stats.FrDef += (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.FrDef+".");
			}
			else if (i === 3){
				console.log("Defense level is currently"+Target.Stats.EleDef+".");
				return Target.Stats.EleDef += (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.EleDef+".");
			}
			else if (i === 4){
				console.log("Defense level is currently"+Target.Stats.PsnDef+".");
				return Target.Stats.PsnDef += (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.PsnDef+".");
			}
			else if (i === 5){
				console.log("Defense level is currently"+Target.Stats.GaleDef+".");
				return Target.Stats.GaleDef += (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.GaleDef+".");
			}
			else if (i === 6){
				console.log("Defense level is currently"+Target.Stats.TideDef+".");
				return Target.Stats.TideDef += (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.TideDef+".");
			}
			else if (i === 7){
				console.log("Defense level is currently"+Target.Stats.SolarDef+".");
				return Target.Stats.SolarDef += (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.SolarDef+".");
			}
			else if (i === 8){
				console.log("Defense level is currently"+Target.Stats.SolarFrDef+".");
				return Target.Stats.SolarfrDef += (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.SolarFrDef+".");
			}
			else if (i === 9){
				console.log("Defense level is currently"+Target.Stats.StoneDef+".");
				return Target.Stats.StoneDef += (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.StoneDef+".");
			}
			else if (i === 10){
				console.log("Defense level is currently"+Target.Stats.ShadeDef+".");
				return Target.Stats.ShadeDef += (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.ShadeDef+".");
			}
			else if (i === 11){
				console.log("Defense level is currently"+Target.Stats.ShadeflDef+".");
				return Target.Stats.ShadeflDef += (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.ShadeflDef+".");
			}
			else {
				console.log("Defense level is currently"+Target.Stats.MWarding+".");
				return Target.Stats.MWarding += (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.MWarding+".");
			}
			
		}
		}	
		}
	}

else if(SpellData.Type === 2){// handles healing spell calculations
var CrHealTst = Math.random() + (Caster.Stats.MCrit[0]/100);
	if(CrHealTst < .70){// test for crit heals then calculate heal amount
		var Testb = Math.random();
if (Testb <= .33 && Testb > 0){  // calculate non-crit heals
	this.HealAMT = (spellForceMin+SpellData.DmgOheal);
	console.log("You healed "+Target.Name+" for "+HealAMT+"!");
	return Target.Stats.Health[0] += HealAMT;
	
} 
else if (Testb <= .66 && Testb >= .34){
this.HealAMT = (spellForceMin+(Math.floor(Math.random()*3*3)));
console.log("You healed "+Target.Name+" for "+HealAMT+"!");
	return Target.Stats.Health[0] += HealAMT;
} 
else {
this.HealAMT = Math.floor((Math.random()*spellForceMax)+spellForceMin);
console.log("You healed "+Target.Name+" for "+HealAMT+"!");
	return Target.Stats.Health[0] += HealAMT;
}
	}
 else { // calculate crit heals
				var Testb = Math.random();
if (Testb <= .33 && Testb > 0){
	this.HealAMT = (spellForceMin+SpellData.DmgOheal*(Caster.Stats.MCritDmg[0]/100));
	console.log("You critcally healed "+Target.Name+" for "+HealAMT+"!");
	return Target.Stats.Health[0] += HealAMT;
} 
else if (Testb <= .66 && Testb >= .34){
this.HealAMT = (spellForceMin+(Math.floor(Math.random()*3*3)))*(Caster.Stats.MCritDmg[0]/100);
console.log("You critcally healed "+Target.Name+" for "+HealAMT+"!");
	return Target.Stats.Health[0] += HealAMT;
} 
else {
this.HealAMT = Math.floor((Math.random()*spellForceMax)+spellForceMin)*(Caster.Stats.MCritDmg[0]/100);
console.log("You critcally healed "+Target.Name+" for "+HealAMT+"!");
	return Target.Stats.Health[0] += HealAMT;

		
	}
	
}	
}
else if (spellHit < .30){// calculate if a spell hits (for debuffs and damage spells)
console.log("Spell fizzled.");
return;
} 
else if(SpellData.Type === 3){ // handles debuff spell calculations
	var a = SpellData.StTarget[0]; // base Stat to be modified
	var b = SpellData.StTarget[1]; // resistance stat to be modified
	
	var DSeal = switch(O){
		case "1": return Target.Stats.STR -= SpellData.DmgOheal;//STR
		break;
		case "2": return Target.Stats.DEX -= SpellData.DmgOheal;// DEX
		break;
		case "3": return Target.Stats.INT -= SpellData.DmgOheal;//INT
		break;
		case "4": return Target.Stats.CON -= SpellData.DmgOheal;// CON
		break;
		case "5": return Target.Stats.Stamina[1] -= SpellData.DmgOheal;//Max Stam
		break;
		case "6": return Target.Stats.StamRegen[0] -= SpellData.DmgOheal;// Stam regen amount
		break;
		case "7": return Target.Stats.PArmor[0] -= (SpellData.DmgOheal+Caster.Stats.INT/50)); // physical armor
		break;
		case "8": return Target.Stats.StamRegen[1] += SpellData.DmgOheal;// stam regen speed in ms, 500 is the speed cap
		break;
		case "9": return Target.Stats.AttScope[0] -= SpellData.DmgOheal;// Melee and Ranged max attacking distance
		break;
		case "10": return Target.Stats.AttSpeed[0] -=SpellData.DmgOheal;// Melee and Ranged Physical Attack Speed
		break;
		case "11": return Target.Stats.PCrit[0] -= SpellData.DmgOheal;// Melee and Ranged Physical Crit Chance
		break;
		case "12": return Target.Stats.Block[0] -= SpellData.DmgOheal;// Melee and Ranged Block Chance
		break;
		case "13": return Target.Stats.MCrit[0] -= SpellData.DmgOheal; // Spell Crit Chance
		break;
		case "14": return Target.Stats.Dodge[0] -= SpellData.DmgOheal; // Dodge Chance
		break;
		case "15": return Target.Stats.Parry[0] -= SpellData.DmgOheal; // Parry Chance
		break;
		case "16": return Target.Stats.MuvSpd[0] -= SpellData.DmgOheal; // Move Speed
		break;
		case "17": return Target.Stats.SpellBlock[0] -= SpellData.DmgOheal; // Spell Block Chance
		break;
		case "18": return Target.Stats.;
		break;
		case "19": return Target.Stats.;
		break;
		default: console.log("Err.. something went wrong spell buff mana flows, Chief!!"); return;
		};
		DSeal(a);
		
		if(SpellData.StTarget[2] == false){
			return;
		} 

else {
	for(var i=0; i<=b.length-1; i++){// loops through resistance array and applies resistance boost based on value in each array slot
		var testcase = b[i];
		if(testcase =! 0){
			if (i === 1){
				console.log("Defense level is currently"+Target.Stats.FlDef+".");
				return Target.Stats.FlDef -= (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.FlDef+".");
			}
			else if (i === 2){
				console.log("Defense level is currently"+Target.Stats.FrDef+".");
				return Target.Stats.FrDef -= (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.FrDef+".");
			}
			else if (i === 3){
				console.log("Defense level is currently"+Target.Stats.EleDef+".");
				return Target.Stats.EleDef -= (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.EleDef+".");
			}
			else if (i === 4){
				console.log("Defense level is currently"+Target.Stats.PsnDef+".");
				return Target.Stats.PsnDef -= (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.PsnDef+".");
			}
			else if (i === 5){
				console.log("Defense level is currently"+Target.Stats.GaleDef+".");
				return Target.Stats.GaleDef -= (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.GaleDef+".");
			}
			else if (i === 6){
				console.log("Defense level is currently"+Target.Stats.TideDef+".");
				return Target.Stats.TideDef -= (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.TideDef+".");
			}
			else if (i === 7){
				console.log("Defense level is currently"+Target.Stats.SolarDef+".");
				return Target.Stats.SolarDef -= (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.SolarDef+".");
			}
			else if (i === 8){
				console.log("Defense level is currently"+Target.Stats.SolarFrDef+".");
				return Target.Stats.SolarfrDef -= (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.SolarFrDef+".");
			}
			else if (i === 9){
				console.log("Defense level is currently"+Target.Stats.StoneDef+".");
				return Target.Stats.StoneDef -= (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.StoneDef+".");
			}
			else if (i === 10){
				console.log("Defense level is currently"+Target.Stats.ShadeDef+".");
				return Target.Stats.ShadeDef -= (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.ShadeDef+".");
			}
			else if (i === 11){
				console.log("Defense level is currently"+Target.Stats.ShadeflDef+".");
				return Target.Stats.ShadeflDef -= (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.ShadeflDef+".");
			}
			else {
				console.log("Defense level is currently"+Target.Stats.MWarding+".");
				return Target.Stats.MWarding -= (SpellData.DmgOheal+Caster.Stats.INT/50));
				console.log("Defense level is currently"+Target.Stats.MWarding+".");
			}
		}
}
}
}
else if(SpellData.Type === 4 && Target.Stats.Health[0] <= 0){ // handles revival spells
	Target.MapData.XCORDS = Caster.MapData.XCORDS+1;
	Target.MapData.YCORDS = Caster.MapData.YCORDS+1;
	Target.MapData.ZCORDS = Caster.MapData.ZCORDS;
	Target.Stats.Health[0] = 1;
}
	
else if(spellCrit < .90){// check if a spell crits
  var Testb = Math.random();

if (Testb <= .33 && Testb > 0){  // calculate non-crit spell damage
	this.SpellForce = (spellForceMin+SpellData.DmgOheal)- TargArm;
	
	console.log("Your "+SpellData.Name+" hits "+Target.Name+" for "+SpellForce+"!");

return Target.Stats.Health[0] -= SpellForce;

} 
else if (Testb <= .66 && Testb >= .34){
this.SpellForce = (spellForceMin+(Math.floor(Math.random()*3*3))+SpellData.DmgOheal)-TargArm;
console.log("Your "+SpellData.Name+" hits "+Target.Name+" for "+SpellForce+"!");
return Target.Stats.Health[0] -= SpellForce;
} 
else {
this.SpellForce = Math.floor(((Math.random()*spellForceMax)+spellForceMin)+SpellData.DmgOheal)-TargArm;

console.log("Your "+SpellData.Name+" hits "+Target.Name+" for "+SpellForce+"!");
return Target.Stats.Health[0] -= SpellForce;
}
}
 
else {// calculate spell crits
	var Testb = Math.random();
if (Testb <= .33 && Testb > 0){
	this.SpellForce = (spellForceMin+SpellData.DmgOheal*(Caster.Stats.MCritDmg[0]/100));
	console.log("Your "+SpellData.Name+" critically strikes "+Target.Name+" for "+SpellForce+" "+SpellData.Element+" damage!");
	return Target.Stats.Health[0] -= SpellForce;

} 
else if (Testb <= .66 && Testb >= .34){
this.SpellForce = (spellForceMin+(Math.floor(Math.random()*3*3)))*(Caster.Stats.MCritDmg[0]/100);
console.log("Your "+SpellData.Name+" critically strikes "+Target.Name+" for "+SpellForce+" "+SpellData.Element+" damage!");
return Target.Stats.Health[0] -= SpellForce;
} 
else {
this.SpellForce = Math.floor((Math.random()*spellForceMax)+spellForceMin)*(Caster.Stats.MCritDmg[0]/100) - TargArm;
console.log("Your "+SpellData.Name+" critically strikes "+Target.Name+" for "+SpellForce+" "+SpellData.Element+" damage!");
return Target.Stats.Health[0] -= SpellForce;
		
	}




}
}


			
}
}

}
}
