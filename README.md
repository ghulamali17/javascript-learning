
 ***comparision operators**

<!-- // == dont compare datatype -->
let a=5;
let b="5";
if(a==b)
    {
   document.write("Equal")
}else{
    document.write(" not Equal")
}
<!-- // === compare datatype -->
let a=5;
let b="5";
if(a===b)
    {
   document.write("Equal")
}else{
    document.write(" not Equal")
}
<!-- // != not equal to -->
let a=5;
let b=5;
if(a!=b)
    {
   document.write("Equal")
}else{
    document.write(" not Equal")
}


*** logical operator***
// 5>10 && 6>1
// both should be true it will be true then

// || orr
// 5==5 || 6==5 it will be trues
// one should be true

// ! not
// it will reverse the decicions
// !(6==5) -> true

*** Conditions in javascript**
<!-- if else -->
let input;
input="no";

if(input===1){
document.write("continue....")
}
else if(input==="y"){
    document.write("continue....")
}
else if(input==="yes"){
    document.write("continue....")
}
else if(input===0){
    document.write("END")
}
else if(input==="no"){
    document.write("END")
}
else if(input==="n"){
    document.write("END")
}
else{
    document.write("Wrong input")

}
***Ternaery operator *** use only if you have few lines otherwise use if else
let loginHai=1;
let option= loginHai==1 ? "logout" : "login";
document.write(option)
***Nullish coalescing operator (??)***
<!-- use to get rid of undiffind and NULL-->
let user;
user= "Ali"
alert(user ?? "Guest user");

**SWITCH STATMENTS**
it will do ==== comparaions
input="s";
switch(input){
case 1:
 document.write("continue");
break;
case 'y':
document.write("continue");
 break;
case 'yes':
document.write("continue");
 break;
  case 0:
 document.write("end");
break;
case 'n':
   document.write("end");
break;
case 'No':
 document.write("end");
break;
 default:
document.write("Wrong Input");
}

***Loop in Javascript ***

<!-- while -->
 let counter=1;
 let sum=0;
 while(counter<=100){
    if(counter%2==0){
        sum=sum+counter;

    }
    counter++;

 }
 document.write(sum);

 if the statment wrong it will not run
 <!-- do while -->
  let counter=12;

do{
  document.write("hello")
    counter++;

 } while(counter<=10);

 if the statment wrong at first time it will print it one time 

<!-- for loop -->
for(let a=1; a<=10; a++){
    document.write(a)
}
first time it will read from a=1 then it check condition and then it will skip a++ and print the document text one time
then it will go in reverse it will go to a++ it will print one time then check condition if true print more
<!-- for of -->
we can use it to get value of string and arrays 
let str=["alibrohi","ali","alywe","brohi"]
for( let vhh of str){
    console.log(vhh)
}
<!-- for in -->
it is use to get key values of object
let person={
    name: "ali",
    age: 20,
    email: "exam@gmail.com"
}
for(let key in person ){
    console.log(`${key} : ${person[key]}`)
}

<!-- for each -->

for each is a higher order funntion or method. hof is the function which take other function as parametar
or return it.
let arr=[1,2,3,4,5,6]
arr.forEach((val) =>{
   document.write(val)
})

**Break Continue and Nested Lopp**
<!-- break -->
for(let a=1; a<=10; a++){
    if(a==5){
        break;

    }
    document.write(a)
    document.write('<br/>')

}
<!-- continue -->
for(let a=1; a<=10; a++){
    if(a==5){
        continue;

    }
    document.write(a)
    document.write('<br/>')

}
<!-- nested loop -->
for(let a=1; a<=10; a++){
   
    document.write(a)
    document.write('<br/>')
    for(let b=1; b<3; b++){
   
        document.write("ali")
        document.write('<br/>')
    
    }
}


**alert, prompt,confirm**
<!-- use to intract with user -->

