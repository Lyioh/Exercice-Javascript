var soustraction = function (a, b) {
    return a - b;
}

var multiplication = function (a, b) {
    return a * b;
}

var division = function (a, b) {
    return a / b;
}

var pourcentage = function (pourcent, valeur) {
    return (pourcent * valeur) / 100;
}

var vitesse = function (distance, temps) {
    return distance / temps;
}

console.log("soustraction 12-6= " + soustraction(12, 6));
console.log("multiplication 10*5= " + multiplication(10, 5));
console.log("division 100/5= " + division(100, 5));
console.log("pourcentage 50% de 10= " + pourcentage(50, 10));
console.log("distance de 100km en 2h= " + vitesse(100, 2));
