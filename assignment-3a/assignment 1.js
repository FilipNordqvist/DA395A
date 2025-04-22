// Variabeln `$` är oftast synonym med variabeln `jQuery`, dvs. den variabel
// som innehåller hela biblioteket.

// Här kör vi vår funktion när hela vår dokument (HTML-dokumentet)
// har laddat klart. Det är ofta en bra idé att göra så här så att du
// vet att din HTML har laddat klart innan du börjar göra någonting med den.


//Ge er webbplats grå bakgrundsfärg.
$(this).css('background-color', 'grey');

//Ge alla <section> grön bakgrundsfärg.
$('section').css('background-color', 'green');

//Ge huvudrubriken på webbplatsen blå textfärg
$('h1').css('color', 'blue');

//Ge länkarna på webbplatsen gul textfärg och gör så att de inte längre är understrukna.
$("a").css({"background-color": "yellow", "text-decoration": "none"});

