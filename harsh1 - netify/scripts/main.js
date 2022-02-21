async function apiCall(url) {
try {
    let res=await fetch(url);
    let data=await res.json();

    return data.articles;
    
}
catch (err) {
    console.log("error")
}

}
function appendArticles(articles, main) {

articles.forEach((element) =>{

let div = document.createElement("div")
div.setAttribute("id","div1")
let image = document.createElement("img")
image.src=element.image;
image.id="image";
let p = document.createElement("p")
p.innerText=element.title;
p.id="p0";
let p1=document.createElement("p")
p1.innerText=element.content;
p1.id="p1";
div.onclick=()=>{
             localStorage.setItem("news",JSON.stringify(element))
             window.location.href="/news.html"
            };
    
div.append(image,p,p1);

main.append(div)
});
};

export { apiCall, appendArticles }