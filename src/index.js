import { BinarySearchTreeNode, drawBinaryTree } from
'binary-tree-visualizer';

import lft from './leftNode';

const root = new BinarySearchTreeNode(100);

root.insert(lft);

drawBinaryTree(root, document.querySelector('canvas'));
