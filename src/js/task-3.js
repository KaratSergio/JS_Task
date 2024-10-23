//*Stacks LIFO — (Last In, First Out)

const stack = [];
stack.push('a');
stack.push('b');
stack.push('c');

// console.log(stack);
// [LOG] Array [ a, b, c ]

// console.log(stack.pop());
// [LOG] "c"

// console.log(stack);
// [LOG] Array [ a, b ]

//*Peek (або Top)

function peek(stack) {
  return stack[stack.length - 1];
}

// console.log(peek(stack));
// [LOG] "c"

function isEmpty(stack) {
  return stack.length === 0;
}

// console.log(isEmpty(stack));
// [LOG] false

class Stack {
  constructor() {
    this.stack = [];
  }

  //add item in stack
  push(item) {
    this.stack.push(item);
  }

  //delete item in stack
  pop() {
    if (this.stack.length < 1) {
      return null;
    }
    return this.stack.pop();
  }

  //check stack isEmpty

  isEmpty() {
    return this.stack.length === 0;
  }

  //View the top item of the stack without removing it

  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    }
  }
}

const s = new Stack();
s.push('x');
s.push('y');
s.push('z');

// console.log(s.peek());
// [LOG] "z"

// console.log(s.pop());
// [LOG] "z"

// console.log(s.peek());
// [LOG] "y"

// console.log(s.isEmpty());
// [LOG] false
