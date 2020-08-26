function onLoad(){
	var dt=new Date();
	$('#D_start').datepicker();
	$('#D_10').datepicker();
	$('#D_11').datepicker();
	$('#D_12').datepicker();
	//document.getElementById("D_start").max=dtToStr(dt);
}
function CalDates(){

	var dt=strToDate($("#D_start").datepicker()[0].value);
	if(dt=="")
		return(null);
	dt.setDate(dt.getDate() + 9);
	for(var i=0;i<3;i++)
	{
		dt.setDate(dt.getDate() + 1);
		$("#D_1"+i).datepicker()[0].value=dtToStr(dt);
	}
}
function strToDate(str){
	var dt=new Date(str.substring(6,10)+'-'+str.substring(3,5)+'-'+str.substring(0,2));
	return(dt);
}
function dtToStr(dt){
	var mon=dt.getMonth()+1;
	var d=dt.getDate();
	if(mon<10)
		mon="0"+mon;
	if(d<10)
		d="0"+d;
		return(d+'/'+mon+'/'+(dt.getYear()+1900));
}