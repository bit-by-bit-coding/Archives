let imageElement = document.getElementById ("peta");
imageElement.style.width = "500px";

let pElement = document.getElementById("bread");

let button1Element = document.getElementById("button1");
let button2Element = document.getElementById("button2");
let button3Element = document.getElementById("button3");

button1Element.style.display = "";
button2Element.style.display = "none";
button3Element.style.display = "none";

let startGame = function () {
    imageElement.src = "https://media-exp1.licdn.com/dms/image/C560BAQGV_gGUqb_jZw/company-logo_200_200/0?e=2159024400&v=beta&t=BGDPy4vAy_9e2NIsqBjMQGzBY_GlKj7n_iLOQUHW8E4"
    pElement.innerText = "You are a junior member of Peta divoted to preventing animal suffering. You are going to free animals from slaughterhouses! Ready?";
    button1Element.onclick = slaughterhouses;
    button1.innerText = "Let's go!"
    button2Element.style.display = "none";
    button3Element.style.display = "none";
}

let slaughterhouses = function () {
    imageElement.src = "https://storage.googleapis.com/planet4-international-stateless/2019/06/GP0STTC79_High_res.jpg";
    pElement.innerText = "You arive at the slaughterhouse. You got a job there, but you will be freeing the animals. You enter the building and see signs to where the cows, pigs and chickens are being kept. Which animal do you free now?";
    button1.innerText = "Free cows";
    button2.innerText = "Free pigs";
    button2Element.style.display = "";
    button3Element.style.display = "";
    button1Element.onclick = freeCows;
    button2Element.onclick = freePigs;
    button3Element.onclick = freeChickens;
}

let freeChickens = function () {
    imageElement.src = "https://images.azureedge.net/rt/images/factory_chickens_unhappy-apha-140812.jpg";
    pElement.innerText = "You enter the rooms where the chickens are kept. They are so cramped, and they have been breed to have more meat on their breast, but they can only take a few steps before they lay down! You could open the doors of the cages manually, but that would take forever! There is a computer that could open them all, but someone is there! What do you do?";
    button1.innerText = "Open the cages manually";
    button2.innerText = "Try to use the computer";
    button3Element.style.display = "none";
    button1Element.onclick = chickenFail;
    button2Element.onclick = chickenComputer;
}

let chickenFail = function () {
    imageElement.src = "https://www.emojirequest.com/img-facebook/ThumbsDownEmoji.jpg";
    pElement.innerText = "You try to open the cages but are caught! :(";
    button1.innerText = "Play again";
    button2.innerText = "Start at slaughterhouse";
    button1Element.onclick = startGame;
    button2Element.onclick = slaughterhouses;
}

let chickenComputer = function () {
    imageElement.src = "https://ctbhost.com/wp-content/uploads/2019/07/personal-computers-500x500.jpg";
    pElement.innerText = "You open the computer and free the chickens!"
    button1.innerText = "Next";
    button2Element.style.display = "none";
    button1Element.onclick = chickenEnding;
}

let chickenEnding = function () {
    imageElement.src = "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555930041/shape/mentalfloss/istock_000006350265-chicken_6.jpg";
    pElement.innerText = "Congradulations! You freed the chickens! Your allies at Peta transported the chickens to sanctuaries and farms! You can save chickens in real life if you go vegan or vegetarian!"
    button1.innerText = "Play again";
    button2Element.style.display = "";
    button2.innerText = "Start at slaughterhouse";
    button1Element.onclick = startGame;
    button2Element.onclick = slaughterhouses;
}

