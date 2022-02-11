const prompt = require('prompt-sync')();
const username = prompt('What is your name?');
console.log(`Your name is ${username}`);
let playerHealth = 100;
let playerMoney = 0;
let playerItems = [];
let friends = [];
let enemies = [];
console.log("You are a food delivery driver just trying to make it in this cold cold world.")
console.log("You got your first order! KFC Beyond wings.")
beyondKFCEncounter();
console.log("You're done for the day.")
console.log("Now YOU are hungry. What do you do?")
tacoBellDriveThru();

function tacoBellDriveThru(){
    console.log("You're hitting up T-Bell for some cheap eats")
    if(playerMoney === 0){
        console.log("Too bad you don't have ANY money")
        playerHealth -= 10;
    }else{
        const menuOrder = prompt("Do you have a [B]urrito for 5 dollars or [C]hips for 1 dollar?")
        if(menuOrder === "B"){
            playerMoney -= 5;
            playerHealth += 10;
            console.log("Delicious!")
        }else if(menuOrder === "C"){
            playerMoney -= 1;
            playerHealth += 5;
            console("A decent snack")
        }
    }
}
function displayStatus(){
    console.log(`You have ${playerMoney} dollars left`)
    for(let i = 0; i < playerItems.length; i++){
        console.log(`You have a ${playerItems[i]}`)
    }
    for(let i = 0; i < friends.length; i++){
        console.log(`${friends[i]} is your trusted ally`)
    }
    for(let i = 0; i < enemies.length; i++){
        console.log(`${enemies[i]} is your hated enemy`)
    }
}
function beyondKFCEncounter(){
    const KFCDecision = prompt('Deliver the Wings or eat them yourself? Enter [D] to deliver, [E] to eat');
    if(KFCDecision === "D"){
        console.log("Great! The customer is super happy.");
        console.log("They gave you a tip and shared some with you")
        console.log("You made a new friend, Morty!")
        playerMoney += 10;
        friends.push("Morty");
        playerItems.push("Two delicious nuggets")
    }else if(KFCDecision === "E"){
        console.log("You scoundrel! How dare you!")
        console.log("Morty is now your sworn enemy")
        enemies.push("Morty")
        playerItems.push("A full order of beyond KFC")
    }else{
        console.log("You just stood there, gibbering like a fool, making no sense.")
    }
    displayStatus()
}