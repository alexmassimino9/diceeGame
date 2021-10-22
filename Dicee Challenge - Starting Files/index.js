

var randomNum1 = Math.floor(Math.random()*6)+1;
var randomNum2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1+ ".png")
document.querySelector(".img2").setAttribute("src","images/dice" + randomNum2+".png")

if (randomNum1 > randomNum2) {
  $("h1").html("Player 1 Wins")
}
else if (randomNum1== randomNum2) {
  $("h1").html("Draw")
}
else {
  $("h1").html("Player 2 Wins")
};
