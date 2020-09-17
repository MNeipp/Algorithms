// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

function mergeArrays(arr1, arr2){
    let newArr = [];
    let arr1Index = 0;
    let arr2Index = 0;
    let combinedLength = (arr1.length + arr2.length)

    for(let i = 0; i < combinedLength; i++){
        if( arr1[arr1Index] === undefined && arr2[arr2Index] === undefined){
            return newArr
        }
        else if (arr1[arr1Index] === undefined){
            newArr.push(arr2[arr2Index])
            arr2Index++
        } else if (arr2[arr2Index] === undefined){
            newArr.push(arr1[arr1Index])
            arr1Index++
        }
        else if (arr1[arr1Index] < arr2[arr2Index]){
            newArr.push(arr1[arr1Index])
            arr1Index++
        } else {
            newArr.push(arr2[arr2Index])
            arr2Index++
        }
    }
    return newArr
}

// Cafe Order Checker
function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

    let tod=0
    let dio=0
    
    for (let i = 0; i < servedOrders.length; i++){
      if (servedOrders.length !== dineInOrders.length + takeOutOrders.length){
        return false
      }
      if (servedOrders[i] == takeOutOrders[tod]){
        tod++
        continue
      }
      else if (servedOrders[i] == dineInOrders[dio]){
        dio++
        continue
      }
      return false
    }
    return true
  }