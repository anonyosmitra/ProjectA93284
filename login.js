function onLoad(){
    document.getElementById("logInButton").style.visibility="hidden";
    console.log("loaded");
    }
function keyD(){
    bt=document.getElementById("logInButton");
    lname=document.getElementById("lname");
    empId=document.getElementById("empId");
    pwd=document.getElementById("pwd");
    if(lname.value!="" && empId.value!="" && pwd.value!="")
        bt.style.visibility="visible";
    else
    if(bt.style.visibility=="visible")
    bt.style.visibility="hidden";
    }
function errBox(bl){
    if(bl==1)
        document.getElementById("errorBox").style.visibility="visible";
    else
        {
        document.getElementById("lname").value="";
        document.getElementById("empId").value="";
        document.getElementById("pwd").value="";
        document.getElementById("errorBox").style.visibility="hidden";
        }
    }
function focused(id){
    document.getElementById(id).style.backgroundColor = "#383838";
    document.getElementById(id).style.color = "#E0E0E0";
    document.getElementById(id+"_tit").style.color = "#E0E0E0";
}
function unFocused(id){
    document.getElementById(id).style.backgroundColor = "#252525";
    document.getElementById(id).style.color = "#A0A0A0";
    document.getElementById(id+"_tit").style.color = "#A0A0A0 ";
}