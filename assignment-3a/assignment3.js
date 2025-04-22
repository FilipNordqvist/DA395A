//När användaren klickar på en paragraf ska paragrafen dom klickade på få röd textfärg.
$("p").on("click", function () {
  $(this).css("color", "red");
});

//När användaren för muspekaren över någon av rubrikerna så ska rubriken bli understruken (och när de för bort muspekaren återställs den).
$("h2").hover(
  function () {
    $(this).css("text-decoration", "underline");
  },
  function () {
    $(this).css("text-decoration", "none");
  }
);

//När användaren dubbelklickar på en paragraf ska textstorleken öka (den ska öka för varje gång dom dubbelklickar).
$("p").dblclick(function () {
  var currentSize = parseFloat($(this).css("font-size")); //parsar jag inte får jag en etta efter 16px1
  var newSize = currentSize + 1;
  $(this).css({ "font-size": newSize + "px" });
});
