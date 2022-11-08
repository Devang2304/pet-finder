var express =require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose= require('mongoose');

var fs=require('fs');
var path = require('path');
const multer = require('multer');
require('dotenv/config');

mongoose.connect("mongodb+srv://DEVANG23:sGS9G3qDgNVQztE@cluster0.ngb8lfk.mongodb.net/test",
{useNewUrlParser: true , useUnifiedTopology: true},err=>{
    console.log('connected')
});

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set("view engine","ejs");


var storage=multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'./uploads');
    },
    filename: (req,file,cb) => {
        cb(null,file.fieldname + '-' + Date.now())
    }
});

var upload =multer({storage:storage});

var imgModel=require('./models');
app.use(bodyParser.json());
app.get('/',(req,res) =>{
    imgModel.find({},(err,items) => {
        if(err){
            console.log(err);
            res.status(500).send('An error occurred',err);
        }
        // else{
        //     res.render('imagesPage',{items:items});
        // }
    });
    res.sendFile(path.join(__dirname,'/src/components/List/List.jsx'));
});

app.post('/',upload.single('image'),(req,res,next)=>{
    var obj = {
        img: {
            data:fs.readFileSync(path.join(__dirname + '/server/uploads' + req.file.filename)),
            contentType: 'image/png'
            }
        }
        imgModel.create(obj,(err,item) =>{
            if(err){
                console.log(err);
            }
            else{
                item.save();
                res.redirect('/');
            }
        });
    });
    var port = process.env.PORT || 3000
    app.listen(port,err=>{
        if (err) 
            throw err;
            console.log('Server listening on port',port);
    })