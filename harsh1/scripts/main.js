async function apiCall(url) {
try {
    let res=await fetch(url);
    let data=await res.json();

    return data.articles;
    
}
catch (err) {
    console.log("error")
}


    //add api call logic here


//     async function makeAPICall(url){
//         try{
//             let res=await fetch(url);
//             let data=await res.json();
//             return data;
//         }
//         catch(e){
//             console.error("Failed")
//         }
//     }
    
    
//     function appendPictures(data,parent){
//     data.forEach((element)=>{
//         console.log(data)
//         let div = document.createElement("div");
//         div.setAttribute("id","div1");
//         let image=document.createElement("img");
//         image.src = element.urls.small;
//         image.id="image";
//         let p = document.createElement("p");
//         p.innerText=element.user.name
//         div.append(image,p);
//         div.id="picture";
//         div.onclick=()=>{
//             localStorage.setItem("clicked_image",JSON.stringify(element))
//         };
//         parent.append(div);
//     });
//     }
//     export {  makeAPICall, appendPictures }
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
             window.location.href="/harsh1/news.html"
            };
    
div.append(image,p,p1);

main.append(div)
});
};
// 19ffa4ed7f145c2f8bb7be470b39314e
export { apiCall, appendArticles }