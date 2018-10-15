let b = 2;
let a;

function affiche() {
    a = b++;
    alert("Pour a = b++ > a = " + a);

    b = 2;
    a = ++b;
    alert("Pour a = ++b > a = " + a);

    b = 2;
    a = b--;
    alert("Pour a = b-- > a = " + a);

    b = 2;
    a = --b;
    alert("Pour a = --b > a = " + a);

    b = 2;
    a += b++;
    alert("Pour a += b++ > a = " + a);

    b = 2;
    a = 1; a += ++b;
    alert("Pour a = 1; a += ++b > a = " + a);

    b = 2;
    a = 1; a -= b++;
    alert("Pour a = 1; a -= b++ > a = " + a);

    b = 2;
    a = 1; a -= ++b;
    alert("Pour a = 1; a -= ++b > a = " + a);

    b = 2;
    a = 1; a += b--;
    alert("Pour a = 1; a += b-- > a = " + a);

    b = 2;
    a = 1; a += --b;
    alert("Pour a = 1; a += --b > a = " + a);
}

let tab = [-2, 1, 4];

function soustrait(x) {
    return x - 2;
}

function afficheSoustraction() {
    for (i = 0; i < tab.length; i++) {
        alert(soustrait(tab[i]));
    }
}


function faireChoix() {
    let choix = prompt("Choissisez un chiffre entre 1 et 3");
    switch (choix) {
        case "1":
            alert("1.Merci");
            break;
        case "2":
            alert("2.Bonjour");
            break;
        case "3":
            alert("3.Au revoir");
            break;
        default:
            console.log(choix);
            alert("Pardon, que voulez-vous?");
    }
}

function jourDeLaSemaine() {
    switch (new Date().getDay()) {
        case 0:
            alert("Dimanche");
            break;
        case 1:
            alert("Lundi");
            break;
        case 2:
            alert("Mardi");
            break;
        case 3:
            alert("Mercredi");
            break;
        case 4:
            alert("Jeudi");
            break;
        case 5:
            alert("Vendredi");
            break;
        case 6:
            alert("Samedi");
    }
}

function testWhile() {
    let lettre;
    let sentence = "";
    while (lettre != "p") {
        lettre = prompt("DOnne moi la lettre <p>");
        sentence += lettre;
    }
    alert(sentence);
}


function somme() {
    let chiffre;
    let numero = 0;
    for (i = 0; i < 3; i++) {
        chiffre = prompt("Ecris un chiffre ou numéro");
        numero += parseInt(chiffre);
    }
    alert(numero);
}

function calculMoyenne() {
    let numer = prompt("Donne moi un nombre entier");
    let addition = new Array();
    let compteur = 0;
    numero = parseInt(numer);
    while (numero >= 0) {
        if (Number.isInteger(numero) === true) {
            addition[compteur] = numero;
            numer = prompt("Donne moi un nombre autre entier ou un négatif pour faire la moyenne");
            numero = parseInt(numer);
            compteur++;
        } else if (Number.isInteger(numero) != true) {
            numer = prompt("Nop j'ai demandé un entier, c'est à dire sans virgule");
            numero = parseInt(numer);
        }
    }
    let moyenne = 0;
    numero = parseInt(numer);
    numero = Math.abs(numero);
    for (i = 0; i < addition.length; i++) {
        moyenne += addition[i];
    }
    moyenne = (moyenne / numero);

    alert("Tu a rentré " + compteur + " valeur, et la moyenne est " + moyenne);

}

function conversionTemperature() {
    let temp;
    let choixDeux;
    let choix = prompt("0.Fin du programme \n1.De Celsius vers Fahrenheit \n2.De Celsius vers Kelvin \n3.De Fahrenheit vers Celsius \n4.De Fahrenheit vers Kelvin \n5.De Kelvin vers Celsius \n6.De Kelvin vers Fahrenheit");
    switch (parseInt(choix)) {
        case 0:
            break;
        case 1:
            choixDeux = prompt("Donne moi donc les Degrées à convetir en Fahrenheit");
            temp = (parseInt(choixDeux) * (9/5)) + 32;
            alert(temp + "°F");
            break;
        case 2:
            choixDeux = prompt("Donne moi donc les Celsius à convetir en Kelvin");
            temp = parseInt(choixDeux) + 273,15;
            alert(temp + " K");
            break;
        case 3:
            choixDeux = prompt("Donne moi donc les Fahrenheit à convetir en Celsius");
            temp = (parseInt(choixDeux) - 32) / (9/5);
            alert(temp + "°C");
            break;
        case 4:
            choixDeux = prompt("Donne moi donc les Fahrenheit à convetir en Kelvin");
            temp = ((parseInt(choixDeux) - 32) * (5/9)) + 273,15;
            alert(temp + " K");
            break;
        case 5:
            choixDeux = prompt("Donne moi donc les Kelvin à convetir en Celsius");
            temp = parseInt(choixDeux)  - 273,15;
            alert(temp + "°C");
            break;
        case 6:
            choixDeux = prompt("Donne moi donc les Kelvin à convetir en Fahrenheit");
            temp = (parseInt(choixDeux) * 9/5) - 459,67;
            alert(temp + "°F");
            break;
    }
}

function calculIMC() {
    let poids = prompt("Quel est votre poids en Kg?");
    poids = Number(poids);
    let taille = prompt("Quel est votre taille?");
    taille = Number(taille);
    let IMC = poids / (Math.pow(taille, 2));
    // TO fixed permet darondir à 2 chiffre après la virgule
    IMC = IMC.toFixed(2);

    if (IMC < 16.5) {
        alert("Votre IMC est de " + IMC + ", vous êtes en dénutrition ou vivait la famine");
    } 
    else if (IMC >= 16.5 && IMC < 18.5) {
        alert("Votre IMC est de " + IMC + ", vous êtesatteint de maigreur");
    }
    else if (IMC >= 18.5 && IMC < 25) {
        alert("Votre IMC est de " + IMC + ", vous êtes de corpulence normal");
    }
    else if (IMC >= 25 && IMC < 30) {
        alert("Votre IMC est de " + IMC + ", vous êtes en surpoids");
    }
    else if (IMC >= 30 && IMC < 35) {
        alert("Votre IMC est de " + IMC + ", vous êtes en obésité modérée");
    }
    else if (IMC >= 35 && IMC < 40) {
        alert("Votre IMC est de " + IMC + ", vous êtes en obésité sévère");
    }
    else if (IMC > 40) {
        alert("Votre IMC est de " + IMC + ", vous êtes en obésité morbide");
    }
}