<!-- alert and prompt -->
let age= prompt('Enter you age');
if(age !=null){
    alert(`Your age is ${age}`);
}
else{
    alert("Age should be fill");
}
<!-- confirm -->
let response= confirm("are you share u want to delete?");
if(response){
    alert("Your File deleted");

}else{
    alert("Your File Not deleted");
}

<!-- Type Conversion -->
mostly JS automaticaly converts type by it self
for example if write Num="5"-2;
it will return 3 automaticaly
but if we write "5"* "Yes" but will
give Nan because "yes" cannot converted 
in Number.
String()
number()
bolean()

let type=5;
console.log(typeof type);
let newType=String(type)
console.log(typeof newType);

**String Manipulation**
 <!-- first method -->
let str="ali";
new=`hi ${str}`;
console.log(new);

<!-- escape -->
\
if we want a \ in our string we will use \\ the first will be use as escape and 2nd will be use as \.
if we want " in string
new="ali \" brohi"
<!-- to get length -->
console.log(new.length);
<!-- to fecth any char -->
console.log(new[3]);
<!-- to concanate 2 strings -->
console.log(new + " " + old);

<!-- compare two strings -->
let str="ali";
let str2="ali";
if("ali"==str2){
    alert("The name is same")

}else{
    alert("Not Same")
}

<!-- Concate -->
let str="ali";
let str2="ali";
 let neww= str.concat(" ",str2)
 alert(neww)

 <!-- to extract a sub string from a string -->
 let str="Hi my name is ali. i am student of SMIU university. ";
let newStr= str.substr(3,14);
document.write(newStr)
<!-- // first will tell position second lenght
// output  my name is ali -->

<!-- to check the starting position of any string (indexOf) -->

let str="Hi my name is ali. i am student of SMIU university. ";
let newStr= str.indexOf("SMIU")
document.write(newStr)

<!-- to remove the white space -->(trim(), trimStart(), trimEnd())
et str="Hi my name is ali. i am student of SMIU university. ";
let newStr= str.trim();
document.write(newStr)
<!-- to convert to upercase/lowerCase -->
let str="Hi my name is ali. i am student of SMIU university. ";
let newStr= str.toUpperCase();
document.write(newStr)

<!-- to replace a string -->
let str="Hi my name is ali. i am student of SMIU university. ";
let newStr= str.replace("SMIU", "SMI");
document.write(newStr)

<!-- if we want to find any string is include in string or not in true and false form  -->
let str="Hi my name is ali. i am student of SMIU university. ";
let newStr= str.includes("brohi")
document.write(newStr)


**ARRAYS In JAVASCRIPT**
<!-- to update and create an array in js -->
let books=["book1","book2","book1","book3","book4","book5"];
books[1]="new book"
document.write(books);
<!-- Operations on Array -->
<!-- to check lenght -->
let books=["book1","book2","book1","book3","book4","book5"];
document.write(books.length);
<!-- if we want to add something at end of array-->
let books=["book1","book2","book1","book3","book4","book5"];
books.push("book6")
document.write(books);
<!-- if we want to add  start of array-->
let books=["book1 ","book2 ","book1 ","book3 ","book4 ","book5 "];
books.unshift("book")
document.write(books);
<!-- to delete last item -->
books.pop();
<!-- to  delete first element -->
books.shift();
<!-- to delete a item from middle -->
let books=["book1 ","book2 ","book1 ","book3 ","book4 ","book5 "];
books.splice(1,4);
document.write(books);
<!-- to empty array -->
books=[];
books.length=0;
<!-- to check position -->
let books=["book1","book2","book1","book3","book4","book5"];
let pss =books.indexOf("book5")
console.log(pss)
<!-- to check if it is array or not -->
let books=["book1","book2","book1","book3","book4","book5"];
let book='book1';
console.log(Array.isArray(book))

