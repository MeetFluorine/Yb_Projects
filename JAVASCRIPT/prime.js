const prompt= require("prompt-sync")();

var num= parseInt(prompt("enter a number to check:-"));

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

for(var i= 2;i<num;i++){
    if(num%i==0){
        console.log(num+" is not a prime number");
        break;
    }
}

if(i==num){
    console.log(num+" is a prime number");
}