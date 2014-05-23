(function(window){

	Struct.queue = function() {

		var items = []; 

		this.enqueue = function(obj) {
			items.push(obj);
		}

		this.dequeue = function() {
			return items.shift();
		}

		this.isEmpty = function() {
			return items.length == 0;
		}
		
		this.peek = function() {
			return items[0];
		}

		this.count = function() {
			return items.length;
		}

		this.removeAllObjects = function() {
			items = [];
		}
	}

	Struct.binaryNode = function() {

		var left, right;

		this.setLeft = function(obj) {
			left = obj;
		}

		this.setRight = function(obj) {
			right = obj;
		}

	}

	Struct.stack = function() {

		var items = []; 

		this.push = function(obj) {
			items.push(obj);
		}

		this.pop = function() {
			return items.pop();
		}

		this.isEmpty = function() {
			return items.length == 0;
		}
		
		this.peek = function() {
			return items[0];
		}

		this.count = function() {
			return items.length;
		}

		this.removeAllObjects = function() {
			items = [];
		}
	}


})(window);
