function printMovies(movies) {
  movies.forEach((element) => console.log(element));
  /*
        Todo: Skriv ut alla filmer i arrayen "movies". Varje film ska ha följande format:

        <li data-grade="5" data-title="Star Wars">
            Star Wars
            <img src="star.png" alt="Star">
            <img src="star.png" alt="Star">
            <img src="star.png" alt="Star">
            <img src="star.png" alt="Star">
            <img src="star.png" alt="Star">
            <img src="delete.png" alt="Delete movie" class="delete-movie">
        </li>
    */
}

renderMovies();

function getMovies() {
  /*
        Todo: Filmerna ska snart laddas in från localStorage, men till
        en början nöjer vi oss med en vanlig array med filmer
    */
  var movies = localStorage.getItem("movies");
  // Kontrollera om det finns några filmer i localStorage
  if (movies === null) {
    console.log("movies är tom!")
    // Det finns inget i localStorage, så vi skapar en tom lista där
    localStorage.setItem("movies", JSON.stringify([]));
    // Returnerar en tom lista (= inga todos)
    return [];
  } else {
    // Returnerar alla todos i en lista (från JSON => lista med objekt)

    return JSON.parse(movies);
  }

  /*    const movies = [
        { title: "Star Wars", grade: 5 },
        { title: "Titanic", grade: 4 },
        { title: "Drive", grade: 1 }
    ];*/
}

function getStars(rating) {
  /*
        Todo: Baserat på "rating" (en siffra) så returnerar denna
        funktion HTML-kod för antalet stjärnor (betyg) för en film.
    */
}

function renderMovies() {

  var movies = getMovies();
  const moviesList = $("#movie-list");

  $("#movie-list").html("");

  for (var i = 0; i < movies.length; i++) {
    const list = $("<li></li>")
      .attr("data-grade", movies[i].grade)
      .attr("data-title", movies[i].title)
      .text(movies[i].title);

    const stars = Array.from({ length: parseInt(movies[i].grade) }, () =>
      $("<img>").attr("src", "./images/star.png").attr("alt", "Star")
    );

    const deleteMovie = $("<img>")
      .attr("src", "./images/delete.png")
      .attr("alt", "Delete movie")
      .attr("class", "delete-movie")


      list.append(deleteMovie);
      list.append(stars);
      moviesList.append(list)
  }


  //Börja här-->

  /*
        Todo: Sparar filmerna till localStorage (JSON-format)
    */
}

$("#new-movie-form").on("submit", function (e) {
  
e.preventDefault();

  var title = "";
  var grade = "";

  
  if ($("#title").val().length > 0) {
    title = $("#title").val();
  } else {
    alert("Ingen titel angiven");
    return;
  }
  if ($("#grade").val() > 0 && $("#grade").val() <= 5) {
    grade = $("#grade").val();
  } else {
    alert("Ingen rating angiven");
    return;
  }

  var moviesStorage = getMovies();
  moviesStorage.push({
    grade:grade,
    title:title
  });

  localStorage.setItem("movies", JSON.stringify(moviesStorage));

  renderMovies();

  $("#new-movie-form").trigger("reset");

});

renderMovies();

$("#order-alphabetic").on("click", function () {
  /*
        Todo: Sortera filmlistan alfabetiskt stigande
    */
});

$("#order-grade").on("click", function () {
  /*
        Todo: Sortera filmlistan fallande efter betyg
    */
});

$("#movie-list").on("click", ".delete-movie", function () {   
    const title = $(this).parent().data('title');
   
   const allMovies = JSON.parse(localStorage.getItem('movies'))

    for (let i = 0; i < allMovies.length;i++){
        if(allMovies[i].title === title){
            allMovies.splice(i,1)
               }else{
        }
    }
    
    localStorage.setItem("movies", JSON.stringify(allMovies));
    renderMovies();
});


// Skriver ut filmerna i vår lista när sidan laddats klart
$(document).ready(function () {
  const movies = getMovies();
  printMovies(movies);
});
