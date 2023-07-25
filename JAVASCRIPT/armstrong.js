const prompt= require("prompt-sync")();

var num= parseInt(prompt("enter a positive number:-"));
var temp1;
var temp=temp1= num;
var sum=0;
var digit=0;
while(temp1!=0){
    var rem = temp%10;
    digit++;
    temp1= parseInt(temp1/10);
}
while(temp!=0){
    var rem = temp%10;
    sum= sum+rem**digit;
    temp= parseInt(temp/10);
}
if(num ==sum)
{
    console.log(num+" is an armstrong number");
}
else{
    console.log(num+" is not an armstrong number");

}