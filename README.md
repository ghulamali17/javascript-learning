```markdown
# JavaScript Basics

This document provides an overview of fundamental JavaScript concepts, including operators, conditions, loops, functions, objects, arrays, string manipulation, type conversion, hoisting, DOM manipulation, events, and more advanced ES6+ features.

## Logical Operators

- **&& (AND)**: Both conditions must be true.
```javascript
console.log(5 > 10 && 6 > 1); // false
```

- **|| (OR)**: At least one condition must be true.
```javascript
console.log(5 == 5 || 6 == 5); // true
```

- **! (NOT)**: Reverses the truthiness.
```javascript
console.log(!(6 == 5)); // true
```

## Conditions in JavaScript

### if, else if, else
```javascript
let input = "no";
if (input === 1 || input === "y" || input === "yes") {
    console.log("Continue...");
} else if (input === 0 || input === "n" || input === "no") {
    console.log("End");
} else {
    console.log("Wrong input");
}
```

### Ternary Operator
Use for concise if-else conditions with single expressions.
```javascript
let loginStatus = 1;
let option = loginStatus === 1 ? "Logout" : "Login";
console.log(option);
```

### Nullish Coalescing Operator ??
Provides a default value for null or undefined.
```javascript
let user = null;
alert(user ?? "Guest User"); // "Guest User"
```

### Switch Statements
```javascript
let input = "s";
switch (input) {
    case 1:
    case 'y':
    case 'yes':
        console.log("Continue");
        break;
    case 0:
    case 'n':
    case 'no':
        console.log("End");
        break;
    default:
        console.log("Wrong Input");
}
```

## Loops in JavaScript

### while Loop
```javascript
let counter = 1;
let sum = 0;
while (counter <= 100) {
    if (counter % 2 === 0) sum += counter;
    counter++;
}
console.log(sum);
```

### do-while Loop
```javascript
let counter = 12;
do {
    console.log("Hello");
    counter++;
} while (counter <= 10);
```

### for Loop
```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### for...of Loop (for Arrays)
```javascript
let names = ["Ali", "Brohi"];
for (let name of names) {
    console.log(name);
}
```

### for...in Loop (for Objects)
```javascript
let person = {
    name: "Ali",
    age: 20,
    email: "example@gmail.com"
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

## Functions

### User-Defined Function
```javascript
function multiplyTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplyTable(4);
```

### Immediately Invoked Function Expression (IIFE)
```javascript
(function () {
    console.log("Hello World");
})();
```

## JavaScript Objects

### Object Basics
```javascript
let person = {
    name: "Ali",
    age: 20,
    email: "example@gmail.com"
};
console.log(person.name);
```

### Adding Methods to Objects
```javascript
let person1 = {
    fName: "Ali",
    lName: "Brohi",
    fullName() {
        return `${this.fName} ${this.lName}`;
    }
};
console.log(person1.fullName());
```

## Arrays in JavaScript

### Array Methods
```javascript
let books = ["book1", "book2", "book3"];

// Add elements
books.push("book4"); // Adds to end
books.unshift("book0"); // Adds to start

// Remove elements
books.pop(); // Removes from end
books.shift(); // Removes from start

// Check length
console.log(books.length);

// Concatenate arrays
let moreBooks = ["book5", "book6"];
let allBooks = books.concat(moreBooks);
console.log(allBooks);
```

## String Manipulation

### Basic Methods
```javascript
let str = "Hi, my name is Ali.";

// Length
console.log(str.length);

// Access Character
console.log(str[3]);

// Concatenation
console.log(str + " Nice to meet you!");

// Uppercase & Lowercase
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Replace
console.log(str.replace("Ali", "Ahmed"));
```

## Type Conversion
JavaScript can automatically convert types, but we can also convert explicitly.
```javascript
let numStr = "5";
console.log(Number(numStr)); // Converts to number
console.log(Boolean(numStr)); // Converts to boolean
console.log(String(5)); // Converts to string
```

## Hoisting
JavaScript "hoists" function declarations and variables, allowing functions to be called before their declaration.
```javascript
greet();
function greet() {
    console.log("Hello!");
}
```

## Alerts, Prompts, and Confirms

### Prompt for User Input
```javascript
let age = prompt("Enter your age");
if (age !== null) {
    alert(`Your age is ${age}`);
} else {
    alert("Age input required");
}
```

### Confirm
```javascript
let response = confirm("Are you sure you want to delete?");
if (response) {
    alert("Your file was deleted.");
} else {
    alert("Your file was not deleted.");
}
```

## Type Conversion
JavaScript automatically converts types, but we can also convert explicitly.
```javascript
let num = "5" - 2; // Returns 3 because "5" is converted to number
let invalid = "5" * "Yes"; // Returns NaN because "Yes" can't convert to a number

