let hi = document.getElementById("hi");
let quack = document.getElementById("quack");
let name = document.getElementById("name");
let showname = function () {



}


let inputElement = document.getElementById("hi");
let buttonElement = document.createElement("button");
document.body.appendChild(buttonElement);
buttonElement.innerText = "Click here to play a game... ;-;";

let buttonElement2 = document.createElement("button");
buttonElement2.innerText = "(B) throw your slipper at him and run off"
let story = "I have like 6 kids in my basement...";

let pElement = document.getElementById("oof");
pElement.innerText = "Hi welcome to my very boring slide! T-T";
let imgElement = document.getElementById("memes");

imgElement.src = "https://i.imgflip.com/3mo4ki.jpg";
imgElement.height = 600;


imgElement.innerText = "Hm I ran out of things to say so...hows your day going? :)"
imgElement.width = 500;
imgElement.border = 10;
imgElement.height = 700;

let play = function () {
    pElement.innerText = "Mr.Potato approaches you do you (A) throw your slipper at him and run off or (B) stay and say hi";
    buttonElement.innerText = "(A) stay and say hi";
    document.body.appendChild(buttonElement2);
    buttonElement.onclick = StayAndSayHi;
    buttonElement2.onclick = ThrowYourSlipperAtHimAndRunOff;
}
buttonElement.onclick = play;
let StayAndSayHi = function () {
    pElement.innerText = "Mr.Potato offers you to be his friend.'hey "+inputElement.value+" lets be friends!'Do you (A) accept or (B) decline";
    buttonElement.innerText = "(A) accept";
    buttonElement2.innerText = "(B) decline";
    buttonElement.onclick = Accept;
    buttonElement2.onclick = decline;
    //
}
let ThrowYourSlipperAtHimAndRunOff = function () {
    pElement.innerText = "Mr.Potato is mad you threw your slipper at him so he eats you ;-; Rip you";
alert("HOW DARE YOU THROW A SHOE AT MR.POTATO D:< YOU DIED >:C LEARN TO NOT THROW SHOES AT POTATOS!!!");
}
alert("I have like 6 kids in my basement..." + ":}");


let Potato = function () {
    alert("congrats you earned 100 potato coins! :D");
}
let Accept = function () {
    pElement.innerText = "Mr.Potato is very happy you became his friend! new ally made Mr.Potato";
    imgElement.onclick = Potato;
    imgElement.src = "https://i.ytimg.com/vi/2v-LPk0Gge0/maxresdefault.jpg";
}
let decline = function () {
    pElement.innerText = "Mr.Potato is offended so he gets mad and eats you... rip you ;-;";
alert("D:< mean... MR.POTATO IS OFFENDED!!! LEARN TO BE NICE TO POTATOS YOU LOST 1 LIFE >:C");
}

let bag = ["potato coins","a booger","a stick","a bigger stick","A SUPES BIG STICK"];
alert(inventory);


let money = 100; // potato costs $50
if (money >= 50) {
    alert("I died 15 times today   T-T :D");
} else {
    alert("you don't have enough money to buy a potato :(");
}

/*
1. create a variable called lives
2. create an if statement that tests if lives is less than 1
3. if lives is less than 1, alert that the player is dead D:
*/

let lives = 3;
if (lives == 1) {

    alert("you died.  :(");
}

