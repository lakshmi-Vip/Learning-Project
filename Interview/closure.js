function outer(outervariable) {
    function innervar(inner) {
        console.log('outer',outervariable)
        console.log('inner',inner)
    }
    return innervar
}

const newFunction = outer('outside');
newFunction('inside')


/*   
A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. Closures are created whenever a function is created inside another function, allowing the inner function to access the variables of the outer function even after the outer function has finished executing.


*/