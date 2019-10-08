function loadDate(){

    var dateObject = new Date();
        
    var year = dateObject.getFullYear();
    
    document.getElementById("year").innerHTML = year; 
    document.getElementById("lastModified").innerHTML +=  document.lastModified;
    }

function toggleMenu (){
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}    