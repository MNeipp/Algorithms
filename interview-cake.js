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

  // Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.

  //reduce solution
  function findUniqueDeliveryId(deliveryIds) {

    // Find the one unique ID in the array
    deliverySet = new Set(deliveryIds);
    
    sumSet = Array.from(deliverySet).reduce((a,b) => a+b, 0);
    sumDelivery = deliveryIds.reduce((a,b) => a+b, 0);
    
    return (2*sumSet) - sumDelivery
  }

  // XOR bitshifting solution 
  function findUniqueDeliveryId(deliveryIds) {

    var uniqueDeliveryId = 0;
  
    deliveryIds.forEach(deliveryId => {
      uniqueDeliveryId ^= deliveryId;
    });
  
    return uniqueDeliveryId;
  }


  // Which number appears twice?

  function findRepeat(numbers) {
    // Find the number that appears twice
    //(n**2+n)/2 = sum
    //sum(array) - sum
    const n = numbers.length-1;
    const sum = (n**2 + n) / 2;
    const arrSum = numbers.reduce((a, b) => a + b);
    return arrSum - sum;
  }

// find matching movie lengths
function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Movie1 + Movie 2 = FlightLength
  const moviesSeen = new Set();
  
  for (let i = 0; i < movieLengths.length; i++){
    const firstMovie = movieLengths[i];
    
    const secondMovie = flightLength - firstMovie;
    if (moviesSeen.has(secondMovie)){
      return true;
    }
    moviesSeen.add(firstMovie);
  }
  
    return false;
  }
  
  //palindrome permutations
  function hasPalindromePermutation(theString) {

    const hashMap = new Set()
    for (let i = 0; i < theString.length; i++){
      if (hashMap.has(theString[i])){
        hashMap.delete(theString[i]);
      } else {
        hashMap.add(theString[i])
      }
    }
    if (hashMap.size <= 1){
      return true;
    }
    
  
    return false;
  }
  
// Calculate the highest product of three numbers
  function highestProductOf3(arrayOfInts) {

    if(arrayOfInts.length < 3){
      throw new Error('Less than 3 items!')
    }
    
    let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
    let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
    
    let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
    let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
    
    let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
    
    for (let i = 2; i < arrayOfInts.length; i++){
      const current = arrayOfInts[i];
      
      highestProductOf3 = Math.max(
        highestProductOf3,
        current * highestProductOf2,
        current * lowestProductOf2
        );
        
      highestProductOf2 = Math.max(
        highestProductOf2,
        current * highest,
        current * lowest
        );
      
      lowestProductOf2 = Math.min(
        lowestProductOf2,
        current* highest,
        current * lowest
        );
        
      highest = Math.max(highest, current);
      
      lowest = Math.min(lowest, current);
    }
  
    return highestProductOf3;
  }
  
  function getProductsOfAllIntsExceptAtIndex(arr) {

    // Make a list of the products
    if (arr.length < 2){
      throw new Error('Array must have at least 2 numbers')
    }
    
    const productsExcept = [];
    
    let productSoFar = 1;
    
    for (let i = 0; i < arr.length; i++){
      productsExcept[i] = productSoFar;
      productSoFar *= arr[i]
    }
    
    productSoFar = 1;
    for (let j = arr.length-1; j >=0; j--){
      productsExcept[j] *= productSoFar;
      productSoFar *= arr[j]
    }
    
  
    return productsExcept;
  }
  
  
  
  
  
  