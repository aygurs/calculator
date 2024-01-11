// Add a small box above results to show calculation so far
// Clear button
// Decimal button

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
    else if(result === valueOne) {
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
});

decimalButton.addEventListener('click', () => {
    if(valueOperator === 'None') {
        valueOne += '.'
        resultBox.textContent = valueOne
        console.log(valueOne, valueTwo)
    }
    else {
        valueTwo += '.'
        resultBox.textContent = valueTwo
        console.log(valueOne, valueTwo)
    }
})

divideButton.addEventListener('click', () => {
    divideButton.style.backgroundColor = 'orange'
    valueOperator = 'divide'
});

equalsButton.addEventListener('click', () => {
    divideButton.style.backgroundColor = originalOperatorButtonColour
    multiplyButton.style.backgroundColor = originalOperatorButtonColour
    subtractButton.style.backgroundColor = originalOperatorButtonColour
    plusButton.style.backgroundColor = originalOperatorButtonColour
    if(valueOne === '' || valueTwo === '' || valueOperator === 'None'){
        resultBox.textContent = 'Error. Please try again.'
        valueOne = ''
        valueTwo = ''
        valueOperator = 'None'

    }
    else {
        operate()
    }
});

function divide() {
    return valueOne / valueTwo
};

function operate(){
    if(valueOperator === 'divide') {
        result = divide()
        roundedResult = result.toFixed(5)
        if(result.toString().length > roundedResult.length) {
            resultBox.textContent = `${roundedResult} (5dp)`
            valueOne = roundedResult
            valueTwo = ''
            valueOperator = 'None'
        }
        else {
            resultBox.textContent = result
            /* valueOne will be equal to the result after a calculation so the user can perform
            another calculation with that value if needed. */
            valueOne = result
            valueTwo = ''
            valueOperator = 'None'
        }
    }
};