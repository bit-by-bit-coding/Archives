let wordsatthetop = document.getElementById("location");
let picture = document.getElementById("image");
let moneymoney = document.getElementById("money");
let description = document.getElementById("description");
let choiceone = document.getElementById("choiceone");
let choicetwo = document.getElementById("choicetwo");
let choicethree = document.getElementById("choicethree");
let choicefour = document.getElementById("choicefour");
let money = 0;
moneymoney.innerText = ("Money: " + money);
let marketthingy = {
    "Sword": 100,
    "Shield": 50,
    "Knife": 50,
    "Crossbow": 150,
    "50 crossbow bolts": 50
};

let goToVillage = function() {
    wordsatthetop.innerText = "Village";
    picture.src = "https://ksr-ugc.imgix.net/assets/011/432/722/c9c50d538f206e4dfe78555306f95f2f_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1552&h=873&fit=crop&v=1463682645&auto=format&frame=1&q=92&s=2211bfc19679f09578f51f8b49c9db3d";
    description.innerText = "You have arrived at a village, a cluster of low buildings. You see a marketplace up ahead. Maybe you could get some useful stuff there.";
    choiceone.innerText = "Go to market";
    choicetwo.innerText = "Talk to villagers";
    choicethree.innerText = "Go back";
    choicefour.innerText = "Go past the village";
    choiceone.onclick = market;
    choicetwo.onclick = villager;
    choicethree.onclick = startgame;
    choicefour.onclick = nothinghere;
}

let startgame = function() {
    wordsatthetop.innerText = "Forest Clearing";
    picture.src = "https://i.ytimg.com/vi/L2PQKda8bj0/maxresdefault.jpg";
    description.innerText = "You are Fawkes, an agent for the Secret Society of Light. You are losing the war against the Dark Order. Now you are on an important mission. You have to steal an important package from Commander Shade of the Dark Order, and rendezvous with Arya at the old tower on the other side of the forest. The success of this mission could mean the difference between victory and defeat. You have made your way to a forest clearing. Behind you is the old tower. To the left is a village. To the right is the home of a fairy, who will help you if you are worthy, but kill you if you are not. In front of you is a Dark Order base. That's your target.";
    choiceone.innerText = "Go left";
    choicetwo.innerText = "Go back";
    choicethree.innerText = "Go forward";
    choicefour.innerText = "Go right";
    choiceone.onclick = goToVillage;
    choicefour.onclick = fairy;
}

let fairydeath = function() {
    alert("Dawn has made her judgement. You died.");
    death();
}

let death = function() {
    money = 100;
    startgame();
}

let fairy = function() {
    wordsatthetop.innerText = "Dawn the Fairy";
    picture.src = "https://pm1.narvii.com/6353/114397ba762415655a5a87b27220c4143d4400db_00.jpg";
    description.innerText = "Greetings, traveller. Why do you venture here?";
    choiceone.innerText = "I'm on a mission for the Secret Society of Light";
    choicetwo.innerText = "Give me your magic!"
    choicethree.innerText = "I have to steal an important package from the Dark Order";
    choicefour.innerText = "I'm just gonna go byebye";
    choiceone.onclick = fairyhelp1;
    choicetwo.onclick = fairydeath;
    choicefour.onclick = fairydeath;
}

let villager = function() {
    wordsatthetop.innerText = "Villager";
    picture.src = "https://i1.wp.com/twinfinite.net/wp-content/uploads/2019/05/screen-shot-2014-03-19-at-8-11-55-am-1501155273_lrg.jpg?fit=1000%2C563&ssl=1";
    description.innerText = "The Dark Order set up camp over by the forest. They're so annoying. They confiscated all our emeralds. Can you believe that?!?! And they're not letting anyone in and out of the village, so we have no one to trade with.";
}

let market = function() {
    wordsatthetop.innerText = "Marketplace";
    picture.src = "https://d1q5iwi2p7e6wc.cloudfront.net/wp-content/uploads/2019/10/the-village-market-2.jpg";
    description.innerText = "Welcome to the market. Our items are pretty limited, but here is what we have." + JSON.stringify(marketthingy);
    choiceone.innerText = "Buy";
    choicetwo.innerText = "Sell";
    choicethree.innerText = "Steal (bad idea)";
    choicefour.innerText = "Go back";
    choiceone.onclick = buystuff;
    choicefour.onclick = goToVillage;
}

let nothinghere = function() {
    wordsatthetop.innerText = "Dead end";
    description.innerText = "You have come to a dead end.";
    choiceone.innerText = "Go back";
    choicetwo.innerText = "Go back";
    choicethree.innerText = "Go back";
    choicefour.innerText = "Go back";
    choiceone.onclick = goToVillage;
    choicetwo.onclick = goToVillage;
    choicethree.onclick = goToVillage;
    choicefour.onclick = goToVillage;
}

let arya = function() {
    wordsatthetop.innerText = "Arya the Elf";
    picture.src = "https://cdn.hipwallpaper.com/i/36/44/26L8Yz.jpg";
}

let fairyhelp1 = function() {
    money = money + 1000;
    moneymoney.innerText = money;
}

let buystuff = function () {
    for(let marketthingyItem in marketthingy){
        let marketButton = document.createElement("button");
        document.body.appendChild(marketButton);
        marketButton.innerText = marketthingyItem + " for " + marketthingy[marketthingyItem];
    }
}

startgame();