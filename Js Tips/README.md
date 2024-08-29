**JS TIPS AND TREICKS**
<!-- Trick 1 -->
it will give answer 10 because user answer is 0 if it is grater than zer0 then it
will give that answer
let userCount=0;
count= userCount || 10;
console.log(count);

<!-- if we reolve it we can write it in a way that it will give 10 even userCount=0; -->

let userCount=0;
count= userCount ?? 10;
console.log(count)

<!-- trick 2 -->
using arrow function
const add=(a,b)=>a+b;

<!-- find value -->
let users=[
    {id: 10, name: "ali", addd: "malir"},
    {id: 10, name: "hisham", addd: "sadar"},
    {id: 11, name: "huzaifa", addd: "garden"},
    {id: 12, name: "nabeel", addd: "model"},
    {id: 13, name: "bilal", addd: "halt"}
]
let result;
for(i=0; i<users.length; i++){
    if(users[i].name==="ali"){
       result= users[i]
        break;
    }
}
console.log(result)

<!-- shortcut to do it -->
let result=users.find( user=> user.name==='ali')
console.log(result)