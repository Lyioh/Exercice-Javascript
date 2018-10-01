var incremente=0;

while (incremente <= 100) {
    if (incremente < 65) {
        console.log("Pour " + incremente + " points vous avez le grade F");
        incremente ++;
    } else if (incremente >= 65 && incremente < 70) {
        console.log("Pour " + incremente + " points vous avez le grade D");
        incremente ++;
    } else if (incremente >= 70 && incremente < 80) {
        console.log("Pour " + incremente + " points vous avez le grade C");
        incremente ++;
    } else if (incremente >= 80 && incremente < 90) {
        console.log("Pour " + incremente + " points vous avez le grade B");
        incremente ++;
    } else if (incremente >=90) {
        console.log("Pour " + incremente + " points vous avez le grade A");
        incremente ++;
    }
}