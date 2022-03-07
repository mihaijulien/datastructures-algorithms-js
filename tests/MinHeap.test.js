const { assert } = require('chai');
const { MinHeap } = require('../src/MinHeap.js');

describe('MinHeap Test', () => {
    describe('Test Methods', () => {
        let minheap;
        beforeEach(() => {
            minheap = new MinHeap();
        });
        it('New heap should have a length of 0', () =>{
            assert.equal(minheap.size(), 0);
        });
        it('Insert new item in the heap', () => {
            minheap.insert(1);
            assert.equal(minheap.size(), 1);
        });
        it('Delete item in the heap', () => {
            minheap.insert(1);
            minheap.delete();
            assert.equal(minheap.size(), 0);
        });
    });
});