$("#add-movie-form").on("submit", function (e) {
  // Hindra formuläret från att skicka iväg användaren.
  e.preventDefault();

  let titel = "";
  let rating = "";

  if ($("#title-field").val().length > 0) {
    titel = $("#title-field").val();
  } else {
    alert("Ingen titel angiven");
  }
  if ($("#rating-field").val() > 0 && $("#rating-field").val() <= 5) {
    rating = $("#rating-field").val();
  } else {
    alert("Ingen rating angiven");
  }
  addToMovieList(titel, rating);

  $("#add-movie-form").trigger("reset");
});

function addToMovieList(titel, rating) {
  const movies = $("#movies");
  const list = $("<li></li>")
    .attr("data-title", titel)
    .attr("data-grade", rating)
    .text(titel);
  const imgDelete = $("<img>")
    .attr("src", "./images/delete.png")
    .attr("alt", "Delete movie")
    .attr("class", "delete-movie-icon")
    .on("click", list.remove());
  const stars = Array.from({ length: parseInt(rating) }, () =>
    $("<img>").attr("src", "./images/star.png").attr("alt", "Star")
  );

  movies.append(list);
  movies.append(imgDelete);
  movies.append(stars);
}
