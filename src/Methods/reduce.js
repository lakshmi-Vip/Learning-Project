//Reduce=> is once of array methos in JS where it will ittirate through each element in the array and reduce the array into singe element
//based on the requirement given and it won't change the original array.
//it uses two parameter accumulator(previous value) and curent value
//array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)


const data = [1,2,3,4,5]

const dt = data.reduce((ac,sum) =>{
  let sm = ac + sum;
  return sm
})

console.log('reduce',dt)