<!-- To convert a whole array in a sentence form -->
let books=["book1","book2","book1","book3","book4","book5"];
let newArr=books.join(' ');
console.log(newArr)
<!-- to add differnt arrays -->
we will use
let newArr=books.concate(book)
<!-- <!-- if we craete a array in array then it will be called as multi dimensional array -> -->
let bookPages=[["book1","300"],["book2","400"],["book3","500"],["book4","200"],];
let newArr=bookPages[1][0];
document.write(newArr)
<!-- to check index of all array elements using forloop -->
let books=["book1","book2","book1","book3","book4","book5"];
let len=books.length;
for(i=0; i<len; i++){
console.log(`Element is ${i} is ${books[i]} \n`)
}

**Functions**
<!-- two types user defined  and pre difined -->
<!-- pre difined -->
alert();
<!-- user difined -->
function mulTable(){
    for(i=1; i<=10;i++){
        document.write(`2 X ${i} =${2*i}`)
        document.write("<br/>")
    }
}
mulTable();
<!-- **Parameter and Arguments -->

function mulTable(num){
    for(i=1; i<=10;i++){
        document.write(` ${num} X ${i} =${num*i}`)
        document.write("<br/>")
    }
}
mulTable(4);
<!-- here the num is argument and value 4 is parameter -->
like in alert("hello"); the hello is argument passed
<!-- The argument object -->
function add(){
    document.write(arguments[1])
}
add(5,7,8)
<!-- Return in Function -->
<!-- if it find multiple return it will only execute first return -->
function add(a,b){
    let d=a+b;
    return d;
}
let c= add(5,7,8)
document.write(c);

<!-- Globle vs Local Variable In JS -->

<!-- The variable that is defind inside the function(we can only use it inside fun) 
is called local variable and the one outside function (we can use it anywhere)is called global variables -->
we can create any other variable with same name anywhere if it is inside funtion because of local variable behavior

<!-- Anonymous function -->
any function that do not have any name
we use it if we want to use it one time
like we can use it in setTimeout(function,3000)
so the computer do not waste memory

<!-- Immediately Invoked Function -->
the function we create then we execute it,
we use it so we do not create a global space variable as it
will occupy space but if we use it in local variable 
it will not occupy space in memory.

(function (){
    console.log("Hello world");
    alert("Hello world")
})();
we use it any third party JS like any other  .js file from internet it may happen
that they have same global variable as ours so to overcome the conflict we can use
the Immediately Invoked Function.

**Objects In JS**
Objects in JavaScript are used to group related data and functions together in a single unit. Think of an object as a real-life item, like a car. A car has properties (color, make, model) and behaviors (drive, stop, honk). In JavaScript, you can create an object to represent this car, with its properties and functions bundled together.

Here’s why we use objects:

1. **Organization**: Objects help organize code by keeping related data and functions together. Instead of having separate variables and functions scattered around, you can group them in an object.

2. **Reusability**: Once you create an object, you can easily reuse it without having to rewrite the code. For example, if you have a car object, you can create multiple cars with different properties.

3. **Easier to manage**: Working with objects makes it easier to handle complex data and operations, especially as your code grows. Instead of managing many variables, you work with a few objects that contain everything you need.

4. **Encapsulation**: Objects allow you to hide the details of how things work and only expose what’s necessary. This makes your code cleaner and easier to use. For example, you don't need to know how the car's engine works to drive it—you just need the functions to start and stop the car.

In short, objects make your code more structured, easier to manage, and more powerful.

var person={
    name="ali",
    age=20,
    email="example@gmail.com"
    address="example street"
}
console.log(person.name)

<!-- object with method -->
let person1={
    fName: "ali",
    lName: 'brohi',
    age: 24,

    fullName: function(){
        console.log(this.fName+ " " + this.lName);
    }
}
console.log(person1.fullName());
<!-- we can add value to it after any time -->
let person1={
   
}
person1.name='ali'
person1.sayHii=function(){
    alert('Hi')
}
person1.sayHii();
**New Keyword in JS**
var person= new Object();
person.name="ali";
person.age=23;
console.log(person.name)b

**Property getters and setters**

watch video about it dont understand it properly yet

