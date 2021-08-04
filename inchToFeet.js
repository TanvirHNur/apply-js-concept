

function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}





var myInches = 24;
var feet = inchToFeet(myInches);
console.log(feet);


var dadiinches = 144;
var feet = inchToFeet(dadiinches);
console.log(feet);

var naniInches = 144;
var feet = inchToFeet(naniInches);
console.log(feet);

// var nanaInches = 144;
// var nanaFeet = nanaInches / 12;
// console.log(nanaInches);


function mileToKilometers(mile){
    var kilometers = mile * 1.60934;
    return kilometers;
}

var x = mileToKilometers(10);
console.log(x);

var marathon = mileToKilometers(26.2);
console.log('marathon in km : ', marathon);

mileToKilometers(20);
mileToKilometers(30);
mileToKilometers(40);