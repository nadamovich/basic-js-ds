const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
		this.listNode = new ListNode();
	}
    
  getUnderlyingList() {
    return this.listNode
  }

  enqueue(value) {
    let listNode = this.listNode;
    while (listNode.next) { 
        listNode = listNode.next;
    }
    listNode.value? listNode.next = new ListNode(value) : listNode.value = value
  }

  dequeue() {
    const listNode = this.listNode; 
    listNode.next? this.listNode = this.listNode.next : listNode = new ListNode()
    return listNode.value;
  }
}

module.exports = {
  Queue
};
