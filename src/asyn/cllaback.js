//callback => call back is an method which is passed as argument to the parent method, once parent method exicutionis done.
//the callback function will exicute, 

const parentFun = (a,b,callback) =>{
  setTimeout(() =>{
    const sum = a + b;
    console.log(sum);
    callback();
  },1000)  
}

function chaildFun() {
 let a =1;
 console.log(a);
}

 parentFun(2,3,chaildFun)

