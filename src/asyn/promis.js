//Promises=> are javascript object, where we use promises to write the asyncronous code, it has 3 stes, resolve reject
//pending, and it has it's own error handeling which is then and catch.

const add = par => {
  
    if( par > 0){

        let val = par + par;
        return val;
    } else {
        return 'error'
    }

}

const getPro = vl =>{

    return new Promise((res,rej) =>{
        const dt = add (vl);
        if(dt > 2){
            res(dt);
        } else {
            rej(dt);
        }
    })
}

getPro(1)
.then(data => console.log('get val',data))
.catch(error => console.log('error',error))