// show/hide Navigation 

function toggleMenu (){
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");


}
// Home Page Slider
$(function () {

    var galleryImage = $(".homeHeroContainer").find("img").first();
    var altText = [
      "barn under a night sky",
      "barn in an autum forest"];
  
    var images = [
        "images/rome-temple-low-res.jpg",
        "images/slc-temple-low-res.jpg", 
        "images/bern-switzerland-temple-lds-low-res.jpg",
        "images/newport-beach-california-temple-low-res.jpg"
    ];

    var i = 0;
    
    var t = 0;

  
    setInterval(function() {

      i = (i + 1) % images.length; 
      t = (t + 1) % altText.length;
 
      galleryImage.fadeOut(function() {
        $(this).attr("src", images[i],);
        $(this).attr("alt", altText[t],);
        $(this).fadeIn();
      });
      console.log(galleryImage.attr("src"));
    }, 4000);

   
  });