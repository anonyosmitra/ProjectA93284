var sql = require('mssql')
var config = {
        user: 'client',
        password: 'client5',
        server: 'localhost',
        database: 'test'
    };
    var qr="insert into people([name]) VALUES('anonyo')";
    async function query(){
    var pool = await sql.connect(config);
    var data = await pool.request().query('select * from people', function (err, recordset) {
                console.log(recordset);});
    pool.close;
    sql.close;
    }
