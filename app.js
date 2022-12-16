const express = require('express')
const route = require('./routes/route')
var app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
)

const port=6002

app.listen(port, () => {
    console.log(`serever is running at port no ${port}`)
})


const student = require('./routes/route')

app.use('/crud', student);



