// ------------------ show/hide Navigation ------------------------

function toggleMenu (){
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");


}
// ------------------- Home Page Slider ----------------------------
// $(function () {

//     var galleryImage = $(".homeHeroImage").find("img").first();
//     var altText = [
//       "Rome Italy Temple",
//       "Salt Lake City Temple",
//       "Bern Switzerland Temple",
//       "Newport Beach, California Temple",
//       "Nauvoo Temple"
//     ];
  
//     var images = [
//         "images/rome-temple-low-res.jpg",
//         "images/slc-temple-low-res.jpg", 
//         "images/bern-switzerland-temple-lds-low-res.jpg",
//         "images/newport-beach-california-temple-low-res.jpg",
//         "images/nauvoo-temple-low-res.jpg"
//     ];

//     var i = 0;
    
//     var t = 0;

  
//     setInterval(function() {

//       i = (i + 1) % images.length; 
//       t = (t + 1) % altText.length;
 
//       galleryImage.fadeOut(function() {
//         $(this).attr("src", images[i],);
//         $(this).attr("alt", altText[t],);
//         $(this).fadeIn();
//       });
//       console.log(galleryImage.attr("src"));
//     }, 6000);

   
//   });

//--------------------- Temple Information -----------------------------

//----------------------Home Page Info ----------------------------------

const apiURL = "https://shakerbaker78.github.io./temple-inn/data/temple-info.json";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("name").textContent = jsObject.name;
    document.getElementById("temp").textContent = jsObject.main.temp;
    document.getElementById("humid").textContent = jsObject.main.humidity;
    document.getElementById("windspeed").textContent = jsObject.wind.speed;
 });