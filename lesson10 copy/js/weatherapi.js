// Weather Summary
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e49b9555dc54df76f65cc2c7338a5181&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("current").textContent = jsObject.weather[0].description;
    document.getElementById("temp").textContent = jsObject.main.temp;
    document.getElementById("humid").textContent = jsObject.main.humidity;
    document.getElementById("windspeed").textContent = jsObject.wind.speed;

// Calculate windChill

    function calcWindChill() {

        var tempF = jsObject.main.temp;
        var speed = jsObject.wind.speed;
        
        console.log(tempF, speed);
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

 // Forcast

 const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e49b9555dc54df76f65cc2c7338a5181&units=imperial";
 fetch(forcastURL)
     .then((response) => response.json())
     .then((jsObject) => {
     console.log(jsObject);


     let day = 0;
  for (let i = 0; i < jsObject.list.length; i++) {

    if (jsObject.list[i].dt_txt.includes('18:00:00')) {
      console.log(jsObject.list[i].dt_txt);
      console.log(jsObject.list[i].main.temp.toFixed(0));
      console.log(jsObject.list[i].weather[0].icon);

      const li = document.createElement('li');
      li.className = "dayone";
      

      let dayShort= new Date(jsObject.list[i].dt_txt);
      let weekDay = {weekday: 'short'};
      let forecastDay = dayShort.toLocaleDateString('en-US', weekDay);
      console.log(forecastDay);
      
      const h4 = document.createElement("h4");
      h4.className = "dayShort";
      h4.textContent=forecastDay;
      li.appendChild(h4);


      let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
      console.log(imagesrc);
      
      const image = document.createElement("img");
      image.className ="weathericon";
      image.setAttribute('src', imagesrc);
      image.setAttribute('alt', "weather icon");
      li.appendChild(image);


      let forecastTemp= (jsObject.list[i].main.temp.toFixed(0));
      console.log(forecastTemp);
      
      const h5 = document.createElement("h5");
      h5.textContent=forecastTemp+ ' °F';
      li.appendChild(h5);


      let desc = jsObject.list[i].weather[0].description;
      console.log(desc);

      const h6 = document.createElement("h6");
      h6.textContent=desc;
      li.appendChild(h6);


       document.querySelector('ol.days').appendChild(li);

    //   day = day + 1;

    }
  }




  

    //   let icon = 'forecastIconValue' + day;
    //   document.getElementById(icon).setAttribute('src', imagesrc);
    //   document.getElementById(icon).setAttribute('alt', iconDescription);


//     const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);  

//     const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);   


     
     // const forcast = jsObject

     // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
     // const desc = jsObject.weather[0].description;  
     // let weekday= document.createElement('h4');
     // let icon= document.createElement('img');
     // let main=document.createElement(h5);
     // let expectedTemp= document.createElement('h6');

     // for (let i = 0; i < jsObject.length; i++ ) {
     //     if (jsObject.list[i].dt_txt.includes('18:00:00')){
            


     //         weekday.textContent=jsObject.list[i].dt_txt;
     //         dayone.appendChild(weekday)

     //         document.getElementById('imagesrc').textContent = imagesrc;  
     //         document.getElementById('icon').setAttribute('src', imagesrc); 
     //         document.getElementById('icon').setAttribute('alt', desc); 


     //         icon.setAttribute('src', "images/" + towns[i].photo);
     //         image.setAttribute('alt', 'picture of ' + towns[i].name + ', Idaho');
     //         townPicture.appendChild(image);
     

     //         current.textContent = jsObject.list[i].main.temp;
     //         dayone.appendChild(current);


     
     //     }
     // }
         
    
 
 
 });    

