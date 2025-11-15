
//======== raw node js=========== 
// const http = require('http')

// const server = http.createServer((req,res) => {
//     if(req.url === "/"){
//         res.write("This is home")
//         res.end()
//     }else if(req.url === "/about" && req.method === "GET"){
//         res.write("this is about page")
//         res.end()
//     }else{
//         res.write("Route is not found")
//         res.end()
//     }
// })

// server.listen(4000)
// console.log("server listen 4000")

// same task with 

const express =require('express')
const app = express()

app.get('/',(req,res) => {
    res.send("this is home get")
})

app.post('/',(req,res) => {
    res.send("This is home post")
})

app.listen(4000, () => {
    console.log("server listen on port 4000")
})