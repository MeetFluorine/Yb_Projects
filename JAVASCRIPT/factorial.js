const prompt= require("prompt-sync")();

var num= parseInt(prompt("enter a number:-"));
var fact=1;
for (var i=1;i<=num;i++)
{
    fact*=i;
}

console.log("factorial of "+num+" is = "+fact);
