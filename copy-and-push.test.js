
const { copyPush } = require('./copy-and-push');
    
    // describe('triangulation', () => {
    //     it('triangulation', () => {
    //         const numbers = [1, 2, 3];
    //         const newArr = copyPush('method');

    //         expect(newArr).toEqual([1, 2, 3, 4]);
    //     })

    describe('copyPush', () => {
        const numbers = [1, 2, 3];

        it('copy array and push new ', () => {
            const newArr = copyPush(numbers, 4);
        
            expect(newArr).toEqual([1, 2, 3, 4]);
        });

        it('makes sure original array is same same', () => {
            expect(numbers)
                .toEqual([1, 2, 3])
        });

    });

// Write a test

// create your function, use push to add item to array and return array
// green, commit

// oops we were supposed to return a copy
// add another test that makes sure that the original array is unchanged

// update code, use spread to copy and append
// green, commit