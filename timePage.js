var ampm,hr,min;
var cBox=null;
var selected=null;
var info=false;
function onLoad(){
    var d = new Date();
    ampm = (d.getHours() >= 12) ? "PM" : "AM";
    hr = (d.getHours() >= 12) ? d.getHours()-12 : d.getHours();
    min = d.getMinutes();
    if (min<10)
        min='0'+min;
    document.getElementById("questTime").innerText = hr+' : '+min+' '+ampm;
}
function setCb(bn){
    if (cBox==null)
    {
        cBox=bn;
       document.getElementById("c"+bn).innerHTML="&times;";
       if(bn=="Y")
       document.getElementById("cbN").style.backgroundColor="#072e40";
       else
       {
       document.getElementById("cbY").style.backgroundColor="#072e40";
        setTimeout(LoadTimeEdit, 500);
       }
    }
}
function LoadTimeEdit(){
    document.getElementById("hr").value=hr;
    document.getElementById("min").value=min;
    document.getElementById("ampm").value=ampm;
    document.getElementById("timeQuest").remove();
    document.getElementById("timeEdit").style.visibility="visible";
}
function choose(id){
    if(document.getElementById("editMsg")!=null){
        document.getElementById("editMsg").remove();
        document.getElementById("doneButt").style.visibility="visible";
    }
    if(selected!=null)
        document.getElementById(selected).style.backgroundColor="#121212";
    document.getElementById(id).style.backgroundColor="#006da8";
    selected=id;
    if(id=="ampm")
    {
    id=document.getElementById(id);
    if (id.value=="AM")
        id.value="PM";
    else
        id.value="AM";
    }
}
function editTime(flow){
    if(selected!=null && selected!="ampm")
    {
        var ele=document.getElementById(selected);
        var v=ele.value;
        if(flow=="inc")
        v++;
        else
        v--;
        if(selected=="hr")
        {
            if(v==0)
                v=12;
            if(v==13)
                v=1;
        }
        if(selected=="min")
        {
            if(v==0)
                v=59;
            if(v==60)
                v=0;
            if(v<10)
                v="0"+v;
        }
        ele.value=v;
    }
}
function showInfo(){
if (info){
    document.getElementById("infoBox").style.visibility="hidden";
    info=false;
}
else{
    document.getElementById("infoBox").style.visibility="visible";
    info=true;
}
}