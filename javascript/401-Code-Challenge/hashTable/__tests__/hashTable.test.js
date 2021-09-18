const Hashmap = require('../hashTable');


describe('hashtable', () => {
    let hashTable = new Hashmap(1024);
    hashTable.add('name', 'mayadah');
    hashTable.add('cat', 'catty');
    hashTable.add('act', 'jonny depp');

it('Adding a key/value to your hashtable results in the value being in the data structure', ()=>{
    expect(hashTable.contain('name')).toEqual(true);

});
it('Retrieving based on a key returns the value stored', ()=>{
       expect(hashTable.get('name')).toEqual('mayadah');
});
it('Successfully retrieve a value from a bucket within the hashtable that has a collision', ()=>{
    expect(hashTable.get('act')).toEqual('jonny depp');
});
it('Successfully retrieve a value from a bucket within the hashtable that has a collision', ()=>{
    expect(hashTable.hash('name')).toBe(951);
});
})




