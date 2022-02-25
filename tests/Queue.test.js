const { assert } = require('chai');
const { Queue } = require('../src/Queue.js');

describe('Queue Test', () => {
    describe('Test Methods', () => {
        let queue;
        beforeEach(() => {
            queue = new Queue();
        });
        it('New queue should have a length of 0', () =>{
            assert.equal(queue.size(), 0);
        });
        it('Enqueue new item in the queue', () => {
            queue.enqueue(1);
            assert.equal(queue.size(), 1);
        });
        it('Deque item should return last enqueued item', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.dequeue();
            assert.equal(queue.peek(), 2);
        });
        it('Peek function should return last item', () => {
            queue.enqueue('hi');
            queue.enqueue('hello');
            assert.equal(queue.peek(), 'hi');
        });
        it('Clear queue function, queue should be empty', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.clear();
            assert.isTrue(queue.isEmpty());
        });
    });
});