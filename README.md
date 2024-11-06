**Logical Operators**
&& (AND): Both conditions must be true.
console.log(5 > 10 && 6 > 1); // false

|| (OR): At least one condition must be true.
console.log(5 == 5 || 6 == 5); // true

! (NOT): Reverses the truthiness.
console.log(!(6 == 5)); // true

**Conditions in JavaScript**
if, else if, else
let input = "no";
if (input === 1 || input === "y" || input === "yes") {
    console.log("Continue...");
} else if (input === 0 || input === "n" || input === "no") {
    console.log("End");
} else {
    console.log("Wrong input");
}

**Ternary Operator**
Use for concise if-else conditions with single expressions.
let loginStatus = 1;
let option = loginStatus === 1 ? "Logout" : "Login";
console.log(option);
Nullish Coalescing Operator ??
Provides a default value for null or undefined.


let user = null;
alert(user ?? "Guest User"); // "Guest User"

**Switch Statements**
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
**Loops in JavaScript**
**while Loop**

let counter = 1;
let sum = 0;
while (counter <= 100) {
    if (counter % 2 === 0) sum += counter;
    counter++;
}
console.log(sum);

**do-while Loop**
let counter = 12;
do {
    console.log("Hello");
    counter++;
} while (counter <= 10);

**for Loop**
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
for...of Loop (for Arrays)
let names = ["Ali", "Brohi"];
for (let name of names) {
    console.log(name);
}
**for...in Loop (for Objects)**
let person = {
    name: "Ali",
    age: 20,
    email: "example@gmail.com"
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

**Functions**
User-Defined Function
function multiplyTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplyTable(4);
Immediately Invoked Function Expression (IIFE)
javascript
Copy code
(function () {
    console.log("Hello World");
})();

**JavaScript Objects**
Object Basics
let person = {
    name: "Ali",
    age: 20,
    email: "example@gmail.com"
};
console.log(person.name);
Adding Methods to Objects
let person1 = {
    fName: "Ali",
    lName: "Brohi",
    fullName() {
        return `${this.fName} ${this.lName}`;
    }
};
console.log(person1.fullName());

**Arrays in JavaScript**
Array Methods
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
String Manipulation
Basic Methods
javascript
Copy code
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
Type Conversion
JavaScript can automatically convert types, but we can also convert explicitly.

let numStr = "5";
console.log(Number(numStr)); // Converts to number
console.log(Boolean(numStr)); // Converts to boolean
console.log(String(5)); // Converts to string

**Hoisting**
JavaScript "hoists" function declarations and variables, allowing functions to be called before their declaration.

greet();
function greet() {
    console.log("Hello!");
}
**Alerts, Prompts, and Confirms**
Prompt for User Input
javascript
Copy code
let age = prompt("Enter your age");
if (age !== null) {
    alert(`Your age is ${age}`);
} else {
    alert("Age input required");
}

**Confirm**
let response = confirm("Are you sure you want to delete?");
if (response) {
    alert("Your file was deleted.");
} else {
    alert("Your file was not deleted.");
}

**Type Conversion**
JavaScript automatically converts types, but we can also convert explicitly.
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

**String Manipulation**
Template Strings
let str = "Ali";
let greeting = `Hi ${str}`;
console.log(greeting);

**Escaping Characters**
Use \ for escaping.
let newStr = "Ali \"Brohi\"";
console.log(newStr); // Ali "Brohi"

**String Length and Accessing Characters**
console.log(newStr.length);
console.log(newStr[3]);

**Concatenation and Comparison**
console.log(newStr + " " + oldStr);
let str1 = "Ali";
let str2 = "Ali";
if (str1 == str2) {
    alert("The names are the same");
} else {
    alert("Not the same");
}

**Concatenation using concat()**
let newStr = str1.concat(" ", str2);
alert(newStr);

**Extracting Substrings**
let str = "Hi, my name is Ali.";
let subStr = str.substr(3, 14);
console.log(subStr); // "my name is Ali"

**Finding String Index**
let str = "Hi, my name is Ali.";
console.log(str.indexOf("Ali"));

**Trimming Whitespace**
let str = "   Hello World!   ";
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

**Case Conversion**
console.log(str.toUpperCase());
console.log(str.toLowerCase());

**Replacing Substrings**
let str = "Hi, my name is Ali.";
let newStr = str.replace("Ali", "Ahmed");
console.log(newStr);

**Checking Inclusion with includes()**
console.log(str.includes("Brohi")); // Returns false

**Arrays in JavaScript**
Array Basics
let books = ["Book1", "Book2", "Book3"];
books[1] = "New Book";
console.log(books);

**Array Length and Adding/Removing Elements**
console.log(books.length);
books.push("Book4");
books.unshift("Start Book");
books.pop();
books.shift();

**Deleting Middle Elements**
books.splice(1, 2);

**Clearing an Array**
books = [];
books.length = 0;

**Finding Array Position**
console.log(books.indexOf("Book5"));

**Checking if it's an Array**
console.log(Array.isArray(books));

**Joining Array Elements**
let sentence = books.join(' ');
console.log(sentence);

**Concatenating Arrays**
let moreBooks = ["Book5", "Book6"];
let allBooks = books.concat(moreBooks);
console.log(allBooks);

**Multidimensional Arrays**
let bookPages = [["Book1", 300], ["Book2", 400]];
console.log(bookPages[1][0]); // "Book2"

**Iterating through Arrays**
for (let i = 0; i < books.length; i++) {
    console.log(`Element ${i} is ${books[i]}`);
}

**Functions in JavaScript**
User-Defined Functions
function multiplyTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplyTable(4);

**Arguments Object**
function add() {
    console.log(arguments[1]);
}
add(5, 7, 8);

**Return in Functions**
function add(a, b) {
    return a + b;
}
let result = add(5, 7);
console.log(result);
**Global vs. Local Variables**
Variables defined inside a function are local, while those outside are global.

Anonymous and Immediately Invoked Function Expressions (IIFE)
(function () {
    console.log("Hello World");
})();

**Objects in JavaScript**
Basic Object Syntax
let person = {
    name: "Ali",
    age: 20,
    email: "example@gmail.com"
};
console.log(person.name);

**Adding Methods**
let person = {
    firstName: "Ali",
    lastName: "Brohi",
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.fullName());

**Object Constructors**
function Student(first, last, age, grade) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.grade = grade;
}

