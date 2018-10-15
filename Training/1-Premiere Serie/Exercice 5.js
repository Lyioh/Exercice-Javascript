function numer () {
        let numberOne = document.querySelector("#premier_nombre").value;
        let numberTwo = document.querySelector("#deuxieme_nombre").value;
        finalNumber = (Math.round(numberOne) % numberTwo);
        alert(finalNumber);
}   





