var randomNumber1 = Math.floor( (Math.random() * 6) ) + 1;


var randomImage = "images/dice" + randomNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImage);
var img1 = document.querySelectorAll("img")[0];

var randomNumber2 = Math.floor( (Math.random() * 6) ) + 1;

var randomImage = "images/dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImage);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins🚩";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}

