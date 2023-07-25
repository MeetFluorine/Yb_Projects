const prompt= require("prompt-sync")();

var km= parseInt(prompt("enter distance in kilometer:-"));

var mile= km*0.621372;

console.log(km +" KM in miles = "+mile+" Miles")
