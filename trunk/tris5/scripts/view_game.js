function onReadyGameBtClick(event)
{
	sfs.send( new SFS2X.Requests.System.ExtensionRequest("ready", {}, sfs.lastJoinedRoom))	
	//Remove Game Popup
	//removeGamePopUp();
	//removeGameMessage();
}

function onStartGameBtClick(event)
{
	//tanlong: begin
	createjs.Sound.play("click");
	//tanlong: end
	
	sfs.send( new SFS2X.Requests.System.ExtensionRequest("start", {}, sfs.lastJoinedRoom))	
	//Remove Game Popup
	//removeGamePopUp();
	//removeGameMessage();
}