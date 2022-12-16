// var jwt = require('jsonwebtoken');

// module.exports.authinfo = (req, res, next) => {
//     let token = req.headers.authorization;
//     try {
//         if (token) {
//             let auth = jwt.verify(token, "srikant")
//             let { id, username } = auth;
//             req.id = id;
//             req.username = username;
//             next();
//             // console.log(auth);
//         } else {
//             res.send("You are not a valid user")
//         }
//     }
//     catch(err) {
//         res.send(err)
//     }
    
// }


