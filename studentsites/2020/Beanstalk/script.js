let newImage=document.createElement("img");
document.body.appendChild(newImage);

let linebreak=document.createElement("br");
document.body.appendChild(linebreak);

let paragraphElement=document.createElement("p");
document.body.appendChild(paragraphElement);

let buttonElementA=document.createElement("button");
buttonElementA.innerText="Option A";
document.body.appendChild(buttonElementA);

let buttonElementB=document.createElement("button");
buttonElementB.innerText="Option B";
document.body.appendChild(buttonElementB);

let buttonElementC=document.createElement("button");
buttonElementC.innerText="Option C";
document.body.appendChild(buttonElementC);

buttonElementA.style.width="400px";
buttonElementB.style.width="400px";
buttonElementC.style.width="400px";

let play=function(){
    newImage.src="https://cdn.vox-cdn.com/thumbor/WUXNuf2ewnSe_fzdIbYg2lDUa7g=/67x0:890x549/1200x800/filters:focal(67x0:890x549)/cdn.vox-cdn.com/uploads/chorus_image/image/46967860/jackgiantslayer.0.0.jpg";
    newImage.style.width="1200px";
    paragraphElement.innerText="You bought beans the other day from the market and planted them when you got home. Little did you know that those beans sprouted overnight and grew to be a thick, green beanstalk reaching up into the clouds. You can (A) go up immediately and explore (B) gather supplies from the market for your adventure (C) tell your best friend to come with you.";
    if(Math.random()*100<50){
        buttonElementA.onclick=goUp;
    }else{
        buttonElementA.onclick=youFell;
    }
    buttonElementB.onclick=gatherSupplies;
    buttonElementC.onclick=tellFriend;
}

