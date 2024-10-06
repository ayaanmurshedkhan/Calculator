const display = document.getElementById("display");

function addValue(number) {
    display.classList.remove("error");

    if(isNaN(number) || number === '.') {
        if(display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        }
    } else {
        if(number === '*') {
            display.value += 'x';
        } else {
            display.value += number;
        }
    }
}

function clearDisplay() {
    display.value = "";
}
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let expression = display.value.replace(/x/g, '*');
    expression = expression.replace(/%/g, '/100');

    if(/[+\-*/]/.test(expression)) {
        try {
            let result = eval(expression);
            display.value = result;
            display.classList.remove("error");
        }
        catch(error) {
            display.value = "E";
            display.classList.add("error");
        }
    }
} 