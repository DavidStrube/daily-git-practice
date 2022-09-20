import Node from "./Node.js";

export default class Queue {
  constructor() {
    this.head = null; // Next node to be dequed
    this.tail = null; // Node to which you enque
  }
  enque(val) {
    let newNode = new Node(val);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    }
    return this;
  }
  deque() {
    if (this.head) {
      let dequedNode = this.head;
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        // There is only one node in queue
        this.head = null;
        this.tail = null;
      }
      dequedNode.next = null;
      return dequedNode;
    }
  }
}
