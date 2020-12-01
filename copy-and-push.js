const copyPush = (numbers, num) => {
    const newArray = [...numbers, num];
    return newArray;
};

module.exports = {
    copyPush
};


// create a function that returns a new array with all the items in the original array and a new item pushed to the end.
// const numbers = [1, 2, 3];
// copyAndPush(numbers, 4) 
// return [1, 2, 3, 4];