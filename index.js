// Check if result is also too long not just if decimal is too long
// if a second number has already been pressed, dont allow another operator to be pressed
// Make it so the decimal can only be pressed once and cant be pressed after a result is presented

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
let secondNumberPressed = false
// These variables will only be used if the equals button is pressed again AFTER a calculation
let previousValueOne = ''
let previousValueTwo = ''
let previousValueOperator = 'None'
let previousCalculation = false

function numberPressed(number) {
    if(result === 'Nothing') {
        /* If no operator has been pressed, this code block will run and the value will count
        as the first number. */
        if(valueOperator === 'None') {
            // Does not allow user to press more than 11 numbers (nn billion)
            if(!(valueOne.toString().length >= 11)) {
                valueOne += number
                resultBox.textContent = valueOne
                console.log(valueOne, valueTwo)
            }
        }
        // If an operator has been pressed, the value is passed to the second number.
        else{
            if(!(valueTwo.toString().length >= 11)) {
                valueTwo += number
                resultBox.textContent = valueTwo
                secondNumberPressed = true
                console.log(valueOne, valueTwo)
            }
        }
    }
    /* If a user presses a number after having done a calculation, the first value will
    reset so the user is able to perform a new calculation */
    else if(result === valueOne && valueOperator === 'None') {
        valueOne = ''
        if(valueOperator === 'None') {
            valueOne += number
            resultBox.textContent = valueOne
            console.log(valueOne, valueTwo)
            }
        else{
            valueTwo += number
            resultBox.textContent = valueTwo
            secondNumberPressed = true
            console.log(valueOne, valueTwo)
        }
    }
    // This code block will run when the user presses the number more than once.
    else{
        if(valueOperator === 'None') {
            if(!(valueOne.toString().length >= 11)) {
                valueOne += number
                resultBox.textContent = valueOne
                console.log(valueOne, valueTwo)
            }
        }
        else{
            if(!(valueTwo.toString().length >= 11)) {
                valueTwo += number
                resultBox.textContent = valueTwo
                secondNumberPressed = true
                console.log(valueOne, valueTwo)
            }
        }
    }
}

function operatorPressed(operator,operatorButton){
    if(valueOperator !== 'None') {
        divideButton.style.backgroundColor = originalOperatorButtonColour
        multiplyButton.style.backgroundColor = originalOperatorButtonColour
        subtractButton.style.backgroundColor = originalOperatorButtonColour
        plusButton.style.backgroundColor = originalOperatorButtonColour
        operatorButton.style.backgroundColor = 'orange'
        valueOperator = operator
    }
    else {
        operatorButton.style.backgroundColor = 'orange'
        valueOperator = operator
    }
}

oneButton.addEventListener('click', () => {
    previousCalculation = false
    numberPressed('1')
});

twoButton.addEventListener('click', () => {
    previousCalculation = false
    numberPressed('2')
});

threeButton.addEventListener('click', () => {
    previousCalculation = false
    numberPressed('3')
});

fourButton.addEventListener('click', () => {
    previousCalculation = false
    numberPressed('4')
});

fiveButton.addEventListener('click', () => {
    previousCalculation = false
    numberPressed('5')
});

sixButton.addEventListener('click', () => {
    previousCalculation = false
    numberPressed('6')
});

sevenButton.addEventListener('click', () => {
    previousCalculation = false
    numberPressed('7')
});

eightButton.addEventListener('click', () => {
    previousCalculation = false
    numberPressed('8')
});

nineButton.addEventListener('click', () => {
    previousCalculation = false
    numberPressed('9')
});

zeroButton.addEventListener('click', () => {
    previousCalculation = false
    numberPressed('0')
});

decimalButton.addEventListener('click', () => {
    previousCalculation = false
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
    if(secondNumberPressed === true) {}
    else {
        previousCalculation = false
        operatorPressed('divide', divideButton)
    }

});

multiplyButton.addEventListener('click', () => {
    if(secondNumberPressed === true) {}
    else {
        previousCalculation = false
        operatorPressed('multiply', multiplyButton)
    }

});

subtractButton.addEventListener('click', () => {
    if(secondNumberPressed === true) {}
    else {
        previousCalculation = false
        operatorPressed('subtract', subtractButton)
    }

});

plusButton.addEventListener('click', () => {
    if(secondNumberPressed === true) {}
    else {
        previousCalculation = false
        operatorPressed('plus', plusButton)
    }

});

equalsButton.addEventListener('click', () => {
    divideButton.style.backgroundColor = originalOperatorButtonColour
    multiplyButton.style.backgroundColor = originalOperatorButtonColour
    subtractButton.style.backgroundColor = originalOperatorButtonColour
    plusButton.style.backgroundColor = originalOperatorButtonColour
    if((valueOne === '' && previousValueOne === '')|| (valueTwo === '' && previousValueTwo === '') || (valueOperator === 'None' && previousValueOperator === '')){
        console.log(valueOne, valueTwo)
        resultBox.textContent = 'Error. Please try again.'
        valueOne = ''
        valueTwo = ''
        valueOperator = 'None'
        
    }
    else {
        secondNumberPressed = false
        operate()
    }
});

