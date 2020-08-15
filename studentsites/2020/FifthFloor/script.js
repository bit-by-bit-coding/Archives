



let imgElement = document.getElementById("edenDoor")
imgElement.src = "https://www.chicagotribune.com/resizer/WA8HcbroI8jUB7GmnWfrkw4c29M=/415x276/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/ML26SNRHYVBABIFVOYXIDXZ5WA.jpg";
imgElement.style.width = "";

let button1Element = document.getElementById("button1");


let button2Element = document.getElementById("button2");


let button3Element = document.getElementById("button3");

let h1Element = document.getElementById("betterFred");

let pElement = document.getElementById("fred");

let breadForWiseOne = false;

let titleElement = document.getElementById("title")


alert("Intercom: Welcome to Fifth Floor.")
alert("Intercom: This is a mutliple choice game based around an earthquake disaster.")
alert("Intercom: Choose wisely. And maybe you will meet Bruce Lee...")
alert("Intercom: Good luck-")

//[PART 1]
//outline of the story:

//August 12, 2020 12:50PM - Starting in the office
//1:00PM - Earthquake Power outtage, no running water or electricity
//1:30PM Aftershock
//3:30PM Aftershock - Potentionally causing the first floor of Bob's office to collapse
//4:00PM Third Aftershock
//5:00PM Aftershock - Last of the aftershocks
//August 20, 2020 7:00AM - Help arrives from outter sources
//



//choice #:1 branches: #2 #4
let play = function() {
    imgElement.src = "https://www.chicagotribune.com/resizer/WA8HcbroI8jUB7GmnWfrkw4c29M=/415x276/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/ML26SNRHYVBABIFVOYXIDXZ5WA.jpg";
    h1Element.innerText = "[Fifth Floor]"
    pElement.innerText = "You stare at your name tag: it reads Bob. You work as a financial analyist. Last year, your boss gave you a promotion for your excellent work and diligence. Because of that, your office is now located on the fifth floor. You also have an old office on the second floor. You live in an apartment five blocks away from your office. Your real name is Robert, but people like to call you Bob, thus, you decided to change your official name to Bob. Everyone in the building knows Bob. Some know you as the one who loves going to the local bakery next door. Some know you as simply passionate about your job. The current time is August 12, 2020 12:50PM.";
    button1Element.innerText = "Walk towards the door";
    button2Element.innerText = "Sit in your workspace";
    button3Element.innerText = "(o u o)";
    button1Element.onclick = openDoor;
    button2Element.onclick = sitWorkspace;
}

//choice #:2 branches: #3 #1 #8
let openDoor = function() {
    imgElement.src = "https://www.popsci.com/resizer/6iA2dK-qrizE_TrGloIM5mYz5Mw=/760x570/filters:focal(600x450:601x451)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/VYHDQWEYQJMUBJTKNV4MMC5KMU.jpg";
    h1Element.innerText = "Fifth Floor"
    pElement.innerText = "You walk towards the door and open it. Your phone rings."
    button1Element.innerText = "ignore your phone and continue through the door"
    button2Element.innerText = "return to your office"
    button3Element.innerText = "take the phone"
    button1Element.onclick = continueDoor;
    button2Element.onclick = play;
    button3Element.onclick = takePhone;

}

//choice #:3 branches: #death 1 #5 
let continueDoor = function() {
    imgElement.src = "https://media.istockphoto.com/photos/office-door-open-picture-id147688951?k=6&m=147688951&s=170667a&w=0&h=yPg6Aia2XI_gdhYHRCKA2liJcVch7VJQJ401yy1KT1w="
    h1Element.innerText = "Hallway"
    pElement.innerText = "You grab your phone and curiously look at the number. It's an unknown number. You silence your phone and continue down the hallway. It's currently 1:00PM."
    button1Element.innerText = "Take the elevator down. You're too lazy to walk."
    button2Element.innerText = "Take the stairs down. You're feeling generous today."
    button3Element.innerText = "(o u o)"
    button1Element.onclick = deathElevator;
    button2Element.onclick = stairs;
}

