class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
  constructor(){
    this.head=null
  }
  addFront(value){
    if(this.head == null){
      this.head = new Node(value);
      return this;
    } else {
      var oldHead = this.head;
      this.head = new Node(value)
      this.head.next = oldHead;
      return this
    }
  }
  removeFront(){
    this.head = this.head.next
    return this
  }
  front(){
    return this.head.value
  }
  contains(value){
    let node = this.head
    while (node){
      if (node.value === value){
        return true
      }
      node = node.next
    }
    return false
  }
}