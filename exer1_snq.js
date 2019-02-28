// Exercise 1
// Stacks and Queues 
/*
 * Instructions:
 * 1) Implement the push and pop operataions of stacks and
 * 2) Implement the queue (push counterpart) and dequeue(pop counterpart) of queues
 * using arrays, without using the actual push(), pop() and related
 * functions inherent in the Array prototype.
 * 
 * Reference: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
*/

// Stack Object Declaration
let Stack = function(){
	this.stack = [];
	this.length = 0;
}

// Adding the push operation to the Stack Object
Stack.prototype.push = function(x){

	// Implement the push algorithm here 
	// What to do with x?
	// this.stack = ?

	n = this.length;

	this.stack[n]= x;
	this.length++;

	// Return the pushed value for confirmation
	return x;

}

// Adding the pop operation to the Stack Object
Stack.prototype.pop = function(){

	// Define a placeholder variable for the return value
	let x = undefined;
	
	// Implement the pop algorithm here 
	// x = ?
	// this.stack = ?

	n = this.length;

	x = this.stack[n-1];

	array = this.stack;
	this.stack = [];
	for (var i = 0; i < n-1; i++) {
		this.stack[i] = array[i];
	}
	if (this.length >0) {
		this.length--;
	}
	

	// Return the popped value
	return x;

}

// Queue Object Declaration
let Queue = function(){
	this.queue = [];
	this.length = 0;
}

// Adding the enqueue operation to the Queue Object
Queue.prototype.enqueue = function(x){

	// Implement the enqueue algorithm here 
	// What to do with x?
	// this.stack = ?

	n = this.length;

	this.queue[n]= x;
	this.length++;

	// Return the enqueued value for ocnfimration
	return x;

}

// Adding the dequeue operation to the Queue Object
Queue.prototype.dequeue = function(){

	// Define a placeholder variable for the return value
	let x = undefined;
	
	// Implement the dequeue algorithm here 
	// x = ?
	// this.stack = ?

	n = this.length;

	x = this.queue[0];


	array = this.queue;
	this.queue = [];
	for (var i = 0; i < n-1; i++) {
		this.queue[i] = array[i+1];
	}
	if (this.length >0) {
		this.length--;
	}
	

	// Return the dequeued value
	return x;

}

// Instantiate your Stack and Queue and play around with it!
let s = new Stack();

let q = new Queue();


console.log("================STACK===================")
console.log(s.push("hi"));
console.log(s);
console.log(s.push("hello"));
console.log(s);
console.log(s.push("sup"));
console.log(s);
console.log(s.push("hey"));
console.log(s);
console.log(s.pop());
console.log(s);
console.log(s.pop());
console.log(s);
console.log(s.pop());
console.log(s);
console.log(s.pop());
console.log(s);
console.log(s.pop());
console.log(s);
console.log(s.push("heeeee"));
console.log(s);
console.log(s.push("hey"));
console.log(s);



console.log("================QUEUE===================")
console.log(q.enqueue("hi"));
console.log(q);
console.log(q.enqueue("hello"));
console.log(q);
console.log(q.enqueue("sup"));
console.log(q);
console.log(q.enqueue("hey"));
console.log(q);
console.log(q.dequeue());
console.log(q);
console.log(q.dequeue());
console.log(q);
console.log(q.dequeue());
console.log(q);
console.log(q.dequeue());
console.log(q);
console.log(q.dequeue());
console.log(q);
console.log(q.enqueue("heeeee"));
console.log(q);
console.log(q.enqueue("hey"));
console.log(q);