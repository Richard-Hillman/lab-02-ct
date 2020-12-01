const { getName } = require('./name');

// describe('triangulation', () => {
//     it('triangulation', () => {
//         const name = getName('method');

//         expect(name).toEqual('spot')
//     });

    // -----------------------------------------
describe('getName', () => {
    it('takes an object and returns the name', () => {
        const spot = [{ name: 'spot', age: 5, weight: '20 lbs' }];
    
        const name = getName({ name: 'spot', age: 5, weight: '20 lbs' });

        expect(name).toEqual('spot');
    })
});

// Write a test
// create your function, use bracket notation to get the objects name property
// pass tests and commit (done)

// refactor, use dot notation to get the objects name
// tests stay green, commit

// refactor, destructure to get the objects name
// tests stay green, commit

// refactor, destructure function parameters and return name
// tests stay green, commit