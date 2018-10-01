var increment= 0;

while (increment <= 20) {
    if (Number.isInteger(increment / 2)) {
        console.log(increment + " est pair");
        increment++;
    } else {
        console.log(increment + " est impair");
        increment++;
    }
}