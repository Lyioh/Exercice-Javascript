function colorChange(event) {
    switch (event.key) {
        case "ArrowRight":
            document.querySelector("#right").style.backgroundColor = "red";
            break;
        case "ArrowLeft":
            document.querySelector("#left").style.backgroundColor = "blue";
            break;
        case "ArrowUp":
            document.querySelector("#up").style.backgroundColor = "yellow";
            break;
        case "ArrowDown":
            document.querySelector("#down").style.backgroundColor = "gray";
            break;
    }
}

document.querySelector("body").addEventListener("keydown", colorChange);