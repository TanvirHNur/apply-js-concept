
function factorialize(num){
    let factor = 1;
    let i = 1;
    while(i <= num){
        factor = factor * i;
        i++;
    }
    return factor;
}

let factor1 = factorialize(3);
console.log(factor1);


// 2nd time 
// function getFactorial(num){
//     let factorial = 1;
//     let i = 1;
//     while(i <= num){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// let myFactorial = getFactorial(30);
// console.log(myFactorial);

// while loop reverse 
function getFactorial(num){
    let factorial = 1;
    let i = num;
    while(i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

let myFactorial = getFactorial(5);
console.log(myFactorial);

// for loop reverse 

function getFactorial1(num){
    let factorial1 = 1;
    for (let i = num; i >= 1; i--){
        factorial1 = factorial1 * i;
    }
     return factorial1;
}
let myFactorial1 = getFactorial1(3);
console.log(myFactorial1);