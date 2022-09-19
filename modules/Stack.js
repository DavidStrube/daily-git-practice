import Node from "./Node.js";

export default class Stack {
  constructor() {
    this.head = null;
  }
  push(val) {
    this.head = new Node(val, this.head);
  }
  pop() {
    if (this.head) {
      let removedNode = this.head;
      this.head = this.head.next;
      return removedNode;
    }
    return null;
  }
  peek() {
    return this.head.val;
  }
}
