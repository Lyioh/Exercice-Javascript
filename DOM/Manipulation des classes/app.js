// Methode ancienne il parait ----- oO
//document.getElementsByClassName("bg-aqua")[0].className = "bg-olive";

//Nouvelle méthode il parait--------
document.querySelector("body").classList.remove();
document.querySelector("body").classList.add("bg-olive");

//------------------------
document.querySelector("#first-paragraph").classList.remove("bg-lime", "gray");
document.querySelector("#first-paragraph").classList.add("aqua");

//------------- Replace
let bgSilverInTeal = document.querySelectorAll(".bg-silver");
for (let i = 0; i < bgSilverInTeal.length; i++) {
    bgSilverInTeal[i].classList.replace("bg-silver", "bg-teal");
}

//-----------------------
let blockquote = document.querySelectorAll("blockquote");
for (let i = 0; i < blockquote.length; i++) {
    blockquote[i].classList.add("bg-white");
}

//-----------------------Selecteur CSS------------------------------------
document.querySelector("#my-table").classList.add("bg-purple");

//---------------
let shadow = document.querySelectorAll(".container > p");
for (let i = 0; i < shadow.length; i++) {
    shadow[i].classList.add("shadow");
}

//------------------
let elemPre = document.querySelectorAll("pre");
for (let i = 0; i < elemPre.length; i++) {
    elemPre[i].style.color = "red";
    elemPre[i].style.backgroundColor = "yellow";
    elemPre[i].style.borderTop = "3px solid red";
    elemPre[i].style.borderBottom = "3px solid red";
}

//----------------
document.querySelector("h3").innerHTML= "<em>Italic title ! yeah !</em>";
document.querySelector("h2").innerHTML= "<strong>HTML doens't work !</strong>";

//--------------------------
let monUl = document.querySelector("ul");
let monLi = document.createElement("li");
monLi.innerHTML= "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
monUl.appendChild(monLi);

monLi.querySelector("a").style.color = "red";


//-----------------------
let monOl = document.querySelector("ol");

/* while (monOl.firstChild) {
    monOl.removeChild(monOl.firstChild);
}  */

for (let i = monOl.children.length-1; i >= 0; i--) {
    monOl.removeChild(monOl.children[i]);
}

//-------------
let monTableau = ["Silent Teacher","Code Monkey", "CodeCombat"];

for (let i = 0; i < monTableau.length; i++) {
    let newLi  = document.createElement("li");
    newLi.innerHTML = monTableau[i];
    monOl.appendChild(newLi);
}