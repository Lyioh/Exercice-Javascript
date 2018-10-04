function colorChange(event) {
    switch (event.charCode) {
        case 48:
            document.querySelector("#character").style.backgroundColor = "red";
            break;
        case 49:
            document.querySelector("#character").style.backgroundColor = "blue";
            break;
        case 50:
            document.querySelector("#character").style.backgroundColor = "yellow";
            break;
        case 51:
        document.querySelector("#character").style.backgroundColor = "gray";
            break;
        case 52:
        document.querySelector("#character").style.backgroundColor = "black";
            break;
        case 53:
        document.querySelector("#character").style.backgroundColor = "pink";
            break;
        case 54:
        document.querySelector("#character").style.backgroundColor = "cyan";
            break;
        case 55:
        document.querySelector("#character").style.backgroundColor = "teal";
            break;
        case 56:
        document.querySelector("#character").style.backgroundColor = "aqua";
            break;
        case 57:
        document.querySelector("#character").style.backgroundColor = "darkblue";
            break;
    }
}

document.querySelector("body").addEventListener("keypress", colorChange);

