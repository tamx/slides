let price = 0;

function display() {
    const elemPrice = document.getElementById('price');
    const totalPrice = price * 11 / 10;
    elemPrice.innerText = totalPrice + '円';
}

function btn1Click() {
    price += 1000 * 110 / 100;
    console.log(price);
    display();
}

function btn1DelClick() {
    price -= 1000 * 110 / 100;
    console.log(price);
    display();
}

function btn2Click() {
    price += 1500 * 108 / 100;
    console.log(price);
    display();
}

function btn2DelClick() {
    price -= 1500 * 108 / 100;
    console.log(price);
    display();
}

function btn3Click() {
    price += 9000 * 110 / 100;
    console.log(price);
    display();
}

function btn3DelClick() {
    price -= 9000 * 110 / 100;
    console.log(price);
    display();
}

function btn4Click() {
    price += 6000 * 108 / 100;
    console.log(price);
    display();
}

function btn4DelClick() {
    price -= 6000 * 108 / 110;
    console.log(price);
    display();
}

const elem1 = document.getElementById('btn1');
elem1.addEventListener('click', btn1Click);
const elem1del = document.getElementById('btn1del');
elem1del.addEventListener('click', btn1DelClick);

const elem2 = document.getElementById('btn2');
elem2.addEventListener('click', btn2Click);
const elem2del = document.getElementById('btn2del');
elem2del.addEventListener('click', btn2DelClick);

const elem3 = document.getElementById('btn3');
elem3.addEventListener('click', btn3Click);
const elem3del = document.getElementById('btn3del');
elem3del.addEventListener('click', btn3DelClick);

const elem4 = document.getElementById('btn4');
elem4.addEventListener('click', btn4Click);
const elem4del = document.getElementById('btn4del');
elem4del.addEventListener('click', btn4DelClick);