//choice #:4 branches: #13 #15 #2
let sitWorkspace = function() {
    h1Element.innerText = "Workspace"
    pElement.innerText = "You take a seat in your comfy IKEA chair you purchased recently. You also begin to think about how long you've been working in this same building... suddenly, your business partner, a.k.a. your best friend Bruce, comes walking to your workspace. "
    button1Element.innerText = "speak to Bruce"
    button2Element.innerText = "wait for Bruce to speak"
    button3Element.innerText = "walk to the door"
    button1Element.onclick = speakBruce;
    button2Element.onclick = waitBruce;
    button3Element.onclick = openDoor;
}

//death #:1
let deathElevator = function() {
    h1Element.innerText = "You Died"
    pElement.innerText = "Cause of Death: Oh no! You walk into the elevator. Suddenly you hear a rumble beneath your feet. You don't think much about it. Some workers quickly exit on the next floor. Seconds later, a huge force pushes you and two others to the ground. The elevator snaps and tumbles down. You die from the fall of the elevator."
    button1Element.innerText = "(o u o)"
    button2Element.innerText = "try again"
    button3Element.innerText = "(o u o)"
    imgElement.src = "https://i.guim.co.uk/img/media/11cbf448606a7ebca2e5fbc55bb7598ce8fbef22/0_231_6000_3600/master/6000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e04b36a63e6faca9e50dae620671918a"
    button2Element.onclick = play;
}

//choice #:5 branches: #6 #11
let stairs = function() {
    h1Element.innerText = "Stairs"
    pElement.innerText = "You casually walk down the stairs, thinking about what to have for lunch. Suddenly, the floor begins shaking, and you thank yourself for not having to take the elevator. You crouch on the ground as the seconds pass by... 1... 2... 3... then the shaking stops. You wait a couple extra seconds to make sure the earthquake has stopped."
    button1Element.innerText = "wait longer"
    button2Element.innerText = "go down to check what's going on"
    button1Element.onclick = waitLonger
    button2Element.onclick = checkFifth;
}

//choice #:6 branches: #7
let waitLonger = function() {
    h1Element.innerText = "Stairs"
    pElement.innerText = "A crash comes from the opposite corrider. You carefully look ahead of you. A group of employees runs towards your direction. 'thank goodness you are fine!' someone you've never spoken to speaks, 'we work on the seventh floor, the windows have shattered, and probably more as you go up, but none of us have seen anyone come down the stairs. Let's get out of the building quickly!' You stand up assured, as another employee quickly warns you, 'don't try looking at the elevator.'"
    button1Element.innerText = "(o u o)"
    button2Element.innerText = "continue"
    button3Element.innerText = "(o u o)"
    button2Element.onclick = waitLongerContinued
}

//choice #:7 branches: # #
let waitLongerContinued = function() {
    alert("You've entered [Fourth Floor]")
    h1Element.innerText = "[Fourth Floor]"
    imgElement.src = "https://images.fineartamerica.com/images-medium-large/hallway-of-an-office-building-will-deni-mcintyre.jpg"
    pElement.innerText = "'I don't understand, we were never warned' you ask while running through narrow halls. 'I-I don't know. We recieved a call from an unknown number warning us of a possible earthquake. Of course none of us took it seriously. We were just on our way to lunch.' a woman in a white dress and short brown hair says. Someone ahead of your group comes running the opposite direction. 'The stairs have been blocked! The walls and shelves collapsed!'. The current time is August 12, 2020 1:13PM"
    button1Element.innerText = "propose an idea"
    button2Element.innerText = "let someone else propose an idea"
    button3Element.innerText = "(o u o)"
}

//choice #:8 branches: #9 #
let takePhone = function() {
    alert("SYSTEM WARNING: INCOMING EARTHQUAKE. PLEASE EVACUATE IMMEDIATELY OUTDOORS. DO NOT STAND BY BUILDINGS. DO NOT STAND BY BREAKABLE STRUCTURES. THIS IS NOT A DRILL.")
    h1Element.innerText = "Phone Warning"
    pElement.innerText = "You take your phone and answer the call. Immediately, you regret holding it up to your ear as a large voice blasts (not on speaker mode) and the phone buzzes. 'SYSTEM WARNING: INCOMING EARTHQUAKE. PLEASE EVACUATE IMMEDIATELY OUTDOORS. DO NOT STAND BY BUILDINGS. DO NOT STAND BY BREAKABLE STRUCTURES. THIS IS NOT A DRILL.' You know earthquake warnings are typically alerted immediately, not by phone call."
    button1Element.innerText = "take the message seriously, evacuate building"
    button2Element.innerText = "ignore the message"
    button3Element.innerText = "(o u o)"
    button1Element.onclick = evacuateFifth;

}

