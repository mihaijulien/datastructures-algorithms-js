const { assert } = require('chai');
const { expect } = require('chai');
const { Node, BinarySearchTree } = require('../src/BinarySearchTree.js');

describe('Binary Search Tree Test', () => {
    let tree;
    before(() => {
        tree = new BinarySearchTree();
    });
    describe('Insert() method test', () => {
        it('Should insert new nodes to the tree', () => {
            expect(tree.insert(9)).to.be.instanceof(Node);
            expect(tree.insert(4)).to.be.instanceof(Node);
            expect(tree.insert(6)).to.be.instanceof(Node);
            expect(tree.insert(20)).to.be.instanceof(Node);
        });
    });
    describe('Remove() method test', () =>{
        it('Should remove nodes from the tree', () => {
            tree.remove(20);
            assert.equal(tree.lookup(20), -1);
        });
    });
});
