$("#number-1, #number-2").keyup(function(){  
    var number1 = $("#number-1").val();
    var number2  = $("#number-2").val();
    
    
    $("#result-box").val(number1 * number2);
    
});



