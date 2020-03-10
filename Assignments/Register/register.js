
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}
function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var x = document.forms["myForm"]["password"].value;
    var y = document.forms["myForm"]["repassword"].value;
    if(x != y)
    { 
        var errormessage = document.getElementById("errormsg");
        errormessage.innerHTML = "Password is not correct"
        return(false);
    }
    
}
