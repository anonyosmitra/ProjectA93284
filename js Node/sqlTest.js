const sql = require('mssql')

async () => {
    try {
        await sql.connect('mssql://client:client5d@localhost/test')
        const result = await sql.query`select * from people`
        console.dir(result)
    } catch (err) {
	    console.log(err)
    }
}