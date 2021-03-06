/*Shift Array Values
Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the
end*/
function shift(arr) {
    for (var i = 0; i < arr.length; i++){
      arr[i] = arr[i + 1];
    }
   arr[arr.length-1] = 0;
  return (arr)
}

z = shift([1,2,3,4,5]);
console.log(z)

//Sigma Function
function sigma(num){
    var sum = 0;
    for (var i = 0; i <= num; i++){
      sum = sum + i;
    }
    return sum;
  }
  var z = sigma(6)
  console.log(z)

  //Factorial Function
  function factorial(num){
    var sum = 1
    for(var i = 1; i <= num; i++){
      sum = sum * i;
    }
    return sum;
  }
  var z = factorial();
  console.log(z)

//Threes and Fives
  function threesandfives(){
    var sum = 0;
    for(var i = 100; i <= 4000000; i++){
      if(i % 3 === 0 && i % 5 === 0){
        continue;
      }
      else if (i % 3 === 0) {
        sum = sum + i;
      }
      else if (i % 5 === 0){
        sum = sum + i;
      }
    }
    return sum;
  }
  
  z = threesandfives()
  console.log(z)

//Better Threes and Fives
function betterthreesandfives(a,b){
  var sum = 0;
  for(var i = a; i <= b; i++){
    if(i % 3 === 0 && i % 5 === 0){
      continue;
    }
    else if (i % 3 === 0) {
      sum = sum + i;
    }
    else if (i % 5 === 0){
      sum = sum + i;
    }
  }
  return sum;
}

z = betterthreesandfives(3,10)
console.log(z)

//Generate Coin Change//
function HowManyCoins(change) {
  var sum = 0;
  var counter = 0;
  while (sum < change) {
      if (sum + 0.25 <= change) {
          sum += 0.25;
          counter++;
      } else if (sum + 0.1 <= change) {
          sum += 0.1;
          counter++;
      } else if (sum + 0.05 <= change) {
          sum += 0.05;
          counter++;
      } else if(sum + 0.01 <= change) {
          sum += 0.01;
          counter++;
      }

  }
  return (counter);
}
z = HowManyCoins(.04)

console.log(z)

//Statistics to Double
function rollDice() {
  var arr = [];
  var rollCount = 0;
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  arr.push(die1);
  arr.push(die2);
  var max = die1;
  var min = die2;
  rollCount++
  while (die1 != die2) {
      die1 = Math.floor(Math.random() * 6) + 1;
      die2 = Math.floor(Math.random() * 6) + 1;
      arr.push(die1);
      arr.push(die2);
      rollCount++
      if(max < die1){
          max = die1;
      }
      else if (max < die2){
          max = die2;
      }
      if(min > die1){
          min = die1;
      }
      else if (min > die2){
          min = die2;
      }
      
  }
  var avg = (min + max)/2
  console.log(arr);
  console.log(max,min,avg)
}

rollDice()

/* Sum to One Digit
Implement a function sumToOne(num) that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.
*/

function sumToOne(num) {
  var sum = 0;
  while (num > 0) {
    var temp = num % 10;
    num = Math.floor(num / 10);
    sum += temp
  }
  if (sum >= 10) {
    sum = sumToOne(sum);
  }
  return sum
};
var x = sumToOne(12348);
console.log(x)

/*Fibonacci
Implement the Fibonacci function, a famous mathematical equation that generates a numerical
sequence such that each number is the sum of the previous two. The Fibonacci numbers at index 0
and 1, coincidentally, have values of 0 and 1. Your function should accept an argument of which
Fibonacci number.
Examples: fibonacci(2) = 1, fibonacci(3) = 2, fibonacci(4) = 3, fibonacci(5) = 5, etc*/

function fibonacci(num){
  if (num === 0 || num === 1 ){
    return num
  }
  else return fibonacci(num  -2) + fibonacci(num  -1)
  }


/* Implement a function that accepts two non-negative integers as arguments. Function lastDigitAtoB(a,
b) should return the last digit of the first number (a) raised to an exponent of the second number (b).
Examples: given (3, 4), you should return 1 (the last digit of 81: 3 * 3 * 3 * 3). Given (12, 5), return
2 (the least significant digit of 248832, which is 12 * 12 * 12 * 12 * 12).
 */

function lastDigitAtoB(a,b){
  var x = a
  for(i = 1; i < b; i++){
    if (a > 9){
      a = a%10
    }
    a*=x
  }
  return (a%10);
}

/*
Create function clockHandAngles(seconds) that, given the number of seconds since 12:00:00, will
print the angles (in degrees) of the hour, minute and second hands. As a quick review, there are 360
degrees in a full arc rotation. Treat “straight-up” 12:00:00 as 0 degrees for all hands. 
*/

function clockHandAngles(sec){
  var sh = 0;
  var mh = 0;
  var hh = 0;

   while (sec >= 60){
     sec -= 60
    sh = sec
    mh++
   }
   while (mh >= 60){
    mh -= 60
    hh++
   }
   while (hh >= 12){
      hh -=12
   }
   console.log("angle of second hand is " + sh*6 + " degrees");
   console.log("angle of minute hand is " + mh*6 + " degrees");
   console.log("angle of hour hand is " + hh*30 + " degrees");
   }