// if the string already ends with a number. The number should be increment by 1
// if the string does not end with a number, the number 1 should be appended to the new string

const regExpNumbers = /[a-zA-Z]+/g;
const regExpString = /\d+/g;

const incrementString = (str) => {
    // get number to increment
    const number = str.replace(regExpNumbers, '');
    // get string without numbers
    const stringTemp = str.replace(regExpString, '');
    const result = number.length > 0 ? Number(number) + 1 : 1;
    let totalZeros = number.length > 0 ? countZeros(number) : 0;
    if(number.split('').pop() === '9') {
        totalZeros -= 1;
    }
    const newNumber = totalZeros > 0 ? `${'0'.repeat(totalZeros)}${result}` : `${result}`;
    return `${stringTemp}${newNumber}`;
}

const countZeros = (str) => {
    let count = 0;
    if(eval(str) === 0) {
       return count = str.length - 1;
    }
    str = str.split('');
    if(Array.isArray(str) && str.includes('0')) {
        for(const word of str) {
            count += (word === '0') ? 1 : 0;
        }
        return count;
    }
    return 0;
}

console.log(incrementString('foobar'));
console.log(incrementString('foobar099999'));
console.log(incrementString('foobar000'));
console.log(incrementString('foobar098'));
console.log(incrementString('foobar99'));
console.log(incrementString('s9'));