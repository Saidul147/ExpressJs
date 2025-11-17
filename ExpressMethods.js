// Methods

const express = require('express')
const app = express()

app.use(express.raw())

app.get('/',(req,res) => {
    console.log(req.body,"response from body")
    res.send("This is home get request")
})

app.listen(4000,() => {
     console.log("server listen on port 4000")
})


// methods description =====================
// express.json() - if client sent the data as json and set the headers Content-Type:application/json then it will work
// express.raw() - if client sent the raw file that will recive here as a buffer, for this set the headers Content-Type: application/octet-strem
