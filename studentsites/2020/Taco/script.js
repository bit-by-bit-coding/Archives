//---------------------elements-----------------------------------------------

let pElement = document.getElementById("fred");
pElement.innerText = "Once there was a Taco...";

let imgElement = document.getElementById("taco");
imgElement.src = "taco.jpg";

let TacoButtonElement = document.getElementById("TacoButton");

let hugeTaco = function() {
    TacoButtonElement.innerText = "HUGE HUGE HUGE TACO 🌮🌮🌮🌮🌮🌮";
}

TacoButtonElement.onclick = hugeTaco;

let randomNumber = (Math.random() * 100);

//----------choices---------
let choice1Element = document.getElementById("choice1");
let choice2Element = document.getElementById("choice2");
let choice3Element = document.getElementById("choice3");

let StoryElement = document.getElementById("StoryNarration");

//----------------------------------------------------------------------

let inputbox2Element = document.getElementById("c");
let phrase = "(my catch phrase)";

let inputboxElement = document.getElementById("input");
let name = "(my tacos name)";

//-----------------------------input info---------------------------------------------

let getName = function() {
    name = inputbox2Element.value;
    oath.innerText = "I " + name + " swear to eat as much plastic as I can, and go around saying " + phrase + " over and over again, I will also try my hardest to never get eaten and stay away from trash-cans!";

}

let getPhrase = function() {
    phrase = inputboxElement.value;
    oath.innerText = "I " + name + " swear to eat as much plastic as I can, and go around saying " + phrase + " over and over again, I will also try my hardest to never get eaten and stay away from trash-cans!";
}

inputbox2Element.onkeyup = getName;
inputboxElement.onkeyup = getPhrase;
    
let oath = document.getElementById("tacoOath");
oath.innerText = "I " + name + " swear to eat as much plastic as I can, and go around saying " + phrase + " over and over again, I will also try my hardest to never get eaten and stay away from trash-cans!";


//---------------------------functions---------------------------------------------------

let deepFry = function() {
    StoryElement.innerText = "you jump in the deep fryer the greasy oil slowly turning you crispy and deep fried a pair of tongs comes directly at you and pulls you out. You are then given to a small kid he takes a bite out of you expecting a churro and sadly finds deep fried taco, then he promptly throws you in the trash.";
    choice1Element.onclick = startgame;
    choice1Element.innerText = "you just died T-T";
    choice2Element.onclick = startgame;
    choice2Element.innerText = "you just died T-T";
    choice3Element.onclick = startgame;
    choice3Element.innerText = "you just died, push me to restart";
}
let drivethru = function() {
    if (randomNumber > 70) {
        alert("You fell and cracked your shell!!");
        eaten();
    } else {
        alert ("You survived the fall!!");
    choice1Element.onclick = dart;
    choice1Element.innerText = "MAKE A BREAK FOR IT! dart across the drive thru lane";
    choice2Element.onclick = trash;
    choice2Element.innerText = "stand still and do nothing, this may get you thrown in the trash";
    choice3Element.onclick = eaten;
    choice3Element.innerText = "PUSH ME to fall through a random hole in the ground and die";
    }
}

let wait = function() {
    StoryElement.innerText = "the employee picks you up and wraps you in paper then slides you in a bag with four other tacos. The tacos introduce themselves and ask what your name is you say your name is " + name + ". They then ask you if you have any ideas on how to get out.";
    choice1Element.innerText = "Scheme with the other tacos.";
    choice1Element.onclick = scheme;
    choice2Element.innerText = "NO WAY!!I'm a lone taco!";
    choice2Element.onclick = lone;
    choice3Element.innerText = "resort to cannibalism and eat the other tacos.";
    choice3Element.onclick = cannibalism;
}
//-------------------------------------------------------------------------------------------------------------------------------------------

let trash = function() {
    StoryElement.innerText = "a employee spots you standing in the drive thru lane and picks you up then throws you in the trash! you die from a cracked shell and all the flies eating you :(";
eaten();
}

let dart = function() {
    if (randomNumber > 80) {
        alert("You darted across the drive thru lane and got ran over :(");
        eaten();
    } else {
        alert ("phew no cars ran you over");
        win();
}
}

let lone = function() {
    alert("you refuse to help them. They break a hole in the bag and jump out, and being the stubborn taco you are, you refuse to follow them and so you become a tasty lunch");
    eaten();
}

let cannibalism = function() {
    StoryElement.innerText = "BUURRRRRPPPPP, you devour the other tacos, your weight busts through the flimsy paper bag!!";
    if (randomNumber > 80) {
        StoryElement.innerText += " You fall down, down, down, OH NOO YOU CRACKED YOUR SHELL!!!!";
        eaten();
    } else {
        StoryElement.innerText += " you somehow survived the fall!! The other tacos in the room eye you warily, you escaped but you are now known as The Crazy Cannibal " + name;
        win();
}
}



let scheme = function () {
    StoryElement.innerText = "you and the tacos slip out of your papers and broke a hole in the bag. Do you jump, you have a 50 percent chance of cracking your shell and a 50 percent chance of surviving, what do you do??";
    choice1Element.innerText = "YES JUMP!!!!";
    choice1Element.onclick = chance;
    choice2Element.innerText = "NO WAY AM I GOING TO JUMP!!! When  you choose this choice you may or may not get eaten!";
    choice2Element.onclick = eaten;
    choice3Element.innerText = "PUSH ME to have a taco seizure and die.";
    choice3Element.onclick = eaten;
}


//-----------------------------------------------------------------------------------------------------------------------------------------

let startgame = function() {
    choice1Element.onclick = drivethru;
    choice1Element.innerText = "escape through the drive thru window";
    choice2Element.onclick = wait;
    choice2Element.innerText = "wait and don't do any thing";
    choice3Element.onclick = deepFry;
    choice3Element.innerText = "jump in the deep fryer and hope for the best";
}


let win = function() {
    alert("Congratulations!! you escaped safely and were not eaten. I here by declare " + name +" has won!");
    choice1Element.innerText = "YOU WON!!!";
    choice1Element.onclick = startgame;
    choice2Element.innerText = "YOU WON!!!";
    choice2Element.onclick = startgame;
    choice3Element.innerText = "YOU WON!!! press me to restart!"; 
    choice3Element.onclick = startgame;
}

let eaten = function() {
    alert ("R.I.P you died, you will be started again shortly");
    startgame()
}


let chance = function() {
    if (randomNumber > 80) {
        alert("you fell and cracked your shell :(");
        eaten();
    } else {
        alert ("you survived the fall and WON!!!!");
        win();
} 
}
//---------------------------------------------------------------------------------------------------------------------------------------------

startgame();