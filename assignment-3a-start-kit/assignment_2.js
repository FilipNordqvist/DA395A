// När formuläret skickas (dvs. när användaren klickar på submit-knappen).
$("#newsletter-form").on("submit", function (e) {
  // Hindra formuläret från att skicka iväg användaren.
  e.preventDefault();

  if ($("#name-field").val().length <= 0) {
    $("#name-field").css("background-color", rgba(255, 0, 0, 1));
  } else {
    var name = $("#name-field").val();
    $("#name-field").css("background-color", "white");
  }
  if ($("#age-field").val().length <= 0) {
    $("#age-field").css("background-color", rgba(255, 0, 0, 1));
  } else {
    var age = $("#age-field").val();
    $("#age-field").css("background-color", "white");
  }
  if ($("#email-field").val().length <= 0) {
    $("#email-field").css("background-color", rgba(255, 0, 0, 1));
  } else {
    var epost = $("#email-field").val();
    $("#email-field").css("background-color", "white");
  }

  // Här placerar ni er validerings kod.

  // Om allting var korrekt - skicka vidare användaren.
  $("#newsletter-form")[0].submit();
});
