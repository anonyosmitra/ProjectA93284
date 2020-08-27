function search() {
	var qr=document.getElementById("search").value;
	var xml=document.getElementById("XMLdata");
	var count=0;
	var fd=xml.getElementsByTagName("feeds");
	for(var i=0;i<fd.length;i++)
	{
		if((fd[i].innerHTML.toLowerCase()).includes(qr.toLowerCase()))
		{
			count++;
			postResult(fd[i]);
		}
	}
}
function postResult(fd){
	console.log(fd.innerHTML);
	var cols=["id","title","description","location","userId","name","url","likeCount"];
	var row="";
	for(var i=0;i<cols.length;i++){
		row+="<td>"+fd.getElementsByTagName(cols[i])[0].innerHTML+"</td>";
	}
	document.getElementById("results").innerHTML+="<tr>"+row+"</tr>";

}
var  methods={"search":search};
function onLoad(){
	onEnter({"div":"search","fun":"search"});
}
function onEnter(arg)
{
	var div = document.getElementById(arg["div"]);
	div.addEventListener("keyup", function(event) {
 	event.preventDefault();
 	if (event.keyCode === 13) {
    methods[arg["fun"]]();}
	else if("keyD" in arg){
	methods[arg["keyD"]]();}});
		}