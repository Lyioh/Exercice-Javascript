let character = {
    name : "",
    level: "",
    life: "",

    weapon : {
        name: "",
        damage: "",
    },

    attack : function(adv) {
        console.log(this.name + " attaque " + adv.name);
        console.log("Avec l'arme " + this.weapon.name);
    },

    receiveDamage : function(adversaire) {
        let dmg = (adversaire.level) * (adversaire.weapon.damage);
        console.log("et lui inflige " + dmg + " de dégats");
        console.log(this.name + " à maintenant " + (this.life - dmg));
    }
};

let opponentCharacter = Object.create(character);
let mainCharacter = Object.create(character);

opponentCharacter.name = "Henry";
opponentCharacter.level = 50;
opponentCharacter.life = 10000;
opponentCharacter.weapon.name = "La brute";
opponentCharacter.weapon.damage = 100;


mainCharacter.name = "Shadow";
mainCharacter.level = 49;
mainCharacter.life = 8000;
mainCharacter.weapon.name = "Hurrya";
mainCharacter.weapon.damage = 90;

mainCharacter.attack(opponentCharacter);
opponentCharacter.receiveDamage(mainCharacter);
