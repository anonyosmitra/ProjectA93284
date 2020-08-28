const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql')
const app = express();
app.use(bodyParser.json());
app.get('/', function (req, res) {
   res.send('Hello World');
})
app.post('/', function (req, res) {
   console.log(req.body["MyKey"]);      // your JSON
   res.send(req.body["MyKey"])
})

const server = app.listen(3000, function () {
})
function postQuery(data){
async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('mssql://client:client5@localhost/test')
        const result = await sql.query``
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}
}