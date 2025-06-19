<h2>Arrays in Question</h2>

<ol>
<li>Second Largest Number</li>
</ol>

<h3>Arrays in Question with Answer</h3>

<ol>
<li>Second Largest Number <br>
Input: [12,35,1,10,34,1], Output: 34.<br>
Input: [10,5,10], Output: 5.<br>
</li>

```js
// Brute Forse Approach
function secondLargest(arr){
    const uniqueArr = Array.from(new Set(arr))  // o(n)
    uniqueArr.sort((a,b)=> b - a)   // o(nlogn)
    if(uniqueArr.length >= 2){
        return uniqueArr[1];
    }else{
        return -1;
    }
}
console.log(secondLargest([12,35,1,10,34,1]))  // 34
console.log(secondLargest([10,5,10]))  // 5
console.log(secondLargest([7]))  // -1
```

<ul>
<li>1 step : new Set(arr), It is finding unique values and does't comes in duplicate values. like, Ouput: Set(5) { 12, 35, 1, 10, 34 }.</li>
<li>2 step : Array.from(str), It is coverts string to array. like, Output: [ 12, 35, 1, 10, 34 ].</li>
<li>3 step : arr.sort((a,b)=> b -a), It will come array into descending order. like, Output: [ 35, 34, 12, 10, 1 ].</li>
<li>4 step : array.length >= 2, means it takes at least two element in an array otherwise it will come -1.</li>
<li>5 step : if statement is true return arr[index]=arr[1]. else it will return -1.</li>
<li>Time Complexity : o(nlogn)</li>
</ul>

<ol>


<h3>Write a JavaScript program to create an array of 5 numbers and print each number</h3>

```js
const arr = [1,2,3,4,5]

let result = [];

for(let i=0 ; i<arr.length ;i++){
    result = arr[i]
    console.log(result)
}

// 1
// 2
// 3
// 4
// 5
```

<h3> Write a JavaScript program to add a new element to an array</h3>

```js
const arr = [1,2,3,5,6]
arr[arr.length] = 9
console.log(arr) //[ 1, 2, 3, 5, 6, 9 ]
```

<h3>Write a JavaScript program to find the length of an array.</h3>

```js
const arr = [1,2,3,5]
console.log(arr.length) //4
```

<h3> Write a JavaScript program to remove the last element from an array.</h3>

```js
const arr = [1,2,3,4,5,6]

arr.pop()

console.log(arr) //[1,2,3,4,5]
```

<h3>Write a JavaScript program to sort an array of numbers in ascending order.</h3>

```js
const arr = [1,2,3,55,100,33,22]

console.log(arr.sort((a,b)=>a - b)) //[1,2,3,22,33,55,100]
```