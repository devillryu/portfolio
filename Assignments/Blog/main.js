
var numberpost = 1;
function postFunction()
{
    var message = document.getElementById("text1");
    
    if(numberpost == 1)
    {
    var postit = document.getElementById("post1");
    postit.innerHTML = message.value;
    numberpost++;
    }
    else if(numberpost == 2)
    {
    var postit = document.getElementById("reply1");
    postit.innerHTML = message.value;
    numberpost++;
    }
    else if(numberpost == 3)
    {
    var postit = document.getElementById("reply2");
    postit.innerHTML = message.value;
    numberpost++;
    }
    else{
        alert("Please Clear Message");
    }
    message.value = "";
}
function clearFunction()
{
    var postit = document.getElementById("post1");
    postit.innerHTML = "";
    var postit = document.getElementById("reply1");
    postit.innerHTML = "";
    var postit = document.getElementById("reply2");
    postit.innerHTML = "";
    numberpost = 1;
}
