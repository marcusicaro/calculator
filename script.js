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

console.log(operate(divide,4,6))