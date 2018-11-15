var userCounter = 1;
var creUzer = function(usC){
this.usC = usC;
this.Uzer = {
ID: Math.floor(usC + Math.random()*(usC/50)),
Name:prompt("Enter a user name."),
}
userCounter+=1;
}


var chtM = document.getElementById('chatMsgs');
 

var sChatMsg = function(msgTxt,userName){
this.UserName = userName;
this.msgTxt = msgTxt;
this.Msg = UserName+": "+msgTxt;
chtM.push(Msg);
};


