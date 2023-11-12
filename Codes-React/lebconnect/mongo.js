const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Massoud01:Moni12345_@cluster0.6di6y2l.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err))

const newSchema=    new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    },
    password1:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
       type:Number,
       required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    dateofbirth:{
        type:Date
    }
})
const collection=mongoose.model('test3',newSchema)
module.exports=collection 
