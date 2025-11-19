// Methods

const express = require('express')
const app = express()

// app.use(express.json()) //get the json data
// app.use(express.raw()) //get the buffer data
// app.use(express.text()) //get the plain text from request body

// app.use(express.static(`${__dirname}/public/`,{
//     index:'home.html'
// }))

// const router = express.Router({
//     caseSensitive:true //by default it gets caseSensitive false
// })

// app.use(router)


app.use(express.urlencoded({
    extended:false
}))



// router.get('/about',(req,res) => {
//     console.log(req.body,"Response from body")
//     res.send("This is home with router")
// })
app.get('/',(req,res) => {
    console.log(req.body,"Response from body")
    res.send("This is home with router")
})


// app.get('/',(req,res) => {
//     // console.log(req.body.toString(),"response from body for raw data")
//     console.log(req.body,"response from body for raw data")
//     res.send("This is home get request")
// })

app.listen(4000,() => {
     console.log("server listen on port 4000")
})


// methods description =====================
// express.json() - if client sent the data as json and set the headers Content-Type:application/json then it will work
// express.raw() - if client sent the raw data or anything that will recive here as a buffer, for this set the headers Content-Type: application/octet-strem
