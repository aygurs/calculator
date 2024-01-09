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
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const subtractButton = document.querySelector('#subtract');
const plusButton = document.querySelector('#plus');
const equalsButton = document.querySelector('#equals');

let valueOne = ''
let valueTwo = ''
let valueOperator = 'a'
let result = 'Nothing'
let originalOperatorButtonColour = divideButton.style.backgroundColor

oneButton.addEventListener('click', () => {
    if(result === 'Nothing') {
        if(valueOperator === 'a') {
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
    else if(result === valueOne) {
        valueOne = ''
        if(valueOperator === 'a') {
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
    else{
        if(valueOperator === 'a') {
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
    if(valueOperator === 'a') {
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

divideButton.addEventListener('click', () => {
    divideButton.style.backgroundColor = 'orange'
    valueOperator = 'divide'
});

equalsButton.addEventListener('click', () => {
    divideButton.style.backgroundColor = originalOperatorButtonColour
    multiplyButton.style.backgroundColor = originalOperatorButtonColour
    subtractButton.style.backgroundColor = originalOperatorButtonColour
    plusButton.style.backgroundColor = originalOperatorButtonColour
    if(valueOne === '' || valueTwo === '' || valueOperator === 'a'){
        resultBox.textContent = 'Error. Please try again.'
        valueOne = ''
        valueTwo = ''
        valueOperator = 'a'

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
            valueOperator = 'a'
        }
        else {
            resultBox.textContent = result
            valueOne = result
            valueTwo = ''
            valueOperator = 'a'
        }
    }
};