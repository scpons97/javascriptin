// console.log("hello world UwU");
// Javascript is a turing complete language, which basically means it can technically execute any function. Most of the time, javascript is a functional coding language (writing functions)
// and not typically used for object oriented coding.
function firstFunction() {
  console.log("First Function");
}

// firstFunction();
var number = 1;
var number2 = 2;
var string = "hello";
var isTheSkyBlue = true
var nothingIsHere = null
var somethingIsHere = "something"
var undefined1 = undefined
var undefined2;
var josieObject = {
    name: "Josie",
    age: 25
    }

function addNumbers(n, n2) {
  console.log(n + n2);
}
// addNumbers(number, number2);

function orderMatters(data2, data1) {
  console.log(data1);
  console.log(data2);
}

orderMatters(number, string)

console.log(1===2)

function isItTruthy(){
    if(1===1){
        console.log("truthy")
    }
    else{
        console.log("falsey")
    }
}

function isItFalsey(){
    if(!(1===1)){
        console.log("falsey")
    }
    else{
        console.log("truthy")
    }
}

function checkIfItsThere (anything){
    if(anything){
        console.log("It's Here!")
    }
    if(!anything){
        console.log("Nope!")
    }
}

function giveItValue (noValue){
    console.log(noValue)
    noValue=1
    console.log(noValue)
}



// giveItValue (undefined1)
console.log(josieObject)
console.log(josieObject.name)
// checkIfItsThere (nothingIsHere)
// checkIfItsThere(somethingIsHere)
// isItTruthy()
// isItFalsey()