window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick= startGame;
}

function startGame(){
	alert("Ready");
	clearScreen();
	addBox();
	timeStart();
	document.getElementById("start").onclick= "";
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById("clock");
	timer = setInterval(timeCount,1000);
	
	function timeCount(){
		var allbox = document.querySelectorAll("#squares-layer box");	
		x.innerHTML = second;
		second--;
		if(second <= -2)
		{
			alert("Time out");
			clearInterval(timer);
			x.innerHTML = "";
			clearScreen();
			document.getElementById("start").onclick= startGame;
		}
		else if(allbox.length == 0)
		{
			alert("clear");
			clearInterval(timer);
			x.innerHTML = "";
			document.getElementById("start").onclick= startGame;
		}
	}
}

function addBox(){

	var numbox = document.getElementById("numbox").value;
	var squaresLayer = document.getElementById("squares-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("box");
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		squaresLayer.appendChild(tempbox);
		tempbox.style.backgroundColor= colorDrop;
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#squares-layer box");
	//delete all  squares
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}




