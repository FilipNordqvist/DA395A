function main() {
    console.log("Uppgift 3.");
    
    let learning = "It's Learning";
    let javascript = "JavaScript: The Good Parts";
    let java = "Eloquent JavaScript";

    let learningToUpper = learning.substring(5,13)
    console.log(learningToUpper.toUpperCase());

    let goodPartsToLower = javascript.substring(16,25)
    console.log(goodPartsToLower.toLowerCase())

    let goodToUpper = javascript.substring(16, 20)
    console.log(goodToUpper.toUpperCase())

    let entJava = java.substring(5,13)
    console.log(entJava)
    
}

main();

// Notera att raden nedan behövs för den automatiska rättningen av uppgiften
exports.main = main;