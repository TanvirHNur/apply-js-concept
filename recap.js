
// variable
var time = '5:30am';
var coursePrice = 5000;
var practiceIsKey = true;

// Array
var lunch = ['rice', 'fish', 'vegetables', 'water'];
lunch.push('chicken')
lunch.pop();
var lunchItemsCount = lunch.length;
var fishIndex = lunch.indexOf('fish');
lunch[1] = 'meat';
console.log(lunch);

// conditional
 if (coursePrice <= 5000){
     console.log('I will buy this course');
 }
 else{
     console.log('oh, it is too much expensive');
 }

//  while loop 
var i = 0;
while (i < 10){
    console.log('looping', i)
    if (i < 5){
        break;
    }
    i++
}

// for loop 
for (var i = 3; i < lunch.length; i++){
    var lunchitem = lunch[i];
    console.log(lunchitem)
}

function isMoonUp(){
    return true;
}

var moonSatuts = isMoonUp()

// value of variable could change = let
// like your phone price
let phonePrice = 10000;

// value of variable will not change = const
// like your name or country name, it can not be changed,
const name = 'Mr. X'