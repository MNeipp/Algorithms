// Arrs2Map
// Given two arrays, create an associative array (map) containing keys of the first, and values of the
// second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc":
// 42, 3: "wassup", "yo": true}

function arrs2Map(arr1, arr2){
    var dict={}
    for (var i = 0; i<arr1.length; i++){
        dict[arr1[i]] = arr2[i]
    }
    return dict
}

// InvertHash
// Create invertHash(assocArr) that converts a hash’s keys to values and values to corresponding keys

function invertHash(dict){
    newDict = {}
    for (var k in dict){
        newDict[dict[k]] = k
    }
    return newDict
}

// ReverseString
// Implement a function reverseString(str) that, given a string, will return the string of the same length but with characters reversed. Example: given "creature", return "erutaerc". Do not use the built-in reverse() function!

function reverseString(str){
    newStr=[]
    for(var i = str.length-1; i >=0; i--){
        newStr.push(str[i])
    }

    return newStr.join('')
}

// Remove Blanks
// Create a function that, given a string, returns the string, without blanks

function removeBlanks(str){
    newStr = str.split(' ')
    newStr=newStr.join('')
    return newStr
}

// Get String Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given
// "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1,357,924,680\

function getDigits(str){
    str=str.split('')
    digits = []
    for (x of str){
        num = parseInt(x)
        if (isFinite(num)){
            digits.push(num)
        }
    }
    return digits.join('')
}

/* Acronyms
Create a function that, given a string, returns the string’s acronym (first letters only, capitalized) */

function acronyms(str){
    str = str.split(' ')
    acronym = []
    for (x of str){
        acronym.push(x[0])
    }
    return acronym.join('').toUpperCase()

}