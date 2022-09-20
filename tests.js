import Node from "./modules/Node.js";
import Stack from "./modules/Stack.js";
import Queue from "./modules/Queue.js";

export default function runTests() {
  let myStack = new Stack();

  [11, 22, 33, 44, 55].forEach((elem) => {
    myStack.push(elem);
  });
  console.log(myStack);

  let n1 = new Node("a");
  n1.next = new Node("b");
  console.log(n1.val);
  console.log(n1.next.val);

  console.log(myStack.head.val);
  console.log(myStack.head.next.val);

  let myQueue = new Queue();
  ["q1", "q2", "q3", "q4"].forEach((elem) => {
    myQueue.enque(elem);
  });

  let _Dave = {};
  _Dave.times = (callback, numTimesToCallFunction) => {
    for (let i = 0; i < numTimesToCallFunction; i++) callback();
  };

  _Dave.times(() => {
    console.log(myQueue.deque());
  }, 6);
}
