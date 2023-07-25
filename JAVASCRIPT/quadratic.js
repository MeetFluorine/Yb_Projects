const prompt= require("prompt-sync")();
var root1,root2;
var a= parseInt(prompt("enter the value of a:-"));
var b= parseInt(prompt("enter the value of b:-"));
var c= parseInt(prompt("enter the value of c:-"));

let discriminant = b**2 - 4*a*c;

// if discriminant>0 then root are real and different

if( discriminant>0)
{
    root1= (-b + (Math.sqrt(discriminant)))/2*a;
    root2= (-b - (Math.sqrt(discriminant)))/2*a;
    
    console.log("The root of quadratic equation are "+root1+" and "+root2);
}

// if discriminant =0 then roots are equal and real.

else if( discriminant==0)
{
    root1=root2= -b/2*a;
    console.log("The root of quadratic equation are "+root1+" and "+root2);

}

// if discriminant<0 then root are complex and different.

else{
    root1= ((-b)/2*a).toFixed(2);
    root2= ((Math.sqrt(-discriminant))/2*a).toFixed(2);

    console.log("The root of quadratic equation are "+root1+"+i"+root2+" and "+root1+"-i"+root2);
}
