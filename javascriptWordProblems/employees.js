// Employee objects array for 1, 2, and 3.
var employees = [
  { name: "Susan", title: "QA Tester" },
  { name: "Mark", title: "Analyst" },
  { name: "Tom", title: "DBA" },
  { name: "Becky", title: "Developer" },
  { name: "John", title: "Developer" },
  { name: "Brad", title: "QA Tester" },
];

// 1. Write a function that iterates through the employees array and logs out the name and title of each employee:
function logNames() {
  employees.forEach((employee) => {
    console.log(employee.name, employee.title);
  });
//the above is what solves the problem but the below is an example
  var array = [
    {eebeedeebee: "bloop", skibblybop: "whoa"}
  ]

  array.forEach((thingInArray) => {
    console.log(thingInArray.skibblybop);
  })
}

logNames()

console.log('=================================')

// 2. Write a function that, when invoked, adds a new employee, and then logs out the updated employees array.
// To use a different name or title, change the strings below.
const newEmployeeName = "Sophia";
const newEmployeeTitle = "Developer";

function addUser() {
    //create an employee object with the new name and title
    var newEmployeeObject = {name: newEmployeeName, title: newEmployeeTitle}
    //add an employee object to an array
    //the syntax is array.push(thingToAddToArray)
    employees.push(newEmployeeObject)
    //log out the updated array
    // console.log(employees)
    logNames()
}

addUser()

// 3. Write a function that returns a single object that summarizes the employee count by title.

function summarizeByTitle() {
    // {developer: 5, QA tester: 2}
    var countsByTitle = {};
    employees.forEach((employee) => {
        //COUNT THEMMMM
        //to add something to an array, use .push()
        //we can't do that to things that arent arrays lol
        //syntax would be: object["keyName"] = value
        // countsByTitle['key'] = 'value'; //adds key: 'value' to countsByTitle, since key didn't exist before
        // countsByTitle['key'] = 'value 2 electric boogaloo'; // changes key to something new, since it already exists
        countsByTitle[employee.title] = (countsByTitle[employee.title] || 0) + 1;
    })
    console.log(countsByTitle);
}

summarizeByTitle()

//an object is one thing with multiple properties
var object = {name: 'thing', secondProperty: 'another thing'}

//an array is a list of things
var array = ['thing1', 'thing2', 'thing3']