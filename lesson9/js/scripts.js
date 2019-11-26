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

    if (day == "Friday") {
        document.getElementById("pancake").classList.add("show");
        document.getElementById("pancake").innerHTML = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";
    }
    else {
        document.getElementById("pancake").classList.add("hidepancake");
    }
    }

function toggleMenu (){
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}    

//jQuery Slider
$(function () {

    var galleryImage = $(".heroContainer").find("img").first();
  
    var images = [
      "images/fish-haven-hero.jpg",
      "images/sodahero.jpg"
      
    ];

    var i = 0;
  
    setInterval(function() {

      i = (i + 1) % images.length; 
 
      galleryImage.fadeOut(function() {
        $(this).attr("src", images[i],);
        $(this).fadeIn();
      });
      console.log(galleryImage.attr("src"));
    }, 4000);

   
  });