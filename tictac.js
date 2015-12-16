  //document ready function
  $(function () {

    var player = "X";

    //Clear the board
    $(".startGame").on("click", function() {

        $(".square").text("");

    });

    //When a square is clicked on, add in the appropraite player's marker. Then switch players 
    $(".square").on("click", function() {

        $(this).html(player);
        switchPlayers();  

    });
       
    //switch between players
    function switchPlayers() {

        if (player === "X") {

            player = "O";
       
        }
        else {
       
            player = "X";
       
        }

    }

    //Say who's turn it is.

 /*   while player === X {

        $(".playerTurn").text("It's X's turn");
    }

    else {

        $(".playerTurn").text("It's O's turn");
    
    }
    

    //Another option - which doesn't work yet $(".playerTurn").text("It is " + player1 + " turn");
 //  function message(msg) {

  //      document.getElementById("playerTurn").innerText=msg;

 //   }

    
    //Mark the square with an X or an O (and switch players after the move is made)
 //   function playerMove () {

//        square.innerText = player;
 //       switchPlayers();     

 //   }



   // $(".square").on("click", function() {
    
        
   // });


//If it's X's turn, make his marker on the board and 'X'.
/*
while (".playerTurn" == player) {
    
    $(".square").on("click", function() {

        $(".square").text("X");
    });
}
else {

    $(".square").on("click", function() {

        $(".square").text("X");
    });
}


/*

If it's O's turn, make his marker on the board and 'O'.

When a sqaure is clicked, mark it with the corresponding player's mark (X or O). 

When a square is clicked, switch to the next player to make their move.  -->

If a square has something in it already, do not allow a player to put their mark in it.

When a player gets 3 in a row (vertical, horizontal, or diagonal), annouce who won and do not allow any other moves on the board.

   If ((player1 === "s1", "s2", "s3") || (player1 === "s4", "s5", "s6") || (player1 === "s7", "s8", "s9") || (player1 === "s1", "s4", "s7") || (player1 === "s2", "s5", "s8") || (player1 === "s3", "s6", "s9") || (player1 === "s1", "s5", "s9") || (player1 === "s3", "s5", "s7")) {

        return (player1 + " wins!");

    }
    else if If ((player2 === "s1", "s2", "s3") || (player2 === "s4", "s5", "s6") || (player2 === "s7", "s8", "s9") || (player2 === "s1", "s4", "s7") || (player2 === "s2", "s5", "s8") || (player2 === "s3", "s6", "s9") || (player2 === "s1", "s5", "s9") || (player2 === "s3", "s5", "s7")) {

        return (player2 + " wins!");
    }
    
 
/*
If all squares are full and there is now winner, announce a tie (cat's game) and prompt them to click Play! again to start a new game.

        return ("Ah man, it's a tie game! Click Play! to start a new game.")

*/

});
