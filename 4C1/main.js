const express = require('express');
const path = require("path");
const port=3000;
const app = express();

app.use=logger;

app.get("/books",function (req, res) {
    res.send({route:"/books"})
    console.log({route:"/books"})
});

var permission=false;
var route=route;

app.get("/:name",checkPermission,function (req, res) {
    res.send({ route: "/"+req.params.name, permission: permission})
    console.log({ route: "/"+req.params.name, permission: permission})
});


function logger(req, res,next) {
console.log(req.params.name)
    next();
}

function checkPermission(req,res, next){
if(req.params.name=="libraries" || req.params.name=="authors"){
    permission=true;
    next()
}
else {
permission=false;
    next()
}
}

app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
})