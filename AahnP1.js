Aahn = new PCombatant("uPID00000000","Aahln",["0000","Beginner Island",[0,0],[0,0],[7,7]],"F:\n\Game Parts\Game resources\AngelOfThorGoldWingz.gif");
Aahn.SksNSpsList[0] = ["Blessed Recovery", 0,1];

AddSpell(player, spell){
	let Player = player;
	let Spell = spell;
this.spEXP = 0;
this.spLvL=1;
	Player.SksNSpsList.push([Spell.Name, spEXP, spLvL]); // adds the spell to the player's skills and spells list [0] spell name [1] spell exp tracker, [2] spell lvl
return;
};

RemoveSpell(player, spell){
	let Player = player;
	let Spell = spell;
	for(let i=0; i < Actor.SksNSpsList.length; i++){
		
		if(Actor. Actor.SksNSpsList[i][0] === Spell.Name){		
Actor.SksNSpsList.Slice(i, 1); // removes the spell from player's spell list
console.log(Spell.Name+" was removed.");
		} else {
			console.log("No match!");
		}

	
};

return;

}


ShowSpellInfo(spell){
	let Spell = spell;
	let 1 = Spell.Name;
	let 2 = Spell.
	console.log(
	
	
}