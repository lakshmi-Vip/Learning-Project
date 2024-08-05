//Asyn Await => are the syntactic sugar of promises, we use to write the code in asyncronous way, even async and await are having
//owen error handeling which is try and catch. We can write await only inside the async function.

function add(a) {
 const sum = a + a;
 console.log(sum);
}

function multi(b) {
    const mlt = b * b;
    console.log(mlt);
   }


async function asaw(){
    try{
        await add(2);
        multi(4)
       console.log('y');
    } catch(err){
     console.log(err)
    }
}
console.log(1)
asaw()
console.log(2)

function div() {
    const d = 2 -1;
    console.log('hey div', d)
}
div()