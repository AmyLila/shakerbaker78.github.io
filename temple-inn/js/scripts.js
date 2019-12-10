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
      "images/fish-haven-large.jpg",
      "images/sodahero.jpg"];

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