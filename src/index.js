import { BinarySearchTreeNode, drawBinaryTree } from
'binary-tree-visualizer';

const root = new BinarySearchTreeNode(100);
drawBinaryTree(root, document.querySelector('canvas'));