clearButton.addEventListener('click', () => {
    divideButton.style.backgroundColor = originalOperatorButtonColour
    multiplyButton.style.backgroundColor = originalOperatorButtonColour
    subtractButton.style.backgroundColor = originalOperatorButtonColour
    plusButton.style.backgroundColor = originalOperatorButtonColour
    valueOne = ''
    valueTwo = ''
    valueOperator = 'None'
    result = 'Nothing'
    previousCalculation = false
    previousValueOne = ''
    previousValueTwo = ''
    previousValueOperator = 'None'
    resultBox.textContent = 0
    console.log(valueOne, valueTwo, valueOperator, result)

});

deleteButton.addEventListener('click', () => {
    // If no operator has been selected, this block of code will apply to the first value.
    if(valueOperator === 'None' && result === 'Nothing') {
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
    else if (valueOperator !== 'None' && result === 'Nothing') {
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
    else {
        /*This is empty because I want delete to do nothing if pressed any other time, for example,
        after a calculation.*/
    }
});

function divide() {
    if(previousCalculation === true) {
        return Number(previousValueOne) / Number(previousValueTwo)
    }
    else {
        return Number(valueOne) / Number(valueTwo)
    }
};

function multiply() {
    if(previousCalculation === true) {
        return Number(previousValueOne) * Number(previousValueTwo)
    }
    else {
        return Number(valueOne) * Number(valueTwo)
    }
};

function subtract() {
    if(previousCalculation === true) {
        return Number(previousValueOne) - Number(previousValueTwo)
    }
    else {
        return Number(valueOne) - Number(valueTwo)
    }
};

function plus() {
    if(previousCalculation === true) {
        return Number(previousValueOne) + Number(previousValueTwo)
    }
    else {
        return Number(valueOne) + Number(valueTwo)
    }
};

function operate(){
// This if block is used for if a previous calculation has been performed and equals is pressed
    if(previousCalculation === true) {
        if(previousValueOperator === 'divide') {
            result = divide()
            roundedResult = result.toFixed(5)
            if(previousValueOne == 0 || previousValueTwo == 0) {
                resultBox.textContent = 'What do you think lol'
                previousCalculation = true
                previousValueOne = 0
                valueOne = 0
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else if(result.toString().length > roundedResult.length) {
                resultBox.textContent = `${roundedResult} (5dp)`
                previousCalculation = true
                previousValueOne = result
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else {
                resultBox.textContent = result
                previousCalculation = true
                previousValueOne = result
                valueOne = result
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
        }
    
        else if(previousValueOperator === 'multiply') {
            result = multiply()
            roundedResult = result.toFixed(5)
            if(result.toString().length > roundedResult.length) {
                resultBox.textContent = `${roundedResult} (5dp)`
                previousCalculation = true
                previousValueOne = result
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else {
                resultBox.textContent = result
                previousCalculation = true
                previousValueOne = result
                valueOne = result
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
        }
    
        else if(previousValueOperator === 'subtract') {
            result = subtract()
            roundedResult = result.toFixed(5)
            if(result.toString().length > roundedResult.length) {
                resultBox.textContent = `${roundedResult} (5dp)`
                previousCalculation = true
                previousValueOne = result
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else {
                resultBox.textContent = result
                previousCalculation = true
                previousValueOne = result
                valueOne = result
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
        }
        else if(previousValueOperator === 'plus') {
            result = plus()
            roundedResult = result.toFixed(5)
            if(result.toString().length > roundedResult.length) {
                resultBox.textContent = `${roundedResult} (5dp)`
                previousCalculation = true
                previousValueOne = result
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else {
                resultBox.textContent = result
                previousCalculation = true
                previousValueOne = result
                valueOne = result
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
        }
    }
// This block is used for if a user has NOT pressed equals before - therefore no previous calculation
    else {
        if(valueOperator === 'divide') {
            result = divide()
            roundedResult = result.toFixed(5)
            // If a user divides by 0 they will get a snarky comment
            if(valueOne == 0 || valueTwo == 0) {
                resultBox.textContent = 'What do you think lol'
                previousCalculation = true
                previousValueOne = 0
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = 0
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else if(result.toString().length > roundedResult.length) {
                resultBox.textContent = `${roundedResult} (5dp)`
                previousCalculation = true
                previousValueOne = result
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else {
                resultBox.textContent = result
                /* valueOne will be equal to the result after a calculation so the user can perform
                another calculation with that value if needed. */
                previousCalculation = true
                previousValueOne = result
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = result
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
        }
    
        else if(valueOperator === 'multiply') {
            result = multiply()
            roundedResult = result.toFixed(5)
            if(result.toString().length > roundedResult.length) {
                resultBox.textContent = `${roundedResult} (5dp)`
                previousCalculation = true
                previousValueOne = result
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else {
                resultBox.textContent = result
                previousCalculation = true
                previousValueOne = result
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = result
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
        }
    
        else if(valueOperator === 'subtract') {
            result = subtract()
            roundedResult = result.toFixed(5)
            if(result.toString().length > roundedResult.length) {
                resultBox.textContent = `${roundedResult} (5dp)`
                previousCalculation = true
                previousValueOne = result
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else {
                resultBox.textContent = result
                previousCalculation = true
                previousValueOne = result
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = result
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
        }
        else if(valueOperator === 'plus') {
            result = plus()
            roundedResult = result.toFixed(5)
            if(result.toString().length > roundedResult.length) {
                resultBox.textContent = `${roundedResult} (5dp)`
                previousCalculation = true
                previousValueOne = result
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else {
                resultBox.textContent = result
                previousCalculation = true
                previousValueOne = result
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = result
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
        }
    }
};