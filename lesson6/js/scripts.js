function loadDate(){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    var dateObject = new Date();
    var day = days[dateObject.getDay()];
    var dateNumber =dateObject.getDate();
    var month = monthNames[dateObject.getMonth()];  
    var year = dateObject.getFullYear();
    
    document.getElementById("year").innerHTML = year; 
    document.getElementById("lastModified").innerHTML = day+", "+dateNumber+" "+month+" "+year;

   if (day == "Monday") {
       document.getElementById("pancake").innerHTML = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";
   }
    }

function toggleMenu (){
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}    
