// 1. Database (Firebase) - Installation & Setup in Javascript
  // a. Initialize Firebase in app - import "initializeApp(), getDatabase(), ref()"
  // b. create a Firebase App object
  // c. Fetch database items with "onValue()"




// 2. variables - used to store data values for later use (Global Scope)
let searchBtn = document.getElementById("search-btn")
let listEl = document.getElementById("list-el");
let inputEl = document.getElementById("input-el");
// let urls = []; // empty array


// Special Variable Types:
  // array - data structure that stores multiple values in a single  variable.
  // object - are variables that contain multiple data values as "key-value" pairs.
  // boolean


//2b. localStorage API - store key-value pairs directly in a user's browser




// 3. Event Listener - is a procedure or method executed when any event occurs like a "click event"
searchBtn.addEventListener("click", function() {
    // invoke function
    outputSearch();
})



// 4. functions -  block of code designed to perform a particular task when invoked
function outputSearch() {
    // what type of code exactly ?
    //  >> Objective: DOM Manipulation
    // >> <li>output</li> 

    // get the input field and its value
    let inputValue = inputEl.value;
    // create a new list item
    let li = document.createElement("li")
    // set the content of the list to display the input value
    li.textContent = inputValue;
    // append the new list item to the list
    listEl.appendChild(li);
    // clear the input field after entering text
    inputEl.value = "";
}

// log to the console to test code
console.log()
// local variables
// html dom
// reassign variable
// invoke function
// return statement
// conditional statement - execute specific blocks of code based on conditions
// for loops - execute a block of code as long as a specified condition is true.
// localStorage API - store key-value pairs directly in a user's browser




// 5. log to the console to test code
console.log()


// 6. Best Practises
// Refactor to Event Listener
// Refactor to function parameters for code reusability
// Refactor to JavaScript modules (This makes it easier to maintain a code-base.)
// If possible, use const. If not, use let.