// Type conversion functions
String(); // Converts to string
Number(); // Converts to number
Boolean(); // Converts to boolean

// Example:
let type = 5;
console.log(typeof type); // 'number'
let newType = String(type);
console.log(typeof newType); // 'string'
```

## String Manipulation

### Template Strings
```javascript
let str = "Ali";
let greeting = `Hi ${str}`;
console.log(greeting);
```

### Escaping Characters
Use \ for escaping.
```javascript
let newStr = "Ali \"Brohi\"";
console.log(newStr); // Ali "Brohi"
```

### String Length and Accessing Characters
```javascript
console.log(newStr.length);
console.log(newStr[3]);
```

### Concatenation and Comparison
```javascript
console.log(newStr + " " + oldStr);
let str1 = "Ali";
let str2 = "Ali";
if (str1 == str2) {
    alert("The names are the same");
} else {
    alert("Not the same");
}
```

### Concatenation using concat()
```javascript
let newStr = str1.concat(" ", str2);
alert(newStr);
```

### Extracting Substrings
```javascript
let str = "Hi, my name is Ali.";
let subStr = str.substr(3, 14);
console.log(subStr); // "my name is Ali"
```

### Finding String Index
```javascript
let str = "Hi, my name is Ali.";
console.log(str.indexOf("Ali"));
```

### Trimming Whitespace
```javascript
let str = "   Hello World!   ";
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
```

### Case Conversion
```javascript
console.log(str.toUpperCase());
console.log(str.toLowerCase());
```

### Replacing Substrings
```javascript
let str = "Hi, my name is Ali.";
let newStr = str.replace("Ali", "Ahmed");
console.log(newStr);
```

### Checking Inclusion with includes()
```javascript
console.log(str.includes("Brohi")); // Returns false
```

## Arrays in JavaScript

### Array Basics
```javascript
let books = ["Book1", "Book2", "Book3"];
books[1] = "New Book";
console.log(books);
```

### Array Length and Adding/Removing Elements
```javascript
console.log(books.length);
books.push("Book4");
books.unshift("Start Book");
books.pop();
books.shift();
```

### Deleting Middle Elements
```javascript
books.splice(1, 2);
```

### Clearing an Array
```javascript
books = [];
books.length = 0;
```

### Finding Array Position
```javascript
console.log(books.indexOf("Book5"));
```

### Checking if it's an Array
```javascript
console.log(Array.isArray(books));
```

### Joining Array Elements
```javascript
let sentence = books.join(' ');
console.log(sentence);
```

### Concatenating Arrays
```javascript
let moreBooks = ["Book5", "Book6"];
let allBooks = books.concat(moreBooks);
console.log(allBooks);
```

### Multidimensional Arrays
```javascript
let bookPages = [["Book1", 300], ["Book2", 400]];
console.log(bookPages[1][0]); // "Book2"
```

### Iterating through Arrays
```javascript
for (let i = 0; i < books.length; i++) {
    console.log(`Element ${i} is ${books[i]}`);
}
```

## Functions in JavaScript

### User-Defined Functions
```javascript
function multiplyTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplyTable(4);
```

### Arguments Object
```javascript
function add() {
    console.log(arguments[1]);
}
add(5, 7, 8);
```

### Return in Functions
```javascript
function add(a, b) {
    return a + b;
}
let result = add(5, 7);
console.log(result);
```

### Global vs. Local Variables
Variables defined inside a function are local, while those outside are global.

### Anonymous and Immediately Invoked Function Expressions (IIFE)
```javascript
(function () {
    console.log("Hello World");
})();
```

## Objects in JavaScript

### Basic Object Syntax
```javascript
let person = {
    name: "Ali",
    age: 20,
    email: "example@gmail.com"
};
console.log(person.name);
```

### Adding Methods
```javascript
let person = {
    firstName: "Ali",
    lastName: "Brohi",
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.fullName());
```

### Object Constructors
```javascript
function Student(first, last, age, grade) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.grade = grade;
}

