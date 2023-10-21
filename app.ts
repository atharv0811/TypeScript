const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResullt: Array<number> = [];
const textResult: string[] = [];

type NumOrString = number | string;
type Result = { val: number; timestmp: Date }

interface ResultObj {
    val: number;
    timestmp: Date
}

function add(num1: NumOrString, num2: NumOrString) {
    if (typeof num1 === 'number' && typeof num2 == 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 == 'string') {
        return num1 + '' + num2;
    }
    return +num1 + +num2
}


function printResult(resultObj: ResultObj) {
    console.log(resultObj.val)
}
buttonElement.addEventListener('click', () => {
    const result = add(+num1Element.value, +num2Element.value);
    numResullt.push(result as number);
    const stringResult = add(num1Element.value, num2Element.value)
    textResult.push(stringResult as string);
    printResult({ val: result as number, timestmp: new Date() })
    console.log(result)
    console.log(stringResult)
    console.log(numResullt);
    console.log(stringResult);
}
)
// The generic type is a type which interact with never type and the array is of never type so the array can be a generaic type

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("hello")
    }, 1000)
})

myPromise.then((result) => {
    console.log(result.split('e'));
})