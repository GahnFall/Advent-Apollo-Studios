



var RoomService = {
 UserList:[],
 UserNamesWnums: [],
UserCount: UserList.length,
UserMsgs:[],
UserMsgQueue: [],
UNC: function (uzername){
//function to check name for deviation from naming rules and or policy
var MatchTally = 0;
var name = uzername;
var nameTestCase = name.split("");
console.log(nameTestCase);
console.log(nameTestCase.length);
for(var i = 0; i < nameTestCase.length; i++){
console.log("Test case i = "+i);
var TestCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"
,"p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","_"];
for(var z=0; z < TestCase.length; z++){
	console.log("Test case z = "+z);
	console.log("Testing "+nameTestCase[i]+" against "+TestCase[z]);
if (nameTestCase[i].toLowerCase === TestCase[z]){
	console.log("Match!");
	MatchTally+=1;
	console.log("Current Matches: "+MatchTally);
}
}
},

if(MatchTally === nameTestCase.length){
	console.log(name+" is a valid name.");
	MatchTally=0;
	return true;
} else {
	console.log("Invalid name entry.");
	MatchTally=0;
return false;
}
}



addUser: function (){
	var uzername = prompt("Enter a user name with a maximum of 14 characters. You may use numbers and letters. No special characters allowed, with the exception of underscore.");
	for(var i =0; i< UserList.length; i++){
		if(uzername == UserList[i]) {
			alert("This user name is already taken. Please Try again.");
			console.log("Invalid entry!");
			uzername = undefined;
		return RoomService.addUser();
		}
		else{
			console.log("So far so good.");
		}
		
	}
	 if(uzername.length <= 0) {
		 alert("Invalid user name.");
		 uzername = undefined;
	 } else {
		var tboolNAM = RoomService.UNC(uzername);
		if(tboolNAM == true) {
			var UzahName = document.getElementById("MyUzerName");
			
			var nextUzer = (UserList.length + 1);
			var uUzername = uzername+" "+nextUzer);
			array.push(RoomService.UserNamesWnums, uUzername);
			console.log("adding "+RoomService.UserNamesWnums[nextUzer]+" to the User Names + I.D List!");
			array.push(RoomService.UserList, uzername);
			console.log("adding "+RoomService.UserNamesWnums[nextUzer]+" to the User Names List!");
		}
	 }
},

removeUser: function (){
	
	array.slice()
}


}