Student.prototype.nationality = "Pakistani";
let student1 = new Student("Ali", "Brohi", 23, "10th Grade");
console.log(student1);

**Nested Objects**
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

yahan
**Hoisting**
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means you can use functions and variables before declaring them.
hello();
function hello() {
  console.log("Hello");
}


**Document Object Model (DOM)**
The DOM is an API that allows JavaScript to interact with HTML elements on a webpage.

// By class
let elements = document.getElementsByClassName("class-name");
for (let i = 0; i < elements.length; i++) {
  elements[i].innerHTML = "<p>Hello</p>";
}

// By ID
let element = document.getElementById("element-id");
element.innerHTML = "<p>Hello</p>";


**selectt element by tag name**
 let tm=document.getElementsByTagName("p");
       for(i=0; i<tm.length; i++){
        tm[i].innerHTML=" hai bhai thek ho "
       }
       let ts=document.getElementsByTagName("h2");
       for(i=0; i<=tm.length; i++){
        ts[i].innerHTML="Hai Kaisy ho"
       }

**to change elements in specific container/div**
 let div1=document.getElementById("div1")
      let tm=div1.getElementsByTagName("h2")
      for(i=0; i<=tm.length; i++){
        tm[i].innerHTML="han bhai"
      }

**Querry Selector**
 let em = document.querySelectorAll("p.intro");
for (let i = 0; i < em.length; i++) {
    em[i].innerHTML = "updated text";
}
<!-- it will change all the p which have intro class -->

**Traversing Elements**
how we go to from one element to another is done by it we can go to like parent element by using it.
<!-- to select parent of element -->
   let em = document.getElementById("intro");
 let prt=em.parentElement;
 console.log(prt)
<!-- to select first child -->
  let em = document.getElementById("intro");
 let prt=em.firstElementChild;
 console.log(prt)
 <!-- to select all childrens -->
   let em = document.getElementById("intro");
 let prt=em.children;
 console.log(prt)
 <!-- so select siblings -->
  let em = document.getElementById("intro");
 let prt=em.previousElementSibling;
 console.log(prt)
 **Traversing Elements Theory**
Navigate through elements in the DOM using:
parentElement: Gets the parent of an element.
firstElementChild: Gets the first child.
children: Gets all children.
previousElementSibling: Gets the previous sibling.

 **Create and Append Element**
let newButton = document.createElement("button");
newButton.innerText = "Click Me";
document.querySelector('div').append(newButton);


<!-- it will ad at last -->
div.prepend(newBtn)
<!-- it will add at start -->
**Insert Adjacent HTML**
The insertAdjacentHTML method allows inserting HTML at specific positions relative to an element.
// Positions: "beforebegin", "afterbegin", "beforeend", "afterend"
myDiv.insertAdjacentHTML('beforeend', '<p>Inserted at the end inside the div.</p>');

 **Remove Child Element**

 <ul id="ui">
    <li>home</li>
    <li>about</li>
    <li>contact</li>
 </ul>
let prt=document.getElementById("ui");
let elm=prt.firstElementChild;
prt.removeChild(elm)

   <!-- remove next sibling -->
   let prt=document.getElementById("ui");
