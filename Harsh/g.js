// function Ns(h){


//   this.date=new Date();
//   this.id=Math.round(Math.random()*10);


// }
// for(let i=0;i<10;i++)
// {
//   let n= new Ns("pablo");
//   console.log(n)
// }

//2

// const living_room={
//   name:"Living room",
//   purpose:'chill',
//   order: 'maggies',

// }
// const kitchen={

//   name:"kitchen",
//   purpose:'cook',
//   order: 'thali',

//   cookfood(x){
//     console.log(`${living_room.order}${x}`)
//   }

// }

// kitchen.cookfood.call(living_room,"coke")
// kitchen.cookfood();
//3
// var living_room={
//   name:"Living room",
//   purpose:'chill',
//   order: 'maggies',
//   jm(){
//     console.log(`${living_room.purpose}`)
//   }


// }
// var kitchen={

//   name:"kitchen",
//   purpose:'cook',
//   order: 'thali',
//   cookfood(x){
//     console.log(`${living_room.order}${x}`)
//   }

  
// }

// var ha=kitchen.cookfood.bind(living_room,"coke")

// ha();
// living_room.jm.call(living_room)
//4
// var p1={
//   name:'j'  
// }
// var p2={
//   name:'h'
// }
// function et(){
//   console.log(this.name)
// }
// et.call(p1)
// et.call(p2)
//5
//  function et1(n,a,g){

//    this.name=n
//    this.price=a
//   this.immg=g
  
//  }
//  var p1=new et1('el','mk')
//   console.log(p1)

//6

// var Amar={
//   name:"Amar",
//   city:"Goa",
//   skill:"Singer",
//   amak(){
//  console.log(`${Amar.name}${Akbar.skill}`)
//   }
//   aman(){
// console.log(`${Amar.name}${Anthony.skill}`)
//   }

// }
// var Akbar{
//   name:"Akbar",
// city:"Mumbai",
// skill:"Chef",

// akan(){
//  a= console.log(`${Akbar.name}${Anthony.skill}`)
// }
// akam(){
//   console.log(`${Akbar.name}${Amar.skill}`)
// }
// }

// var Anthony{
//   name:"Anthony",
//   city:"Kashmir",
//   skill:"Magician"
// anak(){
//   console.log(`${Anthony.name}${Akbar.skill}`)
// }
// anam(){
//   console.log(`${Anthony.name}${Amar.skill}`)
// }
// }


// var iphone={
//   name:"ip11",
//   price:999
// };
// console.log(Object.keys(iphone))
// var picked=(({name})=> ({name}))(Object.keys(iphone))
// console.log(picked)

// iphone.prototype.fid =  function () {
// //   console.log("scammmin")
// // }
// var ip1 =  new iphone();
// ip1.fid()


// var Array={
//   name:'harsh',
// }

// console.log(Array)






// var grandfather={
// color:'white',
// weight:'heavy',
// height:'170inch',
// haircolor:'black'
// }
// var father= Object.create(grandfather)
// var me = Object.create(father);
// console.log(me)


// var csarr= Array()
// var Array={
//   name:'harsh',
// }
// console.log(csarr)


// var g1= new a1('ha','oa')
// console.log(g1)

//q3  starts
// var hars=[];
//  function mya(){
//    Object.defineProperty(this,"length",{
//      writable:true,enumerable:false
//    })
//    for(let i =0; i<arguments.length;i++)
//    this[i]= arguments[i]
//    this.length=arguments.length
//  }

//  let h1 = new mya("patel","sunny","harsh")


//  mya.prototype.father= function (x){
// let index = this.length

// this[index]=x

//  }
//  //reverse
//  h1.father("jigneshkumar")
//  console.log(Object.values(h1))

//  for(var s=h1.length;s>=0;s--)
//  {
// hars.push(h1[s])
//  }
//  console.log(hars)

//  console.log(hars[0])

//q3 done


function solve(){
    for (i = 0;i<10;i++){
        return i;
    }
    return 10;
}