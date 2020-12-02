// create a function that takes an array of strings capitalize all strings and filter out any string that starts with the letter f.

// ['spot', 'rover', 'bingo', 'fred'] -> ['SPOT', 'ROVER', 'BINGO']

const capFil = (array) => {
    const newArray = []
    for(let i= 0; i < array.length; i++) {
        if(array[i].charAt(0) !== 'f') {
            newArray[newArray.length] = array[i].toUpperCase();
        }
    };
    return newArray;
};


module.exports = {
    capFil
};
