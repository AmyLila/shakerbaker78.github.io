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
    console.log(jsonObject); //temporary checking for valid response and data parsing
    const temple = jsonObject['temples'];

    for (let i = 0; i < temple.length; i++ ) {
                  if (temple[i].name == "Rome Italy Temple")
                  {  
                    console.log(temple[i].name)
    document.getElementById("name").textContent = temple[i].name;
    document.getElementById("dedicated").textContent = temple[i].dedicated;
    document.getElementById("address1").textContent = temple[i].address1;
    document.getElementById("address2").textContent = temple[i].address2;
    document.getElementById("address3").textContent = temple[i].address3;
    document.getElementById("phone").textContent = temple[i].phone;

    var linkTest = document.getElementById("link");
    linkTest.href= temple[i].link;
                
   

 }
}
});

  
            
//             const li = document.createElement('li');
    // li.className = "dayone";


    // const h4 = document.createElement("h4");
    //   h4.className = "dayShort";
    //   h4.textContent=forecastDay;
    //   li.appendChild(h4);
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


