var buttonChoices = ["rock", "paper", "scissor", "lizard", "spock"];

$(document).ready(function() {

      var userScore = 0;
      var computerScore = 0;
      var roundCount = 1;

  function bindControls() {
    $(".btn-primary").on("click", function() {
      var userChoice = $(this).attr("id");
      var randomIndex=Math.floor(Math.random() * buttonChoices.length);
      var computerChoice = buttonChoices[randomIndex];

    if(computerChoice === userChoice) {
      // alert("Tie")
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " It's a Tie!");
    } 
    else if(computerChoice === "paper" && userChoice === "scissor") {
      // User gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
      rockPaperScissor.gameState.userScore++;
    }
    else if(computerChoice === "scissor" && userChoice === "paper") {
      // Computer gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
      rockPaperScissor.gameState.computerScore++;
    }
    else if(computerChoice === "rock" && userChoice === "paper") {
      // User gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
      rockPaperScissor.gameState.userScore++;
    }
    else if(computerChoice === "paper" && userChoice === "rock") {
      // Computer gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
      rockPaperScissor.gameState.computerScore++;
    }
    //Code to include lizard & spock.. created bugs :(
    else if(computerChoice === "rock" && userChoice === "lizard") {
      //Computer gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
      rockPaperScissor.gameState.computerScore++;
    }
    else if(userChoice === "lizard" && computerChoice === "rock") {
      //user gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
      rockPaperScissor.gameState.userScore++;
    }
    else if(computerChoice === "lizard" && userChoice === "spock") {
      //Computer gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
      rockPaperScissor.gameState.computerScore++;
    }
    else if(userChoice === "spock" && computerChoice === "lizard") {
      //user gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
      rockPaperScissor.gameState.userScore++;
    }  
    else if(computerChoice === "spock" && userChoice === "scissor") {
      //Computer gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
      rockPaperScissor.gameState.computerScore++;
    }
    else if(userChoice === "scissor" && computerChoice === "spock") {
      //user gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
      rockPaperScissor.gameState.userScore++;
    }
    else if(userChoice === "scissor" && computerChoice === "lizard") {
      //Computer gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
      rockPaperScissor.gameState.computerScore++;
    }
    else if(computerChoice === "lizard" && userChoice === "scissor") {
      //User gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
      rockPaperScissor.gameState.userScore++;
    }
    else if(computerChoice === "lizard" && userChoice === "paper") {
      //Computer gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
      rockPaperScissor.gameState.computerScore++;
    }
    else if(userChoice === "paper" && computerChoice === "lizard") {
      //user gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
      rockPaperScissor.gameState.userScore++;
    }
    else if(userChoice === "paper" && computerChoice === "spock") {
      //computer gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
      rockPaperScissor.gameState.computerScore++;
    }
    else if(computerChoice === "spock" && userChoice === "paper") {
      //User gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
      rockPaperScissor.gameState.userScore++;
    }
    else if(computerChoice === "spock" && userChoice === "rock") {
      //Computer gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
      rockPaperScissor.gameState.computerScore++;
    }
    else if(userChoice === "rock" && computerChoice === "spock") {
      //user gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
      rockPaperScissor.gameState.userScore++;
    }
    else if(computerChoice === "rock" && userChoice === "scissor") {
      // Computer gets a point
     $("#myModal").modal("show");
     $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
      rockPaperScissor.gameState.computerScore++;
    } 
    else if(computerChoice === "scissor" && userChoice === "rock") {
      // User gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!"); 
      rockPaperScissor.gameState.userScore++;
    }
    $("#myModal").modal("show");
    rockPaperScissor.gameState.roundCount++;

    $("span").each(function() {
      $(this).html(rockPaperScissor.gameState[$(this).attr("id")]);
    });

    });    
  };

  bindControls();

});