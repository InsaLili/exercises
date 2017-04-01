//create a linkedlist
function Linkedlist(){
	let Node = function(element){
		this.element = element;
		this.next = null;
	};
	let length = 0;
	let head = null;
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
	}
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
	}
	this.removeAt = function(){
		
	}
}











