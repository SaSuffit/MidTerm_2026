function attack(attacker, defender, weapon){
    let n = null;

    let attackerIn = attacker.stats.shield.map() + attacker.inventory.armor.map()
    let defenderOut = defender.stats.shield.map() + defender.inventory.armor.map()
      
    armorTotal(player1)
    armorTotal(player2)

    if(attackerIn >= defenderOut){
        let a = attackerIn - defenderOut
    return
    }
    
}

function armorTotal(player){
    let total = player.stats.shield;

    player.inventory.armor.forEach(armor => {
        total += armor.shield;
    });
    return total;
}

function playerHitPoint(player){
    let total = 0;

    player.inventory.items.forEach(item => {
        total += item.hitPoints;
    });
}

function whys(player){
        console.log(this.inventory.armor.length)
        return this.inventory.armor.length
}

function tellArmor(){
        console.log(this.inventory.armor)
        return this.inventory.armor
    }
