function FarmGenie(player,uPlantID,TileData){
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