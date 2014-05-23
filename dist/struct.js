(function(window){

	var Struct = {}

	window.Struct = Struct; 

})(window);

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

(function(window){


	/*
		Good for small lists and mostly sorted list 
	*/
	Struct.insertionSort = function(input_array) {

		if (input_array.length == 1) 
			return;
		
		for (var i = 1; i<input_array.length; i++) {
			var x = input_array[i];
			var j = i;
			while (j > 0 && input_array[j-1] > x) {
				input_array[j] = input_array[j-1];
				j--;
			}
			input_array[j] = x;
		}
	}
 
 	/*
		Good for sorting collection of elements of small intger 
		Doesn't work for negative numbers
		O(max value - min value) 
	*/
 	Struct.countingSort = function(input_array, max_value) {
 		//create an array of the size of max value + 1
 		var count = [];
 		for (var i = 0; i < max_value+1; i++) {
 			count[i] = 0;
 		}

		//count each element (calculate the historygram of key frequencies)
		for (var i = 0; i < input_array.length; i++) {
			count[input_array[i]]++;
		};

		//add up the element
		for (var i = 1; i < count.length; i++) {
			count[i] = count[i] + count[i-1];
		};

		//create result array
		var result = [];
		for (var i = 0; i < input_array.length+1 ; i++) {
			result[i] = 0;
		}

		//put them back into the result 
		for (var j = 0; j < input_array.length; j++) {
			result[ count[ input_array[j] ] ] = input_array[j];
			count[ input_array[j] ] = count[input_array[j]]-1;
		};

		//remove first element in result array (offset)
		result.shift();

		return result;
 	}


	Struct.radixSort = function() {
		//to be implemented
	}
	
	Struct.quickSort = function(input_array, p, r) {
		if (p < r) {
			var q = partition(input_array, p, r);
			Struct.quickSort(input_array, p, q-1);
			Struct.quickSort(input_array, q+1, r);
		}
	}

	/**
		Partition method for quickSort 
		Pre: an input array with p = start index and r = end index to partition
		Post: input array with items less than pivot on the left 
			  and item greater than pivot on the right 
	**/
	function partition(input_array, p, r) {
		var pivot = input_array[r];

		var i = p-1;

		for (var j=p;j <r; j++){
			if (input_array[j] <= pivot) {
				i++;
				swap(i, j, input_array);
			}
		}

		swap(i+1, r, input_array);

		return i+1; 	
	}

	function swap(a, b, input_array) {
		var temp = input_array[a];
		input_array[a] = input_array[b];
		input_array[b] = temp; 

	}
		
	window.Struct = Struct; 

})(window);
