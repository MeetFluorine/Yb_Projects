const prompt= require("prompt-sync")();

var num= parseInt(prompt("enter a number to find the table:-"));


for (var i=1;i<=10;i++)
{
    console.log(num*i);
}