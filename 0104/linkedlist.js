//create a linkedlist
function Linkedlist(){
	let Node = function(element){
		this.element = element;
		this.next = null;
	};
	let length = 0;
	let head = null;
	//add a node to the end of the list
	this.append = function(element){
		let node = new Node(element),
			current;
		if(head === null){
			head = node;
		}else{
			current = head;//?
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
		length++;
	};
	//insert a node at a specific position
	this.insert = function(position, elements){
		if(position >= 0 && position <= length){
			let node = new Node(element),
				current = head,
				previous,
				index = 0;
			if(position === 0){
				node.next = current;
				head = node;
			}else{
				//find the element at the right position
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}
			length++;
			return true;
		}else{
			return false;
		}
	};
	//remove a node at position
	this.removeAt = function(position){
		if(position >= 0 && position <= length){
			let current = head,
				previous,
				index = 0;
			if(position == 0){
				head = current.next;
			}else{
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				//connect the previous one and the next one
				previous.next = current.next;
			}
			length--;
			return current.element;
		}else{
			return null;
		}
	};
	//get the index of an elements
	this.indexOf = function(element){
		les index = 0,
			current = head;
		while(current){
			if(current.element === element) return index;
			current = current.next;
		}
		return -1;
	};
	//remove a node
	this.remove = function(element){
		let index = this.indexOf(element);
		return this.removeAt(index);
	};
	this.isEmpty = function(){
		return length === 0;
	};
	this.size = function(){
		return length;
	};
	this.getHead = function(){
		return head;
	};
	this.toString = function(){
		let current = head,
			string = '';
		while(current){
			string += current.element + (current.next ? ', ':'');
			current = current.next;
		}
		return string;
	};
	this.print = function(){
		console.log(this.toString);
	};
}