**Object Constructer**
function Students(first,last,age,cls){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.class=cls;
}
<!-- to add something to constructer -->
Students.prototype.nationality="pakistani";
var students1=new Students("ali", "brohi", 23, 10);
students1.nationality="Pakistani";
<!-- to add something extra -->
console.log("students1")
**Object ProtoTypes**

**Nested Object**
var user={
id:101,
email:"example@gmail.com",
personalInf:{
    name: "abc",
    address:{
        street: "example",
        city: "Pakistan"
    }
}
};
console.log(user.personalInf)

it will be used when we will learn jason format

**Hoisting**
the js first read the all code and if there is any function  it will put it first and then execute it
like
hello();
function hello(){
    console.log("Hello");
}

**Document Object Model (DOM)**
it is type of API that help us to manipualte HTML. Through JS how we can bring changes into HTMl is done by DOM.

<!-- To change by class -->
let tm=document.getElementsByClassName("cl");
for(let i=0; i<=tm.length; i++){
    tm[i].innerHTML="<P>hello</p>";
}
<!-- to change by id -->
    let elm=  document.getElementById("first")
      console.log(elm)
      elm.innerHTML="<p>Hello</p>"

<!-- **selectt element by tag name** -->
 let tm=document.getElementsByTagName("p");
       for(i=0; i<tm.length; i++){
        tm[i].innerHTML=" hai bhai thek ho "
       }
       let ts=document.getElementsByTagName("h2");
       for(i=0; i<=tm.length; i++){
        ts[i].innerHTML="Hai Kaisy ho"
       }

<!-- to change elements in specific container/div -->
 let div1=document.getElementById("div1")
      let tm=div1.getElementsByTagName("h2")
      for(i=0; i<=tm.length; i++){
        tm[i].innerHTML="hai bhai"

      }

**Querry Selector**
 let em = document.querySelectorAll("p.intro");

for (let i = 0; i < em.length; i++) {
    em[i].innerHTML = "hahaha";
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

 **Create and Append Element**
let newBtn=document.createElement("button");
newBtn.innerText="click me"
let div=document.querySelector('div')
div.append(newBtn)

<!-- it will ad at last -->
div.prepend(newBtn)
<!-- it will add at start -->
 **insert before**
 watch video about it dont understand it properly yet

 **Remove Child Element**

 <ul id="ui">
    <li>home</li>
    <li>about</li>
    <li>contact</li>
 </ul>
let prt=document.getElementById("ui");
let elm=prt.firstElementChild;
prt.removeChild(elm)
   <!-- remove nxt sibling -->
   let prt=document.getElementById("ui");
let elm=prt.firstElementChild.nextElementSibling;
prt.removeChild(elm)
<!-- to remove a parent -->
let prt=document.getElementById("ui");
document.body.removeChild(prt)

**Clone Element**
let menu=document.getElementById("ui");
**Replace Elements**
 watch video about it dont understand it properly yet
 **Insert adjacent HTML**
 insertAdjacentHTML: A JavaScript method used to insert HTML content into the DOM relative to an existing element. You can insert the content in four positions:

"beforebegin": Before the element itself.
"afterbegin": Inside the element, before its first child.
"beforeend": Inside the element, after its last child.
"afterend": After the element itself.
This method is efficient for adding new HTML without affecting the entire content of the element.
<!-- myDiv.insertAdjacentHTML('beforeend', '<p>Inserted at the end inside the div.</p>'); -->

**Change  Attribute**
it is use to change attribute like class id name
 let ull=document.getElementById("ui");
ull.setAttribute("class", "uiui")   

<!-- to check already attribute -->
<button id="ui" name="uisi">Form 1</button> 
let ull=document.getElementById("ui");
let el=ull.getAttribute("name");
document.write(el);
<!-- to remove a attribute -->
<button id="ui" name="uisi">Form 1</button> 
let ull=document.getElementById("ui");
let el=ull.removeAttribute("name");
document.write(el);
<!-- to check attribute available or not -->
let el=ull.hasAttribute("name");


**Inline Style**
<button id="ui" name="uisi">Form 1</button>
let btn=document.getElementById("ui");
btn.style.cssText="background-color: red;"
<!-- another way to add inline style -->
    <button id="ui" name="uisi">Form 1</button>
 

     <script>
  
let btn=document.getElementById("ui");
btn.setAttribute('style','background-color: black; color: white; padding: 20px 30px; font-size:2rem; border-radius: 36px;');

<!-- another way -->
let btn=document.getElementById("ui");
btn.style.color="red"

**Get Computed CSS**
to check already applied css to attribute
lett css=getComputedStyle(btn.color);

**Css Classes**
<!-- to check classname -->
    <div id="box" class="color dim">
        <p>This is a dummy text</p>
    </div>
  
let em=document.getElementById("box")
console.log (em.className);
<!-- to add new class -->
    <div id="box" class="color">
        <p>This is a dummy text</p>
    </div>
let em=document.getElementById("box")
em.className +=" dim"
<!-- one more way to check classes -->
  <div id="box" class="color dim">
        <p>This is a dummy text</p>
    </div>
let em=document.getElementById("box")
// console.log(em.classList)
for(let css of em.classList){
    console.log(css)}
    <!-- now to add some class using classlist -->
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
em.classList.contains("hqhq");

**width height of an element**
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
    alert("Yoo btn Cliked")
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
    alert("Yoo you btn Cliked");
});
<!-- mouse over -->
   <button id="btn">Hello</button>
     <script>

