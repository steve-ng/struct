Struct
======
Struct provides data structures and simple algorithms 

  - Stack and Queue
  - Sorting Algorithms (QuickSort, Insertion Sort and Counting Sort) 
  - More to come soon! 

Using Struct
--------
Import dist/struct.min.js into your html 

    <script src="struct.min.js"> </script>
    <script>
        //API usage of struct
    </script>

API
--------
For examples, refer to usage examples below

Stack
* .push(obj) //add obj to stack 
* .pop() //remove top most obj from stack 
* .isEmpty() //return true/false if stack is empty 
* .peek() //return top most obj from stack, undefined if stack is empty 
* .count() //return number of obj in stack 
* .removeAllObjects() //remove all obj from stack

Queue
* .enqueue(obj) //add obj to queue 
* .dequeue() //remove first obj from queue  
* .isEmpty() //return true/false if queue is empty 
* .peek() //return first obj from queue, undefined if queue is empty 
* .count() //return number of obj in queue 
* .removeAllObjects() //remove all obj from queue

Sorting
* .insertionSort(array_to_sort)
* .countingSort(array_to_sort, max_value_of_obj_in_array)
* .quickSort(array_to_sort, first_index, last_index); 

API Usage example
--------
Stack

    var stack = new Struct.stack(); 
    stack.push(1);
    while(!stack.isEmpty()) {
      stack.pop();
    };

Queue

    var queue = new Struct.queue();
    queue.enqueue(1);
    while(!queue.isEmpty()) {
        queue.dequeue();
    };

Sorting
   
    var toSortByInsertion = [25,1,24,19,2];
    Struct.insertionSort(toSortByInsertion); //toSortByInsertion sorted
    
    var toSortByCounting = [10,2,11,2];
    var result = Struct.countingSort(toSortByCounting, 11); //result sorted 

    var toSortByQuickSort = [1,2,11,4,2];
    Struct.quickSort(toSortByQuickSort, 0, toSortByQuickSort.length - 1); //toSortByQuickSort sorted

Building
--------------

    grunt build //concat, minify and run tests 

What's next
--------------
* Hosting with NPM 
* Binary Search tree, Red-Black tree, AVL tree, Graphs and graph traversal algorithms 

License
----
MIT



    