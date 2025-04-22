//När användaren klickar på en paragraf ska paragrafen dom klickade på få röd textfärg.
$("p").on("click", function() {
    $(this).css("color", "red");
});

//När användaren för muspekaren över någon av rubrikerna så ska rubriken bli understruken (och när de för bort muspekaren återställs den).
$("h2").hover(function(){
    $(this).css("text-decoration", "underline");
    }, function(){
        $(this).css("text-decoration", "none");
  });

  //När användaren dubbelklickar på en paragraf ska textstorleken öka (den ska öka för varje gång dom dubbelklickar).
  $("p").dbclick(function(){
    var currentFontSize = $(section).css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = currentFontSizeNum*1.2;
    $(section).css('font-size', newFontSize);
    return false;
});
  
  $("p").on("dbclick", function() {
    $(this).css("color", "blue");
});