//Ta reda på vilken bakgrundsfärg webbplatsen har.
let  bg = $('body').css('background-color');
console.log('Bakgrundsfärg är: ', bg)

//Ta reda på vilken textstorlek som huvudrubriken har.
let rubrik= $('h1').css('font-size');
console.log('Huvudrubriken är storlek: ' , rubrik)

//Ta reda på vilken textstorlek som paragraferna har
let paragraferna= $('p').css('font-size');
console.log('Paragraferna har storlek: ' , paragraferna)

//Ta reda på höjden för elementet med
let heightPrimary= $('#primary').css('height');
console.log('Höjden för elementet med id="primary" är: ', heightPrimary)