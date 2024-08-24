
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
<!-- if we want to add something after last array item -->
let books=["book1","book2","book1","book3","book4","book5"];
books.push("book6")
document.write(books);
<!-- if we want to add something before first array item -->
let books=["book1 ","book2 ","book1 ","book3 ","book4 ","book5 "];
books.unshift("book")
document.write(books);
<!-- to delete last item -->
books.pop();
<!-- to front item -->
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