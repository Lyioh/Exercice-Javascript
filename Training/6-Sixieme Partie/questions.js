var CreationTableauLangages = function () {
    let languages = ["Html", "CSS", "Java", "PHP"];
    return languages;
}

var CreationTableauNombres = function () {
    let nombres = [0,1,2,3,4,5];
    return nombres;
}

var RemplacementElement = function (langages) {
    langages[2] = 'Javascript';
    return langages;
}

var AjoutElementLangages = function (langages) {
    langages.push("Ruby", "Python");
    return langages;
}

var AjoutElementNombres = function (nombres) {
    nombres.splice(0, 0, -2, -1);
    return nombres;
}

var SuppressionPremierElement = function (langages) {
    langages.splice(0, 1);
    return langages;
}

var SuppressionDernierElement = function (langages) {
    langages.pop();
    return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    let reseaux_sociaux = reseaux_sociaux_chaine.split(",");
    return reseaux_sociaux;
}

var ConversionTableauChaine = function (langages) {
    langages_chaine = langages.join();
    return langages_chaine;
}

var TriTableau = function (reseaux_sociaux) {
    reseaux_sociaux.sort();
    return reseaux_sociaux;
}

var InversionTableau = function (reseaux_sociaux){
    reseaux_sociaux.reverse();
    return reseaux_sociaux;
}