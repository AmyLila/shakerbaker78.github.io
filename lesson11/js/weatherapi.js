// Weather Summary
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e49b9555dc54df76f65cc2c7338a5181&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    // console.log(jsObject);

    document.getElementById("current").textContent = jsObject.weather[0].description;
    document.getElementById("temp").textContent = jsObject.main.temp;
    document.getElementById("humid").textContent = jsObject.main.humidity;
    document.getElementById("windspeed").textContent = jsObject.wind.speed;

// Calculate windChill

    function calcWindChill() {

        var tempF = jsObject.main.temp;
        var speed = jsObject.wind.speed;
        
        // console.log(tempF, speed);
        var F = windChill(tempF, speed);
        if (tempF <= 50 && speed>=3.0){
            document.getElementById('windchill').innerHTML = F.toFixed(1) + "&#8457;";
        }
        else {
            document.getElementById('windchill').innerHTML = "N/A";
        }
        }
        
        function windChill(tempF, speed) {
        var wFactor = (35.74 + (0.6215*tempF)- (35.75*(Math.pow(speed, 0.16))) + (0.4275*tempF*Math.pow(speed, 0.16)));
        return wFactor;
        }
        calcWindChill();
 
});

 // Forcast Preston

 const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e49b9555dc54df76f65cc2c7338a5181&units=imperial";
 fetch(forcastURL)
     .then((response) => response.json())
     .then((jsObject) => {
    //  console.log(jsObject);


     let day = 0;
  for (let i = 0; i < jsObject.list.length; i++) {

    if (jsObject.list[i].dt_txt.includes('18:00:00')) {
      

      const li = document.createElement('li');
      li.className = "dayone";
      

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

// Current Events Preston
 

const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(eventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); //temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {     
       if (towns[i].name == "Preston")
          {    
          for (let e = 0; e <= 2; e++ ){
            const townName = document.createElement('li');
            townName.className = "event";
            townName.textContent = towns[i].events[e];
            document.querySelector('ol.events').appendChild(townName);
          }
            
       
           
        }
    }
  });
