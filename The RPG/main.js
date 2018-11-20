const startButton = document.querySelector("#start");
let gameIsOn = false;

//////////////////////// Objets  ////////////////////////
let Input = {
    player: ["A","Z","E","Q","S","D"],
    enemy: ["I","O","P","K","L","M"],
    playerLetter: 0,
    enemyLetter: 0,
    playerError: false,
    enemyError: false
};

////////////////////////// Draw & Victory ///////////////////
function draw() {
    document.querySelector("#draw").style.visibility = "visible";
    document.querySelector("#draw").classList.add("zoomIn");
}

function removeDrawStatus() {
    document.querySelector("#draw").style.visibility = "hidden";
    document.querySelector("#draw").classList.remove("zoomIn");
}

function victory() {
    document.querySelector("#victory").style.visibility = "visible";
    document.querySelector("#victory").classList.add("zoomIn");
}

function removeVictoryStatus() {
    document.querySelector("#victory").style.visibility = "hidden";
    document.querySelector("#victory").classList.remove("zoomIn");
}
//////////////////// Randomize the Input and reset ///////////////////////
function showInput() {
    Input.playerLetter = Math.floor(Math.random() * 5);
    Input.enemyLetter = Math.floor(Math.random() * 5)
    document.querySelector("#playerDisplay > p").innerHTML = Input.player[Input.playerLetter];
    document.querySelector("#enemyDisplay > p").innerHTML = Input.enemy[Input.enemyLetter];
}

function resetInput() {
    document.querySelector("#playerDisplay > p").innerHTML = "";
    document.querySelector("#enemyDisplay > p").innerHTML = "";
    document.querySelector("#enemyDisplay").style.backgroundColor = "white";
    document.querySelector("#playerDisplay").style.backgroundColor = "white";
    Input.playerError = false;
    Input.enemyError = false;
}


/////////////////// Compare Keys////////////////////////
function compareKey(theKeyPressed) {
    // Si la touche correspond a celle aficher
    if (theKeyPressed === Input.player[Input.playerLetter] || theKeyPressed === Input.enemy[Input.enemyLetter]) {
        if (theKeyPressed === Input.player[Input.playerLetter] && Input.playerError === false) {
            document.querySelector("body").removeEventListener("keypress", keyPressed);
            document.querySelector("#playerDisplay").style.backgroundColor = "#398833";
            document.querySelector("#enemyDisplay").style.backgroundColor = "#B90000";
        } 
        else if (theKeyPressed === Input.enemy[Input.enemyLetter] && Input.enemyError === false) {
            document.querySelector("body").removeEventListener("keypress", keyPressed);
            document.querySelector("#enemyDisplay").style.backgroundColor = "#398833";
            document.querySelector("#playerDisplay").style.backgroundColor = "#B90000";
        }
    //Si c'est pas la bonne lettre player 
    }
    else if (theKeyPressed !== Input.player[Input.playerLetter] && Input.player.includes(theKeyPressed)) {
        Input.playerError = true;
        if (Input.playerError && Input.enemyError) {
            draw();
            setTimeout(removeDrawStatus, 1200)
        }
    }
    else if (theKeyPressed !== Input.enemy[Input.enemyLetter] && Input.enemy.includes(theKeyPressed)) {
        Input.enemyError = true;
        if (Input.playerError && Input.enemyError) {
            draw();
            setTimeout(removeDrawStatus, 1200)
        }
    }
}

function keyPressed(event) {
    compareKey((event.key).toUpperCase());
}

////////////////////// Timer Count Down//////////////////////////////
function fightCountDown() {
    document.querySelector("body").removeEventListener("keypress", spacePressed);
    let timer = Math.floor((Math.random() * 3) + 1);
    let timerDisplay = document.querySelector("#start > p");
    timerDisplay.innerHTML = timer;
    let countDown = setInterval(cdTimer, 1000);

    function cdTimer() {
        timer--;
        timerDisplay.innerHTML = timer;
        if (timer <= 0) {
            clearInterval(countDown);
            showInput();
            timerDisplay.innerHTML = "Start";
            startButton.disabled = false;
            startButton.style.backgroundColor = "#398833";
            document.querySelector("body").addEventListener("keypress", keyPressed)
            document.querySelector("body").addEventListener("keypress", spacePressed);
        }
    }
}

////////////////////// Function Start ///////////////////////
function letsStart() {  
    startButton.style.backgroundColor = "#B90000";
    startButton.disabled = true;
    resetInput();
    fightCountDown();
}

////////////////////////// Space Pressed ////////////////////////
function spacePressed(event) {
    if (event.charCode === 32) {
        letsStart();
    }
}


///////////////////////////////   /Events/      ////////////////////////////////////////
document.querySelector("#start").addEventListener("click", function start() {
    letsStart();
})

document.querySelector("body").addEventListener("keypress", spacePressed);




   

