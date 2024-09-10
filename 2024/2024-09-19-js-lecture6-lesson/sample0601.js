let price = 0;

function display() {
    const elemPrice = document.getElementById('price');
    elemPrice.innerText = price + '円';
}

function btn1Click() {
    price += 1000;
    console.log(price);
    display();
}

const elem1 = document.getElementById('btn1');
elem1.addEventListener('click', btn1Click);