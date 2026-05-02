const display = document.querySelector("#display");
const buttons = document.querySelectorAll('button');

let currentInput = ' ';
let prevInput = ' ';
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if(!isNaN(value)){
            currentInput += value;
            display.textContent = currentInput;
        }


        if(value === 'CLEAR'){
            currentInput = '';
            prevInput = '';
            operator = null;
            display.textContent = '0';
        }


        if(['+', '-', 'x', '/'].includes(value)){
            operator = value;
            prevInput = currentInput;
            currentInput = '';
        }

        if(value === '.'){
            if(!currentInput.includes('.')){
                currentInput += '.';
                display.textContent = currentInput;
            }
        }

        if(value === '='){
            const result = calculate(parseFloat(prevInput), operator, parseFloat(currentInput));
            display.textContent = result;
            currentInput = result;
        }
    })
})

function calculate(a, op, b){
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === 'x') return a * b;
    if (op === '/') return a / b;
    return b;
}




