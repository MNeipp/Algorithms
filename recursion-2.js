/* Recursive Binary Search
Given a sorted array and a value, recursively determine whether value is found within array.  */
let runner = 0
function rBinary(arr, num){
    while (runner < arr.length){
        if (arr[runner] == num){
            return true
        } else {
        runner++
        rBinary(arr, num)
        }
    }
    return false
}

