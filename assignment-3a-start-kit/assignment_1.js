$("#number-1, #number-2").keyup(function () {
  if ($("#number-1").val().length > 0 && $("#number-2").val().length > 0) {
    $("#result-box").val($("#number-1").val() * $("#number-2").val());
  } else {
    $("#result-box").val(" ");
  }
});
