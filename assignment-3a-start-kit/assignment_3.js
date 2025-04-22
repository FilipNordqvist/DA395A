//Ni ska validera att användaren angett både titel och betyg har angetts innan en film kan sparas. Återkoppling ska ske genom popup-rutor.
$("#add-movie-form").on("submit", function (e) {
  // Hindra formuläret från att skicka iväg användaren.
  e.preventDefault();

  if ($("#title-field").val().length > 0) {
    const titel = $("#title-field").val();
  } else {
    alert("Ingen titel angiven");
  }
  if ($("#rating-field").val() > 0 && $("#rating-field").val() <= 5 ) {
    const rating = $("#rating-field").val();
  } else {
    alert("Ingen rating angiven");
  }

  console.log("Titlen är: ", titel);


$("<li></li>").setAttribute("data-title",titel).setAttribute("data-grade",rating).append("#movies");



});



