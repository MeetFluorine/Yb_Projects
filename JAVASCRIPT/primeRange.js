const prompt=require("prompt-sync")();

var num1= parseInt(prompt("enter the starting of range:-"));
var num2= parseInt(prompt("enter the ending of range:-"));

for( var i=num1;i<=num2;i++ ){
    var flag=0;
    for(var j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(i>1 &&flag==0)
    {
        console.log(i);
    }
}
