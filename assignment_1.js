function main() {
    // Vi skriver ut vilken uppgift detta gäller först
    console.log("Uppgift 1.");

    // Ersätt frågetecknet med en av de operatorer som listats ovan
    console.log(5 * 2 <= 12);
    console.log(55 > 22);
    console.log(16 / 4 == 4);
    console.log(8 + 2 < 128);
    console.log(32 * 8 != 255);


/*Fråga 2. Siffran är starten och den har ingte slut. Skriver vi enbart 5, börjar den på 5 och skriver ut resten.
Skulle jag skriva 0 börjar den på första indexet och skriver ut hela ordet då den inte har ett slutindex.
*/
let name = "Jane Doe";
console.log(name.substring(5));
console.log(name.substring(0));


}

main();

// Notera att raden nedan behövs för den automatiska rättningen av uppgiften
exports.main = main;