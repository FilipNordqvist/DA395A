// Variabeln `$` är oftast synonym med variabeln `jQuery`, dvs. den variabel
// som innehåller hela biblioteket.

// Här kör vi vår funktion när hela vår dokument (HTML-dokumentet)
// har laddat klart. Det är ofta en bra idé att göra så här så att du
// vet att din HTML har laddat klart innan du börjar göra någonting med den.
$(document).ready(function() {
    window.alert("The page has finished loading!");
});