function loadAbout(){
    let xhttp = new XMLHttpRequest;
    // check readystate
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status ==200){
            // console.log(this.responseText)
            document.querySelector('.content').innerHTML= this.responseText;
        }
    };

    xhttp.open("GET","./about.md",true);
    xhttp.send();
}

function loadProject(){
    let xhttp = new XMLHttpRequest;
    // check readystate
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status ==200){
            // console.log(this.responseText)
            document.querySelector('.content').innerHTML= this.responseText;
        }
    };

    xhttp.open("GET","./project.md",true);
    xhttp.send();
}
function loadGallery(){
    let xhttp = new XMLHttpRequest;
    // check readystate
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status ==200){
            // console.log(this.responseText)
            document.querySelector('.content').innerHTML= this.responseText;
        }
    };

    xhttp.open("GET","./gallery.md",true);
    xhttp.send();
}
function loadContact(){
    let xhttp = new XMLHttpRequest;
    // check readystate
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status ==200){
            // console.log(this.responseText)
            document.querySelector('.content').innerHTML= this.responseText;
        }
    };

    xhttp.open("GET","./contact.md",true);
    xhttp.send();
}
