const waitToSayHello = delay => {
    setTimeout(() => console.log(`Hallo Web-Programming-Lab nach ${delay/1000} Sekunden`), delay);
};

// “Hallo Web-Programming-Lab nach 4 Sekunden”
waitToSayHello(4000);
// “Hallo Web-Programming-Lab nach 8 Sekunden”
waitToSayHello(8000);

// “Hallo Web-Programming-Lab nach 3 Sekunden”
let intervalId = setInterval(() => waitToSayHello(3000), 3000);

let count = 0;
const sayHelloFiveTimes = () => {
    console.log('HELLO!!! :^)');
    count++;
    if (count == 5) {
        console.log('Done.');
        clearInterval(intervalId);
        process.exit();
    }
};
setInterval(sayHelloFiveTimes, 1000);