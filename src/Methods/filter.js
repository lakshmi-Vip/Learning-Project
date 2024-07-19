//Filter => is one of array method it perform the functionality based on the given condition on existing array
//and return the new array.

const data = [1,2,3,4,5];
const  dt = data.filter((ft) =>{
  return ft > 2;
})

console.log('filter data', dt, 'and', data);