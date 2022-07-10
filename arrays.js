/* 1. Given an array consisting of movie names, iterate over the array with 
the output of the names of each movie to the console */
const arr = ["film1", "film2", "film3"];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

/* 2. Given an array of car manufacturers, convert the array to a string and back to an array */
const arr1 = ["Toyota", "Kia", "Hyundai"];
const str = arr1.join(',');
const inv = str.split(',');
console.log (str);
console.log(inv);

/* 3. Given an array of the names of your friends, add the words hello to each element of the array */
const arr2 = ["Maria", "Anton", "Anna"];
for(let i = 0; i < arr2.length; i++){
    console.log("Hello, ", arr2[i]);
}

/* 4. Convert numeric array to Boolean */
const arr3 = [1, 0, 1];
for(let i = 0; i < arr3.length; i++){
console.log(Boolean(arr3[i]));
}

const arr4 = [1, 0, 1];
type = Boolean(arr4[0]);
type1 = Boolean(arr4[1]);
type2 = Boolean(arr4[2]);
console.log(type, type1, type2);

const arr5 = [1, 0, 1];
const x = arr5.map(function(currentValue){
return Boolean(currentValue)
});
console.log(x);

/* 5. Sort the array [1,6,7,8,3,4,5,6] in descending order */
const arr6 = [1,6,7,8,3,4,5,6];
const descending = arr6.sort((a,b) => b - a);
console.log(descending);

/* 6. Filter array [1,6,7,8,3,4,5,6] by value> 3 */
const arr7 = [1,6,7,8,3,4,5,6];
const arrayOfEvenNumbers = arr7.filter(currentNumber => currentNumber > 3);
console.log(arrayOfEvenNumbers);

/* 7. Write a function that takes two parameters - an array and a number and outputs 
the index of an array element equal to a number */
const checkArray = function(arr9, number){
  console.log (arr9.findIndex(index => index == number));
};
checkArray([1,2,3], 2);

/* 8. Implement a loop that will print the number 'a' until it is less than 10 */
let a = 0;
while (a < 10){
    console.log(a);
    a++;
}

/* 9. Implement a loop that prints prime numbers to the console */
const n = 10;
  for (let i = 1; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j < i) {
        break;
      } else if (j === i) {
        console.log(i);
      }
    }
  }

  /* 10. Implement a loop that prints odd numbers to the console */
  for (let i = 0; i <= 10; i++){
   if (i % 2 != 0){
       console.log(i);
   }
  }

  
 
  