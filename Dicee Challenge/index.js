 var randomNumber1 =Math.floor(Math.random() * 6) + 1;

 var randomDiceImage = "dice" + randomNumber1 + ".png";
 var randomImageSource = "images/" + randomDiceImage;

 var images1 = document.querySelectorAll("img")[0];

 images1.setAttribute("src", randomImageSource);

 var randomNumber2 =Math.floor(Math.random() * 6) + 1;

 var randomDiceImage = "dice" + randomNumber2 + ".png";
 var randomImageSource2 = "images/" + randomDiceImage;

 var images2 = document.querySelectorAll("img")[1];

 images2.setAttribute("src", randomImageSource2);

 if(randomNumber1 > randomNumber2){
   document.querySelector("h1").innerHTML  = "player 1 win!";
 }
 else if (randomNumber2 > randomNumber1){
   document.querySelector("h1").innerHTML = "player 2 win!";

 } else {document.querySelector("h1").innerHTML = " Draw";}
