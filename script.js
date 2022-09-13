var a = '';
var b = '';

var add = function(a,b){
    return a + b
}

var subtract = function(a,b){
    return a - b
}

var multiply = function(a,b){
    return a * b
}

var divide = function(a,b){
    return a / b
}

var operate = function (operator, a, b){
    if (operator == add){
        return add(a,b)
    } else if (operator == subtract) {
        return subtract(a,b)
    } else if (operator == multiply) {
        return multiply(a,b)
    } else {
        return divide(a,b)
    }
}

var oneButton = document.querySelector('#one');
var twoButton = document.querySelector('#two');
var threeButton = document.querySelector('#three');
var fourButton = document.querySelector('#four');
var fiveButton = document.querySelector('#five');
var sixButton = document.querySelector('#six');
var sevenButton = document.querySelector('#seven');
var eightButton = document.querySelector('#eight');
var nineButton = document.querySelector('#nine');
var zeroButton = document.querySelector('#zero');
var decimalButton = document.querySelector('#decimal');
var clearButton = document.querySelector('#clear');
var backspaceButton = document.querySelector('#backspace');
var plusButton = document.querySelector('#plus');
var minusButton = document.querySelector('#minus');
var divideButton = document.querySelector('#divide');
var multiplyButton = document.querySelector('#multiply');

oneButton.addEventListener('click', e => {
    bottomText.textContent += '1';
});
twoButton.addEventListener('click', e => {
    bottomText.textContent += '2';
});
threeButton.addEventListener('click', e => {
    bottomText.textContent += '3';
});
fourButton.addEventListener('click', e => {
    bottomText.textContent += '4';
});
fiveButton.addEventListener('click', e => {
    bottomText.textContent += '5';
});
sixButton.addEventListener('click', e => {
    bottomText.textContent += '6';
});
sevenButton.addEventListener('click', e => {
    bottomText.textContent += '7';
});
eightButton.addEventListener('click', e => {
    bottomText.textContent += '8';
});
nineButton.addEventListener('click', e => {
    bottomText.textContent += '9';
});
zeroButton.addEventListener('click', e => {
    bottomText.textContent += '0';
});
decimalButton.addEventListener('click', e => {
    bottomText.textContent += '.';
});
clearButton.addEventListener('click', e => {
    bottomText.textContent = '';
});
backspaceButton.addEventListener('click', e => {
   bottomText.textContent.slice(0,-1);
});
plusButton.addEventListener('click', e => {
    if(a){
        b = Number(bottomText.textContent);
        // console.log('b = ' + b);
        upperText.textContent = add(a,b) + '+';
        a = add(a,b);
        bottomText.textContent = '';
        // console.log('a = ' + a);
    }else{
        a = Number(bottomText.textContent);
        // console.log('a = ' + a);
        upperText.textContent = a + '+';
        bottomText.textContent = '';
    }
});


var displayNumbers = document.querySelector('#display').textContent

// var bottomTextInput  

var bottomText = document.querySelector('#bottom');

var upperText = document.querySelector('#upper');
// bottomText.textContent = 

// var displayValue = function (number){
    
// }