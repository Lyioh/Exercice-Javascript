let scoreDIsplay = document.querySelector("#score")
let score = 0;
let countClick = 0;
let multiply = 1;
let costMultiply = 10;
let timer;
let buff = 6;
let buffIsOn = false;
let countDown;

setInterval(function check() {
    if (score >= costMultiply) {
        document.querySelector("#multiplicateurButton").disabled = false;
    };
}, 300)

timer = setInterval(oneSecond, 1000);



let Farm = {
    lvlFarm: 1,
    farmBuffText: document.querySelector("#multiplyText"),
    costUpgrade: document.querySelector("#infoMultiplicateur")
};

function oneSecond() {
    score += multiply;
    scoreDIsplay.innerHTML = score;
}

function buffTimer() {
    buff--;
    document.querySelector("#buffText").innerHTML = "Click x10: " + buff;
    if (buff <= 0){
        clearInterval(countDown);
        buff = 6;
        buffIsOn = false;
        timer = setInterval(oneSecond, 1000);
        document.querySelector("#buffText").innerHTML = "";
    }
}


document.querySelector("#theClicker").addEventListener("click", function clickMe(event) {
    if (buffIsOn === true) {
        score += (multiply * 10)
        scoreDIsplay.innerHTML = score;
    } 
    else { 
        score += multiply;
        scoreDIsplay.innerHTML = score;
    }
})

document.querySelector("#multiplicateurButton").addEventListener("click", function multiplyBy(event) {
    score -= costMultiply;
    scoreDIsplay.innerHTML = score;
    costMultiply *= 5;
    multiply *= 2;
    event.target.innerHTML = "Farm lvl " + (Farm.lvlFarm + 1);
    Farm.farmBuffText.innerHTML = "Click Value: " + multiply;
    Farm.costUpgrade.innerHTML = "Cost: " + costMultiply;

    if (score < costMultiply) {
        document.querySelector("#multiplicateurButton").disabled = true;
    }
})

document.querySelector("#buffTimer").addEventListener("click", function buffTime(event) {
    buffIsOn = true;
    clearInterval(timer);
    countDown = setInterval(buffTimer, 1000);  
})