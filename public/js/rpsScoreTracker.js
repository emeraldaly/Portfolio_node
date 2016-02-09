window.rockPaperScissor = {
    gameState: {
    userScore: 0,
    computerScore: 0,
    roundCount: 1
  }
}

$(document).ready(function() {

  $(".btn-info").on("click", function() {
    var tagName = $(this).data("tag");
    rockPaperScissor.gameState[tagName]++;

    $("#" + tagName).html(rockPaperScissor.gameState[tagName]);
  });

//Code for 5 rounds
/*function fiveRounds() {
  $(".btn-info").on("click", function() {
  if userScore + computerScore >= 5
    $("#myModal").modal("show");
      $(".modal-body").html("Five Rounds have passed!");

    if userScore > computerScore
        $("#myModal").modal("show");
        $(".modal-body").html("You win!");

    else if computerScore > userScore
        $("#myModal").modal("show");
        $(".modal-body").html("The machine wins!"); */   

});