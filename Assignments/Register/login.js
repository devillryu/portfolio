function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;
function loginLoad(){
	var login = document.getElementById("myLogin");
	login.onsubmit = checkLogin;
	var parameter = getParams();
	console.log(parameter["username"]);
	console.log(parameter["password"]);
}

function checkLogin()
{
	 var parameter = getParams();
	var x = document.forms["myLogin"]["username"].value;
    var y = document.forms["myLogin"]["password"].value;
    if(x == parameter["username"] && y == parameter["password"])
    { 
		alert("Login!!");
	}
	else if(x != parameter["username"]|| y != parameter["password"])
	{
		alert("Username or Password is notcorrect");
	}
	return(false);
}

			