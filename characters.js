/* 
    Purpose 
    To work with Javascript before the exam 
*/


// building JSON character sheets
const characterWiz = {
    name: "Wizard",

    describe: "Stare into the orb!",

    stats: {
        hp: 100,
        mana: 55,
        shield: 15
    },
        inventory: {
        items: [
            {name: "Staff", hitPoints: 25, manaCosts: 2.22},
            {name: "Cloak", hitPoints: 0, manaCosts: 5, HP: 5}],
        armor: [
            {name: "Iron Chest Plate", shield: 10, manaCosts: 1.5}, 
            {name: "Aura of Disruption", shield: 5.25, manaCosts: 2},
            {name:"Frog Kinship", shield: 4.25, manaCosts: 1.75}]
    }
}

const characterDrag = {
    name: "Dragon",

    describe: "The beast from the belly of the depths of gold lined walls",

    stats: {
        hp: 200,
        mana: 25,
        shield: 55
    },
        inventory: {
        items: [
        {name: "Firebreath", hitPoints: 25, mana: 10}, 
        {name: "Tail Swipe", hitPoints: 7.9, mana: 5},
        {name: "Gold Throw", hitPoints: 6.75, mana: 3.5},
        {name: "Donkey Kick", hitPoints: 2.25, mana: 3.5 }],
        armor: [
        {name: "Diamond Scales", shield: 6.25},
        {name: "Great Roar", shield: 2.5},
        {name: "Fire Defence", shield: 4.0}]
    }
}

const characterKnight = {
    name: "Knight",

    describe: "King's best man",

    stats: {
        hp: 315,
        mana: 20,
        shield: 45
    },
        inventory: {
        items: [
        {name: "Gold Staff", hitPoints: 25, mana: 10}, 
        {name: "Horse Drawn Beheadding", hitPoints: 7.9, mana: 5},
        {name: "Parishing Call", hitPoints: 6.75, mana: 3.5},
        {name: "Mace", hitPoints: 2.25, mana: 3.5 }],
        armor: [
        {name: "Diamond Scales", shield: 6.25},
        {name: "Great Roar", shield: 2.5},
        {name: "Fire Defence", shield: 4.0}]
    }
}
const characterTemplar = {
    name: "Templar",

    describe: "Chosen fighter for the round table",

    stats: {
        hp: 250,
        mana: 40,
        shield: 45
    },
        inventory: {
        items: [
        {name: "Divine Prayer", hitPoints: 25, mana: 10}, 
        {name: "Shield Bash", hitPoints: 7.9, mana: 5},
        {name: "Chant of Versys", hitPoints: 6.75, mana: 3.5},
        {name: "Charge", hitPoints: 2.25, mana: 3.5 }],
        armor: [
        {name: "Diamond Scales", shield: 6.25},
        {name: "Great Roar", shield: 2.5},
        {name: "Fire Defence", shield: 4.0}]
    }
}
const characterFountFire = {
    name: "Fountain",

    describe: "Lives in serentity til attacked",

    stats: {
        hp: 555,
        mana: 55,
        shield: 0
    },
        inventory: {
        items: [
        {name: "Water Nozzle", hitPoints: 25, mana: 10}, 
        {name: "Fire & Ice", hitPoints: 7.9, mana: 5},
        {name: "Lucky Penny", hitPoints: 6.75, mana: 3.5},
        {name: "Final Squirt", hitPoints: 2.25, mana: 3.5 }],
        armor: [
        {name: "Diamond Scales", shield: 6.25},
        {name: "Great Roar", shield: 2.5},
        {name: "Fire Defence", shield: 4.0}]
    }
}
const characterPeasant = {
    name: "Peasant",

    describe: "Able to fight hand to hand",

    stats: {
        hp: 20,
        mana: 25,
        shield: 0
    },
        inventory: {
        items: [
        {name: "Brawl", hitPoints: 25, mana: 10}, 
        {name: "Chicken Taunt", hitPoints: 7.9, mana: 5},
        {name: "Stone Throw", hitPoints: 6.75, mana: 3.5},
        {name: "Wrestle", hitPoints: 2.25, mana: 3.5 }],
        armor: [
        {name: "Diamond Scales", shield: 6.25},
        {name: "Great Roar", shield: 2.5},
        {name: "Fire Defence", shield: 4.0}]}
}

// NEED A PUBLIC JS Header const to make global!!
window.characters = [
    characterWiz,
    characterDrag,
    characterKnight,
    characterTemplar,
    characterFountFire,
    characterPeasant
];