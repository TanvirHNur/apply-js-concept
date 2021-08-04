// const number1 = 478;
// const remainder = number1 % 2
// console.log(remainder == 0 );


function isEven(number){
    if (number % 2 == 0){
    return true;
    }
    return false;
}

const number1 = 235;
const isTheNumberEven = isEven(number1);
console.log(isTheNumberEven);

const her = 1842;
const isHer = isEven(her);
console.log(isHer);


function isOdd(num){
    if(num % 2 == 0){
        return false;
    }
    return true;
}
 
// const myNum = 335;
// const isMyNum = isOdd(myNum);
// console.log('isnum', isMyNum);

const isnumber1 = isOdd(number1)
console.log(isnumber1);
 const herNum = isOdd(her);
 console.log('her num', herNum)