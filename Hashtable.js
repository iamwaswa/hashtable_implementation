const Node = require(`./Node`);

class HashTable{

    constructor(size = 10){

        // Constants
        const SIZE = size;
        const array = new Array(SIZE);
        const MULTIPLIER = Math.trunc(Math.random() * SIZE) + 1;

        // Private member methods
        function addToEndOfLinkedList(currentNode, key, value){

            let parentNode;

            do {

                parentNode = currentNode;

                if(parentNode.getNodeKey() === key){
                    parentNode.setNodeValue(value);
                    return;
                }

                currentNode = currentNode.getNext();

            } while(currentNode !== null);

            parentNode.setNext(new Node(key, value));
        }

        function addToArray(index, key, value){
            if(array[index] === undefined){
                array[index] = new Node(key, value);
            } else {
                addToEndOfLinkedList(array[index], key, value);
            }
        }

        function calculateHashCode(key){

            return key.split(``).reduce((hashCode, character) => {
                hashCode += Math.pow(character.charCodeAt(0), MULTIPLIER);
                return hashCode;
            }, 0);
        }

        function calculateIndex(key){
            return calculateHashCode(key) % SIZE;
        }

        function addNewEntry(key, value){

            let index = calculateIndex(key);
            addToArray(index, key, value);
        }

        function printKeyDoesNotExistMessage(key){
            console.log(`The key: [${key}] does not exist`);
            return null;
        }

        function searchForKeyInLinkedList(index, key){
            
            let currentNode = array[index];
            while(currentNode !== null){

                if(currentNode.getNodeKey() === key){
                    return currentNode.getNodeValue();
                }

                currentNode = currentNode.getNext();
            }

            return printKeyDoesNotExistMessage(key);
        }

        function getNodeValueFromArray(index, key){
            if(array[index] === undefined){
                return printKeyDoesNotExistMessage(key);
            } else {
                return searchForKeyInLinkedList(index, key);
            }
        }

        function retreieveValueForKey(key) {

            let index = calculateIndex(key);
            return getNodeValueFromArray(index, key);
        }

        // Public member variables
        this.put = (key, value) => addNewEntry(key, value);

        this.get = key => retreieveValueForKey(key);
    }
}

module.exports = HashTable;