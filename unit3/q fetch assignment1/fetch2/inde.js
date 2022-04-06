

var s2,s3,s31,s4,s11,url,url1,c1=0;

console.log("harsh")
async function res(){
    try{
        var u2=document.getElementById("search1").value
    // url="https://www.omdbapi.com/?s=fast&apikey=b65f2e76";
// var dat=new Date
// var dat1=dat.getDate()-1;
// var dat2=dat1+1,dat3=dat1+2,dat4=dat1+3,dat5=dat1+4,dat6=dat1+5,dat7=dat1+6;
// var datum = new Date(Date.UTC('2022','01',dat1,'23','31','30'));
// var datum1=datum.getTime()/1000;
// var datum = new Date(Date.UTC('2022','01',dat2,'23','31','30'));
// var datum2=datum.getTime()/1000;
// datum = new Date(Date.UTC('2022','01',dat3,'23','31','30'));
// var datum3=datum.getTime()/1000;
// datum = new Date(Date.UTC('2022','01',dat4,'23','31','30'));
// var datum4=datum.getTime()/1000;
// datum = new Date(Date.UTC('2022','01',dat5,'23','31','30'));
// var datum5=datum.getTime()/1000;
// datum = new Date(Date.UTC('2022','01',dat6,'23','31','30'));
// var datum6=datum.getTime()/1000;
// datum = new Date(Date.UTC('2022','01',dat7,'23','31','30'));
// var datum7=datum.getTime()/1000;
// console.log(datum1,datum2,datum3,datum4,datum5,datum6,datum7)

var url='https://api.openweathermap.org/data/2.5/weather?q='+u2+'&appid=139ce58f8cf1e41a68fc3f1f461127c7&units=metric';


// var url2='https://api.openweathermap.org/data/2.5/weather?q='+u2+'&dt='+datum2+'&appid=139ce58f8cf1e41a68fc3f1f461127c7';


// var url3='https://api.openweathermap.org/data/2.5/weather?q='+u2+'&dt='+datum3+'&appid=139ce58f8cf1e41a68fc3f1f461127c7';



// var url4='https://api.openweathermap.org/data/2.5/weather?q='+u2+'&dt='+datum4+'&appid=139ce58f8cf1e41a68fc3f1f461127c7';



// var url5='https://api.openweathermap.org/data/2.5/weather?q='+u2+'&dt='+datum5+'&appid=139ce58f8cf1e41a68fc3f1f461127c7';



// var url6='https://api.openweathermap.org/data/2.5/weather?q='+u2+'&dt='+datum6+'&appid=139ce58f8cf1e41a68fc3f1f461127c7';



// var url7='https://api.openweathermap.org/data/2.5/weather?q='+u2+'&dt='+datum7+'&appid=139ce58f8cf1e41a68fc3f1f461127c7';



s2= await fetch(url);
    s3= await s2.json();
s31=s3;
console.log(s31)

if(s31.cod==400)
{
    first()
}
else if(s31.code==404 && c1>2)
{
    c1++;
   error()
   console.log("errorfromwebsire")
}  
else if(s31.cod==400) 
{
    c1++;
    true1()
maps();
   console.log("true")
}
s4=s31;
s1(s4);
    }
    catch(err){
        console.log("error1")
        
if(s31.cod==400)
{
    first()
    
}
else if(s31.cod==404)
{
   
   error()
   console.log("errorfromwebsire")
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

function s21(s11){
    true1()
    maps()
        var container= document.getElementById("movies")
container.innerHTML=null
   
var div2=document.createElement("div2");
div2.setAttribute("class","div2")


var cname=document.createElement("p");
 cname.setAttribute("class","p")
cname.innerHTML=`City Name: ${s11.name}`;

document.getElementById("gmap_canvas").src="https://maps.google.com/maps?q="+s11.name+"&t=&z=7&ie=UTF8&iwloc=&output=embed"
console.log(s11.name)

var country1=document.createElement("p");
 country1.setAttribute("class","p")
country1.innerHTML=`Country Name: ${s11.sys.country}`;

var temp1=document.createElement("p");
 temp1.setAttribute("class","p")
temp1.innerHTML=`Maxiumum Temprature:${s11.main.temp_max}`;

var temp2=document.createElement("p");
 temp2.setAttribute("class","p")
temp2.innerHTML=`Minimum Temprature: ${s11.main.temp_min}`;

var wind=document.createElement("p");
 wind.setAttribute("class","p")
wind.innerHTML=`Wind Speed: ${s11.wind.speed}`;

var sr1=document.createElement("p");
 sr1.setAttribute("class","p")
var srd=new Date(s11.sys.sunrise*1000)
var srdh=srd.getHours();
var srdm = "0" + srd.getMinutes();
// Seconds part from the timestamp
var srds = "0" + srd.getSeconds();
var formattedTime = srdh + ':' + srdm.substr(-2) + ':' + srds.substr(-2);
sr1.innerText=`Sunrise Time: ${formattedTime}`;

var sr2=document.createElement("p");
 sr2.setAttribute("class","p")
 var srd1=new Date(s11.sys.sunset*1000)
 var srdh1=srd.getHours();
 var srdm1 = "0" + srd1.getMinutes();
 // Seconds part from the timestamp
 var srds1 = "0" + srd1.getSeconds();
 var formattedTime1 = srdh1 + ':' + srdm1.substr(-2) + ':' + srds1.substr(-2);
 
 sr2.innerText=`Sunrise Time: ${formattedTime1}`;

var w1=document.createElement("p");
w1.setAttribute("class","p")
var s124=s11.weather[0]
w1.innerText=`Weather: ${s124.description}`;


div2.append(cname,country1,temp1,temp2,wind,sr1,sr2,w1)
console.log("harsh")
container.append(div2);

};


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

    document.getElementById("mapouter").style.display="none"
}


function true1()
{
    document.getElementById("movies").style.display="grid";
    document.getElementById("error12").style.display="none";
    document.getElementById("first1").style.display="none";
}
function first(){
    document.getElementById("movies").style.display="none"
    document.getElementById("first1").style.display="block"
    document.getElementById("mapouter").style.display="none"  
    document.getElementById("error12").style.display="none"   
}

function maps(){

    document.getElementById("mapouter").style.display="block"  
}
