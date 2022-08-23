// It must start with hashtag
// All words must have-their first letter capitalized
// If the final result is longer than 140 chars it must return false
// IF the input or the result is an empty string it must return false.

const generateHashtag = (str) => {
    str = str.replace(/\s+/g, ' ').trim();
    if(str.length < 140 && str.length > 0) {
        str = str.split(' ');
        const newStr = [];
        for(const word of str) {
            const result = capitalize(word);
            newStr.push(result);
        }
        return `#${newStr.join('')}`;
    }
    return false;
}

const capitalize = (str) => {
    str = str.split('');
    str[0] = str[0].toUpperCase();
    return str.join('');
}

// console.log(generateHashtag('hola mundo'));
// console.log(generateHashtag('hola mundo fasdfa'));
// console.log(generateHashtag('este es un ejemplo'));
// console.log(generateHashtag('   saHola     Mundo    '));
// console.log(generateHashtag(''));
// console.log(generateHashtag(' '));
