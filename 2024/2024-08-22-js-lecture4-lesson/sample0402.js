let flag = false;

function display() {
    const element = document.getElementById('hello');
    if (flag === true) {
	    element.innerText = "Hello World";
    	flag = false;
    } else {
	    element.innerText = "Good Morning";
    	flag = true;
    }
}

setInterval(display, 5000);