let btn=document.getElementById("btn");
btn.addEventListener('mouseover',function(){
    alert("Yoo you mouse is over");
});
</script>
<!-- some goes for mouse out -->


**REMOVE EVENTLISTNER**
btn.removeEventListner("click",btnClicked)
**PAGE LOAD EVENT**
we use it when something is loaded like if a image is fully loaded we can add some action 
you can use it on a particuler element or window 
<!-- for window -->
window.addEventListner('DOMContentLoaded', function()){
    alert("The window is loaded fully")
};
<!-- to load particuler element -->
let em=getElementById("image1");
em.addEventListner("load", function()){
      alert("The Image is loaded now")
};
<!-- You can also use it inline  -->
like onload="("load", function()){
      alert("The Image is loaded now")
};"

**Mouse Events**
<!-- on click inline -->
   <div id="box" onclick="fun();"></div>
     <script>
function fun(){
    alert("click")
};
</script>

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

**Key Down Element**
<!-- to check which key is pressed -->
   <div id="box"></div>
        window.addEventListener("keydown", fun)
function fun(ev)
   <!-- we can use it a condition like if some key is clicked do this or that -->

**Scroll Events**
   <script>
window.addEventListener('scroll', function(){
    console.log("scrolling")
})
</script>
1.12.49
<!-- to check whether scroll up or down -->
<script>
       
        </script>
<!-- to check scroll on particuler pixel --> 
         <script>
        window.addEventListener('scroll', function(){
            if(window.pageYOffset>150){
                document.body.style.background="red";
            }
        });

        </script>

**Input Events**
to check how to detect if user click on element
    <form action="" >
        <input type="text" id="tt">
    </form>

    <!-- js -->
    <script>
let em=document.getElementById("tt");
em.addEventListener('focus', fun1);
em.addEventListener('blur', fun2);
function fun1(){
    em.style.background="yellow"
}
function fun2(){
    em.style.background="white"
}
        </script>
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

**Event Bubbling & Event Capturing**

<!-- event bubbling -->
in thisthe event starts at the most specific element and then goes upward to the least specific element.
    <div id="myDiv">
        <button id="btn"></button>
    </div>

    <!-- js -->
    <script>
       
let d = document.getElementById("myDiv");
let b = document.getElementById("btn");

b.addEventListener('click', btnClicked);
d.addEventListener('click', divClicked);
document.body.addEventListener('click', bodyClicked);
function btnClicked(){
    console.log("button clicked....");
}

function divClicked(){
    console.log("div clicked....");
}