//choice #:9 branches: #10 #Death 1
    let evacuateFifth = function() {
    h1Element.innerText = "Evacuation"
    pElement.innerText = "You decide to take the message seriously and walk out the door. In order to get to the fourth floor, you must take the elevator or stairs."
    button1Element.innerText = "take the elevator"
    button2Element.innerText = "take the stairs"
    button3Element.innerText = "(o u o)"
    button1Element.onclick = hurriedStairs;
    button2Element.onclick = deathElevator;
}

//choice #:10 branches #6 #11
let hurriedStairs = function() {
    h1Element.innerText = "Stairs"
    pElement.innerText = "You hurriedly walk down the stairs, thinking about what to have for lunch. Suddenly, the floor begins shaking, and you thank yourself for not having to take the elevator. You crouch on the ground as the seconds pass by... 1... 2... 3... then the shaking stops. You wait a couple extra seconds to make sure the earthquake has stopped."
    button1Element.innerText = "wait longer"
    button2Element.innerText = "go down to check what's going on"
    button1Element.onclick = waitLonger;
    button2Element.onclick = checkFifth;
}

//choice #:11 branches #12 #Death 2
let checkFifth = function() {
    alert("You've entered [Fourth Floor]")
    h1Element.innerText = "Fourth Floor"
    pElement.innerText = "You walk down the stairs, unafraid of anything falling down on you. To the right is a staircase that leads to the third floor. To the left is a window. The current time is August 12, 2020 1:10PM"
    button1Element.innerText = "run to the third floor"
    button2Element.innerText = "look outside the window"
    button3Element.innerText = "(o u o)"
    button1Element.onclick = thirdFloorWoo;
    button2Element.onclick = deathWindow;
}

//choice #:12 branches # #
let thirdFloorWoo = function() {
    alert("You've entered [Third Floor]")
    h1Element.innerText = "[Third Floor]"
    pElement.innerText = "Even though you're physically uncapabible of great things, your bravery and commitment are made of steel. You swerve right, almost crashing into a wall, and speed down the stairs. The wall behind you collapses, but you keep running until you reach the third floor. Looking behind you, you realize others who want to come down won't be able to."
    button1Element.innerText = "find the exit to the second floor"
    button2Element.innerText = "attempt to clear the stairs"
}

//death #:2
let deathWindow = function() {
    h1Element.innerText = "You Died"
    pElement.innerText = "Cause of Death: Oh no! You walk to the window and stare down the city. Buildings below you have collapsed. A brick building lies in pieces. You pay too much attention staring outside that you accidentally touch the glass, which shatters. The scare causes you to misplace a step. You fall out the window and meet your death."
    button1Element.innerText = "(o u o)"
    button2Element.innerText = "try again"
    button3Element.innerText = "(o u o)"
    imgElement.src = "https://chameleonassociates.com/wp-content/uploads/2015/01/broken_window.png"
    button2Element.onclick = play;
}

//choice #:13 branches #14 #16 #21
let speakBruce = function() {
    imgElement.src = "https://cdn.i-scmp.com/sites/default/files/styles/portrait_3_4/public/d8/images/2018/10/18/01_1.jpg?itok=zr8IuPes"
    h1Element.innerText = "Bruce"
    pElement.innerText = "Don't be nervous, Bob. Bruce is your 'average' cool dude. How do you choose to greet him?"
    button1Element.innerText = "'Wassup, my friend Bruce?'"
    button2Element.innerText = "'Good morning, Bruce.'"
    button3Element.innerText = "'Bruce, why the heck are you here.'"
    button1Element.onclick = suspiciousBruceOne;
    button2Element.onclick = suspiciousBruceTwo;
    button3Element.onclick = speakBruceTwo;
}

