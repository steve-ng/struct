/* global describe, it */

(function () {
    'use strict';

    describe('Testing sort functions', function () {
        describe('Try sorting list that are already sorted', function () {

        	var a = [1,2,3,4,5,6,7,8,9,10];
            var expected_result = [1,2,3,4,5,6,7,8,9,10];

            it('try insertion sort', function () {
            	var insertionSort = a.slice(0);
            	Struct.insertionSort(insertionSort);
       			chai.expect(expected_result).to.eql(insertionSort);
            });

            it('try counting sort', function () {
            	var countingSort = a.slice(0);
            	var result = Struct.countingSort(countingSort,10);
       			chai.expect(expected_result).to.eql(result);
            });

            it('try quick sort', function () {
            	var quickSort = a.slice(0);
            	Struct.quickSort(quickSort, 0, quickSort.length-1);
       			chai.expect(expected_result).to.eql(quickSort);
            });

        });

        describe('Try sorting list that a small list', function () {

            var a = [5,8,55,12,11,4,1,0];
            var expected_result = [0,1,4,5,8,11,12,55];

            it('try insertion sort', function () {
                var insertionSort = a.slice(0);
                Struct.insertionSort(insertionSort);
                chai.expect(expected_result).to.eql(insertionSort);
            });

            it('try counting sort', function () {
                var countingSort = a.slice(0);
                var result = Struct.countingSort(countingSort,55);
                chai.expect(expected_result).to.eql(result);
            });

            it('try quick sort', function () {
                var quickSort = a.slice(0);
                Struct.quickSort(quickSort, 0, quickSort.length-1);
                chai.expect(expected_result).to.eql(quickSort);
            });

        });

    });
})();
