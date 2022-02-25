class Queue{
    constructor(){
        this.length = 0;
        this.queue = [];
    }

    enqueue(key){
        this.queue[this.length] = key;
        this.length++;
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        this.length--;

        return this.queue.shift();
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.queue[0];
    }

    isEmpty(){
        return this.length === 0;
    }

    size(){
        return this.length;
    }

    clear(){
        this.queue = [];
        this.length = 0;
    }
}

module.exports = {
    Queue
}