// Methods

const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(req,res) => {
    console.log(req.body,"response from body")
    res.send("This is home get request")
})

app.listen(4000,() => {
     console.log("server listen on port 4000")
})