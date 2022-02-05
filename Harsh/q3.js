
var hars=[];
function mya(){
  Object.defineProperty(this,"length",{
    writable:true,enumerable:false
  })
  for(let i =0; i<arguments.length;i++)
  this[i]= arguments[i]
  this.length=arguments.length
}

let h1 = new mya("patel","sunny","harsh")


mya.prototype.father= function (x){
let index = this.length

this[index]=x

}
//reverse
h1.father("jigneshkumar")
console.log(Object.values(h1))

for(var s=h1.length;s>=0;s--)
{
hars.push(h1[s])
}
console.log(hars)

console.log(hars[0])