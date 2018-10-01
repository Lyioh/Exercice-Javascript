let mainCharacter = {
    name : "Le Con kérant",
    level : 2,
    life : 1,

    weapon : {
        name : "LA brindille",
        damage : 200
    },

    attack : function() {
        console.log(this.name + " attaque avec l'arme " + this.weapon.name + " les dégats sont de " + ((this.weapon.damage)*(this.level)));
    }
}

mainCharacter.attack();