class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(key) {
        let newNode = new Node(key);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.length++;
    }

    remove(key) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.key === key) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.length--;
                return current.key;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    isEmpty() {
        return this.length === 0;
    }

    indexOf(key) {

        let count = 0;
        let current = this.head;

        while (current != null) {
            if (current.key === key) {
                return count;
            }
            count++;
            current = current.next;
        }

        return -1;
    }

    clear() {
        this.head = null;
    }

    size(){
        return this.length;
    }

    printList() {
        let current = this.head;
        let strList = '';
        while (current) {
            strList += current.key + '-> ';
            current = current.next;
        }
        console.log(strList);
    }

    printListRecursive(){
        this.#printListRecursive(this.head);
    }

    #printListRecursive(node){
        if(!node){
            return;
        }
        console.log(node.key + ' ');
        this.#printListRecursive(node.next);
    }
}

class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

module.exports = {
    SinglyLinkedList
};
