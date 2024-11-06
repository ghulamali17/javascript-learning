// Logical Operators
console.log(5 > 10 && 6 > 1); // false
console.log(5 == 5 || 6 == 5); // true
console.log(!(6 == 5)); // true

// Conditions in JavaScript
let input = "no";
if (input === 1 || input === "y" || input === "yes") {
    console.log("Continue...");
} else if (input === 0 || input === "n" || input === "no") {
    console.log("End");
} else {
    console.log("Wrong input");
}

// Ternary Operator
let loginStatus = 1;
let option = loginStatus === 1 ? "Logout" : "Login";
console.log(option);

// Nullish Coalescing Operator
let user = null;
console.log(user ?? "Guest User"); // "Guest User"

// Switch Statements
let inputSwitch = "s";
switch (inputSwitch) {
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

// Loops in JavaScript
// while Loop
let counter = 1;
let sum = 0;
while (counter <= 100) {
    if (counter % 2 === 0) sum += counter;
    counter++;
}
console.log(sum);

// do-while Loop
let counterDoWhile = 12;
do {
    console.log("Hello");
    counterDoWhile++;
} while (counterDoWhile <= 10);

// for Loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// for...of Loop (for Arrays)
let names = ["Ali", "Brohi"];
for (let name of names) {
    console.log(name);
}

// for...in Loop (for Objects)
let person = {
    name: "Ali",
    age: 20,
    email: "example@gmail.com"
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Functions
function multiplyTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplyTable(4);

// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("Hello World");
})();

// JavaScript Objects
let person1 = {
    name: "Ali",
    age: 20,
    email: "example@gmail.com"
};
console.log(person1.name);

// Adding Methods to Objects
let person2 = {
    fName: "Ali",
    lName: "Brohi",
    fullName() {
        return `${this.fName} ${this.lName}`;
    }
};
console.log(person2.fullName());

// Arrays in JavaScript
let books = ["book1", "book2", "book3"];
books.push("book4");
books.unshift("book0");
books.pop();
books.shift();
console.log(books.length);
let moreBooks = ["book5", "book6"];
let allBooks = books.concat(moreBooks);
console.log(allBooks);

// String Manipulation
let str = "Hi, my name is Ali.";
console.log(str.length);
console.log(str[3]);
console.log(str + " Nice to meet you!");
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.replace("Ali", "Ahmed"));

// Type Conversion
let numStr = "5";
console.log(Number(numStr));
console.log(Boolean(numStr));
console.log(String(5));

// Hoisting
greet();
function greet() {
    console.log("Hello!");
}

// Alerts, Prompts, and Confirms
let agee = prompt("Enter your age");
if (agee !== null) {
    alert(`Your age is ${agee}`);
} else {
    alert("Age input required");
}

let response = confirm("Are you sure you want to delete?");
if (response) {
    alert("Your file was deleted.");
} else {
    alert("Your file was not deleted.");
}

// Inline Style
let button = document.getElementById("button-id");
button.style.cssText = "background-color: red; color: white;";
let btn = document.getElementById("ui");
btn.style.color = "red";

// Get Computed CSS
let computedStyle = getComputedStyle(button).color;

// CSS Classes
let elementClass = document.getElementById("element-id");
elementClass.classList.add("new-class");
elementClass.classList.remove("old-class");
elementClass.classList.replace("old-class", "new-class");
console.log(elementClass.className);
elementClass.className += " dim";
console.log(elementClass.classList);
elementClass.classList.add("uiui");
elementClass.classList.remove("uiui");
elementClass.classList.replace("color", "bg");
console.log(elementClass.classList.contains("color"));

// Width and Height of Elements
let widthWithBorder = elementClass.offsetWidth;
let heightWithBorder = elementClass.offsetHeight;
let widthWithoutBorder = elementClass.clientWidth;
let heightWithoutBorder = elementClass.clientHeight;
console.log(widthWithBorder, heightWithBorder);
console.log(widthWithoutBorder, heightWithoutBorder);

// Create and Append Element
let newButton = document.createElement("button");
newButton.innerText = "Click Me";
document.querySelector('div').append(newButton);

// **Insert Adjacent HTML**
let myDiv = document.getElementById("myDiv");
myDiv.insertAdjacentHTML('beforeend', '<p>Inserted at the end inside the div.</p>');

// **Remove Child Element**
let prt = document.getElementById("ui");
let elm = prt.firstElementChild;
prt.removeChild(elm);

// Remove next sibling
elm = prt.firstElementChild.nextElementSibling;
prt.removeChild(elm);

// To remove a parent
prt = document.getElementById("ui");
document.body.removeChild(prt);

// **Change Attribute**
let element = document.getElementById("element-id");
element.setAttribute("class", "new-class");

