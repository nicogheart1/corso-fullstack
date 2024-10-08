export const numberIsEven = (num) => {
    return num % 2 === 0;
}

export const numberIsOdd = (num) => {
    return num % 2 !== 0;
}

export const printTimeStamp = () => new Date().toLocaleDateString();