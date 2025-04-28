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

function loadMovies() {
    /*
        Todo: Filmerna ska snart laddas in från localStorage, men till
        en början nöjer vi oss med en vanlig array med filmer
    */
    const movies = [
        { title: "Star Wars", grade: 5 },
        { title: "Titanic", grade: 4 },
        { title: "Drive", grade: 1 }
    ];

    return movies;
}

function getStars(rating) {
    /*
        Todo: Baserat på "rating" (en siffra) så returnerar denna
        funktion HTML-kod för antalet stjärnor (betyg) för en film.
    */
}

function saveMovies(movies) {

    /*
        Todo: Sparar filmerna till localStorage (JSON-format)
    */}

$("#new-movie-form").on("submit", function (e) {
    e.preventDefault();

    let titel = "";
    let rating = "";
  
    if ($("#title").val().length > 0) {
      titel = $("#title").val();
    } else {
      alert("Ingen titel angiven");
    }
    if ($("#grade").val() > 0 && $("#grade").val() <= 5) {
      rating = $("#grade").val();
    } else {
      alert("Ingen rating angiven");
    }

    let movies = localStorage.setItem("title", "rating");

    saveMovies(movies);

    $("#new-movie-form").trigger("reset");
    
    /*
        Todo: När man klickar på knappen "Spara film" så ska funktionen:
        1. Validera att man skrivit in en titel & valt ett betyg. Om inte
        så ska vi visa upp (i en popup-ruta) ett meddelande om att både
        titel & betyg måste fyllas i.
        2. Lägga till en film i vår lista av filmer i localStorage
        3. Visa den nya filmen i vår lista av filmer
        4. Återställa formuläret (ingen titel, eller betyg valt)
    */
        
});


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
    
    localStorage.removeItem("movies");
    loadMovies();
    /*
        Todo: Ska ta bort en film från:
        1. Filmlistan i localStorage
        2. Från filmlistan som visas på webbsidan
    */
});

// Skriver ut filmerna i vår lista när sidan laddats klart
$(document).ready(function () {
    const movies = loadMovies();
    printMovies(movies);
});