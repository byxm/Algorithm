class Queue {
  private Queue: Array<any>;

  constructor() {
    this.Queue = [];
  }

  getSize() {
    return this.Queue.length;
  }

  enqueue(queue) {
    this.Queue.push(queue);
  }

  dequeue() {
    return this.Queue.shift();
  }

  getFront() {
    return this.Queue[0];
  }

  isEmpty() {
    return this.Queue.length === 0;
  }

  toString() {
    return this.Queue;
  }
}

export default Queue;
