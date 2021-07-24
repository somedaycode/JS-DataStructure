/*
 * 왼쪽 자식노드 인덱스 : 부모노드 인덱스 * 2
 * 오른쪽 자식노드 인덱스 : (부모노드 인덱스 * 2) + 1
 * 부모노드 인덱스 : 자식노드 / 2 소수점 버림
 */

export default class MaxHeap {
  constructor() {
    this.heap = [];
    this.heapSize = 0;
  }

  insert(value) {
    const heap = this.heap;

    if (this.heapSize === 0) {
      this.heapSize++;
      heap[this.heapSize] = value;
    } else {
      this.heapSize++;
      let childIdx = this.heapSize;
      heap[childIdx] = value;

      let parentIdx = parseInt(childIdx / 2);
      while (parentIdx > 0) {
        if (heap[parentIdx] < heap[childIdx]) {
          this.swap(parentIdx, childIdx);
          childIdx = parentIdx;
        } else break;

        parentIdx = parseInt(parentIdx / 2);
      }
    }
  }

  // return maxValue without changing tree
  peek() {
    return this.heap[1];
  }

  // remove maxValue and return it
  extract() {
    if (this.heapSize === 0) throw new Error('heap is empty');
    if (this.heapSize === 1) {
      this.heapSize--;
      return this.heap.pop();
    }

    const heap = this.heap;
    const maxNode = heap[1];
    heap[1] = heap.pop();
    this.heapSize--;

    let parent = 1;
    while (heap[this.leftNodeIdx(parent)] && heap[this.rightNodeIdx(parent)]) {
      let left = this.leftNodeIdx(parent);
      let right = this.rightNodeIdx(parent);

      if (heap[parent] < heap[left]) {
        this.swap(parent, left);
        parent *= 2;
      } else if (heap[parent] < heap[right]) {
        this.swap(parent, right);
        parent = parent * 2 + 1;
      } else break;
    }
    return maxNode;
  }

  swap(idxOne, idxTwo) {
    const heap = this.heap;
    [heap[idxOne], heap[idxTwo]] = [heap[idxTwo], heap[idxOne]];
  }

  leftNodeIdx(index) {
    return index * 2;
  }

  rightNodeIdx(index) {
    return index * 2 + 1;
  }

  size() {
    return this.heapSize;
  }
}

// test
const maxHeap = new MaxHeap();
maxHeap.insert(1);
maxHeap.insert(2);
maxHeap.insert(7);
maxHeap.insert(9);
console.log(maxHeap.peek()); // 9
console.log(maxHeap); // 9, 7, 2, 1
console.log(maxHeap.extract()); // 9
console.log(maxHeap); // 7, 1, 2
