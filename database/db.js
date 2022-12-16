const mysql = require('mysql')
  
var mysqlconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'active36',
    database: 'employee'
    
})
 
mysqlconnection.connect(function (err) {
    if (!err)
        console.log("DB connection succeed")
    else
        console.log("DB connection failed"+JSON.stringify(err,undefined,2))
    
})






module.exports = mysqlconnection;