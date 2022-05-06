class Node{
	constructor(value, next){
		this.value = value;
		this.next = next;
	}
}
class Stack {
  constructor() {
    this.top = null;  // empty stack
  }
	push(value){
		/*
				create a new node,
				add data to new node, 
				set top pointer to new node
		*/
		this.top = new Node(value, this.top);
    return this;
	}
	pop(){
		/*
				reference the node at the top,
				set top pointer to node below, 
				optional: return popped node's value
		*/
		const nodeToPop = this.top; 
		this.top = nodeToPop.next;
		return nodeToPop.value; 
	}
}