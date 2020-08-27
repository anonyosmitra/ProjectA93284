function search() {
    var xmlhttp = new window.XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            query(this);
        }
    };
    xmlhttp.open("GET", "xmlData.xml", true);
    xmlhttp.send();
}
function query(xml) {
    var xmlDoc = xml.responseXML;
    fd = xmlDoc.getElementsByTagName("feeds");
    var c=0;
    for(var i=0;i<fd.length;i++)
    {
        if((fd[i].innerText).includes("berlin"))
        {
            c++;
            console.log(fd[i]);
        }
    }
	console.log("Count: "+c);
}
function findBooks() {
   var myXML, myNodes;
   var display="";
   myXML= document.all("books").XMLDocument;
   //Put the <name> element into an object.
   myNodes=myXML.getElementsByTagName("name");
   //Extract the different values using a loop.
   for(var counter=0;counter<myNodes.length;counter++) {
      display += myNodes.item(counter).firstChild.nodeValue +
"\n";
   }
   document.show.me.value=display;
}
function testPars(){
var xmlDoc = new ActiveXObject("Microsoft.XMLDOM")
xmlDoc.async="false"
xmlDoc.load("xml")
// ....... processing the document goes here
}