


function sort(nodes) {
    // To make the node is the root.
    function swap(node, root) {
        let temp = nodes[node];
        nodes[node] = nodes[root];
        nodes[root] = temp;
    }
    //this function for reomve the number which inserted before.
    function double() {
        for (let node = 0; node < nodes.length; node++) {
            if (nodes[node - 1] === nodes[nodes.length - 1]) {
                nodes.pop();
            }
        }
    }
    // Sorting the list as binary heap tree.
    function minHeap() {
        double();
        // Walk at all the nodes.
        for (let theNode = 1; theNode < nodes.length; theNode++) {
            let node = theNode;
            let flag = true;
            // Check if the root is smaller than the child , and swap it if it not.
            while (true) {
                let numberLeftChild = node * 2;//the index of lift child.
                let numberRightChild = (node * 2) + 1;// the index of right child.
                let numberOfRoot = Math.trunc((node * 2) / 2);// the index of the root.
                let leftChild = nodes[numberLeftChild];
                let rightChild = nodes[numberRightChild];
                let root = nodes[numberOfRoot];
                // To check the left child of the root.
                if (leftChild < root) {
                    swap(numberLeftChild, numberOfRoot);
                    // To make the node is the root and check if it the new root.
                    node = node / 2;
                }
                // To check the right child of the root.
                else if (rightChild < root) {
                    swap(numberRightChild, numberOfRoot);
                    // To make the node is the root and check if it the new root.
                    node = node / 2;
                }
                // to make sure that the right child is the biggest could be.
                else if (flag) {
                    flag = false;
                    node = theNode;
                }
                // If it is the smallest then go to the next root;
                else {
                    break;
                }
            }
        }
    }
    minHeap();
    for(let i =0;i<nodes.length;i++){
        console.log(nodes[i]);
    }

}

export default sort;