let goUp=function(){
    newImage.src="https://img5.goodfon.com/wallpaper/nbig/d/73/alex-ichim-mc5-concept-art-japanese-temple-art-iaponskii-khr.jpg"
    newImage.style.width="1200px";
    paragraphElement.innerText="You climbed up the beanstalk that led to a giant stone temple where you spot a lady giant sweeping the floor. You have been climbing the beanstalk for 3 nights and are in desperate need of food, water, and a place to rest. You can (A) ask the giant to help you (B) you sneak into the temple to try and steal what you need or (C) go back down the beanstalk.";
    buttonElementA.onclick=getHelp;
    buttonElementB.onclick=gotStompedOn;

    if(Math.random()*100<50){
        buttonElementC.onclick=climbDown;
    }else{
        buttonElementC.onclick=youStarved;
    }

}
let gatherSupplies=function(){
    newImage.src="https://live.staticflickr.com/3506/4076922253_250306d1d1_b.jpg";
    newImage.style.width="1200px";
    paragraphElement.innerText="You don't have enough supplies at home, so you decide to go to the marketplace, and you brought the only money your family has left. You can (A) steal the supplies you need (B) use the money to buy supplies or (C) go without supplies after all.";
    if(Math.random()*100<37){
        buttonElementA.onclick=stealSupplies;
    }else{
        buttonElementA.onclick=gotCaughtStealing;
    }

    buttonElementB.onclick=useMoney;

    if(Math.random()*100<50){
        buttonElementC.onclick=goUp;
    }else{
        buttonElementC.onclick=youFell;
    }

}
let tellFriend=function(){
    newImage.src="https://i2.wp.com/abandonedforgottendecayed.com/wp-content/uploads/2015/07/abandoned-farmhouse-5-15-54-ps-e1438223741413.jpg?fit=550%2C411&ssl=1";
    newImage.style.width="1200px";
    paragraphElement.innerText="You immediately go to tell your best friend about the beanstalk your friend doesn't know what to do, but they say whatever you do, they'll do it with you. (A) go climb the beanstalk (B) go buy supplies.";
    if(Math.random()*100<75){
        buttonElementA.onclick=climbBeanstalk;
    }else{
        buttonElementA.onclick=friendFell;
    }
    buttonElementB.onclick=buySupplies;
    buttonElementC.onclick=null;
    
}
let youFell=function(){
    newImage.src="https://i.pinimg.com/originals/b1/b4/a0/b1b4a0516034fb4a4341714ba7986280.jpg";
    newImage.style.width="1200px";
    paragraphElement.innerText="You fell off the beanstalk. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let getHelp=function(){
    newImage.src="https://vignette.wikia.nocookie.net/disney/images/e/e8/The_Giant.PNG/revision/latest?cb=20150302182739";
    newImage.style.width="1200px";
    paragraphElement.innerText="The lady giant kindly gives you a place to sleep for the night and food and water. You also notice the temple is filled with gold coming from a very poor family. Your amazed and loathe to have just one piece. You can (A) steal some gold (B) ask if you can have some and hope that she pities you for being poor (C) kill the giant and take it all for yourself.";
    buttonElementA.onclick=gotStompedOn;
    buttonElementB.onclick=findHarp;
    buttonElementC.onclick=gotStompedOn;
    
}
let gotStompedOn=function(){
    newImage.src="https://media2.giphy.com/media/7YDt9L1xHnTMMqTxb9/giphy.gif";
    newImage.style.width="1200px";
    paragraphElement.innerText="You got stomped on. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let climbDown=function(){
    newImage.src="https://www.whatutalkingboutwillis.com/wp-content/uploads/2015/03/IntoTheWoodsbeanstalk.jpg";
    newImage.style.width="1200px";
    paragraphElement.innerText="You decide to tell your mom about the beanstalk, she's furious and tells you to cut it down. You can (A) cut down the beanstalk (B) so mad and refuse to do it, so you throw the ax.";
    buttonElementA.onclick=cutBeanstalk;
    buttonElementB.onclick=throwAxe;
    buttonElementC.onclick=null;
    
}
let stealSupplies=function(){
    newImage.src="https://live.staticflickr.com/3506/4076922253_250306d1d1_b.jpg";
    newImage.style.width="1200px";
    newImage.src="https://cdn.vox-cdn.com/thumbor/WUXNuf2ewnSe_fzdIbYg2lDUa7g=/67x0:890x549/1200x800/filters:focal(67x0:890x549)/cdn.vox-cdn.com/uploads/chorus_image/image/46967860/jackgiantslayer.0.0.jpg";
    newImage.style.width="1200px";
    paragraphElement.innerText="You only managed to steal a days worth of supplies. Click any button to climb the beanstalk.";
    buttonElementA.onclick=goUp;
    buttonElementB.onclick=goUp;
    buttonElementC.onclick=goUp;
}
let useMoney=function(){
    newImage.src="https://live.staticflickr.com/3506/4076922253_250306d1d1_b.jpg";
    newImage.style.width="1200px";
    paragraphElement.innerText="You got very few supplies with the amount of money you had. (A) climb the beanstalk (B) go home and tell your mom.";
    buttonElementA.onclick=goUp;
    buttonElementB.onclick=climbDown;
    buttonElementC.onclick=null;
}
let gotCaughtStealing=function(){
    newImage.src="https://upload.wikimedia.org/wikipedia/en/f/f3/Jane%27s_Addiction_Been_Caught_Stealing.jpg";
    newImage.style.width="1200px";
    paragraphElement.innerText="You got caught stealing and had a public execution. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let youStarved=function(){
    newImage.src="https://i.pinimg.com/1200x/57/f0/65/57f065e7ba03cb7a131f29d19e214aa2.jpg";
    newImage.style.width="1200px";
    paragraphElement.innerText="You were to weak and so you starved. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let cutBeanstalk=function(){
    newImage.src="https://img.haikudeck.com/mi/68FAFEF3-BEA1-4397-AF08-521DB901D3B3.jpg";
    newImage.style.width="1200px";
    paragraphElement.innerText="You cut the beanstalk and it fell on your mother immediately killing her and it destroyed your house you eventually die because you weren't able to get any food. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let throwAxe=function(){
    paragraphElement.innerText="You didn't mean to but the axe hit your mother and cut her leg off she eventually bled to death you eventually die because you weren't able to get any food. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let findHarp=function(){
    newImage.src="https://vignette.wikia.nocookie.net/disney/images/e/e8/The_Giant.PNG/revision/latest?cb=20150302182739";
    newImage.style.width="1200px";
    paragraphElement.innerText="When you asked for gold, she laughed at you then said that if you find her the magical harp, then she will let you have tons of gold, but if you don't, then you will become her servant for life. (A) run for it (B) try to kill the giant (C), agree to find the magical harp.";
    buttonElementA.onclick=gotStompedOn;
    buttonElementB.onclick=gotStompedOn;
    buttonElementC.onclick=getHarp;
}
let getHarp=function(){
    newImage.src="https://cache.desktopnexus.com/thumbseg/1238/1238471-bigthumbnail.jpg"
    newImage.style.width="1200px";
    paragraphElement.innerText="You agreed to get the magical harp. She gives you a map, but you don't know how to read when you get to the woods you don't know where to go. You can (A) go straight ahead to the middle of the woods (B) go left (C) go right.";
    buttonElementA.onclick=straigthAhead;
    buttonElementB.onclick=goLeft;
    buttonElementC.onclick=goRight;
}
let goLeft=function(){
    paragraphElement.innerText="You went left and there was a thick line of trees that you couldn't see through when you pushed through the trees you fell off the cliff. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let goRight=function(){
    paragraphElement.innerText="You went rigth and there got stuck in a bear trap you eventually die from starvation . Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let climbBeanstalk=function(){
    newImage.src="https://img5.goodfon.com/wallpaper/nbig/d/73/alex-ichim-mc5-concept-art-japanese-temple-art-iaponskii-khr.jpg"
    newImage.style.width="1200px";
    paragraphElement.innerText="You decide to climb the beanstalk together, and it leads to a massive stone temple with a lady giant sweeping the floor you can (A) ask the giant for a place to stay the night (B) sleep outside and eat the food you bought the other day (C) you are very curious where you are and ask the giant for some information.";
    buttonElementA.onclick=askGiant;
    buttonElementB.onclick=sleepOutside;
    buttonElementC.onclick=askForSome;
}
let friendFell=function(){
    newImage.src="https://cdn.vox-cdn.com/thumbor/WUXNuf2ewnSe_fzdIbYg2lDUa7g=/67x0:890x549/1200x800/filters:focal(67x0:890x549)/cdn.vox-cdn.com/uploads/chorus_image/image/46967860/jackgiantslayer.0.0.jpg";
    newImage.style.width="1200px";
    paragraphElement.innerText="You're friend fell off the beanstalk. (A) go back down (B) keep going.";
    buttonElementA.onclick=climbDown;
    buttonElementB.onclick=goUp;
    buttonElementC.onclick=null;
}
let buySupplies=function(){
    newImage.src="https://cdn.vox-cdn.com/thumbor/WUXNuf2ewnSe_fzdIbYg2lDUa7g=/67x0:890x549/1200x800/filters:focal(67x0:890x549)/cdn.vox-cdn.com/uploads/chorus_image/image/46967860/jackgiantslayer.0.0.jpg";
    newImage.style.width="1200px";
    paragraphElement.innerText="Click any button to climb the beanstalk.";
    buttonElementA.onclick=climbBeanstalk;
    buttonElementB.onclick=climbBeanstalk;
    buttonElementC.onclick=climbBeanstalk;
}
let sleepOutside=function(){
    newImage.src="https://www.wallpaperup.com/uploads/wallpapers/2014/05/20/354918/2306058d1f64116556a97ab88358e938-700.jpg";
    newImage.style.width="1200px";
    paragraphElement.innerText="You stayed outside as long as you could but you eventually run out of food. (A) ask the giant for help (B) climb back down.";
    buttonElementA.onclick=askGiant;
    buttonElementB.onclick=climbDown;
    buttonElementC.onclick=null;
}
let askGiant=function(){
    newImage.src="https://vignette.wikia.nocookie.net/disney/images/e/e8/The_Giant.PNG/revision/latest?cb=20150302182739";
    newImage.style.width="1200px";
    paragraphElement.innerText="You ask the giant for a place to sleep and food, and she kindly obliges the temple is filled with gold. You can (A) ask if you can have some (B) steal it (C) Stay with the giant for the rest of your life.";
    buttonElementA.onclick=askForSome;
    buttonElementB.onclick=stealIt;
    buttonElementC.onclick=stayWithGiant;
}
let stayWithGiant=function(){
    paragraphElement.innerText="The giant says yes, and you live comfortably with the giant and your best friend. You all grow old together but were never allowed to leave, and you dearly miss your friends and family and often have nothing to do. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let stealIt=function(){
    newImage.src="https://media2.giphy.com/media/7YDt9L1xHnTMMqTxb9/giphy.gif";
    newImage.style.width="1200px";
    paragraphElement.innerText="Your best friend successfully steals some of the gold while the giant is sleeping and quickly climb down the beanstalk when the giant wakes up she is furious and makes her way down the beanstalk. She destroys the whole town looking for the two of you, and you both get stomped on. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let askForSome=function(){
    newImage.src="https://vignette.wikia.nocookie.net/disney/images/e/e8/The_Giant.PNG/revision/latest?cb=20150302182739";
    newImage.style.width="1200px";
    paragraphElement.innerText="You ask the giant, and she says yes, but with a twist, she tells you must bring her the magical harp found in the woods. (A) agree to her terms (B) say no and run for it.";
    buttonElementA.onclick=sayYes;
    buttonElementB.onclick=stompedOn;
    buttonElementC.onclick=null;
}
let stompedOn=function(){
    newImage.src="https://media2.giphy.com/media/7YDt9L1xHnTMMqTxb9/giphy.gif";
    newImage.style.width="1200px";
    paragraphElement.innerText="You and your friend said no, but the giant said that since you know about all the gold, she would have to kill you both. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let sayYes=function(){
    newImage.src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c5f4c987-7b83-45e4-8dde-8eeb51a50e70/dcrrl90-74874d51-8435-4aa8-949e-152796c5e30f.jpg/v1/fill/w_1132,h_706,q_70,strp/background_concept___golden_tree_by_mrakonni_dcrrl90-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03OTkiLCJwYXRoIjoiXC9mXC9jNWY0Yzk4Ny03YjgzLTQ1ZTQtOGRkZS04ZWViNTFhNTBlNzBcL2RjcnJsOTAtNzQ4NzRkNTEtODQzNS00YWE4LTk0OWUtMTUyNzk2YzVlMzBmLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0._Gp3AJRPEhbmkQWqVzfCwSoBdoNHF7sok3CPGeq2J-c";
    newImage.style.width="1200px";
    paragraphElement.innerText="Once you said yes the giant gave you a map to the woods where the harp is she said that there would be a golden tree in the middle of the woods you must climb the 10,000-foot tall tree, and at the top, there will be a door that you must go through. You aren't able to read so your friend has to read the map, and you each help each other climb the tree. When you climb the tree, you and your best friend find yourselves in front of three doors. One door has a fork on it. Another has a snowflake, and the last one has a picture of a cow. You can go through (A) the one with the fork (B), the one with the snowflake, or (C) the cow.";
    buttonElementA.onclick=houseOfForyx;
    buttonElementB.onclick=youFreeze;
    buttonElementC.onclick=theCowEater;
}
let theCowEater=function(){
    newImage.src="https://s3-us-west-2.amazonaws.com/s3-wagtail.biolgicaldiversity.org/images/Alexander_Archipelago_wolf_CRobin_Silver-scr.original.jpg";
    newImage.style.width="1200px";
    paragraphElement.innerText="The door you chose was home to the cow eater (a wolf). You were eaten in a matter of seconds. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let youFreeze=function(){
    newImage.src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F6f8e8ef8-49cc-11ea-a5b7-24df8ee7a872.jpg?crop=5632%2C3168%2C0%2C293&resize=1180";
    newImage.style.width="1200px";
    paragraphElement.innerText="The door you chose was a magical way to get to the land of the long night where it was often freezing when you closed the door you were locked in and died due to frostbite. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let houseOfForyx=function(){
    paragraphElement.innerText="The door you chose led to the house of foryx where the harp is located, but when you knock on the door, a little man answers and says that you must answer these riddles correctly or else he won't let you in. He gave you two riddles to solve here is the first one: Stuck to the ground yet easily flies, Only one color but not just one size. (A) water (B) shadow (C) humans";
    buttonElementA.onclick=water;
    buttonElementB.onclick=shadow;
    buttonElementC.onclick=humans;
}
let water=function(){
    paragraphElement.innerText="You answered the first riddle wrong. You have to go back to the lady giant, and she kills you. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let shadow=function(){
    paragraphElement.innerText="You answered the first correctly, so he tells you the second riddle: I can sizzle like bacon I am made with an egg, Lack a good leg I peel layers like onions. (A) snake (B) eggs (C) cake";
    buttonElementA.onclick=snake;
    buttonElementB.onclick=eggs;
    buttonElementC.onclick=cake;
}
let humans=function(){
    paragraphElement.innerText="You answered the first riddle wrong. You have to go back to the lady giant, and she kills you. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let eggs=function(){
    paragraphElement.innerText="You answered the second riddle wrong. You have to go back to the lady giant, and she kills you. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let cake=function(){
    paragraphElement.innerText="You answered the second riddle wrong. You have to go back to the lady giant, and she kills you. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}
let snake=function(){
    newImage.src="https://stockshop.angiemakes.com/wp-content/uploads/2016/09/Congratulations-Brush-Calligraphy-Text-831.jpg";
    newImage.style.width="1200px";
    paragraphElement.innerText="You answered the second riddle correctly as well. He lets you in and gives you the harp you go back to the lady giant, and she lets you have all the gold you want, and she invites you back anytime. You and your best friend live happily ever after. Always stick with your best friend. Click any button to play again.";
    buttonElementA.onclick=play;
    buttonElementB.onclick=play;
    buttonElementC.onclick=play;
}













play();