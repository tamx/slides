let price = 0;

function display() {
    const elemPrice = document.getElementById('price');
    const totalPrice = price * 11 / 10;
    elemPrice.innerText = totalPrice + '円';
}

function btn1Click() {
    price += 1000;
    console.log(price);
    display();
}

function btn2Click() {
    price += 1500;
    console.log(price);
    display();
}

function btn3Click() {
    price += 9000;
    console.log(price);
    display();
}

function btn4Click() {
    price += 6000;
    console.log(price);
    display();
}

const elem1 = document.getElementById('btn1');
elem1.addEventListener('click', btn1Click);

const elem2 = document.getElementById('btn2');
elem2.addEventListener('click', btn2Click);

const elem3 = document.getElementById('btn3');
elem3.addEventListener('click', btn3Click);

const elem4 = document.getElementById('btn4');
elem4.addEventListener('click', btn4Click);
