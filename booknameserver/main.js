const express=require('express');
const app= express();


app.get("/",function (req, res){
    console.log("ha");
    res.send("hello")
})

var namea={
harry:
    {"author1":"Harsh",},
    herry:{"author2":"hersh",},
    terry:{"author3":"tersh",},
    jerry:{"author2":"jersh",},
    };

app.get("/book",logger, (req, res)=>{
  return res.send("No books")
})

app.get("/book/:name",auth, (req, res)=>{
  res.send({bookname:req.name});    
})
function logger(req, res, next){
    console.log("Fetching all books")
    next();
}
function auth(req, res, next){
    console.log(req.params.name);
    req.name=req.params.name;
    next();
}
app.listen(4000,() =>{
   
    console.log('listening on 4000');
});
