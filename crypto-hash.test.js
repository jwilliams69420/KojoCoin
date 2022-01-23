const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {

    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('Brah'))
            .toEqual('f5ff81985ffbb1052b6b112fd81b978d14a2b7653e9ae0538c4ce22fb5212d12')
    });

    it('produces the same hash with the same input arguements in any order', () => {
        expect(cryptoHash('one', 'two', 'three'))
            .toEqual(cryptoHash('three', 'one', 'two'));
    });
})