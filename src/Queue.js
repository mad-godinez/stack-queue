class Node {
  constructor(value) {
    this.value = value;
    this.next = null;  // can only insert @ end, always next->null
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
	enqueue(value) {
		/*
				create new node init'd to value,
				if Q is empty {set new node as first}, 
				else {set current last node->next to new node}
				set new node as last
		*/
    const newNode = new Node(value);

    if (this.first) {
      this.last.next = newNode;
    } else {
      // Set the node of the queue's next pointer to be the new node
      this.first = newNode;
    }

    // Make the new node the last item on the queue
    this.last = newNode;
	}
	dequeue() {
		/*
				ensure only first can be removed,
				set first pointer to first->next, 
				if first pointer is also last {set last node to null}
				return removed value
		*/
    if (this.first) {
      const dequeued = this.first;

      // Update first pointer to point to the next node of the dequeued node
      this.first = dequeued.next;

      // If the dequeued node is the last node in the queue,
      // update the last pointer to point to `null`
      if (dequeued === this.last) {
        this.last = null;
      }

      return dequeued.value;
    }
  }
}