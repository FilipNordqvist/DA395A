//Ni ska validera att användaren angett både titel och betyg har angetts innan en film kan sparas. Återkoppling ska ske genom popup-rutor.
$("#add-movie-form").on("submit", function (e) {
  // Hindra formuläret från att skicka iväg användaren.
  e.preventDefault();

  console.log("Här är jag?");

  if ($("#title-field").val().length > 0) {
    const titel = $("#title-field").val();
  } else {
    alert("Ingen titel angiven");
  }
  if ($("#rating-field").val().length >= 0) {
    const titel = $("#rating-field").val();
  } else {
    alert("Ingen rating angiven");
  }
});
