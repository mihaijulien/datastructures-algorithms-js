const { assert } = require('chai');
const { MyArray } = require('../src/Array.js');

describe('Array Test', () => {
    describe('Test Methods', () => {
        let arr;
        beforeEach(() => {
            arr = new MyArray();
        });
        it('New array should have a length of 0', () =>{
            assert.equal(arr.size(), 0);
        });
        it('Push new item in the array', () => {
            arr.push(1);
            assert.equal(arr.get(0), 1);
        });
        it('Pop last item in the array', () => {
            arr.push(1);
            arr.push(2);
            arr.pop();
            assert.equal(arr.get(arr.size()-1), 1);
        });
        it('Delete item at index', () => {
            arr.push(1);
            arr.push(2);
            arr.delete(0);
            assert.equal(arr.get(0), 2);
        });
    });
});