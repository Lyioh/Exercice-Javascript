let floatBateau = "10.4 est la valeur demandé à afficher";
let couleBateau;
let voleBateau;

console.log(parseFloat(floatBateau));

couleBateau = Math.floor(parseFloat(floatBateau));
console.log(couleBateau);

voleBateau = Math.ceil(parseFloat(floatBateau));
console.log(voleBateau);