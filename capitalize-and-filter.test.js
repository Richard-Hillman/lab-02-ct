// Write a test
// create a function, use a for loop to get test to pass
// green, commit
// refactor, use array methods to instead of a for loop
// fetchQuotes


const { capFil} = require('./capitalize-and-filter');
    
    // describe('triangulation', () => {
    //     it('triangulation', () => {
    //        
    //         .toEqual(['SPOT', 'ROVER', 'BINGO']);
    //     })

    describe('capFil', () => {
        const names = ['spot', 'rover', 'bingo', 'fred'];

        it('takes an array of strings capitalize all strings and filter out any string that starts with the letter f', () => {
            const newArr = capFil(names);
        
            expect(newArr).toEqual(['SPOT', 'ROVER', 'BINGO']);
        });

    });