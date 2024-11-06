**JS Tips and Tricks**
**Trick 1: Using Logical OR vs Nullish Coalescing (??)**
When you use ||, it will return the second operand if the first is falsy (e.g., 0, null, undefined). But with ?? (nullish coalescing), it will return the second operand only if the first is null or undefined.

// With logical OR (||)
let userCount = 0;
let count = userCount || 10;
console.log(count); // Outputs: 10

// With nullish coalescing (??)
let userCount = 0;
let count = userCount ?? 10;
console.log(count); // Outputs: 0 (because userCount is not null or undefined)
 The first method gives 10 when userCount is 0 because 0 is falsy. The second method, using ??, will return 0 because it only checks for null or undefined.

**Trick 2: Using Arrow Functions**
Arrow functions provide a shorter syntax for writing functions.
const add = (a, b) => a + b;
console.log(add(2, 3)); // Outputs: 5
Arrow functions are concise and also inherit the this value from the surrounding context, unlike regular functions.

**Trick 3: Finding a Value in an Array**

let users = [
    {id: 10, name: "Ali", address: "Malir"},
    {id: 11, name: "Hisham", address: "Saddar"},
    {id: 12, name: "Huzaifa", address: "Garden"},
    {id: 13, name: "Nabeel", address: "Model"},
    {id: 14, name: "Bilal", address: "Halt"}
];

let result;
for (let i = 0; i < users.length; i++) {
    if (users[i].name === "Ali") {
        result = users[i];
        break;
    }
}
console.log(result);

<!-- shortcut to do it -->
let result = users.find(user => user.name === 'Ali');
console.log(result);