//choice #:14 branches #18 #21 #17
let suspiciousBruceOne = function() {
    alert("SYSTEM WARNING: Bruce is suspicious of your wacky behavior.")
    h1Element.innerText = "Suspicious Bruce"
    pElement.innerText = "'Hey Bob, did you not hit your head on the wall?'"
    button1Element.innerText = "'wHAt dO YoU mEAn?'"
    button2Element.innerText = "'Dang man, I was just kidding.'"
    button3Element.innerText = "run towards the door with embarrassment"
    button1Element.onclick = confusedBruce;
    button2Element.onclick = speakBruceTwo;
    button3Element.onclick = openDoorNoob;

}

//choice #:15 branches #
let waitBruce = function() {
    h1Element.innerText = "Bruce Is Speaking"
}

//choice #:16 branches #18 #21 #17
let suspiciousBruceTwo = function() {
    alert("SYSTEM WARNING: Bruce is suspicious of your formal behavior.")
    h1Element.innerText = "Suspicious Bruce"
    pElement.innerText = "'Hey Bob, are you possessed?'"
    button1Element.innerText = "'I am certainly not possessed.'"
    button2Element.innerText = "'Dang man, I was just kidding.'"
    button3Element.innerText = "run towards the door with embarrassment."
    button1Element.onclick = confusedBruce;
    button2Element.onclick = speakBruceTwo;
    button3Element.onclick = openDoorNoob;
}
    
//choice #:17 branches: #3 #1 #8
let openDoorNoob = function() {
    alert("SYSTEM: Achievement Unlocked: Bruce thinks you are a kindergartener.")
    imgElement.src = "https://www.popsci.com/resizer/6iA2dK-qrizE_TrGloIM5mYz5Mw=/760x570/filters:focal(600x450:601x451)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/VYHDQWEYQJMUBJTKNV4MMC5KMU.jpg";
    h1Element.innerText = "Fifth Floor"
    pElement.innerText = "You walk towards the door and open it. Your phone rings."
    button1Element.innerText = "ignore your phone and continue through the door"
    button2Element.innerText = "return to your office"
    button3Element.innerText = "take the phone"
    button1Element.onclick = continueDoor;
    button2Element.onclick = play;
    button3Element.onclick = takePhone;
}

//choice #:18 branches #19 #13
let confusedBruce = function() {
    alert("SYSTEM WARNING: Bruce is confused. Continuous harrassment will result in serious consequences.")
    h1Element.innerText = "Confused Bruce"
    pElement.innerText = "'Bob, tell me this is a joke'"
    button1Element.innerText = "'bRuCEEEE. you liek piZZaaaaaaaaaa????'"
    button2Element.innerText = "reintroduce yourself"
    button3Element.innerText = "(o u o)"
    button1Element.onclick = lastChance;
    button2Element.onclick = speakBruce;
}

//choice #:19 branches #20 #13
let lastChance = function() {
    alert("SYSTEM WARNING: Bruce thinks you've been possessed. THIS IS YOUR LAST CHANCE. BACK DOWN.")
    h1Element.innerText = "Bruce Thinks You Are Possessed"
    pElement.innerText = "'Bob, are you there?'"
    button1Element.innerText = "nO im NOt"
    button2Element.innerText = "reintroduce yourself"
    button3Element.innerText = "(o u o)"
    button1Element.onclick = gameOver;
    button2Element.onclick = speakBruce;
}

//choice #:20 branches #gameover 1
let gameOver = function() {
    alert("SYSTEM: You Have Been Kicked From The Server")
    imgElement.src = "https://static01.nyt.com/images/2009/05/16/arts/lee-600.jpg?quality=75&auto=webp&disable=upscale"
    h1Element.innerText = "You Have Been Kicked From The Server"
    pElement.innerText = "Cause of Being Kicked Out: Developer: I don't understand what issue you have with Bruce Lee. Please be kind with Bruce Lee and stop harrassing him."
    button1Element.innerText = "(o u o)"
    button2Element.innerText = "try again"
    button3Element.innerText = "(o u o)"
    button2Element.onclick = play;
}

