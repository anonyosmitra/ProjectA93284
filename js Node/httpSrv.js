const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql')
const app = express();
function postQuery(req) {
   var qr="insert into devotees([fName],[lName],[mobile],[city]) values(\'"+req["fName"]+"\',\'"+req["lName"]+"\',\'"+req["mobile"]+"\',\'"+req["city"]+"\')";
   console.log(qr);
   query(qr);
}
async function query(qr){
    var pool = await sql.connect(config);
    var data = await pool.request().query(qr, function (err, recordset) {
                console.log(recordset);});
    pool.close;
    sql.close;
    }
var config = {
        user: 'client',
        password: 'client5',
        server: 'localhost',
        database: 'test'
    };
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(function(req, res, next){
  var data=JSON.parse(Object.keys(JSON.parse(JSON.stringify(req.body)))[0]);
  console.log(data);
  if(req.originalUrl=="/postDetails"){
	postQuery(data);
    res.status(200).send("ok") }});
app.get('/', function (req, res) {
   res.send('Hello World');
})
const server = app.listen(3000, function () {
})