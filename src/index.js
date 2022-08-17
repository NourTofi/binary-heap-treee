// import { BinarySearchTreeNode, drawBinaryTree } from
//     'binary-tree-visualizer';

// The tree.
let nodes = [null, 10, 14, 12, 9];

// To make the node is the root.
function swap(node, root) {
    temp = node;
    node = root;
    root = temp;
}
function sort() {
    // Walk at all the nodes.
    for (let theNode = 1; theNode < nodes.length; theNode++) {
        let node = theNode;
        // Check if the root is smaller than the child , and swap it if it not.
        while (true) {
            let leftChild = nodes[node * 2];
            let rightChild = nodes[(node * 2) + 1];
            let root =nodes[Math.trunc(node / 2)];
            // To check the left child of the root.
            if (leftChild < root) {
                //swap(leftChild, root);
                [nodes[node*2], nodes[Math.trunc(node/2)]] = [nodes[Math.trunc(node/2)], nodes[node*2]];
                
                // To make the node is the root and check if it the new root.
                node = node / 2;
            }
            // To check the right child of the root.
            else if (rightChild < root) {
              //  swap(rightChild, root);
               [nodes[(node*2)+1], nodes[Math.trunc(node/2)]] = [nodes[Math.trunc(node/2)], nodes[(node*2)+1]];
                // To make the node is the root and check if it the new root.
                node = root;
            }
            // If it is the smallest then go to the next root;
            else {
                break;
            }
        }
    }

}
sort();
for(i=1; i<nodes.length;i++){
console.log(nodes[i]);
}

// const root = new BinarySearchTreeNode(100);


// drawBinaryTree(root, document.querySelector('canvas'));