let freeCows = function () {
    imageElement.src = "https://blog.humanesociety.org/wp-content/uploads/2019/06/COWS-CEG4P0_480738-e1560887135681.jpg";
    pElement.innerText = "You enter the pens where the cows are being kept. They are cramped, and up to their knees in manure. You lock eyes with a baby cow. It is brown and small, and you feel good that you are going to free the cows. One problem though: the button that frees all the cows is locked. But you could also manually unhook the pens, but that would take forever. What do you do?";
    button1.innerText = "Try to guess the passcode on the lock";
    button2.innerText = "Free the cows manually";
    button3Element.style.display = "none";
    button1Element.onclick = cowPassCode;
    button2Element.onclick = cowFail;
}

let freePigs = function () {
    imageElement.src = "https://www.foodandwaterwatch.org/sites/default/files/web_1906_factory-farm-pig-industrial-farm-media_1.jpg";
    pElement.innerText = "You enter the place where the pigs are being caged. They are so cramped they can't turn around! You see there is a computer that could be used to open all the cages at once! But you don't know the password to it! You could also open them with a manual switch, but it looks really heavy! What do you do?";
    button1.innerText = "Try to use the computer";
    button2.innerText = "Use the manual switch";
    button3Element.style.display = "none";
    button1Element.onclick = pigFail;
    button2Element.onclick = pigSwitch;
}

let pigFail = function () {
    imageElement.src = "https://www.emojirequest.com/img-facebook/ThumbsDownEmoji.jpg";
    pElement.innerText = "You try to unlock the computer but are caught! :(";
    button1.innerText = "Play again";
    button2.innerText = "Start at slaughterhouse";
    button1Element.onclick = startGame;
    button2Element.onclick = slaughterhouses;
}

let pigSwitch = function () {
    imageElement.src = "https://s3.crackedcdn.com/blogimages/2010/06/big-knife-switch.png";
    pElement.innerText = "Yay! After many tries, you pull the switch and release the pigs!";
    button1.innerText = "Next";
    button2Element.style.display = "none";
    button1Element.onclick = pigEnding;
}

let pigEnding = function () {
    imageElement.src = "https://i.pinimg.com/originals/b9/e0/7c/b9e07c36e880d792d8b39ec72e677b4b.jpg";
    pElement.innerText = "Congradulations! You freed the pigs! Your allies at Peta transported the pigs to sanctuaries and farms! You can save pigs in real life if you go vegan or vegetarian!"
    button1.innerText = "Play again";
    button2Element.style.display = "";
    button2.innerText = "Start at slaughterhouse";
    button1Element.onclick = startGame;
    button2Element.onclick = slaughterhouses;
}

let cowFail = function () {
    imageElement.src = "https://www.emojirequest.com/img-facebook/ThumbsDownEmoji.jpg";
    pElement.innerText = "You try to unlock all the pens manually, but you are caught and blow your cover! Oh well.";
    button1.innerText = "Play again";
    button2.innerText = "Start at slaughterhouse";
    button1Element.onclick = startGame;
    button2Element.onclick = slaughterhouses;
}

let cowPassCode = function () {
    imageElement.src = "https://p0.pxfuel.com/preview/401/1022/399/castle-fence-chain-locks.jpg";
    pElement.innerText = "You try again and again, but you finally unlock it! Hooray for you!";
    button1.innerText = "Next";
    button2Element.style.display = "none";
    button1Element.onclick = cowEnding;
}

let cowEnding = function () {
    imageElement.src = "https://www.treehugger.com/thmb/9XKkDyrIXayZ_7SNenJwulNPx-s=/560x315/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__01__cow-in-pasture-crop2-3b8cdbd62aee45f6ab8d49228fa85272.jpg";
    pElement.innerText = "Congradulations! You freed the cows! After you undid the lock, you called the Peta reinforcements and had the cows transported to family farms and sanctuaries! You can save cows from being slaughtered in real life if you go vegan or vegetarian! You can rescue more animals if you'd like now!";
    button1.innerText = "Play again";
    button2Element.style.display = "";
    button2.innerText = "Start at slaughterhouse";
    button1Element.onclick = startGame;
    button2Element.onclick = slaughterhouses;
}
startGame ();