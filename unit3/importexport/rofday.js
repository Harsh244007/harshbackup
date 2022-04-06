
searchnow()
    
function searchnow(){
    
var api="www.themealdb.com/api/json/v1/1/random.php"
searchsun(api)
async function searchsun(api)
{
    try{
var x12=await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
var x13=await x12.json()
var x14=x13.meals   
console.log(x13)
console.log(x14)
if(x14==null){
    showerror()
}
else
showresult(x14)

    }
    catch(err){
        console.log("errora")
    }
}
}

var error1=document.getElementById("error")
var home=document.getElementById("home")
var main1=document.getElementById("main")

 showresult=(x14)=>{
error.style.display="none"

home.style.display="block";

main1.style.display="block"
x14.forEach(function(n){

    var div=document.createElement("div")

 var category=document.createElement("p")
category.innerText="Category: "+n.strCategory


var ingredient=document.createElement("p")
ingredient.innerText="Top Ingredients: "+n.strIngredient1+", "+n.strIngredient2+", "+n.strIngredient3+", "+n.strIngredient4+", "+n.strIngredient5+", "+n.strIngredient6+"."


var name=document.createElement("p")
name.innerText="Name: "+n.strMeal

var img=document.createElement("img")
img.src=n.strMealThumb
img.setAttribute("class","image")
var category=document.createElement("p")
category.innerText="Category: "+n.strCategory

console.log(""+n.strCategory)

div.append(category,ingredient,name,img)
main1.append(div)
})
}
 showerror=()=>{
error1.style.display="block"
    error1.innerHTML=null;
    main1.style.display="none"
    home.style.display="none"
    var emessage=document.createElement("p")
    emessage.innerText="Invalid Search"
    emessage.setAttribute("class","error1")

error1.append(emessage)
}
 empty=()=>{
    error1.style.display="none"
    main1.style.display="block"
    home.style.display="block";
}