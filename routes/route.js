const { Router } = require('express')

const router = Router();

const { insertData,getData,getallData,deleteData,updateData} = require('../controllers/controller');

// const {authinfo} = require("../middleware/auth")


//insert the data
router.post('/api/insert', insertData)

//fetching all data
// router.post('/userlogin', userlogin);

router.get('/api/getall',getallData)


//fetching individual row 
router.get('/api/get/:id',getData)

// //deleteing the data 
router.delete('/api/delete/:id',deleteData)


// //updating the data 
router.put('/api/update',updateData )


module.exports = router;