var score, result;

score= 40;
//result=""

if (score >= 90) {
    result= "A";
    console.log("Vous avez le rang " + result);
} else if (score < 50) {
    result= "C";
    console.log("Vous avez le rang " + result);
} else if (score < 90) {
    result= "B";
    console.log("Vous avez le rang " + result);
}
