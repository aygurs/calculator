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

oneButton.addEventListener('click', () => {
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
    valueOperator = 'divide'
    //Eventually change CSS to make button change colour when an operator is pressed
})

equalsButton.addEventListener('click', () => {
    operate()
})

function divide() {
    return valueOne / valueTwo
}

function operate(){
    if(valueOperator === 'divide') {
        result = divide()
        resultBox.textContent = result
        console.log(result)
        valueOne = result
        valueTwo = ''
        valueOperator = 'a'
    }
}