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

//     const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);    


});

