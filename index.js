const express = require("express")
const bodyParser = require("body-parser")
const Customer = require('./customer.js')
const cors = require("cors")
const app = express()

const port = process.env.PORT || 8000
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.get('/',(request,response)=>{
    response.send("test success")
})

app.post('/add',(request,response)=>{
    const data = {
        name: request.body.name,
        age: request.body.age,
        gender: request.body.gender
    }
    Customer.create(data,err => {
        if (err){
            response.status(404)  
            response.send('insert fail')  
        }else{
            response.status(200)  
            response.send('insert success') 
        }
    })
})

app.get('/read',(request,response)=>{
    Customer.find().exec((err,docs) =>{
        response.status(200)
        response.json(docs)    
    })
})

app.put('/update',(request,response)=>{
    Customer.updateOne({name:{$eq:"kana"}},request.body)
    .exec((errs,result)=>{
        if (errs){
            console.log(errs)
        }else{
            response.send("update success")
        }
    })
})

app.delete('/delete',(request,response)=>{
    Customer.deleteOne({name:{$eq:"kana"}})
    .exec((errs,result)=>{
        if (errs){
            console.log(errs)
        }else{
            response.send("delete success")
        }
    })
})

app.get('/api',(request,response)=>{
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
    console.log("connect to port",port)
})