
const mysql = require('mysql')
const express = require('express')
var app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
)

app.set("view engine", "ejs");
  
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
        mycontroller.updateData
})


app.listen(3003, () => {
    console.log("serever is running at port no 3003")
})




//inserting records into table
app.post('/api/insert', (req, res) => {
    var id=req.body.Id
    var name = req.body.name;
    var empcode = req.body.Empcode;
    var salary = req.body.Salary;



    var sql = `INSERT INTO emp_table
    (
        Id,name,Empcode,Salary

    )
    VALUES
    (
        ${id},'${name}','${empcode}',${salary}
    )`;


    mysqlconnection.query(sql, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfuly inserted into Database")

        }
    })

    res.send("Insereted data")
})



//fetching the data from the database

app.get('/api/getall', function(request, response){
    mysqlconnection.query('select * from emp_table', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);

        }
    });
});




//fetching the individual data from the database
app.get('/api/get/:id', function(request, response){
    mysqlconnection.query('select * from emp_table where id=?',[request.params.id], function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);

        }
    });
});


//deleteing the rows
app.delete('/api/delete/:id', function(request, response){
    mysqlconnection.query('DELETE  from emp_table where id=?',[request.params.id], function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);

        }
    });
});    


//updating the rows 
app.put('/api/upadte/:id', function (request, response) {
    const id = request.params.id;
    const name = request.body.name;
    const empcode = request.body.Empcode;
    const salary = request.body.Salary;
    
    mysqlconnection.query("UPDATE emp_table SET name=? ,Empcode=?, Salary=? WHERE Id=?", [name, empcode, salary, id], (error, results) => {
        if (error) {
            response.status(400).send('Error in database operation');
        } else {
            response.send('successfuly upated')

        }

    });
});