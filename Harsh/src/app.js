const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser =  require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://Harsh:Sunny@244007@cluster0.2ofgu.mongodb.net/signup?retryWrites=true&w=majority",
{useNewUrlParser:true},{useUnifiedTopology:true})

const notesSchema={
    title: String,
    content: String
}
const Note=mongoose.model("Note",notesSchema)
app.get("/src/",function(req, res){
res.sendFile(__dirname+"/src/index.html");
})

app.post("/src/",function(req,res){
let newNote=new Note({
    title: req.body.snum,
    content: req.body.sname
})
newNote.save();
 res.redirect('/src/index.html');
})
app.listen(5500, function(){
console.log("server is running on 3000")    
})