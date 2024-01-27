var employees = [
  { name: "Susan", title: "QA Tester" },
  { name: "Mark", title: "Analyst" },
  { name: "Tom", title: "DBA" },
  { name: "Becky", title: "Developer" },
  { name: "John", title: "Developer" },
  { name: "Brad", title: "QA Tester" },
  { name: "Sophia", title: "trying our best"},
  { name: "Josie", title: "trying our best"}
];

//Employee names + titles-----------------------------------------------------------------------------------------------^

function listNamesAndTitles() {
  //define a var for the parent div for the list of employees
  var allEmployeesParentDIV = document.querySelector("#all-employees");

  employees.forEach((employee) => {
    //get html to display the name + title
    var newEntry = document.createElement("p");
    //give the p tag text content
    newEntry.textContent = employee.name + ", " + employee.title;
    //add html to parent div
    allEmployeesParentDIV.appendChild(newEntry);
  });
}

listNamesAndTitles();

//Making the buttons-----------------------------------------------------------------------------------------------^

function displayTitleButtons() {
  //the parent div
  var allButtonsParentDiv = document.querySelector("#title-buttons");
  //the holding cell
  var buttonTitles = [];
  employees.forEach((employee) => {
    //make a button when ... there is not a button yet
    //if there is not button...
    if (!buttonTitles.includes(employee.title)) {
      //make a button
      var newButton = document.createElement("button");
      newButton.textContent = employee.title;
      newButton.addEventListener("click", filterByTitle);
      //calling the filteByTitle function. This has to do with "hoisting"
      allButtonsParentDiv.appendChild(newButton);
      //add the title to the array
      buttonTitles.push(employee.title);
    }
    //if there is a button ...
    //don't make a button
    //Writing an if statement and leaving it blank is the same as not writing one.
    //We don't need to make another iff statement here for that reason.
  });
}

displayTitleButtons();

//Making the Filter-----------------------------------------------------------------------------------------------^

function filterByTitle(event) {
    var buttonTitle = event.target.innerHTML;
  var allEmployeesParentDIV = document.querySelector("#all-employees");
  //the line below gets rid of the other entries that were already on the page.
  allEmployeesParentDIV.innerHTML = "";
  //check each employee in the array
  employees.forEach((employee) => {
    //match=display name (and leave no else)
    // if the employees title is the same as the title fed into the function as an arg
    if (employee.title === buttonTitle) {
      var newEntry = document.createElement("p");
      newEntry.textContent = employee.name + ", " + employee.title;
      allEmployeesParentDIV.appendChild(newEntry);
    }
  });
}

//we don't have to call this function here because we called it INSIDE the dipslayTitleButtons function.