Student.prototype.nationality = "Pakistani";
let student1 = new Student("Ali", "Brohi", 23, "10th Grade");
console.log(student1);
```

### Nested Objects
```javascript
let user = {
    id: 101,
    email: "example@gmail.com",
    personalInfo: {
        name: "Ali",
        address: {
            street: "Example St",
            city: "Karachi"
        }
    }
};
console.log(user.personalInfo.address.street);
```

## Hoisting
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means you can use functions and variables before declaring them.
```javascript
hello();
function hello() {
  console.log("Hello");
}
```

## Document Object Model (DOM)
The DOM is an API that allows JavaScript to interact with HTML elements on a webpage.

### By Class
```javascript
let elements = document.getElementsByClassName("class-name");
for (let i = 0; i < elements.length; i++) {
  elements[i].innerHTML = "<p>Hello</p>";
}
```

### By ID
```javascript
let element = document.getElementById("element-id");
element.innerHTML = "<p>Hello</p>";
```

### Select Element by Tag Name
```javascript
let tm = document.getElementsByTagName("p");
for (i = 0; i < tm.length; i++) {
    tm[i].innerHTML = "hai bhai thek ho";
}
let ts = document.getElementsByTagName("h2");
for (i = 0; i <= tm.length; i++) {
    ts[i].innerHTML = "Hai Kaisy ho";
}
```

### Change Elements in Specific Container/Div
```javascript
let div1 = document.getElementById("div1");
let tm = div1.getElementsByTagName("h2");
for (i = 0; i <= tm.length; i++) {
    tm[i].innerHTML = "han bhai";
}
```

### Query Selector
```javascript
let em = document.querySelectorAll("p.intro");
for (let i = 0; i < em.length; i++) {
    em[i].innerHTML = "updated text";
}
```

### Traversing Elements
How we go to from one element to another is done by it we can go to like parent element by using it.
```javascript
// to select parent of element
let em = document.getElementById("intro");
let prt = em.parentElement;
console.log(prt);

// to select first child
let em = document.getElementById("intro");
let prt = em.firstElementChild;
console.log(prt);

// to select all children
let em = document.getElementById("intro");
let prt = em.children;
console.log(prt);

// to select siblings
let em = document.getElementById("intro");
let prt = em.previousElementSibling;
console.log(prt);
```

### Traversing Elements Theory
Navigate through elements in the DOM using:
- **parentElement**: Gets the parent of an element.
- **firstElementChild**: Gets the first child.
- **children**: Gets all children.
- **previousElementSibling**: Gets the previous sibling.

### Create and Append Element
```javascript
let newButton = document.createElement("button");
newButton.innerText = "Click Me";
document.querySelector('div').append(newButton);
```

### Prepend Element
```javascript
// it will add at start
div.prepend(newBtn);
```

### Insert Adjacent HTML
The insertAdjacentHTML method allows inserting HTML at specific positions relative to an element.
```javascript
// Positions: "beforebegin", "afterbegin", "beforeend", "afterend"
myDiv.insertAdjacentHTML('beforeend', '<p>Inserted at the end inside the div.</p>');
```

### Remove Child Element
```html
<ul id="ui">
    <li>home</li>
    <li>about</li>
    <li>contact</li>
</ul>
```
```javascript
let prt = document.getElementById("ui");
let elm = prt.firstElementChild;
prt.removeChild(elm);

// remove next sibling
let prt = document.getElementById("ui");
let elm = prt.firstElementChild.nextElementSibling;
prt.removeChild(elm);

// to remove a parent
let prt = document.getElementById("ui");
document.body.removeChild(prt);
```

### Change Attribute
It is used to change attributes like class, id, name.
```javascript
let element = document.getElementById("element-id");
element.setAttribute("class", "new-class");
```

### Check Attribute
```html
<button id="ui" name="uisi">Form 1</button>
```
```javascript
let ull = document.getElementById("ui");
let el = ull.getAttribute("name");
document.write(el);
```

### Inline Style
Inline styling using JavaScript:
```javascript
let button = document.getElementById("button-id");
button.style.cssText = "background-color: red; color: white;";

