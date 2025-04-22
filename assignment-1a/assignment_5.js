function main() {
    console.log("Uppgift 5.");

    

    let countries = ["Sweden", "Denmark", "Finland", "Norway"];

    let secoundCountry = countries[1];
    let threeFirstLetters = secoundCountry.substring(0,3)
    console.log(threeFirstLetters)

    let sumOfAllElements = 0;
    let meanValue = 0;

    for (let i = 0; i < countries.length; i++){
        currentCountry = (countries[i]);
        sumOfAllElements += currentCountry.length
    }
    meanValue = sumOfAllElements/countries.length;
    console.log(meanValue)

}

main();

// Notera att raden nedan behövs för den automatiska rättningen av uppgiften
exports.main = main;
