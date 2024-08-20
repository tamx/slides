let index = 0;

function display() {
    index++;
    if (index % 3 === 0) {
        console.log(index + "!");
        return;
    }
    const str = String(index);
    if (str.indexOf("3") !== -1) {
        console.log(index + "!");
        return;
    }
    console.log(index);
}

setInterval(display, 1000);