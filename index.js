/* Make it so the user can press another operator after pressing one if they want to change
the operator */
// Potentially make it so the previous operation is repeated if the user presses equals again
// Add a limit to how many numbers can be pressed maybe make its own function for checking
// Check if result is also too long not just if decimal is too long

const resultBox = document.querySelector('#resultBox')
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
const zeroButton = document.querySelector('#zero');
const decimalButton = document.querySelector('#decimal')
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const subtractButton = document.querySelector('#subtract');
const plusButton = document.querySelector('#plus');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');

let valueOne = ''
let valueTwo = ''
let valueOperator = 'None'
let result = 'Nothing'
let originalOperatorButtonColour = divideButton.style.backgroundColor

oneButton.addEventListener('click', () => {
    // If no calculation has yet been performed, this code block will run.
    if(result === 'Nothing') {
        /* If no operator has been pressed, this code block will run and the value will count
        as the first number. */
        if(valueOperator === 'None') {
            valueOne += '1'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        // If an operator has been pressed, the value is passed to the second number.
        else{
            valueTwo += '1'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    /* If a user presses a number after having done a calculation, the first value will
    reset so the user is able to perform a new calculation */
    else if(result === valueOne && valueOperator === 'None') {
        valueOne = ''
        if(valueOperator === 'None') {
            valueOne += '1'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '1'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    // This code block will run when the user presses the number more than once.
    else{
        if(valueOperator === 'None') {
            valueOne += '1'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '1'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
});

twoButton.addEventListener('click', () => {
    if(result === 'Nothing') {
        if(valueOperator === 'None') {
            valueOne += '2'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '2'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else if(result === valueOne && valueOperator === 'None') {
        valueOne = ''
        if(valueOperator === 'None') {
            valueOne += '2'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '2'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else{
        if(valueOperator === 'None') {
            valueOne += '2'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '2'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
});

threeButton.addEventListener('click', () => {
    if(result === 'Nothing') {
        if(valueOperator === 'None') {
            valueOne += '3'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '3'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else if(result === valueOne && valueOperator === 'None') {
        valueOne = ''
        if(valueOperator === 'None') {
            valueOne += '3'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '3'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else{
        if(valueOperator === 'None') {
            valueOne += '3'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '3'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
});

fourButton.addEventListener('click', () => {
    if(result === 'Nothing') {
        if(valueOperator === 'None') {
            valueOne += '4'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '4'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else if(result === valueOne && valueOperator === 'None') {
        valueOne = ''
        if(valueOperator === 'None') {
            valueOne += '4'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '4'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else{
        if(valueOperator === 'None') {
            valueOne += '4'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '4'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
});

fiveButton.addEventListener('click', () => {
    if(result === 'Nothing') {
        if(valueOperator === 'None') {
            valueOne += '5'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '5'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else if(result === valueOne && valueOperator === 'None') {
        valueOne = ''
        if(valueOperator === 'None') {
            valueOne += '5'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '5'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else{
        if(valueOperator === 'None') {
            valueOne += '5'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '5'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
});

sixButton.addEventListener('click', () => {
    if(result === 'Nothing') {
        if(valueOperator === 'None') {
            valueOne += '6'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '6'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else if(result === valueOne && valueOperator === 'None') {
        valueOne = ''
        if(valueOperator === 'None') {
            valueOne += '6'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '6'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else{
        if(valueOperator === 'None') {
            valueOne += '6'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '6'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
});

sevenButton.addEventListener('click', () => {
    if(result === 'Nothing') {
        if(valueOperator === 'None') {
            valueOne += '7'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '7'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else if(result === valueOne && valueOperator === 'None') {
        valueOne = ''
        if(valueOperator === 'None') {
            valueOne += '7'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '7'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else{
        if(valueOperator === 'None') {
            valueOne += '7'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '7'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
});

eightButton.addEventListener('click', () => {
    if(result === 'Nothing') {
        if(valueOperator === 'None') {
            valueOne += '8'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '8'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else if(result === valueOne && valueOperator === 'None') {
        valueOne = ''
        if(valueOperator === 'None') {
            valueOne += '8'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '8'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else{
        if(valueOperator === 'None') {
            valueOne += '8'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '8'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
});

nineButton.addEventListener('click', () => {
    if(result === 'Nothing') {
        if(valueOperator === 'None') {
            valueOne += '9'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '9'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else if(result === valueOne && valueOperator === 'None') {
        valueOne = ''
        if(valueOperator === 'None') {
            valueOne += '9'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '9'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else{
        if(valueOperator === 'None') {
            valueOne += '9'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '9'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
});

zeroButton.addEventListener('click', () => {
    if(result === 'Nothing') {
        if(valueOperator === 'None') {
            valueOne += '0'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '0'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else if(result === valueOne && valueOperator === 'None') {
        valueOne = ''
        if(valueOperator === 'None') {
            valueOne += '0'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '0'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
    else{
        if(valueOperator === 'None') {
            valueOne += '0'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += '0'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
});

decimalButton.addEventListener('click', () => {
    if(valueOperator === 'None') {
        /* Allows a user to press decimal without having a number before the decimal as a
        shortcut for '0.' */
        if(valueOne === '') {
            valueOne += '0.'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
        }
        else {
            valueOne += '.'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
        }
    }
    else {
        if(valueTwo === '') {
            valueOne += '0.'
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
        }
        else {
            valueTwo += '.'
            resultBox.textContent = valueTwo
            console.log(valueOne, valueTwo)
        }
    }
});

divideButton.addEventListener('click', () => {
    divideButton.style.backgroundColor = 'orange'
    valueOperator = 'divide'
});

multiplyButton.addEventListener('click', () => {
    multiplyButton.style.backgroundColor = 'orange'
    valueOperator = 'multiply'
});

equalsButton.addEventListener('click', () => {
    divideButton.style.backgroundColor = originalOperatorButtonColour
    multiplyButton.style.backgroundColor = originalOperatorButtonColour
    subtractButton.style.backgroundColor = originalOperatorButtonColour
    plusButton.style.backgroundColor = originalOperatorButtonColour
    if(valueOne === '' || valueTwo === '' || valueOperator === 'None'){
        console.log(valueOne, valueTwo)
        resultBox.textContent = 'Error. Please try again.'
        valueOne = ''
        valueTwo = ''
        valueOperator = 'None'
    }
    else {
        operate()
    }
});

clearButton.addEventListener('click', () => {
    valueOne = ''
    valueTwo = ''
    valueOperator = 'None'
    result = 'Nothing'
    resultBox.textContent = 0
    console.log(valueOne, valueTwo, valueOperator, result)

});

deleteButton.addEventListener('click', () => {
    // If no operator has been selected, this block of code will apply to the first value.
    if(valueOperator === 'None') {
        // If only one number has been pressed, the value will wipe clean but will display 0.
        if(valueOne.toString().length === 1) {
            valueOne = ''
            resultBox.textContent = 0
            console.log(valueOne)
        }
        // If it is more than one number long, it will delete the end number each time.
        else {
            valueOne = valueOne.slice(0, -1)
            resultBox.textContent = valueOne
            console.log(valueOne)
        }
    }
    else {
        if(valueTwo.toString().length === 1) {
            valueTwo = ''
            resultBox.textContent = 0
            console.log(valueTwo)
        }
        else {
            valueTwo = valueTwo.slice(0, -1)
            resultBox.textContent = valueTwo
            console.log(valueTwo)
        }
    }
});

function divide() {
    return valueOne / valueTwo
};

function multiply() {
    return valueOne * valueTwo
};

function subtract() {
    return valueOne - valueTwo
};

function plus() {
    return valueOne + valueTwo
};

function operate(){
    if(valueOperator === 'divide') {
        result = divide()
        roundedResult = result.toFixed(5)
        // If a user divides by 0 they will get a snarky comment
        if(valueOne == 0 || valueTwo == 0) {
            resultBox.textContent = 'What do you think lol'
            valueOne = result
            valueTwo = ''
            valueOperator = 'None'
        }
        else if(result.toString().length > roundedResult.length) {
            resultBox.textContent = `${roundedResult} (5dp)`
            valueOne = roundedResult
            valueTwo = ''
            valueOperator = 'None'
            console.log(valueOne, valueTwo)
        }
        else {
            resultBox.textContent = result
            /* valueOne will be equal to the result after a calculation so the user can perform
            another calculation with that value if needed. */
            valueOne = result
            valueTwo = ''
            valueOperator = 'None'
            console.log(valueOne, valueTwo)
        }
    }

    else if(valueOperator === 'multiply') {
        result = multiply()
        roundedResult = result.toFixed(5)
        if(result.toString().length > roundedResult.length) {
            resultBox.textContent = `${roundedResult} (5dp)`
            valueOne = roundedResult
            valueTwo = ''
            valueOperator = 'None'
            console.log(valueOne, valueTwo)
        }
        else {
            resultBox.textContent = result
            /* valueOne will be equal to the result after a calculation so the user can perform
            another calculation with that value if needed. */
            valueOne = result
            valueTwo = ''
            valueOperator = 'None'
            console.log(valueOne, valueTwo)
        }
    }
};