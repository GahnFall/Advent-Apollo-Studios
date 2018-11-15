function spawnMonster(uMID){
Monster = uMID;
Monster.MapData.XCORDS[0] = Monster.MapData.spawnCords[0];
Monster.MapData.YCORDS[0] = Monster.MapData.spawnCords[1];
Monster.MapData.ZCORDS[0] = Monster.MapData.spawnCords[2];
return AtlasGenie.SpwdMobs.push(Monster);

}