class Queue {
  constructor() {
    this.store = {};
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    if (this.front === null && this.back === null) {
      const start = 0;
      this.front = start;
      this.back = start;
      this.store[start] = value;
    } else {
      this.front++;
      this.store[this.front] = value;
    }
  }

  dequeue() {
    if (this.front === null) throw new Error('value not existed in queue');
    const value = this.store[this.front];
    delete this.store[this.front];

    if (this.front === this.back) {
      this.front = null;
      this.back = null;
    } else this.front--;

    return value;
  }

  size() {
    return this.front + 1;
  }
}

// TEST
const max = 100000;
const queue = new Queue();
const arr = [];

//push, pop
console.time('push');
for (let i = 0; i < max; i++) {
  arr.push(i);
}
console.timeEnd('push');

// myQueue
console.time('shift');
for (let i = 0; i < max; i++) {
  arr.shift();
}
console.timeEnd('shift');

console.log('--------------');

console.time('myQueue-enqueue');
for (let i = 0; i < max; i++) {
  queue.enqueue(i);
}
console.timeEnd('myQueue-enqueue');

console.time('myQueue-dequeue');
for (let i = 0; i < max; i++) {
  queue.dequeue();
}
console.timeEnd('myQueue-dequeue');

/*
 * Result
 * push: 6.986ms
 * shift: 1.886s
 * --------------
 * myQueue-enqueue: 6.264ms
 * myQueue-dequeue: 2.05ms
 */
