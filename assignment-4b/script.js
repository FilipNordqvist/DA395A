// Vi kommer fylla på denna i steg 2.
let options = {
  // Försök tvinga enheten till en så precis position som möjligt
  enableHighAccuracy: true,
  // Maximal tid i millisekunder som enheten har på sig att ge oss en position
  timeout: 5000,
  // Hur länge vår position får tillfälligt lagras (millisekunder)
  maximumAge: 0,
};

function success(position) {
  // Ta en titt i er webbkonsol och se vad den innehåller.
  console.log("This is our position: ", position);

  $("#longitude").text(position.coords.longitude);
  $("#latitude").text(position.coords.latitude);
  $("#accuracy").text(position.coords.accuracy);
  $("#altitude").text(position.coords.altitude);
  $("#accuracy-altitude").text(position.coords.altitudeAccuracy);
  $("#speed").text(position.coords.speed);
  const speed = position.coords.speed;
  const calc = speed * 1000;
  const convertToKm = calc * 3600;
  console.log("Konventerar ", convertToKm);
  $("#currect-speed").text(convertToKm + " km/h");

  if (speed < 5) {
    $(".alert").css("background-color", "red");
  } else if (speed > 5 && position.coords.speed < 10) {
    $(".alert").css("background-color", "yellow");
  } else {
    $(".alert").css("background-color", "green");
  }
}

function error(err) {
  console.warn("Something went wrong: ", err.message);
}

let watchID = navigator.geolocation.watchPosition(success, error, options);

// Skicka med våra funktioner och inställningar,
// dessa kommer sedan anropas när en position försöker fastställas.

navigator.geolocation.getCurrentPosition(success, error, options);
//navigator.geolocation.clearWatch(watchID);
