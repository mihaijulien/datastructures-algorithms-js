const { assert } = require('chai');
const { SinglyLinkedList } = require('../src/SinglyLinkedList.js');

describe('LinkedList Test', () => {
    describe('Test Methods', () => {
        let list;
        beforeEach(() => {
            list = new SinglyLinkedList();
        });
        it('New list should have a length of 0', () =>{
            assert.equal(list.size(), 0);
        });
        it('Insert new item in the list', () => {
            list.insert(1);
            assert.equal(list.size(), 1);
        });
        it('Remove element in the list', () => {
            list.insert(1);
            list.insert(2);
            list.remove(1);
            assert.equal(list.size(), 1);
        });
        it('Get indexOf an element', () => {
            list.insert(1);
            list.insert(2);
            assert.equal(list.indexOf(1), 0);
        })
    })
})