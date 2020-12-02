// create a function that takes an array of strings capitalize all strings and filter out any string that starts with the letter f.

// ['spot', 'rover', 'bingo', 'fred'] -> ['SPOT', 'ROVER', 'BINGO']

const capFil = (array) => {
   return array 
    .filter((item) => item.charAt(0) !== 'f')
    .map((item) => item.toUpperCase())
};


module.exports = {
    capFil
};
