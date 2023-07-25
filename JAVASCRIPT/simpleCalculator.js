const prompt= require("prompt-sync")();
var a,b;
var ch;
do{
    console.log("press 1 for addition\npress 2 for subtraction\npress 3 for multiplication\npress 4 for division\npress 5 to check remainder");
    var choice= parseInt(prompt("Choose your choice:-"));
    switch(choice){
        case 1: a= parseInt(prompt("enter first number:-")) ;
                b= parseInt(prompt("enter second number:-"));
                console.log("Addition of "+a +" and "+b+" = "+(a+b));
                break;
        case 2: a= parseInt(prompt("enter first number:-")) ;
                b= parseInt(prompt("enter second number:-"));
                console.log("Subtraction of "+a +" and "+b+" = "+(a-b));
                break;
        case 3: a= parseInt(prompt("enter first number:-")) ;
                b= parseInt(prompt("enter second number:-"));
                console.log("Multiplication of "+a +" and "+b+" = "+(a*b));
                break;
        case 4: a= parseInt(prompt("enter first number:-")) ;
                b= parseInt(prompt("enter second number:-"));
                console.log("Division of "+a +" and "+b+" = "+(a/b));
                break;
        case 5: a= parseInt(prompt("enter first number:-")) ;
                b= parseInt(prompt("enter second number:-"));
                console.log("Remainder after diving "+a +" to "+b+" = "+(a%b));
                break;

        default:console.log("plz enter a valid choice");
                break;
        
    }
    ch= prompt("Do you want to perform more task(y/n):-");
}while(ch=='y' || ch=='Y')
