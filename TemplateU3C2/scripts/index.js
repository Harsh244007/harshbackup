
var url,s2,s3,s31,count=0,count1=1;
async function res(){
    try{
        
 url='https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian';

s2= await fetch(url);
    s3= await s2.json();
s31=s3.meals;
console.log(s31);
localStorage.setItem("dish",JSON.stringify(s31))
harsh(s31)
    }
    catch(err){
        console.log("error1")
    }
}
res()


function harsh(s31){
    var container=document.getElementById("menu")
    container.innerHTML=null;
    s31.forEach(function(user){
        count1++;
        console.log(user.strMealThumb)
       
        
        var div=document.createElement("div")
        div.setAttribute("class","div")


var img=document.createElement("img")
img.setAttribute("class","img")
img.src=user.strMealThumb

var name=document.createElement("p")
name.setAttribute("class","name")
name.innerHTML=user.strMeal

var price=document.createElement("p")
price.setAttribute("class","price")
var p1=Math.floor(Math.random()*(500-100)+100)
price.innerHTML=p1

var button=document.createElement("button")
button.innerHTML="Add to Cart"
button.setAttribute("class","button")
button.onclick=button1
document.getElementsByClassName("button1").value=count1;


    div.append(img,name,price,button)
    container.append(div)
        

    });


}
function button1(){
    showinmenu()
    var x=document.getElementsByClassName("button")
    console.log(x.value)
    count++;
    localStorage.setItem("count",count)
    x=0;

}
function showinmenu(){
if(count==0)
{
 document.getElementById("count").display="none"   
}
else if(count>=1)
{
 document.getElementById("count").innerHTML=count;   
}

}

