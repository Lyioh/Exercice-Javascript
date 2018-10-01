//---------Le shop ------------------------------------
let x ="";
let shop = {
    items_to_sell : [
        {"title":"Health Potion", "physic":500, "magic":0, "minLevel":10, "available":true },
        {"title":"Mana Potion", "physic":0, "magic":500, "minLevel":10, "available":true },
        {"title":"Book of Experience", "physic":80, "magic":80, "minLevel":1, "available":true },
        {"title":"The Dragon's Dress", "physic":80, "magic":80, "minLevel":5, "available":false },
        {"title":"The Dragon's Boots", "physic":80, "magic":80, "minLevel":5, "available":true }
    ],

    displayObject : function() {
        for (i in shop.items_to_sell) {  
            console.log(shop.items_to_sell[i].title);
         }
    },

    displayAvailable : function() {
        for (i in shop.items_to_sell) {  
            if (shop.items_to_sell[i].available == true) {
                console.log(shop.items_to_sell[i].title);
            }
        }
    },

    levelMin : function() {
        for (i in shop.items_to_sell) {
            if (shop.items_to_sell[i].minLevel >= 10)
                console.log(shop.items_to_sell[i].title);
        }
    }
}

/* shop.displayObject();
shop.displayAvailable(); */
shop.levelMin();