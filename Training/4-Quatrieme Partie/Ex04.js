document.querySelector("#verif").addEventListener("click", function compare() {
    let mdp = document.querySelector("#motdepasse").value;
    let mpdConfirm = document.querySelector("#confirmation").value;

    if (mdp === mpdConfirm) {
        document.querySelector("#motdepasse").style.borderColor = "green";
        document.querySelector("#confirmation").style.borderColor = "green";
    }
    else {
        document.querySelector("#motdepasse").style.borderColor = "red";
        document.querySelector("#confirmation").style.borderColor = "red";
    }
})