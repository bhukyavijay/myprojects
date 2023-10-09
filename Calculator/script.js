const userInput = document.getElementById("userInput");
var expression = '';

function press(num) {
    expression += num;
    userInput.value = expression;
}

function equal() {
    try {
        userInput.value = eval(expression);
        expression = userInput.value;
    } catch (error) {
        alert('Invalid operation');
        clearAll();
    }
}

function clearAll() {
    expression = '';
    userInput.value = '';
}

function clearLast() {
    expression = expression.slice(0, -1);
    userInput.value = expression;
}
