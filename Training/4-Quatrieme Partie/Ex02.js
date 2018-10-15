document.querySelector("#display").addEventListener("click", function afficher() {
    document.querySelector("p").style.visibility = "visible";
})

document.querySelector("#hide").addEventListener("click", function masquer() {
    document.querySelector("p").style.visibility = "hidden";
})