//choice #:21 branches #22
let speakBruceTwo = function() {
    h1Element.innerText = "Bruce"
    pElement.innerText = "... 'I came to ask you if you wanted to have lunch with me, it's almost one o' clock anyways.'"
    button1Element.innerText = "(o u o)"
    button2Element.innerText = "continue"
    button3Element.innerText = "(o u o)"
    button2Element.onclick = brucePhone
}

//choice #:22 branches #24 #23
let brucePhone = function() {
    imgElement.src = "https://i.ytimg.com/vi/-Yg9auJFbug/hqdefault.jpg"
    alert("SYSTEM WARNING: INCOMING EARTHQUAKE. PLEASE EVACUATE IMMEDIATELY OUTDOORS. DO NOT STAND BY BUILDINGS. DO NOT STAND BY BREAKABLE STRUCTURES. THIS IS NOT A DRILL.")
    h1Element.innerText = "Suspicious Warning"
    pElement.innerText = "Suddenly, Bruce's phone begins to ring. He picks up the phone, and instantly, a loud voice comes from the other end: 'SYSTEM WARNING: INCOMING EARTHQUAKE. PLEASE EVACUATE IMMEDIATELY OUTDOORS. DO NOT STAND BY BUILDINGS. DO NOT STAND BY BREAKABLE STRUCTURES. THIS IS NOT A DRILL.' Bruce doesn't hesitate and he immediately suggests you to follow him."
    button1Element.innerText = "follow Bruce"
    button2Element.innerText = "tell Bruce you think it's fake"
    button2Element.onclick = deathIgnoreBruce;
    button1Element.onclick = followBruce;
    
}

//choice #:23 branches #Death 3
let deathIgnoreBruce = function() {
    imgElement.src = "https://locknet.com/wp-content/uploads/2015/11/frameless-glass-door-e1447101412984.jpg"
    h1Element.innerText = "Bruce Leaves You Behind."
    pElement.innerText = "You tell Bruce the message must be fake. He shrugs 'You'll regret not following me. haha.' then runs out the door. You sit back in your IKEA chair, then change your mind and decide to follow him."
    button1Element.innerText = "(o u o)"
    button2Element.innerText = "continue"
    button3Element.innerText = "(o u o)"
    button2Element.onclick = deathIgnoreBruceFinal;
}

//death #:3
let deathIgnoreBruceFinal = function() {
    alert("SYSTEM ALERT: You can not turn back (#1930)")
    h1Element.innerText = "You Died"
    pElement.innerText = "Cause of Death: You walk towards the door, but suddenly, an invisible barrier stops you from moving forward. A voice in your head speaks 'you can not turn back'. The ground begins shaking, you look around desperately and scream for help, but suddenly everyone is gone. The walls crack, and your vision blacks out before you feel your pain. You hear the same voice speak again 'seventy-two out of one hundred remain'"
    button1Element.innerText = "(o u o)"
    button2Element.innerText = "try again"
    button3Element.innerText = "(o u o)"
    button2Element.onclick = play;
}

//choice #:24 branches #25
let followBruce = function() {
    h1Element = "Running With Bruce"
    pElement = "You exit the door with him. He turns right and runs down the office stairs. Suddenly the ground begins shaking. 'Bob! Is it 1:00PM?!?' Bruce asks. You look confused but quickly grab your phone. It's exactly one. 'Yes, it is, but why are you asking?!?' you scream. 'I knew it! Don't stop running! Follow me! I'll tell you soon!'"
    button1Element.innerText = "(o u o)"
    button2Element.innerText = "continue"
    button3Element.innerText = "(o u o)"
    button2Element.onclick = snicker;
}

//choice #:25 branches #26
let snicker = function() {
    alert("You've entered [Fourth Floor]")
    alert("SYSTEM: You've gained (1) snicker. ")
    h1Element.innerText = "You've entered [Fourth Floor]"
    pElement.innerText = "'hhh take this snickers bar.' Bruce tosses you one from his pocket. 'How did you know about the earthquake?' you ask. He ignores your question, then admits 'I've been hiding this for a while, but... I'm Bruce Lee'. 'I know.' you respond."
    button1Element.innerText = "(o u o)"
    button2Element.innerText = "continue"
    button3Element.innerText = "(o u o)"
    button2Element.onclick = speechlessBruce
}

//choice #:26 branches
let speechlessBruce = function() {}

play();

// if (key == true)


