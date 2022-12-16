const mysqlconnection = require('../database/db')
// var jwt = require('jsonwebtoken');

const insertData = (req, res) => {
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


    mysqlconnection.query(sql, function (error, results) {
        if (error) {
            console.log(err);
        } else {

            res.send("Successfully Insereted data")

        }
    })

    
}


const getallData = (req, res) => {
    console.log(req);
    mysqlconnection.query('select * from emp_table', function(error, results){
        if ( error ){
            res.status(400).send('Error in database operation');
        } else {
            res.send(results);

        }
    });    console.log()

    
}


const getData = (req, res) => {
    mysqlconnection.query('select * from emp_table where id=?',[req.params.id], function(error, results){
        if ( error ){
            res.status(400).send('Error in database operation');
        } else {
            res.send(results);
               
        }
    });

}


const deleteData = (req, res) => {
    console.log(req.params);
    mysqlconnection.query('DELETE  from emp_table where id=?',[req.params.id], function(error, results){
        if ( error ){
            res.status(400).send('Error in database operation');
        } else {
            res.send("Successfuly deleted one row");

        }
    });
}


const updateData = (req, res) => {
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

}








// const userlogin = async (req, res) => {
//     console.log(req.body);
//     let { username, id } = req.body;
//     let userdeatils = {
//         name: username,
//         id:id,
//     }
//     // console.log("hi");
//     var token = jwt.sign(userdeatils, "srikant");
//     res.send(token)
//     // console.log(token)
// }


module.exports = {
    insertData,getData,deleteData,getallData,updateData
}

