//Create a button that, when clicked, adds the <p> tag "The button was clicked!" to the assigned parent div.

//define the parent element
var buttonParent = document.querySelector("#buttons-parent");
//create a button
var theButton = document.createElement("button");
//add an event listener that fires a function
theButton.addEventListener("click", buttonWasClicked);
//append the child
buttonParent.appendChild(theButton);

// ---->THE FOUR STEPS <-----
function buttonWasClicked(event) {
  //link the div
  var pTagsParent = document.querySelector("#p-tags-parent");
  //make a p tag
  var theP = document.createElement("p");
  //add the text
  theP.textContent = "You clicked the button!";
  //display the p tag (append)
  pTagsParent.appendChild(theP);
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Create two buttons that, when clicked, evoke the same function, and add the <p> tag "The <first/second> button was clicked!" to the assigned parent div.
var buttonParent = document.querySelector("#buttons-parent");
var firstButton = document.createElement("button");
var secondButton = document.createElement("button");
firstButton.addEventListener("click", differentButtons);
secondButton.addEventListener("click", differentButtons);
firstButton.textContent = "First";
secondButton.textContent = "Second";
buttonParent.appendChild(firstButton);
buttonParent.appendChild(secondButton);

function differentButtons(event) {
  var textContentText = event.target.textContent;
  var pTagsParent = document.querySelector("#p-tags-parent");
  var moreP = document.createElement("p");
  moreP.textContent = "The " + textContentText + " button was clicked!";
  pTagsParent.appendChild(moreP);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

//For each thing in the array, display a <p> tag with pText.
//When each <p> tag is hovered over, display hoverText in the assigned parent div.
var array = [
  { pText: "number 1", hoverText: "wow!" },
  { pText: "number 2", hoverText: "incredible!" },
  { pText: "number 3", hoverText: "awesome!!" },
];

array.forEach((object) => {
  var pTextParent = document.querySelector("#p-text-parent");
  var theP = document.createElement("p");
  theP.textContent = object.pText;
  theP.addEventListener("click", function() { displayHoverText(object.hoverText) })
  pTextParent.appendChild(theP);
});

function displayHoverText(hoverText) {
  var hoverTextParent = document.querySelector("#hover-text-parent");
  var theP = document.createElement("p");
  theP.textContent = hoverText;
  hoverTextParent.appendChild(theP);
}

// element.addEventListener("event-type", functionName) //the event is the default argument here NO MATTER WHAT
// element.addEventListener("event-type", function(){ functionName(arg1, arg2); }) //you can pass in any arguments you want, including the event
//example on live 58^


//Revisit the second problem. How could we have done this differently?
