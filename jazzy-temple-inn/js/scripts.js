// ------------------ show/hide Navigation ------------------------

function toggleMenu (){
    document.getElementById("primaryNav").classList.toggle("hide");

}
// ------------------ show/hide Secondary Navigation ------------------------
function toggleDropDown (){
  document.getElementById("dropDown").classList.toggle("hideDropDown");
}
function mouseDropDown (){
  document.getElementById("dropDown").classList.toggle("hideDropDown");
}

// ------------------ show/hide temple information ------------------------


// ------------------ home page ------------------------
function toggleTemple (){
  console.log(document.getElementById("templeDropDown").classList);
  document.getElementById("templeDropDown").classList.toggle("hideInfo");

}
// ------------------ Rome------------------------
function toggle0 (){
  
  document.getElementById("dropDown0").classList.toggle("templeInfoLong0");

}
// ------------------ Nauvoo------------------------
function toggle1 (){
  
  document.getElementById("dropDown1").classList.toggle("templeInfoLong1");

}
// ------------------ SLC------------------------
function toggle2 (){
  
  document.getElementById("dropDown2").classList.toggle("templeInfoLong2");

}
// ------------------ Newport------------------------
function toggle3 (){
  
  document.getElementById("dropDown3").classList.toggle("templeInfoLong3");

}
// ------------------ Bern------------------------
function toggle4 (){
  
  document.getElementById("dropDown4").classList.toggle("templeInfoLong4");

}

//--------------------------------- Copyright Year-------------------------------------------------
function loadDate(){
var dateObject = new Date();
var year = dateObject.getFullYear();
    
document.getElementById("year").innerHTML = year;
 }
