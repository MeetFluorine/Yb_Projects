const prompt = require("prompt-sync")();

var t1=0, t2=1, nextTerm;

var term= parseInt(prompt("enter the number of term you want:-"));

for (var i=0; i<=term;i++){
    console.log(t1);
    nextTerm= t1+t2;
    t1=t2;
    t2= nextTerm;
}