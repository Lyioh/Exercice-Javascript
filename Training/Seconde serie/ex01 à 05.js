function surfaceRectangle() {
    longeur = prompt("Donne moi une longueur");
    largeur = prompt("DOnne moi une largeur");
    aireRectangle = longeur * largeur;
    alert("L'aire du rectangel est de " + aireRectangle);
}

function perimetreRectangle() {
    longeur = prompt("Donne moi une longueur");
    largeur = prompt("DOnne moi une largeur");
    perimetre = 2 * (longeur + largeur);
    alert("Le perimèter du rectangle fait " + perimetre);
}

//let rayonCercle = prompt("Ecris le rayon d'un cercle s'il te plait: ");

function aireDuCercle() {
    aireCercle = Math.PI * Math.pow(rayonCercle,2);
    alert("Le cercle à une aire de " + aireCercle);
}

let a = 3;
let b = 2;

function triple(x) {
    return x * 3;
}

function affiche() {
    alert(triple(a));
    alert(triple(b));
}

let tab = [-2, 1, 4];

function addition(x) {
    return x + 2;
}

function afficheAdd() {
    for (i = 0; i < tab.length; i++) {
        alert(addition(tab[i]));
    }
}