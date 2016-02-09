$(document).ready(function() {
  $("#stopGame").hide(); 
  $("#gameCounter").hide();
  $("#gameGo").hide();
  $("#directions").hide();
  
  $("#startGame").on("click", function () {
    $("#stopGame").hide(); 
    $("#gameCounter").hide();
    $("#gameGo").hide();
    $("#directions").show();
    $(this).hide();
  });

  $("#go").on("click", function () {
    $("#stopGame").show(); 
    $("#gameCounter").show();
    $("#gameGo").show();
    $("#directions").hide();
  });

    $("#stopGame").on("click", function () {
    $("#startGame").show();
    $("#stopGame").hide(); 
    $("#gameCounter").hide();
    $("#gameGo").hide();
    $("#directions").hide();

});

  });