//We are working a cash register. One argument is the price and the other argument is what's been paid. The task is to make change, in BILLS.

function register(price, paid) {
  //cashdrawer options
  var remainingChange = paid - price;
  var cashdrawer = [100, 50, 20, 10, 5, 1];
  var billsForChange = {};
  cashdrawer.forEach((bill) => {
    //"bill" isn't defined before we put it in the forEach function
    billsForChange[bill] = Math.floor(remainingChange / bill);
    //straight brackets are for looking for a property that is inside an object(a function).
    remainingChange = remainingChange % bill;
  });

  console.log(billsForChange);
}

register(137, 200);
