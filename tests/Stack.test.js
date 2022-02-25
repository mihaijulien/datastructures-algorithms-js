const { assert } = require('chai');
const { Stack } = require('../src/Stack.js');

describe('Stack Test', () => {
    describe('Test Methods', () => {
        let stack;
        beforeEach(() => {
            stack = new Stack();
        });
        it('New stack should have a length of 0', () =>{
            assert.equal(stack.size(), 0);
        });
        it('Push new item in the stack', () => {
            stack.push(1);
            assert.equal(stack.size(), 1);
        });
        it('Pop item should return last pushed item', () => {
            stack.push(1);
            stack.push(2);
            assert.equal(stack.pop(), 2);
        });
        it('Peek function should return last item', () => {
            stack.push('hi');
            stack.push('hello');
            assert.equal(stack.peek(), 'hello');
        })
        it('Clear stack function, stack should be empty', () => {
            stack.push(1);
            stack.push(2);
            stack.clear()
            assert.isTrue(stack.isEmpty());
        })
    })
})