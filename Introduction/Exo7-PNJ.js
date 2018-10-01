//Le PNJ ---------------------------------------

let character = {
    name : "Luffy",
    age : 24,
    items_to_give : ["candy", "sword", "shield"],
    giveItem : function() {
      return this.items_to_give[(Math.floor(Math.random() * (this.items_to_give.length)) + 0)];
    }
};

for (let pointer in character) {
    console.log(character[pointer]);
}

console.log("I give you a " + character.giveItem());


