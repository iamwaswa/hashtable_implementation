const HashTable = require(`./Hashtable`);

let hashTable = new HashTable();
hashTable.put(`Waswa`, 21);
hashTable.put(`Waswa`, 22);
console.log(hashTable.get(`Waswa`));