// another way
let btn = document.getElementById("ui");
btn.style.color = "red";
```

### Get Computed CSS
Retrieve already applied CSS styles:
```javascript
let computedStyle = getComputedStyle(button).color;
```

### CSS Classes
```javascript
let element = document.getElementById("element-id");
element.classList.add("new-class"); // Add class
element.classList.remove("old-class"); // Remove class
element.classList.replace("old-class", "new-class"); // Replace class
```

### Check Class Name
```html
<div id="box" class="color dim">
    <p>This is a dummy text</p>
</div>
```
```javascript
let em = document.getElementById("box");
console.log(em.className);
```

### Add New Class
```html
<div id="box" class="color">
    <p>This is a dummy text</p>
</div>
```
```javascript
let em = document.getElementById("box");
em.className += " dim";
```

### Check Classes with classList
```html
<div id="box" class="color dim">
    <p>This is a dummy text</p>
</div>
```
```javascript
let em = document.getElementById("box");
console.log(em.classList);
```

### Add/Remove/Replace Classes with classList
```javascript
let em = document.getElementById("box");
em.classList.add("uiui");
em.classList.remove("uiui");
em.classList.replace("color", "bg");
em.classList.contains("color"); // it will check if class is not there it will add it and if there is class it will remove it
em.classList.contains("color");
```

### Width and Height of Elements
```javascript
let widthWithBorder = element.offsetWidth;
let heightWithBorder = element.offsetHeight;
let widthWithoutBorder = element.clientWidth;
let heightWithoutBorder = element.clientHeight;
```

### Check Width and Height
```html
<div id="box" class="color dim">
    <p>This is a dummy text</p>
</div>
```
```javascript
// to check with border
let em = document.getElementById("box");
let width = em.offsetWidth;
let height = em.offsetHeight;
console.log(width);
console.log(height);

// to check without border
let width = em.clientWidth;
let height = em.clientHeight;
console.log(width);
console.log(height);
```

## DOM Events
DOM events are actions that occur as a result of the user action or as result of state change of the elements of a DOM tree.
It can be two types:
- One is user when does some action
- And when our web page does like load

### Onclick Inline
```html
<button id="bten" onclick="btnClicked()">Hello</button>
```
```javascript
function btnClicked() {
    alert("Yoo btn Clicked");
}
```

### Using Event Listener
```html
<button id="btn">Hello</button>
```
```javascript
function btnClicked() {
    alert("Yoo btn Cliked");
}
let btn = document.getElementById("btn");
btn.addEventListener('click', btnClicked);
```

### Using Anonymous Function
```html
<button id="btn">Hello</button>
```
```javascript
function btnClicked() {
    alert("Yoo btn Cliked");
}
let btn = document.getElementById("btn");
btn.addEventListener('click', function() {
    alert("Yoo btn Clicked");
});
```

### Mouseover Event
```html
<button id="btn">Hello</button>
```
```javascript
let btn = document.getElementById("btn");
btn.addEventListener('mouseover', function() {
    alert("Yoo mouse is over");
});
```

### Remove Event Listener
To remove an event listener:
```javascript
btn.removeEventListener("click", btnClicked);
```

### Page Load Event
We use it when something is loaded like if an image is fully loaded we can add some action. You can use it on a particular element or window.
```javascript
// for window
window.addEventListener('DOMContentLoaded', () => alert("Window fully loaded"));

// to load particular element
let em = document.getElementById("image1");
em.addEventListener("load", function() {
    alert("The Image is loaded now");
});
```

### Inline Load Event
```html
<img onload="alert('The Image is loaded now')" />
```

### Mouse Events
Various mouse events like onclick, ondblclick, onmousedown, and onmouseup allow interactions based on mouse actions.
- To activate event on right mouse click, use `oncontextmenu`.
- On double click, use `ondblclick`.
- Mouse down and up: `onmousedown`, `onmouseup` (activated when we release mouse button down or up).
- On mouse over: works like hover.
- On mouse out: when you take cursor out from element.

### Key Down Event
Detect which key is pressed:
```javascript
window.addEventListener("keydown", event => console.log(event.key));
```

### Scroll Events
```javascript
window.addEventListener('scroll', () => console.log("Scrolling"));
```

### Scroll to Specific Pixel
```javascript
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 150) {
        document.body.style.background = "red";
    }
});
```

### Input Events
To detect focus and blur events on an input:
```javascript
let input = document.getElementById("input-id");
input.addEventListener('focus', () => input.style.background = "yellow");
input.addEventListener('blur', () => input.style.background = "white");
```

### Event Bubbling & Capturing
- **Bubbling**: Events propagate from the specific element to the least specific.
- **Capturing**: Events propagate from the least specific to the most specific element.
```javascript
btn.addEventListener('click', event => event.stopPropagation()); // Stops bubbling
```

### Get Input Value
```html
<form action="">
    <input type="text" id="tt">
