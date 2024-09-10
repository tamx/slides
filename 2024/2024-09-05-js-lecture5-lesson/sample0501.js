function btnClick() {
    const elem = document.getElementById('hello');
    elem.innerText = `Good Evening`;
}

const btn = document.getElementById('myid');
btn.addEventListener('click', btnClick);
