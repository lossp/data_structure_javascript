class Node {
	constructor(value) {
		this.element = value;
		this.next = null;
		this.previous = null;
	}
}

class BidirectionalLinkList {
	constructor() {
		this.head = new Node('head');
		this.length = 0;
	}
	insert(newElemen,item) {
		const newNode = new Node(newElemen);
		const currentNode = this.find(item);
		newNode.next = currentNode.next;
		newNode.previous = currentNode;
		currentNode.next = newNode;
	}
	find(item) {
		let currentNode = this.head;
		while(currentNode.element !== item) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}
	display() {
		let currentNode = this.head;
		while(currentNode.next) {
			console.log('currentNode.next.element is ', currentNode.next.element);
			currentNode = currentNode.next;
		}
	}
	remove(item) {
		const currentNode = this.find(item);
		if (currentNode.next) {
			currentNode.previous.next = currentNode.next;
			currentNode.next.previous = currentNode.previous;
			currentNode.next = null;
			currentNode.previous = null;
			return true;
		}
	}
	findLast() {
		let currentNode = this.head;
		while (currentNode.next) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}
	displayReverse() {
		let currentNode = this.findLast();
		while (currentNode.previous) {
			console.log('currentNode.element is ', currentNode.element);
			currentNode = currentNode.previous;
		}
	}
}

module.exports = BidirectionalLinkList;