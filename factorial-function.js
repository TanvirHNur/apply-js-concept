
// let factorial = 1;
// for(let i = 1; i <=5; i++){
//   factorial = factorial * i;

// }
// console.log(factorial);

function factorialize (num){
    let factorial = 1;
    for (let i = 1; i <=num; i++){
        factorial = factorial * i;
    }
    return factorial;
}

let firstFact = factorialize(4);
console.log(firstFact);

let secondFact = factorialize(10);
console.log(secondFact);