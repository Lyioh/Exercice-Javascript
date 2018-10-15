document.querySelector("#nom").addEventListener("keypress", function enterPressed(event) {
    let enterPressed = event.key;
    if (enterPressed === "Enter") {
        alert("Merci de votre participation");
    }
})