</form>
```
```javascript
let em = document.getElementById("tt");
em.addEventListener('change', function() {
    console.log(this.value);
});
```

### Get Value on Typing
```javascript
let em = document.getElementById("tt");
em.addEventListener('input', function() {
    console.log(this.value);
});
```

### Prevent Default
To override default behavior, such as following a link:
```javascript
document.getElementById("link").addEventListener('click', event => {
    event.preventDefault();
});
```

## Browser Object Model (BOM)

### Popup
```javascript
let btn = document.getElementById("btn");
btn.addEventListener('click', () => window.open("https://www.example.com", "new-window", "width=500, height=500"));
```

### Check Height
```javascript
console.log(window.innerHeight);
console.log(window.outerHeight);
```

## setTimeout and setInterval
setTimeout() executes a function after a delay:
```javascript
let sst = setTimeout(myFun, 5000);
function myFun() {
    alert("Hello!");
}
```
To cancel it:
```javascript
clearTimeout(sst);
```
Useful for delayed actions like showing a login message.

## Location Object
Provides details about the URL of the current page.
```javascript
console.log(location.href);        // Full URL
console.log(location.pathname);    // Path after the domain
console.log(location.protocol);    // Protocol (http/https)
```

## Navigator Object
Contains info about the browser (e.g., browser version, OS, online status).

## Screen Object
Gives details about the screen’s dimensions.
```javascript
console.log(screen.width);
console.log(screen.height);
```

## Nullish Coalescing (??)
?? assigns a default value if the left side is null or undefined:
```javascript
let userTheme = null;
let theme = userTheme ?? "dark mode"; // "dark mode" if userTheme is null
```

## Array Search
```javascript
let contacts = [
    {id: 1, name: "Ali", address: "Malir"},
    {id: 2, name: "Hisham", address: "Saddar"},
    {id: 3, name: "Nabeel", address: "Model Town"}
];
let result = contacts.find(contact => contact.name === 'Nabeel');
console.log(result);
```

## ES6 and JavaScript Advancements
EcmaScript is a standard which JS adapts. It is a version of JS, first released in 1997. ES6 was released in June 2015.
ES6 was a major change, introducing features like Arrow Functions, let and const, and modules.

### Array Destructuring
```javascript
let array = ['Ali', 20, 'Karachi'];
let [name, age, city] = array;
console.log(name); // "Ali"
```

### Object Destructuring
```javascript
let book = { name: 'Advanced JS', author: 'Ali', origin: 'Pakistan' };
let { name: title, author, readers = 20000, origin } = book;
console.log(author); // "Ali"
```

## Modules
Enable organizing code across multiple files:
```html
<script type="module" src="app.js"></script>
```
```javascript
// In app.js
import { name } from './modules/user.js';
import * as usr from './modules/user.js';
usr.code();
```
```javascript
// we can import whole file like this but it will only work with those who have export keyword
import * as usr from './modules/user.js';
usr.code();
```

## OOP in JavaScript
Inheritance in ES6 uses class and extends:
```javascript
class Employee {
    constructor() {
        console.log('Employee is created');
    }
}
class Manager extends Employee {}
let manager1 = new Manager(); // "Employee is created"
```

### Pillars of OOP
- **Encapsulation**: Grouping properties and methods.
- **Abstraction**: Hiding complexity.
- **Inheritance**: Sharing functionality with child classes.
- **Polymorphism**: Method overriding and overloading.

## Async JavaScript

### Callback
Callback: Function passed as an argument.
```javascript
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}

fetchData(() => {
    console.log("Process data");
});
```

### Callback Hell
Callback Hell: Nested callbacks, making code hard to read.
```javascript
doSomething(() => {
    doSomethingElse(() => {
        doAnotherThing(() => {
            doFinalThing();
        });
    });
});
```

### Promises
Promises: Resolve callback hell with states: pending, resolved, rejected.

### Async/Await
```javascript
async function combine() {
    await hello();
    await greet();
    await ask();
}
combine();
```
```
