const express =require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer= require("multer");
const cors =require("cors");
const port =5000;
const fs=require("fs"); 
const imageModel=require('./models');
app.use(cors());

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://DEVANG23:sGS9G3qDgNVQztE@cluster0.ngb8lfk.mongodb.net/test",
 {useNewUrlParser: true , useUnifiedTopology: true}
)
.then(()=> console.log("Connected successfully"))
.catch((err)=>console.log("it has an error",err));




app.get("/",(req,res)=>res.send("This is working fine"));

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'/server/uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});
const upload =multer({storage:storage})

app.post('/',upload.single('testImage'),(req,res)=>{
    const saveImage =new imageModel({
        name:req.body.name,
        img:{
            data:fs.readFileSync("/server/uploads"+ req.file.filename),
            contentType:"image/png",
        },
    });
    saveImage.save()
    .then((res)=>{console.log('image is saved')})
    .catch((err)=>{console.log(err,'errror has occured')});
});
app.listen(port,()=>{
    console.log("server running successfully");
});