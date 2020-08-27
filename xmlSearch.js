function search() {
	var qr=document.getElementById("search").value;
	var xml=document.getElementById("XMLdata");
	var count=0;
	var fd=xml.getElementsByTagName("feeds");
	document.getElementById("results").innerHTML="<tr><th>Id</th><th>Title</th><th>Description</th><th>Location</th><th>User Id</th><th>Name</th><th>URL</th><th>Likes</th></tr>"
	for(var i=0;i<fd.length;i++)
	{
		if(((fd[i].innerHTML.replace(/<[^>]*>/g, '')).toLowerCase()).includes(qr.toLowerCase()))
		{
			count++;
			postResult(fd[i]);
		}
	}
	document.getElementById("count").innerText="   "+count+" Results Found For \""+qr+"\" ";
}
function postResult(fd){
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