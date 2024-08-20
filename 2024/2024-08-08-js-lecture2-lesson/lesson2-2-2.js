let index = 0;

function display() {
    index++;
    if (index % 3 === 0) {
        console.log(index + "!");
        return;
    }
    console.log(index);
}

setInterval(display, 1000);