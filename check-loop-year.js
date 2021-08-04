
function checkLeapYear (year){
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return 'this is leap year';
    }
    else{
        return 'this is not leap year';
    }
}

const myYear = 2024;
const checking = checkLeapYear(myYear);
console.log(checking);








// function leapYear(year){
//     if (year % 4 == 0){
//         return true;
//     }
//     return false;

// }

// const thisYear = 2024;
// const isThisYear = leapYear(thisYear);
// console.log('this is leap year', isThisYear);  

// function notLeepYear (year){
//     if (year % 4 != 0){
//         return true;
//     }
//     return false;
// }

// const isThisNotLe