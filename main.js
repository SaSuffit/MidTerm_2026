// WORKS!!!
// const characterWizHeading = document.getElementById("wizardName")
// characterWizHeading.textContent = characterWiz.name

// const characterWizDesc = document.getElementById("describeWiz")
// characterWizDesc.textContent = characterWiz.describe

// const WizInvent = characterWiz.inventory 
// const DragInvent = characterDrag.inventory

// const allItemsList = JSON.stringify(...WizInvent, ...DragInvent)
// console.log(allItemsList)

// countItems(characterWiz)

// Messing with Character Selection
let player1 = null
let player2 = null
let fightActive = false


// Trying:
const cards = document.querySelectorAll(".character");

cards.forEach((card, index) => {
    const character = characters[index];

    card.querySelector(".characterName").textContent = character.name;
    card.querySelector(".inv").textContent = character.inventory.items.map(item => item.name).join(", ");
    card.querySelector(".describeChar").innerHTML = `${character.describe}<br>|<strong> HP: ${character.stats.hp} <br>|<em> MANA: </em>${character.stats.mana}</strong>`;
    
    // Make buttons events in JS to select Characters
    const btn = card.querySelector(".selectedButton");
    btn.addEventListener("click", ()=>{
        // no duplicate character selections:
        if(player1 === character && player2 === character){
            console.log("BOTH SELECTED ALREADY!")
            return;
        }

        if (!player1){
            player1 = character;
            console.log("Player 1 Selected: ", player1.name);
            document.getElementById("fighters").textContent = `${player1.name} vs ???`
            return
        }
        if(!player2){
            player2 = character;
            console.log("Player 2 selected: ", player2.name)
            document.getElementById("fighters").textContent = `${player1.name} vs ${player2.name}`
            return
        }
        else{
            console.log("Both players selected!");
        }
                // Check active fight
        if(!fightActive){
            console.log("Start the fight first!");
            return
        }
    });    
});

// fight must be checked outside of loop!! 
const startFight = document.getElementById("fight");
    startFight.addEventListener("click", ()=>{
        fightActive = true
        // attack(player1, player2)
        console.log("FIGHT ONGOING!")
});

const endFight = document.getElementById("clear");
    endFight.addEventListener("click", ()=>{
        fightActive = false;
        player1 = null;
        player2 = null;
        console.log("FIGHT ENDED!")
        console.log("Players returned to NULL")
        return
});

