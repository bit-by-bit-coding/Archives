let pElement=document.getElementById("fred");
pElement.innerText="After a long journey through the mountains your paws and whiskers are numb and frozen.  You stumble through the snow, blinded by the flurries when just through the white air you notice a small but destinguished shape, is it a goat?  Do you, (A) Investigate the odd shape, (B) Hide in the surrounding rocks, (C) Lay down to rest";


let imgElement = document.getElementById("taco");
imgElement.src="https://s.abcnews.com/images/US/blizzard-mountains-gty-jt-190927_hpMain_12x5_992.jpg";
imgElement.style.width="600";



let buttonElementA = document.getElementById("buttonA");
let buttonElementB = document.getElementById("buttonB");
let buttonElementC = document.getElementById("buttonC");

  

let startGame = function(){
    pElement.innerText = "After a long journey through the mountains your paws and whiskers are numb and frozen.  You stumble through the snow, blinded by the flurries when just through the white air you notice a small but destinguished shape, is it a goat?  Do you, (A) Investigate the odd shape, (B) Hide in the surrounding rocks, (C) Lay down to rest";
    buttonElementA.innerText = "Option A";
    buttonElementB.innerText = "Option B";
    buttonElementC.innerText = "Option C";
    buttonElementA.onclick = investigateShape;
    buttonElementB.onclick = hideInSurroundingRocks;
    buttonElementC.onclick = laydownAndRest;
}



let investigateShape = function(){
    imgElement.src="https://www.liherald.com/uploads/original/1343922640_c0d6.jpg";
    
    pElement.innerText="You stumble closer to the shape, but as you draw nearer it jumps.  It lands right in front of you, sinking into the snow a bit.  As you rub the snow from yuor eyes it speaks, Hello there travaler, you seem a bit lost, I am the great Derrrrrpy Goooaaaaat!  The overseer of this grand pass that you have stumbled into.  Come, you seem tired and worn, I shall bring you to my pride.  Do you (A) Follow the Great Derpy Goat, (B) Ignore this wierdo and continue on, (C) Ignore this rando and go to sleep";

    buttonElementA.onclick=followDerpyGoat;
    buttonElementB.onclick=ignoreWierdo;
    buttonElementC.onclick=laydownAndRest;
   
}

let followDerpyGoat=function(){
    imgElement.src="https://lh3.googleusercontent.com/-_J13jz3h8Zo/Vy0KzecJlTI/AAAAAAABdno/Lz9lcy-XEd0/s640/blogger-image--286678240.jpg";

    pElement.innerText="Following Derpy Goat through the snow flurries, you fight the urge to fall asleep, as you move on, the earth beneath you seems to get dryer and dryer.  Looking up, you notice Derpy has stopped, Here we are at the gate of our bearded elders!  Looking up even more you realize on either side of the gate there are very large mountain goat statues.  Do you, (A) Continue through the gates, (B) Bring Derpy in as a hostage just in case";

    buttonElementA.onclick=continueThroughGates;
    buttonElementB.onclick=bringDerpyIn;
    buttonElementC.style.display="none";
}

let bringDerpyIn=function(){
    imgElement.src="";

    pElement.innerText="Quickly you pounce on the Derpy goat to drag her in as a hostage.  As you walk through the gates, you notice a few lions and lots of goats staring at you.  All of a sudden a very large lioness pounces on you, digging her claws deeper and deeper.  She's supprisingly light for her size but holds on tight and you can't shake her.  (You were torn to death by one of Derpys close followers)";

    buttonAElement.onclick=startGame;
    buttonBElement.onclick=startGame;
    buttonCElement.onclick=startGame;
}

let continueThroughGates=function(){
    imgElement.src="https://i.imgur.com/DxjNTf6.png";
    
    pElement.innerText="Walking between the great statues, your fur warms and drys as you emerge into a sunny clearing full of...  Goats and lions?  It's odd to see lions in the snowy mountains but they seem to be thriving well.  In the center of the clearing there lays a grand purple lion with splotches of white covering most of its body and a large fluffy mane.  They greet you.  Well hello there stranger, I see youve encountered with my friend Derpy, hopefully she didnt give you too much trouble.  Anyways you are welcome here untill night fall, but please make yourself comfortable.  (press any button to continue)";

    buttonElementA.onclick=wakeUpInNight;
    buttonElementB.onclick=wakeUpInNight;
    buttonElementC.onclick=wakeUpInNight;
}

