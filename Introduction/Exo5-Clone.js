let nintendoPerso = ["Mario", "Luigi", "Peach"];
let nintendoPersoCopie = [];

/* for (i = 0; i < nintendoPerso.length; i++) {
    nintendoPersoCopie[i] = nintendoPerso[i];
} */

nintendoPersoCopie = nintendoPerso.slice(0, 3);

console.log(nintendoPersoCopie[0]);
console.log(nintendoPersoCopie[1]);
console.log(nintendoPersoCopie[2]);