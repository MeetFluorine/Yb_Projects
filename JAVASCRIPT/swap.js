const prompt=require("prompt-sync")();

var a=parseInt(prompt("enter first number:-"));
var b=parseInt(prompt("enter second number:-"));

console.log("value of a before swapping = "+a);
console.log("value of b before swapping = "+b);

// 1st method
// var temp=a;
// a=b;
// b=temp;

// 2nd method
[a,b]=[b,a];

// third method
a = a + b;
b = a - b;
a = a - b;

console.log("value of a after swapping = "+a);
console.log("value of b after swapping = "+b);

