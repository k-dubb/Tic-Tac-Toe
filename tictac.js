  //document ready function
  $(function () {

    var player1 = "X";
    var player2 = "O";

    $(".startGame").on("click", function() {

        $(".square").text("");
        //When someone cliks 'play!' say who's turn it is
            //Doesn't work yet $(".playerTurn").text("It is " + player1 + " turn");
    });

   // $(".square").on("click", function() {
    
        
   // });


//If it's X's turn, make his marker on the board and 'X'.
/*
while (".playerTurn" == player1) {
    
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
 
/*
If all squares are full and there is now winner, announce a tie (cat's game) and prompt them to click Play! again to start a new game.
*/




});