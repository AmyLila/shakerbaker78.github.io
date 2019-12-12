 //------------------------------- Temple Info -------------------------------------------------------

 const templeURL = "https://shakerbaker78.github.io./temple-inn/data/temple-info.json";
fetch(templeURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject); //temporary checking for valid response and data parsing
    const temple = jsonObject['temples'];

    for (let i = 0; i < temple.length; i++ ) {
                  
     let divInfo = document.createElement('div');
        divInfo.className = "templeInfoLong";
    
        
    let h2 =document.createElement('h2');
        h2.className = "templeName";   
     
    let button = document.createElement('button');
        button.setAttribute('onclick', 'toggle()')    
      


      let dayShort= new Date(jsObject.list[i].dt_txt);
      let weekDay = {weekday: 'short'};
      let forecastDay = dayShort.toLocaleDateString('en-US', weekDay);
    //   console.log(forecastDay);
      
      const h4 = document.createElement("h4");
      h4.className = "dayShort";
      h4.textContent=forecastDay;
      li.appendChild(h4);


      let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
    //   console.log(imagesrc);
      
      const image = document.createElement("img");
      image.className ="weathericon";
      image.setAttribute('src', imagesrc);
      image.setAttribute('alt', "weather icon");
      li.appendChild(image);


      let forecastTemp= (jsObject.list[i].main.temp.toFixed(0));
    //   console.log(forecastTemp);
      
      const h5 = document.createElement("h5");
      h5.textContent=forecastTemp+ ' °F';
      li.appendChild(h5);


      let desc = jsObject.list[i].weather[0].description;
    //   console.log(desc);

      const h6 = document.createElement("h6");
      h6.textContent=desc;
      li.appendChild(h6);


       document.querySelector('ol.days').appendChild(li);


    }
  }


 
 });    








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