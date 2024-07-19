//MAP => map is one of js method or function it ittrates through each elements in existing array and creates new array.
// and it won't modify existing array.

const data = [1,2,3,4,5];

const sum = data.map((dt)=> {

    let sm = dt + 1;

    return sm

});

console.log('values',sum)