let wakeUpInNight=function(){
    imgElement.src="";

    pElement.innerText="GrAAAARrar!  You open your eyes and it's dark.  Appareantly you'd dozed off and slept a little later than you were supposed to, only to be awoken by a disturbing sound.  It sounds like someone is being torn apart.  You shiver at the thought.  Then you remember what the purple lion had said about you being gone by night fall, what had he meant and did the noise have anything to do with it?  Your hesitant about what to do next.  Do you, (A) Investigate the noise, (B) Ignore it and continue sleeping, (C) Flee";
}

let ignoreWierdo=function(){
    imgElement.src="https://i.pinimg.com/236x/fc/63/10/fc6310756e7c8cd25520560ee7c9a12f--raising-goats-world-domination.jpg";
    
    pElement.innerText="Deciding to ignore this stranger you continue walking through the pass, when behind you hear, Hey!  Don't ignore me for I'm the Great Derpy Goat, BLeEeEeEeEH.  All of a sudden goats rush from all sides picking you up in a wave, knocking you unconcious.  When you wake up next your in a sunny clearing with goats all around.  Do you, (A) Get up and look around, (B) Ask where you are, (C) Jump up";

    buttonElementA.onclick=getUpLookAround;
    buttonElementB.onclick=getUpLookAround;
    buttonElementC.onclick=getUpLookAround;
}

let getUpLookAround=function(){
    imgElement.src="";

    pElement.innerText="Well hello there stranger, I see youve encountered with my friend Derpy, hopefully she didnt give you too much trouble.  Anyways you are welcome here untill night fall, but please make yourself comfortable.  (press any button to continue)";

    buttonElementA.onclick=wakeUpInNight;
    buttonElementB.onclick=wakeUpInNight;
    buttonElementC.onclick=wakeUpInNight;
}



let hideInSurroundingRocks=function(){
    imgElement.src="https://i.pinimg.com/originals/f9/1f/6b/f91f6ba005b1f2e3d54dcd0887f6804e.jpg";
    imgElement.style.height="650";
    
    pElement.innerText="Frightened by the odd shape in the snow you leap behind some nearby rocks for cover.  All of a sudden a head pops out of the other side of the rock!  It's the head of a seemingly young goat!?  Oh hey there, I didnt mean to scare ye like that, I'm Derpy Goat, dont ask aboot me name please, my mother gave it to me.  Anyways you seem a bit cold, come with me to my pride.  Do you (A) Follow Derpy Goat, (B) Close your eyes and hope its all a bad dream, (C) Ask aboot Derpy's name";

    buttonElementA.onclick=followDerpyGoat;
    buttonElementB.onclick=closeEyes;
    buttonElementC.onclick=askAbootName;
}

let closeEyes=function(){
    pElement.innerText="You close your eyes hoping it's all a bad dream, how'd you even get to the mountains in the first place?   But quickly they start getting heavy and you start to doze off.  Something hard nudges you and you open your eyes.  Looking up you see the unmistacable face of a goat.  I don't see why your so scared of me, are you afraid of goats, HUUUUh!  Do you have Capraphobia!  Wow I had no idea i'm so sorry, but I wont let you die outhere though so I guess you can just follow me from way behind, come'n.  (Press any button to continue)";

    buttonElementA.onclick=followDerpyGoat;
    buttonElementB.onclick=followDerpyGoat;
    buttonElementC.onclick=followDerpyGoat;

}

let laydownAndRest=function(){
    imgElement.src="https://d2zp5xs5cp8zlg.cloudfront.net/image-10028-800.jpg"
    
    pElement.innerText="You lay down and close your eyes.  The next thing you know your awake again, but no longer in the mountains instead your in a bright seemingly endless zone.  A wave of relief washes over you as your no longer about to freeze to death...  Wait a minute!  (Youve died press any button to restart) <3"

    buttonAElement.onclick=startGame;
    buttonBElement.onclick=startGame;
    buttonCElement.onclick=startGame;
}

startGame();