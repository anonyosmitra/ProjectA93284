const sql = require('mssql')
var config = {
        user: 'client',
        password: 'client5',
        server: 'localhost',
        database: 'test'
    };
    var qr="insert into people([name]) VALUES('anonyo')";
    sql.connect(config);
    var request = new sql.Request();
    request.query('select * from people', function (err, recordset) {

                if (err) console.log(err)

                // send records as a response
                res.send(recordset);

            });
