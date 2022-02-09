var x1,container1,container;

function searchs1(){

    x1=document.getElementById("searchbar").value
    document.getElementById("moviess1").style.display="none";
    if(x1==""){
        document.getElementById("moviess1").style.display="none";
    home()
    }
    else{
        document.getElementById("moviess1").style.display="none"};
        searchvideo();
}
var api="AIzaSyDHBH7TZbS4J4ULiJ_Sqsz3rQtu2SxzmWM";
const home=async()=>{
    try{
        let ses= await fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=25&key=${api}`);
        let data2=await ses.json();
        let video2=data2.items
    console.log(data2)
    home12(video2)
    }
    catch(error){console.log("homeerror")}

}
home()
const searchvideo = async() =>{
    try{
let res= await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${api}&q=${x1}&type=video&maxResults=20`);
    let data=await res.json();
    let video=data.items
    display(video)
  //  console.log(video)
    }
    catch(err){
console.log("error")
    }
}
const display = (video)=>{
var container=document.getElementById("moviess1")
container.innerHTML="";

var container1=
document.getElementById("searchresult")
container1.innerHTML="";

var container3=document.getElementById("main")
container3.innerHTML="";

video.forEach((v1) => {
    const {
        id:{videoId},}
        =v1;
    
console.log(v1)

let card=document.createElement("div")

let image=document.createElement("img");
// iframe.src=`https://www.youtube.com/embed/${videoId}`
image.src=`http://img.youtube.com/vi/${videoId}/sddefault.jpg`
image.onclick=function(){
    location.href=`https://www.youtube.com/watch?v=${videoId}`
}
image.setAttribute("id","image1")

card.append(image)
container1.append(card);
    });
}

function home12(v12){
    var container=document.getElementById("moviess1")
    container.innerHTML="";
    
    var container1=
    document.getElementById("searchresult")
    container1.innerHTML="";
    
    var container3=document.getElementById("main")
    container3.innerHTML="";
    
        v12.forEach((v123) => {
            const harsh=v123.id
        let card2=document.createElement("div")
        
        let image1=document.createElement("img");
        // iframe.src=`https://www.youtube.com/embed/${videoId}`
        image1.src=`http://img.youtube.com/vi/${harsh}/sddefault.jpg`
        image1.onclick=function(){
            location.href=`https://www.youtube.com/watch?v=${harsh}`
        }
        image1.setAttribute("id","image1")
        
       // console.log(image1.src)
        card2.append(image1)
        container3.append(image1);
            });
}