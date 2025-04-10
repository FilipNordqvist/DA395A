function main() {
    console.log("Uppgift 4.");

    let numbers = [128, 256, 512, 1024, 2048];
    
    let sumOfAllElements = 0;
    
    for (let i = 0; i < numbers.length; i++){
        sumOfAllElements+= numbers[i]
    }
    console.log(sumOfAllElements)
    console.log(sumOfAllElements/numbers.length)
    
}

main();

// Notera att raden nedan behövs för den automatiska rättningen av uppgiften
exports.main = main;