const express = require("express")
const app = express()
const port = process.env.PORT || 8000

app.get('/api/test',(request,response)=>{
    response.json([
        {
            title:"lorem 1",
            content:"kana is bad"
        },
        {
            title:"lorem 2",
            content:"kana is good"
        }
    ])
})

app.listen(8000,()=>{
    console.log("connect to port 8000")
})