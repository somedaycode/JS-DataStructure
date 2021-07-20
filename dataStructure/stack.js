class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(newData) {
    this.data[this.top] = newData;
    this.top++;
  }

  pop() {
    if (this.top <= 0) throw new Error('stack is empty!');
    this.top--;
    this.data = this.data.slice(0, this.top);
  }

  size() {
    return this.top;
  }
}
