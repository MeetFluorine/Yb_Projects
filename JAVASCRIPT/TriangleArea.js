const prompt = require("prompt-sync")();

var a= parseInt(prompt("enter  side 1:-"));
var b= parseInt(prompt("enter  side 2:-"));
var c= parseInt(prompt("enter  side 3:-"));

var s = (a+b+c)/2;

const area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

console.log("area of triangle of side("+a+","+b+" and " +c+") = " + area );