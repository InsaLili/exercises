//E1
//create a stack: last in, first out
function Stack(){
	var item = [];
	this.push = function(element){
		item.push(element);
	};
	this.pop = function(){
		return item.pop();
	};
	this.peek = function(){
		return item[item.length-1];
	};
	this.isEmpty = function(){
		return item.length == 0;
	};
	this.clear = function(){
		item = [];
	};
	this.size = function(){
		return item.length;
	}
	this.print = function(){
		console.log(item.toString()):
	};
}
//create an instance
var stack = new Stack();
console.log(stack.isEmpty); //ture
stack.push("hello");
stack.push("world"); 
console.log(stack.peek()); //world
console.log(stack.size); //2

//E2
//create a queue
function Queue(){
	var item = [];
	this.enqueue = function(element){
		item.push(element);
	};
	this.dequeue = function(){
		item.shift();
	};
	this.front = function(){
		return item[0];
	};
	this.isEmpty = function(){
		return item.length == 0;
	};
	this.clear = function(){
		item = [];
	};
	this.size = function(){
		return item.length;
	};
	this.print = function(){
		console.log(item.toString());
	};
}

















