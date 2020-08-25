function onLoad(){
	var dt=new Date();
	//document.getElementById("D_start").max=dtToStr(dt);
}
function CalDates(){
	var dt=new Date(document.getElementById("D_start").value);
	if(dt=="")
		return(null);
	dt.setDate(dt.getDate() + 9);
	for(var i=0;i<3;i++)
	{
		dt.setDate(dt.getDate() + 1);
		console.log(dt);
		document.getElementById("D_1"+i).value=dtToStr(dt);
	}
}
function dtToStr(dt){
	console.log(dt.getMonth());
	var mon=dt.getMonth()+1;
	var d=dt.getDate();
	if(mon<10)
		mon="0"+mon;
	if(d<10)
		d="0"+d;
		return((dt.getYear()+1900)+'-'+mon+'-'+d);
}