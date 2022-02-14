// async function func(){
// var data= await fetch('https://reqres.in/api/users?page=2')

// var d1= await data.json()
// console.log(d1.data)


// }
// func()

// var harsh={"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}};

// harsh1=Object.values(harsh.data[0])
// console.log(harsh1[1])


// let url="https://fakestoreapi.com/products/1"
// let x= fetch(url);

// x.then(function(res){

//     return res.json();
// })
// .then(function(res) {
//     console.log(res)
// })
// .catch(function(err) {
//     console.log("error")
// });



// async function res(){
// try{
// var url="https://fakestoreapi.com/products"

// var s2= await fetch(url);
// var s3=await s2.json();
// var s4=s3;
// s1(s4);
// console.log("success")
// }
// catch(error){

//     console.log("error")
// }
// }

// res();
// var s11;
// function s1(s4){
//     console.log("success")
//     localStorage.clear();
//     localStorage.setItem("hars",JSON.stringify(s4))

//     s11=JSON.parse(localStorage.getItem("hars"));

//     s2(s11)
// }


// function s2(s11){
//     var u1=document.getElementById("users");
//     s11.forEach(function(user){
// console.log(user);

// var div=document.createElement("div");

// var img=document.createElement("img");
// img.src=user.image;

// var name= document.createElement("name");
// name.innerText=user.title;

// var price= document.createElement("p");
// price.innerText=user.price;

// div.append(img,name,price);

// u1.append(div);



// });

// };







