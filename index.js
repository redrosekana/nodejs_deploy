const express = require("express")
const app = express()
const port = process.env.PORT || 8000


app.get('/',(request,response)=>{
    response.send("test api")
})

app.get('/api/test',(request,response)=>{
    response.json([
        {
            title:"lorem 1",
            content:"kana is good"
        },
        {
            title:"lorem 2",
            content:"jack is good"
        },
        {
            title:"lorem 3",
            content:"net is bad"
        },
        {
            title:"lorem 4",
            content:"non is good"
        }
    ])
})

app.listen(port,()=>{
    console.log("connect to port 8000")
})