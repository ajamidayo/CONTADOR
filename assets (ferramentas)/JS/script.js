var currentNumbercontainer = document.getElementById('currentNumber');
var currentNumber = 0;
function increment() {
    currentNumber = currentNumber + 2;
    currentNumbercontainer.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 2;
    currentNumbercontainer.innerHTML = currentNumber;
}
