function calcWindChill() {

    var tempF = parseFloat(document.getElementById('temp').value);
    var speed = parseFloat(document.getElementById('windspeed').value);
    var F = windChill(tempF, speed);
    document.getElementById('windchill').innerHTML = F + "&#8457;";
    }
    
    function windChill(tempF, speed) {
    var wFactor = (35.74 + (0.6215*tempF)- (35.75*(Math.pow(speed, 0.16))) + (0.4275*tempF*Math.pow(speed, 0.16)));
    return wFactor;
    }