// even odd

function evenOdd() {
    var a = prompt("enter the value to check even/ Odd");
    if (a % 2 == 0) {
        document.write(a + " is an even number");

    }
    else {
        document.write(a + " is an odd number");
    }
}

function dayName(){
    let a = 5;
    switch(a){
        case 1: document.write("today is monday");
        break;
        case 2: document.write("today is tuesday");
        break;
        case 3: document.write("today is wednesday");
        break;
        case 4: document.write("today is thursday");
        break;
        case 5: document.write("today is friday");
        break;
        case 6: document.write("today is saturday");
        break;
        case 7: document.write("today is sunday");
        break;
        default: document.write("plz enter a valid number");
        break;
    }
}

