// debuging is important for developer
// you may got stucked while coding.
// so what is your solution?
// your solution is know debuging

// to debug, you can use run and debug using breakpoint
// and you can do console.log after compliting each line

function factorialize (num){
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial = factorial + i;
    }
    return factorial;
}
let firstFact = factorialize(3)
console.log(firstFact)