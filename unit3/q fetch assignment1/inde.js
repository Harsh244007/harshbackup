

var s2,s3,s31,s4,s11,url,url1="a",c1=0;

console.log("harsh")
async function res(){
    try{
        var u2=document.querySelector("input").value
    url1=u2;
    // url="https://www.omdbapi.com/?s=fast&apikey=b65f2e76";
   
    
    var url="https://www.omdbapi.com/?s="+url1+"&apikey=b65f2e76";
console.log(u2.value)


s2= await fetch(url);
    s3= await s2.json();
s31=s3;
console.log(s31)
console.log(u2)
 if(url1=="" || c1==0)
{
    first()
}
else if(s31.Response=='False' && c1>2)
{
    c1++;
   error()
   console.log("errorfromwebsire")
}  
if(s31.Response=='True') 
{
    c1++;
    true1()

   console.log("true")
}
s4=s31.Search;
    s1(s4);
    }
    catch(err){
        console.log("error1")
        
        if(url1=="")
        {
            first()   
        }
else if(s31.Response=='False')
{
    c1++;
   error()
   console.log("errorfromwebsire")
}  
else if(s31.Response=='True') 
{
    c1++;
    true1()

   console.log("true")
}
    }

}
res()
var s11;
function s1(s4){
    

    localStorage.clear()
    localStorage.setItem("movie",JSON.stringify(s4))

    s11=JSON.parse(localStorage.getItem("movie"));

    s21(s11);
}
var container= document.getElementById("movies")


var container2= document.getElementById("moviess5")

var container1= document.getElementById("moviess1")
 
function s21(s11){
 container.innerHTML=null;
 container1.innerHTML=null;
 container2.innerHTML=null;
    s11.forEach(function(user){
 var titles23=user.Title

var num=Math.floor(Math.random()*(100-40)+40)/10
var moviesp=document.createElement("p")
moviesp.innerText=titles23;
moviesp.onclick=function (){
    

    document.getElementById("movies").style.display="none"


    document.getElementById("moviess5").style.display="block"

harshserach(user.Poster,titles23,user.Year,num)


}

container1.append(moviesp)

var div=document.createElement("div");
div.setAttribute("class","div1")

var img=document.createElement("img");
img.setAttribute("class","img1")
img.src=user.Poster;

var t1= document.createElement("t1");
t1.setAttribute("class","t1")
t1.innerHTML=titles23;

var year= document.createElement("year");
year.setAttribute("class","year")
year.innerHTML=user.Year;

var imdb= document.createElement("imdb");
imdb.setAttribute("class","imdb")
imdb.innerText=num;


if(num>=8.5){
var label= document.createElement("label");
label.setAttribute("class","label1")
var l1="RECOMMENDED"
label.innerHTML=l1;


div.append(img,t1,year,imdb,label);
}
else{
    div.append(img,t1,year,imdb);
}
container.append(div);






});

};
 function harshserach(p,t,y,n){
     console.log(p,t,y,n)

 container2.innerHTML=null;



var img1=document.createElement("img");
img1.setAttribute("class","img")
img1.src=p;

var t2= document.createElement("t1");
t2.setAttribute("class","t1")
t2.innerHTML=t;

var year1= document.createElement("year");
year1.setAttribute("class","year")
year1.innerHTML=y;

var imdb1= document.createElement("imdb");
imdb1.setAttribute("class","imdb")
imdb1.innerText=n;


if(n>=8.5){
var label1= document.createElement("label");
label1.setAttribute("class","label1")
var l1="RECOMMENDED"
label1.innerHTML=l1;

container2.append(img1,t2,year1,imdb1,label1);
}
else{
    
container2.append(img1,t2,year1,imdb1);
}


 }

var count=2;
function dark()
{ count++;
if(count%2==0)
{
    document.getElementById("body").style.color = "white";
    document.getElementById("body").style.backgroundColor = "#1e1e1e";
}
else{
    document.getElementById("body").style.color = "black";
    document.getElementById("body").style.backgroundColor = "white";
   
}
}

function error()
{
    document.getElementById("error12").style.display="block"
    document.getElementById("movies").style.display="none"
    document.getElementById("first1").style.display="none"

    document.getElementById("moviess5").style.display="none"
    document.getElementById("moviess1").style.display="none"

}


function true1()
{
    document.getElementById("movies").style.display="grid"

    document.getElementById("moviess1").style.display="block"

    document.getElementById("error12").style.display="none"

    document.getElementById("first1").style.display="none"
    document.getElementById("moviess5").style.display="none"
}
function first(){
    document.getElementById("movies").style.display="none"
    document.getElementById("first1").style.display="block"
    document.getElementById("error12").style.display="none"   

    document.getElementById("moviess1").style.display="none"
    document.getElementById("moviess5").style.display="none"

}
function sunny1(){

 container1.innerHTML=null;
    document.getElementById("moviess1").style.display="block"

}