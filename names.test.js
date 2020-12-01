const { getName } = require('./name');

// describe('triangulation', () => {
//     it('gets name out of object', () => {
//         const name = getName('method');

//         expect(name).toEqual('spot')
//     });

    // -----------------------------------------
describe('getName', () => {
    it('takes an object and returns the name', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    
        const name = getName(spot);

        expect(name).toEqual('spot');
    })
});