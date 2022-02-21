
async function makeAPICall(url){
    try{
        let res=await fetch(url);
        let data=await res.json();
        return data;
    }
    catch(e){
        console.error("Failed")
    }
}


function appendPictures(data,parent){
data.forEach((element)=>{
    console.log(data)
    let div = document.createElement("div");
    div.setAttribute("id","div1");
    let image=document.createElement("img");
    image.src = element.urls.small;
    image.id="image";
    let p = document.createElement("p");
    p.innerText=element.user.name
    div.append(image,p);
    div.id="picture";
    div.onclick=()=>{
        localStorage.setItem("clicked_image",JSON.stringify(element))
    };
    parent.append(div);
});
}
export {  makeAPICall, appendPictures }