const express=require('express');
const app= express();


app.get("/",function (req, res){
    res.send("hello")
})


app.get("/book",function (req, res){
    res.send([
        {Author:"Harsh",},
        {  Author:"yarsh",},
        {Author:"tarsh",},
        {Author:"rrrsh",},
    ]);
})


app.listen(4000,() =>{
   
    console.log('listening on 4000');
});