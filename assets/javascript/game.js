$(document).ready(function() {
var counter = 0;
var wins = 0;
var losses = 0;
var targetNumber;
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;

function reset () {
    targetNumber = Math.floor((Math.random()* 111)+19);
    counter = 0;
    crystalValue1 = Math.floor((Math.random()* 12)+1);
    crystalValue2 = Math.floor((Math.random()* 12)+1);
    crystalValue3 = Math.floor((Math.random()* 12)+1);
    crystalValue4 = Math.floor((Math.random()* 12)+1);
    $("#number-target").text(targetNumber);
}

$("#crystal1").on("click", function() {
    counter += crystalValue1;
    $("#scorebox").text(counter);
    if (counter === targetNumber) {

        alert("You win!");
        wins++;
        $("#wins").text("wins: " + wins);
        reset();
      }
      
    else if (counter >= targetNumber) {
      
        alert("You lose!!");
        losses++;
        $("#losses").text("losses: " + losses);
        reset();
      }
});
     
$("#crystal2").on("click", function() {
    counter += crystalValue2;
    $("#scorebox").text(counter);
    if (counter === targetNumber) {

        alert("You win!");
        wins++;
        $("#wins").text("wins: " + wins);
        reset();
        }
        
    else if (counter >= targetNumber) {
        
        alert("You lose!!");
        losses++;
        $("#losses").text("losses: " + losses);
        reset();
        }
});
   
$("#crystal3").on("click", function() {
    counter += crystalValue3;
    $("#scorebox").text(counter);
    if (counter === targetNumber) {

        alert("You win!");
        wins++;
        $("#wins").text("wins: " + wins);
        reset();
      }
      
    else if (counter >= targetNumber) {
      
        alert("You lose!!");
        losses++;
        $("#losses").text("losses: " + losses);
        reset();
      }
});

$("#crystal4").on("click", function() {
    counter += crystalValue4;
    $("#scorebox").text(counter);
    if (counter === targetNumber) {

        alert("You win!");
        wins++;
        $("#wins").text("wins: " + wins);
        reset();
      }
      
    else if (counter >= targetNumber) {
      
        alert("You lose!!");
        losses++;
        $("#losses").text("losses: " + losses);
        reset();
      }
});
reset();
});

// $("#crystal3").on("click", function() {

//     if (crystalPressed = false) {
//     crystalValue = Math.floor((Math.random()* 12)+1);
//     counter += crystalValue;
//     crystalPressed = true;
//     }
//     else {
//     counter += crystalValue;   
//     }

//     $("#scorebox").text(counter);

//     if (counter === targetNumber) {

//       alert("You win!");
//       wins++;
//       $("#wins").text("wins: " + wins);
//     }

//     else if (counter >= targetNumber) {

  
//       alert("You lose!!");
//       losses++;
//       $("#losses").text("losses: " + losses);
//     }
// });

// $("#crystal4").on("click", function() {

//     if (crystalPressed = false) {
//     crystalValue = Math.floor((Math.random()* 12)+1);
//     counter += crystalValue;
//     crystalPressed = true;
//     }
//     else {
//     counter += crystalValue;   
//     }

//     $("#scorebox").text(counter);

//     if (counter === targetNumber) {

//       alert("You win!");
//       wins++;
//       $("#wins").text("wins: " + wins);
//     }

//     else if (counter >= targetNumber) {

  
//       alert("You lose!!");
//       losses++;
//       $("#losses").text("losses: " + losses);
//     }
// });
// });
// also need a function that when you start a game by clicking on any crystal 
// the counter goes to 0 and the #numberbox goes to a random number between 19 and 120

// need function that says if counter === numberbox then displays you win and adds 1 to wins

// function that says if counter > numberbox displays you lose and adds 1 to losses


