"use strict";
class Queue {
    constructor() {
        this.list = [];
    }
    get lenght() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
while (queue.lenght > 0) {
    console.log(queue.dequeue());
}
