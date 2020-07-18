class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null
    }
    addFront(value) {
        if (this.head == null) {
            this.head = new Node(value);
            return this;
        } else {
            var oldHead = this.head;
            this.head = new Node(value)
            this.head.next = oldHead;
            return this
        }
    }
    removeFront() {
        this.head = this.head.next
        return this
    }
    front() {
        return this.head.value
    }
    contains(value) {
        let node = this.head
        while (node) {
            if (node.value === value) {
                return true
            }
            node = node.next
        }
        return false
    }
    length() {
        let runner = this.head
        let counter = 0
        while (runner) {
            counter++
            runner = runner.next
        }
        return counter
    }

    display() {
        let runner = this.head
        let counter = 0
        while (runner) {
            console.log(`You are at node ${counter}, and the value is ${runner.value}`)
            counter++
            runner = runner.next
        }
        return this
    }

    maxMinAvg() {
        var sum = 0;
        var max = this.head.value;
        var min = this.head.value;
        var runner = this.head;
        while (runner) {
            sum += runner.value;
            if (runner.value > max) {
                max = runner.value;
            } else if (runner.value < min) {
                min = runner.value;
            }
            runner = runner.next
        }
        return `max: ${max}, min: ${min}, avg: ${sum/this.length()}`
    }
    back() {
        var runner = this.head;
        while(runner.next) {
            runner = runner.next
        }
        return runner.value
    }
    removeBack() {
        var runner = this.head;
        while(runner.next.next) {
            runner = runner.next
        }
        runner.next = null;
        return this
    }
    addBack(value) {
        var runner = this.head;
        while(runner.next) {
            runner = runner.next
        }
        runner.next = new Node(value);
        return this
    }
}