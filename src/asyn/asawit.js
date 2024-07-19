//Asyn Await => are the syntactic sugar of promises, we use to write the code in asyncronous way, even async and await are having
//owen error handeling which is try and catch. We can write await only inside the async function.

function add(a) {
 const sum = a + a;
 console.log(sum);
}

// function pro(val){
//     return new Promise((res,rej) =>{
//         const dt = add(val)
//         if(dt > 2){
//             res(dt);
//         } else {
//             rej(dt);
//         }
//     })
// }
 
// pro(2)
// .then(dt => console.log('val',dt))
// .catch(error => console.log('err',error))

async function asaw(){
    try{
        console.log('data featch')
    await add(2);
   console.log('start exicution')
    } catch(err){
     console.log(err)
    }
}

asaw()