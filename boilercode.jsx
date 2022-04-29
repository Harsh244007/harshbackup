  function runProgram(input){
  let a,b,c,d,i,j,k,l;
  let m=1,n=2,count=0;
      input=input.trim().split("\n");
      i1=input[0].trim().split(" ").map(Number)
      i2=input[1].trim().split(" ").map(Number)
    
    
      
    }
    if (process.env.USER === "") {
      runProgram(``);
    } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }