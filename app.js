"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResullt = [];
const textResult = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 == 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 == 'string') {
        return num1 + '' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const result = add(+num1Element.value, +num2Element.value);
    numResullt.push(result);
    const stringResult = add(num1Element.value, num2Element.value);
    textResult.push(stringResult);
    printResult({ val: result, timestmp: new Date() });
    console.log(result);
    console.log(stringResult);
    console.log(numResullt);
    console.log(stringResult);
});
// The generic type is a type which interact with never type and the array is of never type so the array can be a generaic type
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('e'));
});
