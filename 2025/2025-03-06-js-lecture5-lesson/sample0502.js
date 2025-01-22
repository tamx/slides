let flag = false;

function btnClick() {
    const elem = document.getElementById('hello');
    if (flag === false) {
        elem.innerText = `Good Evening`;
        flag = true;
    } else {
        elem.innerText = `Hello World`;
        flag = false;
    }
}

const btn = document.getElementById('myid');
btn.addEventListener('click', btnClick);
