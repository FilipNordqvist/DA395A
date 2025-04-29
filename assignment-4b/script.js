// Vi kommer fylla på denna i steg 2.
let options = {};

function success(position) {
    // Ta en titt i er webbkonsol och se vad den innehåller.
    console.log("This is our position: ", position);
    
    $('#longitude').text(position.coords.longitude);
    $('#latitude').text(position.coords.latitude);
    $('#accuracy').text(position.coords.accuracy);
    $('#altitude').text(position.coords.altitude);
    $('#accuracy-altitude').text(position.coords.altitudeAccuracy);
    $('#speed').text(position.coords.speed);
}

function error(err) {
    console.warn("Something went wrong: ", err.message);
}

// Skicka med våra funktioner och inställningar,
// dessa kommer sedan anropas när en position försöker fastställas.
navigator.geolocation.getCurrentPosition(success, error, options);