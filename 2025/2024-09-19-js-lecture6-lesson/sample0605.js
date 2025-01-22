let price = 0;

function display() {
    const elemPrice = document.getElementById('price');
    elemPrice.innerText = price + '円';
}

let item1 = 0;

function btn1Click() {
    price += 1000 * 110 / 100;
    console.log(price);
    item1++;
    display();
}

function btn1DelClick() {
    if (item1 <= 0) {
        return;
    }
    item1--;
    price -= 1000 * 110 / 100;
    console.log(price);
    display();
}

let item2 = 0;

function btn2Click() {
    price += 1500 * 108 / 100;
    console.log(price);
    item2++;
    display();
}

function btn2DelClick() {
    if (item2 <= 0) {
        return;
    }
    item2--;
    price -= 1500 * 108 / 100;
    console.log(price);
    display();
}

let item3 = 0;

function btn3Click() {
    price += 9000 * 110 / 100;
    console.log(price);
    item3++;
    display();
}

function btn3DelClick() {
    if (item3 <= 0) {
        return;
    }
    item3--;
    price -= 9000 * 110 / 100;
    console.log(price);
    display();
}

let item4 = 0;

function btn4Click() {
    price += 6000 * 108 / 100;
    console.log(price);
    item4++;
    display();
}

function btn4DelClick() {
    if (item4 <= 0) {
        return;
    }
    item4--;
    price -= 6000 * 108 / 100;
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
