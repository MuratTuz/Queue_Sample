

/**
 * Some of functions of the class return 'OK' or 'NOT' instead of true or false because of
 * 0 (zero) can be used as a value. So that returning 0 (zero) may be processed wrongly as false 
 * in 'if' statements. 
 */

class Queue {
    constructor() {
        this.array = [];
        this.capacity = 12;
    }

    isEmpty() {
        return array.length > 0;
    }

    enQueue(element){
        if (this.array.length < this.capacity) {
            this.array.unshift(element);
            return 'OK';
        } 
        return 'NOT';       
    }

    deQueue() {
        if (this.array.length > 0) {
            return this.array.pop();
        } 
        return 'NOT'; 
    }

    getFront() {
        return this.array[this.array.length - 1];
    }

    getSize() {
        return this.array.length;
    }
}