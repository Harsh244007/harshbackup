function news(term1) {



var image=document.getElementById("img")
image.src=term1.image;
image.className="image";
image.append(p)
var headline=document.getElementById("headline")
var p=document.createElement("p")
p.innerText=`Title: ${term1.title}`
headline.append(p)
var content=document.getElementById("content")
var p2=document.createElement("p")
var p1=document.createElement("p")
p1.innerText=`Description: ${term1.description}`;
p2.innerText=`Published at: ${term1.publishedAt}`;
content.append(p1,p2)
}
function storeSearchterm(term){
console.log(term)

}
export { news, storeSearchterm}
