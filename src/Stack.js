class Stack{
    constructor(){
        this.length = 0;
        this.stack = [];
    }

    push(key){
        this.stack.push(key);
        this.length++;
    }

    pop(){
        if(this.isEmpty()){
            return 'Stack is empty';
        }

        this.length--;
        return this.stack.pop();
    }
    
    peek(){
        if(this.isEmpty()){
            return 'Stack is empty';
        }
        return this.stack[this.length - 1];
    }

    isEmpty(){
        return this.length === 0;
    }

    size(){
        return this.length;
    }

    clear(){
        this.stack = [];
        this.length = 0;
    }
}

module.exports = {
    Stack
};