const express =require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer= require("multer");
const cors =require("cors");
const port =5000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

mongoose
.connect("mongodb+srv://DEVANG23:sGS9G3qDgNVQztE@cluster0.ngb8lfk.mongodb.net/test",
 {useNewUrlParser: true , useUnifiedTopology: true}
)
.then(()=> console.log("Connected successfully"));




app.get("/",(req,res)=>res.send("This is working fine"));

app.listen(port,()=>{
    console.log("server running successfully");
});