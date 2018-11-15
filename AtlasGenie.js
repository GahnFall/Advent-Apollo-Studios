AtlasGenie = {
Maps: {
ID000:{

TileData:"",// location of JSON tile data information
MapConstructor: function(TileNfo){ // draws a map based on info provided in JSON map data(handles collision and objects that can be interacted with)
if(TileNfo.)
}
MobCounter: 1,// current amount of monsters on the map
SpwdMobs:[],// current monsters on the map w/ X,Y,Z Cords
Players:[],// current players on the map w/ X,Y,Z Cords
SpwdObjs:[],// current interactive objects on the map w/ X,Y,Z cords and status
SpwdRsNodes:[],// current resource nodes on the map w/ X,Y,Z Cords and type

FarmGenie: {
	PlantCounter: 0,
	
function Farming(player,uPlantID,TileData){
this.Plant = uPlantID;
this.Farmer = player;
this.TileInfo = TileData;
if(TileInfo.FarmPlot[0] == True && TileInfo.FarmPlot[1] == "empty"){//checks  if plot is farmable and if its empty
TileInfo.FarmPlot[1] = "planted";
if(TileInfo.FarmPlot[1] == "planted") {
TileInfo.FarmLayer.Img ="DirtStatePLANTED.png";
return;
}
else if(TileInfo.FarmPlot[1] == "seedling"){
TileInfo.FarmLayer.Img ="DirtStateSEEDLING.png";
return;
}
else if(TileInfo.FarmPlot[1] == "plantling"){
TileInfo.FarmLayer.Img ="DirtStatePLANTLING.png";
return TileInfo;
}
else if(TileInfo.FarmPlot[1] == "blossom"){
TileInfo.FarmLayer.Img ="DirtStateBLOSSOM.png";
TileInfo.PlantLayer.Img =Plant.Blossom;
return TileInfo;
}
else if(TileInfo.FarmPlot[1] == "harvest"){
TileInfo.FarmLayer.Img ="DirtStateHARVEST.png";
TileInfo.PlantLayer.Img =Plant.Harvest;
return TileInfo;
}
else {
	console.log("Errr..something went wrong chief, we gotta check the system again!");
	
}

} 


};

}
}
},













};