let elm=prt.firstElementChild.nextElementSibling;
prt.removeChild(elm)
<!-- to remove a parent -->
let prt=document.getElementById("ui");
document.body.removeChild(prt)



**Change  Attribute**
it is use to change attribute like class id name
let element = document.getElementById("element-id");
element.setAttribute("class", "new-class");

<!-- to check already attribute -->
<button id="ui" name="uisi">Form 1</button> 
let ull=document.getElementById("ui");
let el=ull.getAttribute("name");
document.write(el);



**Inline Style**
Inline styling using JavaScript:
let button = document.getElementById("button-id");
button.style.cssText = "background-color: red; color: white;";

<!-- another way -->
let btn=document.getElementById("ui");
btn.style.color="red"

**Get Computed CSS**
Retrieve already applied CSS styles:
let computedStyle = getComputedStyle(button).color;

**Css Classes**
let element = document.getElementById("element-id");
element.classList.add("new-class"); // Add class
element.classList.remove("old-class"); // Remove class
element.classList.replace("old-class", "new-class"); // Replace class

**to check classname**
    <div id="box" class="color dim">
        <p>This is a dummy text</p>
    </div>
let em=document.getElementById("box")
console.log(em.className);

 **to add new class**
    <div id="box" class="color">
        <p>This is a dummy text</p>
    </div>
let em=document.getElementById("box")
em.className +=" dim"

 **one more way to check classes**
  <div id="box" class="color dim">
        <p>This is a dummy text</p>
    </div>
let em=document.getElementById("box")
 console.log(em.classList)

**now to add some class using classlis**
     <div id="box" class="color dim">
        <p>This is a dummy text</p>
    </div>
let em=document.getElementById("box")
em.classList.add("uiui");
26:28

<!-- to remove some class -->
em.classList.remove("uiui");
<!-- to replace some class -->
em.classList.replace("color", "bg");
<!-- to check class is there or not -->
em.classList.contains("color");
<!-- it will check if class is not there it will add it and if there is class it will remove it -->
em.classList.contains("color");

**Width and Height of Elements**
let widthWithBorder = element.offsetWidth;
let heightWithBorder = element.offsetHeight;
let widthWithoutBorder = element.clientWidth;
let heightWithoutBorder = element.clientHeight;

<!-- to check with border -->
 <div id="box" class="color dim">
        <p>This is a dummy text</p>
    </div>
let em=document.getElementById("box");
let width=em.offsetWidth;
let height=em.offsetHeight;
console.log(width)
console.log(height)
<!-- to check without border -->
let width=em.clientWidth;
let height=em.clientHeight;
console.log(width)
console.log(height)

**DOM Events**
Dom events are actions that occurs as a result of the user action or as result of state change of the elements of a DOM tree.
it can be two types
one is user when does some action
and when our web page does like load

<!-- onclick Inline -->
 <button id="bten" onclick="btnClicked()">Hello</button>
    
function btnClicked(){
    alert("Yoo btn Clicked")
}

<!-- using event listner -->
   <button id="btn">Hello</button>
function btnClicked(){
    alert("Yoo btn Cliked")
}
let btn=document.getElementById("btn");
btn.addEventListener('click',btnClicked)

<!-- one more way using anonymous function if we wanna use it only one time -->
   <button id="btn">Hello</button>
function btnClicked(){
    alert("Yoo btn Cliked")
}
let btn=document.getElementById("btn");
btn.addEventListener('click',function(){
    alert("Yoo btn Clicked");
});
<!-- mouse over -->
   <button id="btn">Hello</button>
     <script>

let btn=document.getElementById("btn");
btn.addEventListener('mouseover',function(){
    alert("Yoo mouse is over");
});
</script>
<!-- same goes for mouse out -->

**REMOVE EVENTLISTNER**
To remove an event listener:
btn.removeEventListner("click",btnClicked)

**PAGE LOAD EVENT**
we use it when something is loaded like if a image is fully loaded we can add some action 
you can use it on a particuler element or window 
<!-- for window -->
wiwindow.addEventListener('DOMContentLoaded', () => alert("Window fully loaded"));

<!-- to load particuler element -->
let em=getElementById("image1");
em.addEventListner("load", function()){
      alert("The Image is loaded now")
};
<!-- You can also use it inline  -->
like onload="("load", function()){alert("The Image is loaded now")};"

**Mouse Events**
Various mouse events like onclick, ondblclick, onmousedown, and onmouseup allow interactions based on mouse actions.
**Key Down Event**
Detect which key is pressed:
window.addEventListener("keydown", event => console.log(event.key));
**Scroll Events**
window.addEventListener('scroll', () => console.log("Scrolling"));
<!-- to activate event on right mouse click -->
we use oncontextmenu
<!-- on doule click -->
we use ondblclick
<!-- mouse down and up -->
onmousedown
onmouseup
it will activated when we relaease mouse btn down or up
<!-- on mouse over -->
work like hover
<!-- on mouse out -->
when you take curser out from element