// Check existing attribute
let ull = document.getElementById("ui");
let el = ull.getAttribute("name");
console.log(el);

// **Inline Style**
let buttonn = document.getElementById("button-id");
buttonm.style.cssText = "background-color: red; color: white;";

// Another way
let btnn = document.getElementById("ui");
btnn.style.color = "red";

// **Get Computed CSS**
let computedStylee = getComputedStyle(buttonn).color;
console.log(computedStylee);

// **CSS Classes**
element.classList.add("new-class");
element.classList.remove("old-class");
element.classList.replace("old-class", "new-class");

// Check class name
let em = document.getElementById("box");
console.log(em.className);

// Add new class
em.className += " dim";

// Check classes using classList
console.log(em.classList);

// Add, remove, replace classes with classList
em.classList.add("uiui");
em.classList.remove("uiui");
em.classList.replace("color", "bg");

// Check if class exists
console.log(em.classList.contains("color"));

// **Width and Height of Elements**
let widthWithBorderr = element.offsetWidth;
let heightWithBorderr = element.offsetHeight;
let widthWithoutBorderr = element.clientWidth;
let heightWithoutBorderr = element.clientHeight;

console.log(widthWithBorderr, heightWithBorderr, widthWithoutBorderr, heightWithoutBorderr);

// **DOM Events**

// onclick Inline
function btnClicked() {
    alert("Yoo btn Clicked");
}

// Event listener
btn = document.getElementById("btn");
btn.addEventListener('click', btnClicked);

// Anonymous function for one-time use
btn.addEventListener('click', function() {
    alert("Yoo btn Clicked");
});

// Mouseover event
btn.addEventListener('mouseover', function() {
    alert("Yoo mouse is over");
});

// **Remove Event Listener**
btn.removeEventListener("click", btnClicked);

// **Page Load Event**
window.addEventListener('DOMContentLoaded', () => alert("Window fully loaded"));

// **Mouse Events**

// Right-click
document.getElementById("btn").addEventListener("contextmenu", () => console.log("Right-click detected"));

// Double-click
btn.addEventListener("dblclick", () => console.log("Double clicked"));

// Mouse down/up
btn.addEventListener("mousedown", () => console.log("Mouse button down"));
btn.addEventListener("mouseup", () => console.log("Mouse button up"));

// **Scroll Events**
window.addEventListener('scroll', () => console.log("Scrolling"));
window.addEventListener('scroll', function() {
    if(window.pageYOffset > 150) {
        document.body.style.background = "red";
    }
});

// **Input Events**
let inputt = document.getElementById("input-id");
inputt.addEventListener('focus', () => input.style.background = "yellow");
inputt.addEventListener('blur', () => input.style.background = "white");

input.addEventListener('change', function() {
    console.log(this.value);
});

input.addEventListener('input', function() {
    console.log(this.value);
});

// **Prevent Default**
document.getElementById("link").addEventListener('click', event => {
  event.preventDefault();
});

// **Browser Object Model (BOM)**
let buttonElement = document.getElementById("btn");
buttonElement.addEventListener('click', () => window.open("https://www.example.com", "new-window", "width=500, height=500"));

console.log(window.innerHeight);
console.log(window.outerHeight);

// **setTimeout and setInterval**
let sst = setTimeout(myFun, 5000);
function myFun() {
    alert("Hello!");
}
clearTimeout(sst);

// **Location Object**
console.log(location.href);
console.log(location.pathname);
console.log(location.protocol);

// **Screen Object**
console.log(screen.width);
console.log(screen.height);

// **Nullish Coalescing (??)**
let userTheme = null;
let theme = userTheme ?? "dark mode";
console.log(theme);

// **Array Search**
let contacts = [
    {id: 1, name: "Ali", address: "Malir"},
    {id: 2, name: "Hisham", address: "Saddar"},
    {id: 3, name: "Nabeel", address: "Model Town"}
];
let result = contacts.find(contact => contact.name === 'Nabeel');
console.log(result);

// **ES6 Destructuring**
let array = ['Ali', 20, 'Karachi'];
let [name, age, city] = array;
console.log(name);

let book = { name: 'Advanced JS', author: 'Ali', origin: 'Pakistan' };
let { name: title, author, readers = 20000, origin } = book;
console.log(author);

// **Modules** (to be used in separate files with `export` and `import`)

// **OOP in JavaScript**
class Employee {
    constructor() {
        console.log('Employee is created');
    }
}
class Manager extends Employee {}
let manager1 = new Manager();

// **Async JavaScript: Callback, Promise, Async/Await**
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}
fetchData(() => {
    console.log("Process data");
});

async function combine() {
    await hello();
    await greet();
    await ask();
}
combine();
