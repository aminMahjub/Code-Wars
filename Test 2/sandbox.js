const opposite = realNumber => {
    let number = Math.trunc(+Number);
    let resualtNumber = Math.sign(number);

    switch (resualtNumber) {
        case -1:
            return Math.abs(number);
            break;
        case 1:
            return -number;
            break;
        case 0:
            return number;
            break;
        default:
            console.log('Your number is not valid');
    }
    
}

opposite(realNumber);

let oppositeTwo = realNumberTwo => {
    return number > 0 ? -number : Math.abs(number)
}

oppositeTwo(realNumberTwo);
