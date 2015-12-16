  //document ready function
  $(function () {

    var player = "X";


  /*  function whoGoesFirst() { 
    
        var player = "X";

        //Make it random who gets to go first
        if (Math.random() < 0.5) {

            player = "O";

        }

        $("#playerTurn").text(player + " gets to start");

    }

*/
    $("#playerTurn").text("It's X's turn");

    //Clear the board
    $(".startGame").on("click", function() {

        $(".square").text("");
        //whoGoesFirst();     


    });






    //When a square is clicked on, add in the appropraite player's marker. Then switch players. 
    $(".square").on("click", function() {
 //       if ($(this).html === "") {
        
            $(this).html(player);
         //   checkForWinner();
         //   checkForTie();
            switchPlayers();
 //       }

//        else {

//            alert ("That box is already filled");
 //       }

    });
       
    //Switch between players and say who's turn it is.
    function switchPlayers() {

        if (player === "X") {

            player = "O";
            $("#playerTurn").text("It's O's turn");

        }
        else {
       
            player = "X";
            $("#playerTurn").text("It's X's turn");
       
        }

    }

    function checkRow(a, b, c, move) {
        
        var result = false;

        if (getRow(a) === move && getRow(b) === move && getRow(c) === move) {
            
            result = true;

        }

        return result;
    }

    function getRow(number) {

        return document.getElementById("s" + number);

    }

    function checkForWinner(move) {

        var result = false;

        if (checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) || checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) || checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) || checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)) {

            result = true;
           // alert (player + " wins!");

        }
        return result;

    }

/*    function checkForTie() {

        for (var i = 1; var i <10, i++) {

            if (getRow(i) === "") {
                
                return false;
            }

            else {

                alert ("Oh no, it's a tied game! Click Play! to start a new game");

            }

        }
    }
    

/*

If a square has something in it already, do not allow a player to put their mark in it.

When a player gets 3 in a row (vertical, horizontal, or diagonal), annouce who won and do not allow any other moves on the board.

   If ((player === "s1", "s2", "s3") || (player === "s4", "s5", "s6") || (player === "s7", "s8", "s9") || (player === "s1", "s4", "s7") || (player === "s2", "s5", "s8") || (player === "s3", "s6", "s9") || (player === "s1", "s5", "s9") || (player === "s3", "s5", "s7")) {

        return (player + " wins!");

    }
    else if If ((player2 === "s1", "s2", "s3") || (player2 === "s4", "s5", "s6") || (player2 === "s7", "s8", "s9") || (player2 === "s1", "s4", "s7") || (player2 === "s2", "s5", "s8") || (player2 === "s3", "s6", "s9") || (player2 === "s1", "s5", "s9") || (player2 === "s3", "s5", "s7")) {

        return (player2 + " wins!");
    }
    
 
/*
If all squares are full and there is now winner, announce a tie (cat's game) and prompt them to click Play! again to start a new game.

        return ("Ah man, it's a tie game! Click Play! to start a new game.")

*/

});
