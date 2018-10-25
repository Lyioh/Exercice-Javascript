let scoreDIsplay = document.querySelector("#score")
let score = 0;
let countClick = 0;
let multiply = 1;
let costMultiply = 10;


let Farm = {
    lvlFarm: 1,
    farmBuffText: document.querySelector("#multiplyText"),
    costUpgrade: document.querySelector("#infoMultiplicateur")
};

function oneSecond() {
    score += multiply;
    scoreDIsplay.innerHTML = score;
    if (score >= costMultiply) {
        document.querySelector("#multiplicateurButton").disabled = false;
    }

}

setInterval(oneSecond, 2000);

document.querySelector("#theClicker").addEventListener("click", function clickMe(event) {
    score += multiply;
    scoreDIsplay.innerHTML = score;
})

document.querySelector("#multiplicateurButton").addEventListener("click", function multiplyBy(event) {
    
    costMultiply *= 20;
    multiply *= 2;
    event.target.innerHTML = "Farm lvl " + (Farm.lvlFarm + 1);
    Farm.farmBuffText.innerHTML = multiply + " click perdu";
    Farm.costUpgrade.innerHTML = "Cost: " + costMultiply;

    if (score < costMultiply) {
        document.querySelector("#multiplicateurButton").disabled = true;
    }
})