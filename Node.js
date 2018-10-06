class Node {

    constructor(key, value) {

        // Private member variables
        let nodeKey = key;
        let nodeValue = value;
        let next = null;

        // Public member methods
        this.getNodeKey = () => nodeKey;

        this.getNodeValue = () => nodeValue;

        this.setNodeValue = value => nodeValue = value;

        this.getNext = () => next;

        this.setNext = (key, value) => next = new Node(key, value);
    }
}

module.exports = Node;