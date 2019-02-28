// Exercise 2
// Stacks and Queues with Linked Lists
/*
 * Instructions:
 * 1) Implement the push and pop operataions of stacks and
 * 2) Implement the queue (push counterpart) and dequeue(pop counterpart) of queues
 * using linked lists. Feel free to research!
 * 
 * Reference: 
 * https://www.geeksforgeeks.org/data-structures/linked-list/
*/

// Node Object Declaration
// Remember that nodes are your atomic units of operation!
let Node = function(val){
	this.val = val;
	this.next = undefined;
}

// Stack Object Declaration
let Stack = function(startNode){
	// Declare your pointer to the head node
	// The head node represents the start of your list
	// The lists ends if the last node is considered undefined
	this.head = startNode;
}

// Adding the push operation to the Stack Object
Stack.prototype.push = function(x){

	// Implement the push algorithm here
	newnode = new Node(x);

	if (this.head == undefined) {
		this.head = newnode;
	}else{
		let node = this.head;
		while(node.next != undefined){
			node = node.next;
		}
		node.next = newnode;
	}

	// Return the pushed value for confirmation
	return x;

}

// Adding the pop operation to the Stack Object
Stack.prototype.pop = function(){
	
	// Implement the pop algorithm here
	x = undefined;
	if (this.head == undefined) {
		return x;
	}else if(this.head.next == undefined){
		x = this.head.val;
		this.head = undefined;
		return x;
	}else{
		let node = this.head
		while(node.next.next != undefined){
			node = node.next
		}
		x = node.next.val
		node.next = undefined
	}	

	// Return the popped value
	return x;

}

Stack.prototype.list = function(){
	let node = this.head;
	linkedlist = ""
	while(node != undefined){
		linkedlist += "("+node.val+") -> "
		node = node.next;
	}
	linkedlist += node;
	return linkedlist;
}
// Queue Object Declaration
let Queue = function(startNode){
	// Declare your pointer to the head node
	// The head node represents the start of your list
	// The lists ends if the last node is considered undefined
	this.head = startNode;
}

// Adding the enqueue operation to the Queue Object
Queue.prototype.enqueue = function(x){

	// Implement the push algorithm here
	newnode = new Node(x);

	if (this.head == undefined) {
		this.head = newnode;
	}else{
		let node = this.head;
		while(node.next != undefined){
			node = node.next;
		}
		node.next = newnode;
	}

	// Return the pushed value for confirmation
	return x;

}

// Adding the dequeue operation to the Queue Object
Queue.prototype.dequeue = function(){

	// Implement the pop algorithm here
	x = undefined;
	if (this.head == undefined) {
		return x;
	}else{
		x = this.head.val;
		this.head = this.head.next;
	}

	// Return the popped value
	return x;
}

Queue.prototype.list = function(){
	let node = this.head;
	linkedlist = ""
	while(node != undefined){
		linkedlist += "("+node.val+") -> "
		node = node.next;
	}
	linkedlist += node;
	return linkedlist;
}

// Instantiate your Stack and Queue with Nodes!
// Any value should be fine
let s = new Stack(new Node(3));

let q = new Queue(new Node(5));

console.log("===================STACK===================")
console.log(s.list());
s.push(7);
console.log(s.list());
s.push(1);
console.log(s.list());
s.push(5);
console.log(s.list());
s.push(12);
console.log(s.list());
s.pop();
console.log(s.list());
s.pop();
console.log(s.list());
s.pop();
console.log(s.list());
s.pop();
console.log(s.list());
s.pop();
console.log(s.list());

console.log("===================QUEUE===================")
console.log(q.list());
q.enqueue(1);
console.log(q.list());
q.enqueue(9);
console.log(q.list());
q.dequeue();
console.log(q.list());
q.enqueue(8);
console.log(q.list());
q.dequeue();
console.log(q.list());
q.dequeue();
console.log(q.list());
q.dequeue();
console.log(q.list());