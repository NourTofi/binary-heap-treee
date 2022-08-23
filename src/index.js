// import { BinaryTreeNode, drawBinaryTree } from
//     'binary-tree-visualizer';
import sort from "./sort";

// The tree.
let nodes = [null, 10, 14, 12, 9, 5, 4];
sort(nodes);


// To draw our heap tree.
// function drawTree() {
//     sort();
//     let count = 0;
//     let root = new BinaryTreeNode(nodes[1]);
//     for (let node = 2; node < nodes.length; node++) {

//         if (node % 2 === 0) {
//             root.setLeft(new BinaryTreeNode(nodes[node]));
//             if (count === 2) {
//                 root.left.setLeft(new BinaryTreeNode(nodes[4]));

//             }
//             count++;
//         }
//         else if (node % 2 !== 0) {
//             root.setRight(new BinaryTreeNode(nodes[node]));
//             count++;
//         }
//     }
//     drawBinaryTree(root, document.querySelector('canvas'));
// }

// drawTree();

// for (let i = 1; i < nodes.length; i++) {

//     console.log(nodes[i]);
// }
