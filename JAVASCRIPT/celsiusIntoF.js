const prompt= require("prompt-sync")();
var celsius,fahrenheit;
console.log("press 1 to convert into Fahrenheit\npress 2 to convert into celsius:-");
var choice= parseInt(prompt("Choose your choice:-"));

switch(choice){
    case 1:  celsius= parseInt(prompt("enter a temperature value:-"));
             fahrenheit = ((celsius*1.8)+32).toFixed(1);
             console.log(celsius+"\u00B0C is equal to "+fahrenheit+"\u00B0F");
             break;
    case 2:  fahrenheit= parseInt(prompt("enter a temperature value:-"));
             celsius = ((fahrenheit -32)/1.8).toFixed(1);
             console.log(fahrenheit+"\u00B0F is equal to "+celsius+"\u00B0C");
             break;

    default: console.log("plz enter a valid choice:-");
}