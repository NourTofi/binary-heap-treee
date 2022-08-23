
function sort(nodes) {

    // To make the node is the root.
    function swap(node, root) {
        let temp = nodes[node];
        nodes[node] = nodes[root];
        nodes[root] = temp;
    }

    // This function to remove the wish have been inserted before.
    function double() {
        for (let node = 0; node < nodes.length; node++) {
            if (nodes[node - 1] === nodes[nodes.length - 1]) {
                nodes.pop();
            }
        }
    }

    // Sorting the list as binary heap tree.
    function minHeapTree() {
        double();

        // Walk at all the nodes.
        for (let theNode = 1; theNode < nodes.length; theNode++) {
            let node = theNode;
            let flag = true;

            // Check if the root is smaller than the child , and swap it if it not.
            while (true) {
                let numberLeftChild = node * 2; // The index of left child.
                let numberRightChild = (node * 2) + 1; // The index of right child.
                let numberOfRoot = Math.trunc((node * 2) / 2); // The index of the root.
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

                // To make sure that the right node is the biggest node could be.
                else if (flag) {
                    flag = false;
                    node = theNode;
                }

                // If it is the smallest then go to the next root.
                else {
                    break;
                }
            }
        }
    }

    minHeapTree();
    
    // Printing the list.
    for (let i = 1; i < nodes.length; i++) {

        console.log(nodes[i]);
    }

}
export default sort;