function bodyClicked(){
    console.log("body clicked....");
}
<!-- event capturing -->
it is inverse of bubbling so in the first least specific then most specific.
addEventListner(event, function,false)
<!-- to select only selected element -->
function btnClicked(event){
    console.log("button clicked....");
    event.stopPropagation();
}

**Prevent Default** 
it is use to change default behaiour of DOM

<a href="https://www.google.com" id="anchr">Click Me</a>

    <script>
let anc=document.getElementById("anchr");
anc.addEventListener('click', function(e){
    console.log("clicked");
    e.preventDefault();
})

        </script>

**Browser Object Model(BOM)**
use to interact with browser
<!-- window -->
every function is the method of window object
<!-- to check height  -->
console.log(window.innerHeight);
console.log(window.outerHeight);
<!-- to open a POPUP -->
 <button id="btn">Google</button>
    <script>
       
let btn=document.getElementById("btn");
let url="https://www.google.com"
let features="height:=500, width=500"
btn.addEventListener('click', function(){
    window.open(url,'google',features);
});

        </script>
**Time out and Time Interval**
let sst=setTimeout(myFun,5000)
function myFun(){
    alert("Heloooooooooooooooooo")
}
<!-- to stop it -->
clearTimeOut(sst);
to can use it to sh999ow msg if user is login or not
**Location object**
console.log(location.href)
console.log(location.pathname)
console.log(location.protocol)

**Navigator object**
it can give you all the information about the browser
**Screen Object**
console.log(screen.width)
console.log(screen.height)


**Default Value**
let userTheme = 1;
let theme = userTheme ?? "dark mode";
console.log(theme); // Output: "dark mode"

**Array Search**
let contacts = [
   {id: 1, name: "Ali", address: "Malir"},
   {id: 2, name: "Hisham", address: "Saddar"},
   {id: 3, name: "Nabeel", address: "Model Town"}
];
let newArr=contacts.find(contact => contact.name==='Nabeel')
console.log(newArr)


**Advance  JavaScript**
EcmaScript is a standard which js adapt. it is version of js 1997 first. es6 was released in june 2015.
es6 was a major change. like arrow function.
<!-- let and const -->
the var become the property of window object where is let do not become
***Array Destructuring***
let array=['ali,20,karachi']
let[name,age,city]=array;
console.log(name)
if add something extra and there is less values in array then it will give undefined and if write we create empty item in array then we can give it defalut value like
let array=['ali,20,'','karachi']
let[name,age,college='smiu',city]=array;
***object Destructuring***
let book={
    name: 'advance js',
    author: 'ali',
    // readers: 10000,
    origin: "Pakistan"
}
let{name:title,author=20000,readers,origin}=book;
console.log(author)
**Modules**
we have to add this in html file then we can use it with import and export in d/f files.
<script type="module" src="app.js"></script>
import {name} from './modules/user.js'
import {code} from './modules/user.js'
code();
<!-- we can import whole file like this but it will only work with those who have export keyword -->
import * as usr from './modules/user.js'
usr.code();

***OPPS In JS**
<!-- Inheritance -->
Inheritance in OOP is when a new class (child) takes on the properties and behaviors of an existing class (parent). This allows for code reuse and easier management of similar objects.

<!-- Four Piller of OPPS -->
The four pillars of OOP (Object-Oriented Programming) are:

1. **Encapsulation**: This means wrapping up all the details about something (like a toy or a game) inside a box/unit, so you can use it without knowing how it works inside.

2. **Abstraction**: This is like using a TV remote. You press buttons to change channels without needing to understand the complex circuits inside the TV.

3. **Inheritance**: Imagine a baby animal that inherits features from its parents, like fur color or the way it runs. In coding, new progr/ams can inherit features from old ones.

4. **Polymorphism**: This is like how one word can have different meanings depending on where you use it. In coding, one action can do different things based on the situation.


<!-- before es6 -->
<!-- we were using construtor function as class -->
function Person(fName,lName,a){
    this.firstName=fName;
    this.lastName=lName;
    this.age=a;
}
let person1=new Person('ali','brohi',24)
console.log(person1)