//This will be a function that takes an argument (which is an array of numbers.). It will consolelog something as each number. If the number is divisible by 3, it will log as "fizz."
//If it is divisible by 5, it will log as "buzz." If it's divisible by 3 and 5 it will log "fizzbuzz." If it isn't divisible by any of that, it will log the number.

const testOne = [1, 2, 3, 5, 6, 7, 9, 15, 30];

const testTwo = [60, 30, 15, 22, 12, 10, 5, 3, 2, 1, 0];

const testThree = [-60, -30, -15, 22, 12, 10, -5, 3, 2, 1, 0];

function fizzbuzz(test) {
  test.forEach((number) => {

    if (number % 3 === 0 && number % 5 === 0) {
      console.log("fizzbuzz");
    }
    else if (number % 3 === 0) {
        console.log("fizz");
    }
    else if (number % 5 === 0) {
        console.log("buzz");
    }
    else (console.log(number))
  });
}


fizzbuzz(testTwo);
