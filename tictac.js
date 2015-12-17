  //document ready function
  $(function () {

    var player = "X";
    var winner = null;
    var numberOfPlays= 1;

    //Clear the board
    $("#startGame").on("click", function() {
        
        whoGoesFirst();     
        $(".square").text("");
        numberOfPlays = 1;
        //$(".square")removeClass("selected");

    });

    //Make it random who gets to go first

    function whoGoesFirst() { 
    
        var player = "X";

        if (Math.random() < 0.5) {

            player = "O";

        }

        $("#playerTurn").text(player + " gets to start");

    }

 //   $("#playerTurn").text("It's X's turn");

    //When a square is clicked on, add in the appropraite player's marker. Then switch players. 
    


    $(".square").on("click", function() {

        $(this).html(player);
        switchPlayers();
        numberOfPlays++;
    
    });
    
     /*   if ($(this).hasClass("selected")) {
    
            alert ("That box is already filled");
            //winner = player;
        }
        else {

         // $(this).addClass("selected");    
        //}
      if (winner !== null) {
            alert(winner + " already won the game!");
        }
    
    });
 */    //Check for winner and announce who it is if there is one.  
    //Switch between players and say who's turn it is.
    function switchPlayers() {

        if (checkForWinner(player)) {
        
            alert("Congratulations, " + player + "! You won! To play again, click Play!"); 
            
        }

        else if (numberOfPlays === 9) {
            
            alert ("Oh no, it's a tied game! Click Play! to start a new game");
        }

        else if (player === "X") {

            player = "O";
            $("#playerTurn").text("It's O's turn");

        }
        else {
       
            player = "X";
            $("#playerTurn").text("It's X's turn");     
        }

    }

    function checkThreeRow(a, b, c, marker) {
        
        var result = false;

        if (getSquare(a) === marker && getSquare(b) === marker && getSquare(c) === marker) {
            
            result = true;

        }

        return result;
    }

    function getSquare(number) {

        return document.getElementById("s" + number).innerText;

    }

    function checkForWinner(marker) {

        var result = false;

        if (checkThreeRow(1, 2, 3, marker) || checkThreeRow(4, 5, 6, marker) || checkThreeRow(7, 8, 9, marker) || checkThreeRow(1, 4, 7, marker) || checkThreeRow(2, 5, 8, marker) || checkThreeRow(3, 6, 9, marker) || checkThreeRow(1, 5, 9, marker) || checkThreeRow(3, 5, 7, marker)) {

            result = true;

        }
        return result;

    }

/*   
    

If a square has something in it already, do not allow a player to put their mark in it.


*/

});
