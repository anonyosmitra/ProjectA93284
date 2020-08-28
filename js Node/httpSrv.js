const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql')
const app = express();
var config = {
        user: 'client',
        password: 'client5',
        server: 'localhost',
        database: 'test'
    };
app.use(bodyParser.json());
app.get('/', function (req, res) {
   res.send('Hello World');
})
app.post('/postDetails', function (req, res) {
   console.log(req.body);
   var qr="insert into people([fName],[lName],[mobile],[city]) values(\'"+req.body["fName"]+"\',\'"+req.body["lName"]+"\',\'"+req.body["mobile"]+"\',\'"+req.body["city"]+"\')";
   console.log(qr);
   sql.connect(config);
    var request = new sql.Request();
    request.query(qr);
    sql.close();
    res.send('ok');
})

const server = app.listen(3000, function () {
})