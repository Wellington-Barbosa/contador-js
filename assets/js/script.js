var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

document.getElementById('adicionar').addEventListener("click", increment);
document.getElementById('subtrair').addEventListener("click", decrement);

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber; 

    color();
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    color();
}

function color() {
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    } else {
        currentNumberWrapper.style.color = 'black';
    }
}