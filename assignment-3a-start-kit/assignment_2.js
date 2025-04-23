// När formuläret skickas (dvs. när användaren klickar på submit-knappen).
$("#newsletter-form").on("submit", function (e) {
  // Hindra formuläret från att skicka iväg användaren.
  e.preventDefault();

  if ($("#name-field").val().length <= 0) {
    $("#name-field").css("background-color", "#ff0000");
  } else {
    var name = $("#name-field").val();
    $("#name-field").css("background-color", "white");
  }
  if ($("#age-field").val().length <= 0) {
    $("#age-field").css("background-color", "#ff0000");
  } else {
    var age = $("#age-field").val();
    $("#age-field").css("background-color", "white");
  }
  if ($("#email-field").val().length <= 0) {
    $("#email-field").css("background-color", "#ff0000");
  } else {
    var epost = $("#email-field").val();
    $("#email-field").css("background-color", "white");
  }
  if($("#name-field").val().length <= 0 && $("#age-field").val().length <= 0 
  && $("#email-field").val().length <= 0){
    $("#newsletter-form")[0].submit();
  }else{
    console.log("error")
  }
  // Om allting var korrekt - skicka vidare användaren.
 
});
