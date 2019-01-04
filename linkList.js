class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LinkList {
	constructor() {
		this.head = new Node('head')
        this.length = 0;
	}
	insert(element, item) {
		const newNode = new Node(element);
		const currentNode = this.find(item);
		newNode.next = currentNode.next;
		currentNode.next = newNode;
        this.length++
	}
	display() {
		let currentNode = this.head;
		while(!(currentNode.next == null)) {
			currentNode = currentNode.next;
		}
	}
	find(item) {
		let currentNode = this.head;
		while (currentNode.element !== item)
			currentNode = currentNode.next;
		return currentNode;
	}
    getLength() {
        console.log('the linkList`s length is ', this.length)
        return this.length
    }
    remove() {
        if (this.length === 0) {
            return false;
        }
        if (this.length === 1) {
            this.head = null;
            this.length--;
        }
        let currentNode = this.head;
        let previousNode;
        while (currentNode.next !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
        this.length--;
        return true;
    }
    removeAt(item) {
        let currentNode = this.head;
        let previousNode;
        while (currentNode.element !== item) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
        this.length--;
        return true;
        
    }
}
let linkList = new LinkList();
linkList.insert('abc', 'head')
linkList.insert('abc1', 'abc')
linkList.insert('abc2', 'abc1')
linkList.display()
linkList.removeAt('abc2');
linkList.display()
module.exports = LinkList;