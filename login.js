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
    document.getElementById(id).style.backgroundColor = "464346";
    document.getElementById(id).style.color = "white";
    document.getElementById(id+"_tit").style.color = "white";
}
function unFocused(id){
    document.getElementById(id).style.backgroundColor = "#1c1920";
    document.getElementById(id).style.color = "#a09fa0";
    document.getElementById(id+"_tit").style.color = "#9f9d9f ";
}