<!-- to check scroll on particuler pixel --> 
         <script>
        window.addEventListener('scroll', function(){
            if(window.pageYOffset>150){
                document.body.style.background="red";
            }
        });

        </script>

**Input Events**
To detect focus and blur events on an input:
let input = document.getElementById("input-id");
input.addEventListener('focus', () => input.style.background = "yellow");
input.addEventListener('blur', () => input.style.background = "white");
**Event Bubbling & Capturing**
Bubbling: Events propagate from the specific element to the least specific.
Capturing: Events propagate from the least specific to the most specific element.
btn.addEventListener('click', event => event.stopPropagation()); // Stops bubbling

<!-- to get value of any input -->
<form action="" >
        <input type="text" id="tt">
    </form>
    let em=document.getElementById("tt");
em.addEventListener('change', function(){
 console.log(this.value )
});
<!-- to get when something is typing we use input -->
<form action="" >
        <input type="text" id="tt">
    </form>
let em=document.getElementById("tt");
em.addEventListener('input', function(){
 console.log(this.value )
});

**Prevent Default**
To override default behavior, such as following a link:
document.getElementById("link").addEventListener('click', event => {
  event.preventDefault();
});

**Browser Object Model (BOM)**
Use BOM to interact with the browser window:
// Popup
let btn = document.getElementById("btn");
btn.addEventListener('click', () => window.open("https://www.example.com", "new-window", "width=500, height=500"));

<!-- to check height  -->
console.log(window.innerHeight);
console.log(window.outerHeight);

**setTimeout and setInterval**
setTimeout() executes a function after a delay:
javascript
Copy code
let sst = setTimeout(myFun, 5000);
function myFun() {
    alert("Hello!");
}
To cancel it: clearTimeout(sst);
Useful for delayed actions like showing a login message.
<!-- to stop it -->

**Location object**
Provides details about the URL of the current page.
console.log(location.href);        // Full URL
console.log(location.pathname);    // Path after the domain
console.log(location.protocol);    // Protocol (http/https)

**Navigator object**
Contains info about the browser (e.g., browser version, OS, online status).
**Screen Object**
Gives details about the screen’s dimensions.
console.log(screen.width)
console.log(screen.height)


**Nullish Coalescing (??)**
?? assigns a default value if the left side is null or undefined:
let userTheme = null;
let theme = userTheme ?? "dark mode"; // "dark mode" if userTheme is null

**Array Search**
let contacts = [
    {id: 1, name: "Ali", address: "Malir"},
    {id: 2, name: "Hisham", address: "Saddar"},
    {id: 3, name: "Nabeel", address: "Model Town"}
];
let result = contacts.find(contact => contact.name === 'Nabeel');
console.log(result);

 **ES6 and JavaScript Advancements**
EcmaScript is a standard which js adapt. it is version of js 1997 first. es6 was released in june 2015.
es6 was a major change. like Arrow Functions, let and const, and modules were introduced with ES6.
***Array Destructuring***
let array = ['Ali', 20, 'Karachi'];
let [name, age, city] = array;
console.log(name); // "Ali"


***object Destructuring***
let book = { name: 'Advanced JS', author: 'Ali', origin: 'Pakistan' };
let { name: title, author, readers = 20000, origin } = book;
console.log(author); // "Ali"

**Modules**
Enable organizing code across multiple files:
// In HTML
<script type="module" src="app.js"></script>

// In app.js
import { name } from './modules/user.js';
import * as usr from './modules/user.js';
usr.code();

<!-- we can import whole file like this but it will only work with those who have export keyword -->
import * as usr from './modules/user.js'
usr.code();


**OOP in JavaScript**
Inheritance in ES6 uses class and extends
class Employee {
    constructor() {
        console.log('Employee is created');
    }
}
class Manager extends Employee {}
let manager1 = new Manager(); // "Employee is created"

**Pillars of OOP**
Encapsulation: Grouping properties and methods.
Abstraction: Hiding complexity.
Inheritance: Sharing functionality with child classes.
Polymorphism: Method overriding and overloading


**Async JavaScript**
Callback: Function passed as an argument.
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}

fetchData(() => {
    console.log("Process data");
});

Callback Hell: Nested callbacks, making code hard to read.
doSomething(() => {
    doSomethingElse(() => {
        doAnotherThing(() => {
            doFinalThing();
        });
    });
});

Promises: Resolve callback hell with states: pending, resolved, rejected.
**Async/Await**
async function combine() {
    await hello();
    await greet();
    await ask();
}
combine();

