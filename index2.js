var express = require('express');
var mongoose= require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var app = express();

// porn no.
const port= 3000;

//joining folder
const route=require('./Routes/routes');

//adding middleware
app.use(cors());

//adding parser
app.use(bodyparser.json());

//static files addition
app.use(express.static(path.join(__dirname,'public')));

//linking routes folder
app.use('/api',route)

//route creation
app.get('/',function(req,res){
    res.send('FUCK YOUUUUUUU');
});

//CONNECTING MONGODB
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',function(){

    console.log('CONNECTED TO DATA BASE YESS YOU ARE CONNECTED')
    
});

//nots
mongoose.connection.on('error',function(err){
    if(err){
        console.log('ERROR IN DATABASE CONNECTION')
    }
   
});


app.listen(port,function(){
    
    console.log('SERVER STARTED AT PORT:' + port);//SERVER STARTS

});
