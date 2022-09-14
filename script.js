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
var equalsButton = document.querySelector('#equals');
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
        if(bottomText.textContent == ''){
            bottomText.textContent += '0.';
            decimalButton.disabled = true;
        } else {
        bottomText.textContent += '.';
        decimalButton.disabled = true;
        }
});
clearButton.addEventListener('click', e => {
    bottomText.textContent = '';
    upperText.textContent = '';
    a = '';
    b = '';
    decimalButton.disabled = false;
});
backspaceButton.addEventListener('click', e => {
   bottomText.textContent.slice(0,-1);
});

plusButton.addEventListener('click', e => {
    if(a){
        b = Number(bottomText.textContent);
        // console.log('b = ' + b);
        upperText.textContent = add(a,b) + ' +';
        a = add(a,b);
        bottomText.textContent = '';
        // console.log('a = ' + a);
        decimalButton.disabled = false;
    }else{
        a = Number(bottomText.textContent);
        // console.log('a = ' + a);
        upperText.textContent = a + ' +';
        bottomText.textContent = '';
        decimalButton.disabled = false;
    }
});

minusButton.addEventListener('click', e => {
    if(a || a == 0 & a != ''){
        b = Number(bottomText.textContent);
        // console.log('b = ' + b);
        upperText.textContent = subtract(a,b) + ' -';
        a = subtract(a,b);
        bottomText.textContent = '';
        // console.log('a = ' + a);
        decimalButton.disabled = false;
    }else{
        a = Number(bottomText.textContent);
        // console.log('a = ' + a);
        upperText.textContent = a + ' -';
        bottomText.textContent = '';
        decimalButton.disabled = false;
    }
});

multiplyButton.addEventListener('click', e => {
    if(a){
        b = Number(bottomText.textContent);
        // console.log('b = ' + b);
        upperText.textContent = multiply(a,b) + ' *';
        a = multiply(a,b);
        bottomText.textContent = '';
        // console.log('a = ' + a);
        decimalButton.disabled = false;
    }else{
        a = Number(bottomText.textContent);
        // console.log('a = ' + a);
        upperText.textContent = a + ' *';
        bottomText.textContent = '';
        decimalButton.disabled = false;
    }
});

divideButton.addEventListener('click', e => {
    if(a){
        b = Number(bottomText.textContent);

        if (b != 0){
        // console.log('b = ' + b);
        upperText.textContent = divide(a,b) + ' ÷';
        a = divide(a,b);
        bottomText.textContent = '';
        // console.log('a = ' + a);
        decimalButton.disabled = false;
        } else {
            alert('Are you trying to create a black hole or something?');
            bottomText.textContent = '';
            b = '';
        }
    }else{
        a = Number(bottomText.textContent);
        // console.log('a = ' + a);
        upperText.textContent = a + ' ÷';
        bottomText.textContent = '';
        decimalButton.disabled = false;
    }
});

equalsButton.addEventListener('click', e =>{
    if(upperText.textContent == a + ' +'){
        // console.log('ASDASD')
        b = Number(bottomText.textContent);
        bottomText.textContent = add(a,b);
        upperText.textContent = '';
        a = '';
        b = '';
        decimalButton.disabled = false;
    } else if(upperText.textContent == a + ' -'){
        // console.log('ASDASD')
        b = Number(bottomText.textContent);
        bottomText.textContent = subtract(a,b);
        upperText.textContent = '';
        a = '';
        b = '';
        decimalButton.disabled = false;
    } else if(upperText.textContent == a + ' *'){
        // console.log('ASDASD')
        b = Number(bottomText.textContent);
        bottomText.textContent = multiply(a,b);
        upperText.textContent = '';
        a = '';
        b = '';
        decimalButton.disabled = false;
    } else if(upperText.textContent == a + ' ÷'){
        // console.log('ASDASD')
        b = Number(bottomText.textContent);

        if(b != 0){
        bottomText.textContent = divide(a,b);
        upperText.textContent = '';
        a = '';
        b = '';
        decimalButton.disabled = false;
        }
        else {
            alert('Are you trying to create a black hole or something?');
            bottomText.textContent = '';
            b = '';
        }
    } 
});

var displayNumbers = document.querySelector('#display').textContent

// var bottomTextInput  

var bottomText = document.querySelector('#bottom');

var upperText = document.querySelector('#upper');
// bottomText.textContent = 

// var displayValue = function (number){
    
// }