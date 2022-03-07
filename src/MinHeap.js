class MinHeap{
    constructor(){
        this.heap = [];
        this.length = 0;
    }

    insert(key){
        this.heap[this.length] = key;
        let currentItem = this.length;
        while(this.heap[this.getParent(currentItem)] > this.heap[currentItem]){
            let temp = this.heap[currentItem];
            this.heap[currentItem] = this.heap[this.getParent(currentItem)];
            this.heap[this.getParent(currentItem)] = temp;

            currentItem = this.getParent(currentItem);
        }

        this.length++;
    }

    delete(){
        if(this.isEmpty()){
            throw 'Heap is empty';
        } 

        this.heap[0] = this.heap[this.length];
        this.length--;
        this.heapify(0);
    }

    heapify(pos){
        let left = this.getLeftChild(pos);
        let right = this.getRightChild(pos);
        let smallest = pos;
        if(left < this.length && left < smallest){
            smallest = left;
        }
        if(right < this.length && right < smallest){
            smallest = right;
        }
        if(smallest != pos){
            let temp = pos;
            pos = smallest;
            smallest = pos;
            this.heapify(smallest);
        }
    }

    isLeaf(pos){
        return pos > this.heap.length / 2;
    }

    getParent(pos){
        return (pos - 1) / 2;
    }

    getLeftChild(pos){
        return 2 * pos + 1;
    }

    getRightChild(pos){
        return 2 * pos + 2;
    }

    isEmpty(){
        return this.length == 0;
    }

    size(){
        return this.length;
    }
}

module.exports = {
    MinHeap
};
