function display() {
    const element = document.getElementById('hello');
    element.innerText = "Good Morning";
}

setTimeout(display, 5000);
