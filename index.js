// Make a form for any bugs found

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

/* decimalDisabled stops the decimal being pressed once a result is shown.
It is only true once equals has been pressed, and is returned to false when an operator or
number is pressed. */
let decimalDisabled = false

// These variables will only be used if the equals button is pressed again AFTER a calculation
let previousValueOne = ''
let previousValueTwo = ''
let previousValueOperator = 'None'
let previousCalculation = false

function numberPressed(number) {
    decimalDisabled = false
    // If a calculation has not yet been performed as result = Nothing, this code block will run
    if(result === 'Nothing') {
        /* If no operator has been pressed, this code block will run and the value will count
        as the first number. I am differentiating the first and second number based off of 
        the operator being clicked*/
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
    decimalDisabled = false
    /* This code block allows a user to switch their desired operator mid calculation, e.g.
    if you press '+' by accident and want to switch to '-'. It only runs if valueOperator
    is NOT equal to None, meaning it has been pressed at least once already. */
    if(valueOperator !== 'None') {
        divideButton.style.backgroundColor = originalOperatorButtonColour
        multiplyButton.style.backgroundColor = originalOperatorButtonColour
        subtractButton.style.backgroundColor = originalOperatorButtonColour
        plusButton.style.backgroundColor = originalOperatorButtonColour
        operatorButton.style.backgroundColor = 'orange'
        valueOperator = operator
        console.log(valueOperator)
    }
    else {
        operatorButton.style.backgroundColor = 'orange'
        valueOperator = operator
        console.log(valueOperator)
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
    /* decimalDisabled is only true once a calculation has just been performed.
    This prevents a decimal being added to the result value. It becomes false again
    once a number/operator is pressed */
    if(decimalDisabled === true) {
        console.log(1.1, valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
        return
    }
    /* This code block prevents decimal from being pressed multiple times.
    It allows valueOne to contain a decimal whilst also confirming
    valueTwo doesn't contain a decimal, and also preventing a second
    decimal being added to the first value */
    if(valueOne.toString().includes('.') && !valueTwo.toString().includes('.')){
        /* If the valueOperator is still equal to None, we are still on the first value
        and the decimal button is disabled.*/
        if(valueOperator === 'None'){
            console.log(1, valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            return
        }
        // If valueOperator is NOT equal to None, we are on the second value
        else {
            /* If valueTwo is equal to '', no number has been pressed, therefore pressing decimal
            will result in a shortcut for '0.' */
            if(valueTwo === '') {
                valueTwo += '0.'
                resultBox.textContent = valueTwo
                console.log(2, valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else {
                /* If valueTwo is NOT equal to '', a number has been pressed and will be added
                onto the current value*/
                valueTwo += '.'
                resultBox.textContent = valueTwo
                console.log(3, valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
        }
    }
    /* If valueTwo already contains a decimal and so does valueOne (as checked previously), 
    the decimal button does nothing. */
    if(valueTwo.toString().includes('.')) {
        return
    }
    // This block of code runs if a decimal has not been pressed before
    else{
        // If valueOperator = None, this is the first value (valueOne)
        if(valueOperator === 'None') {
            /* If valueOne is equal to '', no number has been pressed, therefore pressing decimal
            will result in a shortcut for '0.' */
            if(valueOne === '') {
                valueOne += '0.'
                resultBox.textContent = valueOne
                console.log(4, valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            /* If valueOne is NOT equal to '', a number has been pressed and will be added
            onto the current value*/
            else {
                valueOne += '.'
                resultBox.textContent = valueOne
                console.log(5, valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
        }
        // If valueOperator is NOT None, this is valueTwo
        else {
            if(valueTwo === '') {
                valueTwo += '0.'
                resultBox.textContent = valueTwo
                console.log(6, valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else {
                valueTwo += '.'
                resultBox.textContent = valueTwo
                console.log(7, valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
        }
    }
});

divideButton.addEventListener('click', () => {
    /* This secondNumberPressed code block prevents an operator being pressed again once
    both values have been obtained. You must press equals to perform another
    calculation. */
    if(secondNumberPressed === true) {
        return
    }
    else {
        previousCalculation = false
        operatorPressed('divide', divideButton)
    }

});

multiplyButton.addEventListener('click', () => {
    if(secondNumberPressed === true) {
        return
    }
    else {
        previousCalculation = false
        operatorPressed('multiply', multiplyButton)
    }

});

subtractButton.addEventListener('click', () => {
    if(secondNumberPressed === true) {
        return
    }
    else {
        previousCalculation = false
        operatorPressed('subtract', subtractButton)
    }

});

plusButton.addEventListener('click', () => {
    if(secondNumberPressed === true) {
        return
    }
    else {
        previousCalculation = false
        operatorPressed('plus', plusButton)
    }

});

equalsButton.addEventListener('click', () => {
    decimalDisabled = true
    divideButton.style.backgroundColor = originalOperatorButtonColour
    multiplyButton.style.backgroundColor = originalOperatorButtonColour
    subtractButton.style.backgroundColor = originalOperatorButtonColour
    plusButton.style.backgroundColor = originalOperatorButtonColour
    /* This code block catches errors if either value or operatorValue is equal to its
    default value */
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
    // Reselts all colours and values back to default
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
    // This block applies to valueTwo
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
    // Delete is otherwise disabled if the above two critera are not met
    else {
        return
    }
});

function divide() {
    /* If previousCalculation is true, this applies to the calculation being performed
    AFTER equals has been pressed at least once (and for subsequent calculations after that) */
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
            rounded = result.toFixed(5)
            roundedResult = Number(rounded)
            // Allows an accurate decimal place value to be displayed when rounded
            const decimalPlace = ((roundedResult.toString().length) - 2) <= 0 ? 0 : (roundedResult.toString().length) - 2
            // Prevents integers going over 6 digits with exponential values
            const intRounded = result.toExponential(5)
            // If a user divides by 0 they will get a snarky comment
            if(previousValueOne == 0 || previousValueTwo == 0) {
                resultBox.textContent = '0, duh'
                previousCalculation = true
                previousValueOne = 0
                valueOne = 0
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            // To catch integer results over the max 11 digits I have allowed for display
            else if(Number.isInteger(result) && result.toString().length > 11) {
                resultBox.textContent = `${intRounded}`
                previousCalculation = true
                previousValueOne = result
                /* valueOne will be equal to the result after a calculation so the user can perform
                another calculation with that value if desired. */
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            // To catch large floating point numbers and round them to a sensible value
            else if(result.toString().length > rounded.length) {
                resultBox.textContent = `${roundedResult} (${decimalPlace}dp)`
                previousCalculation = true
                previousValueOne = result
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            // Runs if either scenarios above do not apply
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
            rounded = result.toFixed(5)
            roundedResult = Number(rounded)
            const decimalPlace = ((roundedResult.toString().length) - 2) <= 0 ? 0 : (roundedResult.toString().length) - 2
            const intRounded = result.toExponential(5)
            if(result.toString().length > rounded.length) {
                resultBox.textContent = `${roundedResult} (${decimalPlace}dp)`
                previousCalculation = true
                previousValueOne = result
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else if(Number.isInteger(result) && result.toString().length > 11) {
                resultBox.textContent = `${intRounded}`
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
            rounded = result.toFixed(5)
            roundedResult = Number(rounded)
            const decimalPlace = ((roundedResult.toString().length) - 2) <= 0 ? 0 : (roundedResult.toString().length) - 2
            const intRounded = result.toExponential(5)
            if(result.toString().length > rounded.length) {
                resultBox.textContent = `${roundedResult} (${decimalPlace}dp)`
                previousCalculation = true
                previousValueOne = result
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else if(Number.isInteger(result) && result.toString().length > 11) {
                resultBox.textContent = `${intRounded}`
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
            rounded = result.toFixed(5)
            roundedResult = Number(rounded)
            const decimalPlace = ((roundedResult.toString().length) - 2) <= 0 ? 0 : (roundedResult.toString().length) - 2
            const intRounded = result.toExponential(5)
            if(result.toString().length > rounded.length) {
                resultBox.textContent = `${roundedResult} (${decimalPlace}dp)`
                previousCalculation = true
                previousValueOne = result
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else if(Number.isInteger(result) && result.toString().length > 11) {
                resultBox.textContent = `${intRounded}`
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
            rounded = result.toFixed(5)
            roundedResult = Number(rounded)
            const decimalPlace = ((roundedResult.toString().length) - 2) <= 0 ? 0 : (roundedResult.toString().length) - 2
            const intRounded = result.toExponential(5)
            if(valueOne == 0 || valueTwo == 0) {
                resultBox.textContent = '0, duh'
                previousCalculation = true
                previousValueOne = 0
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = 0
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else if(Number.isInteger(result) && result.toString().length > 11) {
                resultBox.textContent = `${intRounded})`
                previousCalculation = true
                previousValueOne = result
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else if(result.toString().length > rounded.length) {
                resultBox.textContent = `${roundedResult} (${decimalPlace}dp)`
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
    
        else if(valueOperator === 'multiply') {
            result = multiply()
            rounded = result.toFixed(5)
            roundedResult = Number(rounded)
            const decimalPlace = ((roundedResult.toString().length) - 2) <= 0 ? 0 : (roundedResult.toString().length) - 2
            const intRounded = result.toExponential(5)
            if(result.toString().length > rounded.length) {
                resultBox.textContent = `${roundedResult} (${decimalPlace}dp)`
                previousCalculation = true
                previousValueOne = result
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(1, valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else if(Number.isInteger(result) && result.toString().length > 11) {
                resultBox.textContent = `${intRounded}`
                previousCalculation = true
                previousValueOne = result
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(2, valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
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
                console.log(3, valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
        }
    
        else if(valueOperator === 'subtract') {
            result = subtract()
            rounded = result.toFixed(5)
            roundedResult = Number(rounded)
            const decimalPlace = ((roundedResult.toString().length) - 2) <= 0 ? 0 : (roundedResult.toString().length) - 2
            const intRounded = result.toExponential(5)
            if(result.toString().length > rounded.length) {
                resultBox.textContent = `${roundedResult} (${decimalPlace}dp)`
                previousCalculation = true
                previousValueOne = result
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else if(Number.isInteger(result) && result.toString().length > 11) {
                resultBox.textContent = `${intRounded}`
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
            rounded = result.toFixed(5)
            roundedResult = Number(rounded)
            const decimalPlace = ((roundedResult.toString().length) - 2) <= 0 ? 0 : (roundedResult.toString().length) - 2
            const intRounded = result.toExponential(5)
            if(result.toString().length > rounded.length) {
                resultBox.textContent = `${roundedResult} (${decimalPlace}dp)`
                previousCalculation = true
                previousValueOne = result
                previousValueTwo = valueTwo
                previousValueOperator = valueOperator
                valueOne = roundedResult
                valueTwo = ''
                valueOperator = 'None'
                console.log(valueOne, valueTwo, valueOperator, previousValueOne, previousValueTwo, previousValueOperator)
            }
            else if(Number.isInteger(result) && result.toString().length > 11) {
                resultBox.textContent = `${intRounded}`
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