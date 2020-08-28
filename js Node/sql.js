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
    request.query(qr);