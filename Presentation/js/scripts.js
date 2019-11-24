$(function () {

    var galleryImage = $(".turkey").find("img").first();
  
    var images = [
      "images/turkey-01.png",
      "images/turkey-02.png",
      "images/turkey-03.png",
      "images/turkey-04.png",
      "images/turkey-05.png",
      
    ];

    var i = 0;
  
    setInterval(function() {

      i = (i + 1) % images.length; 
 
      galleryImage.fadeOut(function() {
        $(this).attr("src", images[i],);
        $(this).fadeIn();
      });
  
      console.log(galleryImage.attr("src"));
  
    }, 2000);

  
  
  });