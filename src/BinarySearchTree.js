class BinarySearchTree {
    construct() {
        this.root = null;
    }

    insert(value) {
        this.root = this.#insert(this.root, value);
        return this.root;
    }

    #insert(node, value) {
        if (node == null) {
            return new Node(value);
        }

        if (node.value > value) {
            node.left = this.#insert(node.left, value);
        } else if (node.value < value) {
            node.right = this.#insert(node.right, value);
        } else {
            return node;
        }
        return node;
    }

    remove(value) {
        this.#remove(this.root, value);
    }

    #remove(node, value) {
        if (node == null) {
            return node;
        } else if (node.value > value) {
            node.left = this.#remove(node.left, value);
        } else if (node.value < value) {
            node.right = this.#remove(node.right, value);
        } else {
            if (node.left == null) {
                return node.right;
            } else if (node.right == null) {
                return node.left;
            }

            node = this.#findMin(node.right);
            node.right = this.#remove(node.right, node.value);
        }
    }

    #findMin(node){
        if(node.left == null){
            return node;
        }
        return this.#findMin(node.left);
    }


    lookup(value) {
        let node = this.root;
        while (node) {
            if (node.value == value) {
                return value;
            } else if (node.value > value) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return -1;
    }
}


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

module.exports = {
    Node, BinarySearchTree
}
