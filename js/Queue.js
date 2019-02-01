




class Queue {
    constructor() {
        this.array = [];
        this.capacity = 20;
    }

    isEmpty() {
        return !(this.array.length > 0);
    }

    enQueue(element){
        if (this.array.length < this.capacity) {
            return this.array.unshift(element); // returns new length of the array
        }     
    }

    deQueue() {
        return this.array.pop(); // returns undefined if array is empty
    }

    getFront() {
        return this.array[this.array.length - 1];
    }

    getSize() {
        return this.array.length;
    }

    isFull() {
        return !(this.array.length < this.capacity)
  
    }
}