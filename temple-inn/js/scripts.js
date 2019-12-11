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

const templeURL = "https://shakerbaker78.github.io./temple-inn/data/temple-info.json";
fetch(templeURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); //temporary checking for valid response and data parsing
    const temple = jsonObject['temples'];

    for (let i = 0; i < temples.length; i++ ) {
                  if (temples[i].name == "Rome Italy Temple")
                  {  

    document.getElementById("name").textContent = jsObject.name;
    document.getElementById("temp").textContent = jsObject.main.temp;
    document.getElementById("humid").textContent = jsObject.main.humidity;
    document.getElementById("windspeed").textContent = jsObject.wind.speed;
 });



//         for (let i = 0; i < temples.length; i++ ) {
//           if (temples[i].name == "Fish Haven" ||
//               temples[i].name == "Preston" ||
//               temples[i].name == "Soda Springs")
//           {    
          
//             let card = document.createElement('section');
//             let townInfo = document.createElement('div');
//             let name = document.createElement('h3');
//             let motto = document.createElement('h4');
//             let founded = document.createElement('p');
//             let pop = document.createElement('p');
//             let rainFall = document.createElement('p');
//             let townPicture = document.createElement('div');
//             let image = document.createElement('img');
            
            
            
//             townInfo.className = "town";
//             name.textContent = temples[i].name;
//             townInfo.appendChild(name);

            
//             motto.textContent = temples[i].motto;
//             motto.className = "motto";
//             townInfo.appendChild(motto);

            
//             founded.textContent = "Year Founded: " + temples[i].yearFounded;
//             townInfo.appendChild(founded);

            
//             pop.textContent = "Population: " +  temples[i].currentPopulation;
//             townInfo.appendChild(pop);

            
//             rainFall.textContent = "Annual Rain Fall: " +  temples[i].averageRainfall;
//             townInfo.appendChild(rainFall);

//             // townPicture.className = "pic";
            
            
//             image.setAttribute('src', "images/" + temples[i].photo);
//             image.setAttribute('alt', 'picture of ' + temples[i].name + ', Idaho');
//             townPicture.appendChild(image);

//             card.appendChild(townInfo);
//             card.appendChild(townPicture);
           
//             document.querySelector('div.town-data').appendChild(card);
//         }
//       }
//   });


