/* Given an array and an additional value, insert this
value at the beginning of the array. Do this
without using any built-in array methods.
 */
function pushFront(arr,num){
    for(i = arr.length-1; i>=0; i--){
        arr[i+1] = arr[i]
    }
    arr[0] = num
    return arr;
}

/* Given an array, remove and return the value at
the beginning of the array. Do this without using
any built-in array methods except pop(). */

function popFront(arr){
    var front = arr[0]
    for(i = 0; i<arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.pop();
    console.log(arr);
    return front;
}

/* Given an array, index, and additional value, insert
the value into the array at the given index. Do this
without using built-in array methods */

function insertAt(arr,index,num){
    for(i = arr.length-1; i>=index; i--){
        arr[i+1] = arr[i]
    }
    arr[index] = num;
    return arr
}
console.log(insertAt([1,2,3,4,5],1,3))

/* Given an array and an index into the array,
remove and return the array value at that index.
Do this without using any built-in array methods
except pop(). */

function removeAt(arr,indx){
    var front = arr[indx]
    for(i = indx; i<arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.pop();
    console.log(arr);
    return front;
}

/* Given a numerical array, reverse the order of the
values. The reversed array should have the same
length, with existing elements moved to other
indices so that the order of elements is reversed. */
function reverseArray(arr){
    var temp = 0
    for(i = 0; i < Math.floor(arr.length/2); i++){
        temp = arr[arr.length-i-1];
        arr[arr.length-i-1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

/* Implement a function removeNegatives() that
accepts an array and removes any values that
are less than zero.
Second-level challenge: don’t use nested loops. */

function removeNegatives(arr){
    for(var i = 0; i < arr.length; i++){
        if (arr[arr.length-1] < 0){
            arr.pop()
        }
        if (arr[i] < 0){
            var temp = arr[arr.length-1];
            arr[arr.length-1] = arr[i]
            arr[i] = temp
            arr.pop()
        }
    }
    return arr;
}

/* Skyline Heights
You are given an array with heights of consecutive buildings in the city. For example, [-1,7,3] would
represent three buildings: first is actually below street level, second is seven stories high, and third is
three stories high (but hidden behind the seven-story onbe). You are situated at street level. Return an
array containing heights of the buildings you can see, in order. Given [1,-1,7,3] return [1,7]. */

function buildings(arr, myElevation){
    newArr = []
    maxHeight = arr[0]
    for (var i = 0; i < arr.length; i++){
        if(maxHeight <= arr[i]){
            maxHeight = arr[i];
            // console.log(maxHeight);
        }
        if (arr[i] >= myElevation && arr[i] >= maxHeight){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/* Binary Search
Given a sorted array and a value, return whether
that value is present in the array. Do not
sequentially iterate the entire array. Instead,
‘divide and conquer’, taking advantage of the fact
that the array is sorted. */

function binarySearch(arr, num, high, low) {
    var mid = Math.floor((low+high)/2);
    var high = arr.length-1;
    var low = 0; 
    while (num != arr[mid]) {
        mid = (low+high) / 2;
        if (num < arr[mid])
            if (num == arr[0]) {
                return `${num} is located at arr[0]`;
            }
        if (num == arr[arr.length - 1]) {
            return `${num} is located at arr[${arr.length-1}]`;
        }
        if (num < arr[mid]){
            high = mid;
        }
        if (num > arr[mid]){
            low = mid;
        }
        if (low == high - 1){
            return `${num} is not located in this array`
        }
    }
    return `${num} is located at arr[${mid}]`
}

/* Implement rotateArr(arr, shiftBy) that
accepts array and offset. Shift arr’s values to the
right by that amount. ‘Wrap-around’ any values
that shift off array’s end to the other side, so that
no data is lost. Operate in-place: given
([1,2,3],1), change the array to [3,1,2].
 */

function rotateArr(arr, places){
    var count = 0
    while (count != places){
        var i = arr.length
        while (i >=0){
            arr[i] = arr[i-1]
            if (arr[i-1] == undefined){
                arr[i] = arr[arr.length-1]
                arr.pop()
            }
            i--

        }
        count++
    }

    return arr
 }

 console.log(rotateArr([1,2,3,4,5,6],4))

 /* Second-to-Last
Return the second-to-last element of an array.
 */

function secondToLast(arr){
    var i = arr[arr.length-2]
    return i
 }

 /* Nth-to-Last
Return the element that is N-from-array’s-end. */

function nthToLast(arr, n){
    var i = arr[arr.length-1-n]
    return i
 }

/*  Second-Largest
 Return the second-largest element of an array. */

 function secondLargest(arr) {
    max = arr[0]
    second = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            second = max
            max = arr[i]
        }
        else if (arr[i] > second && arr[i] < max){
            second = arr[i]
        }
    }
    return second
}

/* Nth-Largest
Given an array, return the Nth-largest element:
there should be (N - 1) elements that are larger */
function nthLargest(arr,nth) {
    var temp
    for(var i = 0; i < arr.length; i++){
        for (var j = i+1; j < arr.length; j++){
            if (arr[i] > arr[j]){
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp
            }
        }
    }
    return arr[arr.length-nth]
}

// arrConcat
// Replicate JavaScript’s concat(). Create a
// standalone function that accepts two arrays.
// Return a new array containing the first array’s
// elements, followed by the second array’s
// elements. Do not alter the original arrays.

function arrConcat(arr1, arr2){
    for (var i = 0; i < arr2.length; i++){
        arr1.push(arr2[i])
    }
    return arr1
}

// Shuffle
// Recreate the shuffle()built into JavaScript, to
// efficiently shuffle a given array’s values.

function shuffle(arr){
    var temp
    for (i = arr.length-1; i >=0; i--){
        var j = Math.floor(Math.random() * arr.length)
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
}


