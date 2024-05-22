const express =require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const UserModel = require('./models/UserSchema')

const app=express()
app.use(cors())
app.use(express.json())

//connect to DB
mongoose.connect("mongodb+srv://mimmaDemo:T3YOZHO8ToQ6LgW8@atlascluster.avyqoym.mongodb.net/crud")

//UserApi/create/Read/Update/Delete
app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.get("/",(req,res)=>{
    UserModel.find({})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.get("/getUser/:id",(req,res)=>{
    const id = req.params.id;
    console.log(id);
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    })
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("Server is Running")
})