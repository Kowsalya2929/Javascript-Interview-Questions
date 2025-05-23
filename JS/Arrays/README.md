<h1>Arrays in Javascript :</h1>

Arrays are ordered collections of data. They store multiple values (of any datatype) in a single variable.

<h2>Overview of Array :-</h2>
<ol>
  <li>Types of Arrays :</li>
  <ul>
    <li>Numbers</li>
    <li>String</li>
    <li>Mixed</li>
    <li>Objects</li>
    <li>Multidimensional</li>
  </ul>
  <li>Two ways to create array :</li>
  <ul>
    <li>Literal</li>
    <li>Constructor</li>
  </ul>
  <li>Mutation vs Non-Mutation :</li>
  <li>Add & Remove Methods :</li>
  <ul>
    <li>push(...items)</li>
    <li>unshift(...items)</li>
    <li>pop()</li>
    <li>shift()</li>
    <li>splice(index,deleteCount,...items)-(Mutates)</li>
    <li>toSpliced(index,no of delete items,add elements)-(Non-Mutates)</li>
    <li>delete arr[index]</li>
  </ul>
  <li>Sorting Methods :</li>
  <ul>
    <li>sort()-(Alphabetically)</li>
    <li>sort((a,b)=>a-b)-(Numerically)</li>
    <li>toSorted()-(Non-Mutates)</li>
    <li>reverse()</li>
    <li>toReversed()-(Non-Mutates)</li>
  </ul>
  <li>Search & Check Methods : (both are Non-mutates)</li>
  <ul>
    <li>includes(value)</li>
    <li>arr[index]</li>
    <li>indexOf(value)</li>
    <li>lastIndexOf(value)</li>
    <li>find(callback)</li>
    <li>findIndex(callback)</li>
    <li>findLast(callback)</li>
    <li>findLastIndex(callback)</li>
    <li>some(callback)</li>
    <li>every(callback)</li>
  </ul>
  <li>String & Utility Methods : (both are Non-mutates)</li>
  <ul>
    <li>join(separator)</li>
    <li>split()</li>
    <li>arr.length</li>
    <li>toString()</li>
  </ul>
  <li>Extract & Copy Methods :</li>
  <ul>
    <li>slice(start,end)-(Non-Mutates)</li>
    <li>concat(...arrays)-(Non-Mutates)</li>
    <li>copyWithin(target,start,end)</li>
    <li>with(index,value)-(Non-Mutates)</li>
    <li>fill(value,start,end)</li>
    <li>Array.isArray(arr)</li>
    <li>Array.from(str)</li>
    <li>Array.of(...items)</li>
  </ul>
  <li>Iteration & Looping Methods : (both are Non-mutates)</li>
  <ul>
    <li>flat(...arrays)</li>
    <li>entries()</li>
    <li>keys()</li>
    <li>values()</li>
    <li>map(callback)</li>
    <li>forEach(callback)</li>
    <li>flatMap(callback)</li>
    <li>filter(callback)</li>
    <li>reduce(callback,initial)</li>
    <li>reduceRight(callback,initial)</li>
  </ul>
</ol>

<h3>Types of Arrays :</h3>

```js
let numbers = [1, 2, 3, 4, 5];
let strings = ["a", "b", "c"];
let mixed = [1, "a", true];
let objects = [{ name: "a" }, { name: "b" }];
let multiDimensional = [[1, 2], [3, 4]];
```
<h3>Two ways to create array :</h3>

```js
let literal  = [1,2,4]
let constructor = new Array(1,2,4)
```

<h3>Mutation vs Non-Mutation</h3>

<table>
  <thead>
    <tr>
      <th>Mutation</th>
      <th>Non-Mutation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>It means the original array is changed or modified.</td>
      <td>Returns a new array, It doesn't change the original array.</td>
    </tr>
    <tr>
      <td>In-place change.</td>
      <td>Original stays the same.</td>
    </tr>
  </tbody>
</table>

<h3>Add & Remove Methods :</h3>

<ol>
<li>Add item at the end : Add one or more elements to the end of array.</li>
            
```js
let arr = [1,2,4]
arr.push(2,3)
console.log(arr) // [1,2,4,2,3]
```
<li>Add item at the start : Add one or more elements to the beginning of an array.</li>

```js
let arr = [1,2,4]
arr.unshift(2,9)
console.log(arr) // [2,9,1,2,4]
```

<li>Remove last item :</li>

```js
let arr = [1,2,4]
arr.pop()
console.log(arr) // [1,2]
```
<li>Remove first item :</li>

```js
let arr = [1,2,4]
arr.shift()
console.log(arr) // [2,4]
```
<li>splice is remove / replace / add elements : Modifies the original array. Splice(index,no of remove elements, add elements)</li>

```js
let arr = [1,2,3]
console.log(arr) // [ 1, 2, 3 ]
let arr2 = arr.splice(0,1,"a","b")
console.log(arr) // ["a","b",2,3]
console.log(arr2) // [ 1 ]
```

<li>Non-mutating version of splice : Same as Splice , But returns a new array it doesn't modify the original array.</li>

```js
let arr = [1,2,4]
console.log(arr)  // [1,2,4]
let arr2 = arr.toSpliced(0,1,"a","b")
console.log(arr)  // [1,2,4]
console.log(arr2)   // ["a","b",2,4] 
```

<li>delete arr.property : It only delete property not whole array</li>

```js
let arr = [1,2,4]
delete arr[1];
console.log(arr)           // [ 1, <1 empty item>, 4 ]
console.log(arr.length)    // 3 (length doesn't change)
console.log(1 in arr);     // false
console.log(arr[1]);       // undefined
```

</ol>

<h3>Sorting Methods :</h3>

<ol>
<li>Sort alphabetically - (mutates) :</li>
            
```js
let arr = ["banana","apple","chery"]
let arr2 = arr.sort() 
console.log(arr) // ["apple","banana","chery"]
console.log(arr2) // ["apple","banana","chery"]
```
<li>Sort numerically - (mutates)</li>
            
```js
let arr = [40,5,100,1] 
arr.sort() // Incorrect for numbers [1,100,40,5]
console.log(arr)
arr.sort((a,b)=> a-b) //ascending order // Correct numerical sort [1,5,40,100]
console.log(arr)
arr.sort((a,b)=> b-a) //descending order // Correct numerical sort [100,40,5,1]
console.log(arr)
```
<li>toSorted - (Non-mutates) : Returns new sorted array without changing original array.</li>
            
```js
let arr = [40,5,100,1]
let arr2 = arr.toSorted((a,b)=>a-b)
console.log(arr)   // [ 40, 5, 100, 1 ]
console.log(arr2)  // [ 1, 5, 40, 100 ]  
```
<li>Reverse array - (mutates)</li>
            
```js
let arr = ["banana","apple","chery"]
let arr2 = arr.reverse()
console.log(arr) // [ 'chery', 'apple', 'banana' ]
console.log(arr2) // [ 'chery', 'apple', 'banana' ]
```

<li>Reverse array - (Non-mutates) : Returns new reversed array without changing original array.</li>
            
```js
let arr = ["banana","apple","chery"]
let arr2 = arr.toReversed()
console.log(arr)   // [ 'banana', 'apple', 'chery' ]
console.log(arr2)  // [ 'chery', 'apple', 'banana' ] 
```
</ol>

<h3>Search & Check Methods : (both are Non-mutates)</h3>
<ol>
<li>Checks if the array contains specific content. return only true / false.</li>
            
```js
let arr = [1,3,5,2,7]
let arr2 = arr.includes(2)
console.log(arr) // [ 1, 3, 5, 2, 7 ]
console.log(arr2) // true
```
<li>arr[index] : Returns the element at a specific index, and it supports negative indexing.</li>
            
```js
let arr = ["a","b","c","a"]
let arr2 = arr.at(0)  
let arr3 = arr.at(-2)  
console.log(arr) // [ 'a', 'b', 'c', 'a' ]
console.log(arr2) // a
console.log(arr3) // c
```

<li>Return the first index of value , or -1 if it's not found.</li>
            
```js
let arr = ["a","b","c","a"]
let arr2 = arr.indexOf("a")  //0  //it will check (left to right).
let arr3 = arr.indexOf("z")  //-1 //-1 if it's not found.
console.log(arr) // [ 'a', 'b', 'c', 'a' ]
console.log(arr2) // 0
console.log(arr3) // -1
```
<li>If you wanna check (from right to left)</li>
            
```js
let arr = ["a","b","c","a"]
let arr2 = arr.lastIndexOf("a") 
console.log(arr2) // 3
console.log(arr) // [ 'a', 'b', 'c', 'a' ]
```
<li>Returns the first element that satisfies the callback conditions.</li>
            
```js
let arr = [1,3,5,2,7]
let arr2 = arr.find(n => n > 2)
console.log(arr2) // 3
console.log(arr) // [ 1, 3, 5, 2, 7 ]
```
<li>Returns the first element index that satisfies the callback conditions.</li>
            
```js
let arr = [1,3,5,2,7]
let arr2 = arr.findIndex(n => n > 2)
console.log(arr2) // 1
console.log(arr) // [ 1, 3, 5, 2, 7 ]
```

<li>Returns the last element that satisfies the callback conditions.</li>
            
```js
let arr = [1,3,5,2,7]
let arr2 = arr.findLast(n => n > 2)
console.log(arr2) // 7
console.log(arr) // [ 1, 3, 5, 2, 7 ]
```
<li>Returns the last element index that satisfies the callback conditions.</li>
            
```js
let arr = [1,3,5,2,7]
let arr2 = arr.findLastIndex(n => n > 2)
console.log(arr2) // 4
console.log(arr) // [ 1, 3, 5, 2, 7 ]
```

<li>At least one element passes the test.</li>
            
```js
let arr = [1,3,5,2,7]
let arr2 = arr.some(n => n % 2 === 0)
console.log(arr2) // true
console.log(arr) // [ 1, 3, 5, 2, 7 ]
```
<li>All element must passes the test.</li>
            
```js
let arr = [1,3,5,2,7]
let arr2 = arr.every(n => n % 2 === 0)
console.log(arr2) // false
console.log(arr) // [ 1, 3, 5, 2, 7 ]
```
</ol>


<h3>String & Utility Methods : (both are Non-mutates)</h3>
<ol>
<li>Combine to String using sperator</li>

```js
let arr = [1,2,3]
let arr2 = arr.join("*") 
let arr3 = arr.join()    
console.log(arr) //[ 1, 2, 3 ]
console.log(arr2) // 1*2*3
console.log(arr3) // 1,2,3
```
<li>It turns string into array of characters</li>

```js
let str = "kowsalya loganathan"
let str2 = str.split("") 
let str3 = str.split()
let str4 = str.split(" ")
console.log(str) // kowsalya loganathan
console.log(str2) // [ 'k', 'o', 'w', 's', 'a', 'l', 'y', 'a', ' ', 'l', 'o', 'g', 'a', 'n', 'a', 't', 'h', 'a', 'n' ]
console.log(str3) // [ 'kowsalya loganathan' ]
console.log(str4) // [ 'kowsalya', 'loganathan' ]
```

<li>Converts array to string with comma operator</li>

```js
let arr = [1,2,3,"a"]
let arr2 = arr.toString() 
console.log(arr) // [1,2,3,"a"]
console.log(arr2) // 1,2,3,a
```
<li>Returns number of elements</li>

```js
let arr = [1,2,3,"a"]
console.log(arr.length) // 4
```
</ol>

<h3>Extract & Copy Methods :</h3>
<ol>
<li>slice(start,end) (Non-mutating) : Returns a shallow copy of an portion of an array.End is exclusive.</li>

```js
let arr = [10,20,30,40,50]
let arr2 = arr.slice(0,3)       
let arr3 = arr.slice(1,3) 
console.log(arr)  // [10,20,30,40,50]
console.log(arr2) // [10,20,30]
console.log(arr3) // [20,30]
```

<li>concat(...arrays) : Merge array into a new one (non-mutating),Merge one or more arrays.</li>

```js
let arr = [1,2,4]
let arr2 = [2,4,5]
let arr3 = [4,5,6]
let v1 = arr.concat(arr2)
let v2 = arr.concat(arr2,arr3)
console.log(arr)  // [ 1, 2, 4 ]
console.log(arr2) // [ 2, 4, 5 ]
console.log(arr3) // [ 4, 5, 6 ]
console.log(v1)   // [ 1, 2, 4, 2, 4, 5 ]
console.log(v2)   // [ 1, 2, 4, 2, 4, 5, 4, 5, 6 ]
```

<li>copyWithin(target,start,end) : Mutates the original array, end is exclusive, overwrites the values at starting.It doesn't add and remove items, only replace.</li>

```js
let arr = [1,2,3,4,5]
let arr2 = arr.copyWithin(0,3)
console.log(arr)  //[ 4, 5, 3, 4, 5 ]
console.log(arr2) //[ 4, 5, 3, 4, 5 ]
```

<li>with(index, value) : Returns a new array with one element replaced.</li>

```js
let arr = [1,2,3]
let arr2 = arr.with(1,99) 
console.log(arr)  //[ 1, 2, 3 ]
console.log(arr2) //[ 1, 99, 3 ]
```

<li>fill(value,start,end) : Mutates the array.Replace value of the array with same value.start is inclusive and end is exclusive.if start and end is not provided, it fills the entire array.</li>

```js
let arr = [1,2,3,4]
console.log(arr)  // [ 1, 2, 3, 4 ]
let arr2 = arr.fill(99,0,2) 
console.log(arr2) // [ 99, 99, 3, 4 ]
let arr3 = arr.fill(99)  
console.log(arr)  // [ 99, 99, 99, 99 ]
console.log(arr3) // [ 99, 99, 99, 99 ]
```

<li>Array.isArray(obj) : Check if the value is array</li>

```js
let arr = [1,2,3]
let arr2 = new Array(1,2,3)
console.log(Array.isArray(arr))  // true
console.log(Array.isArray(arr2)) // true
console.log(typeof arr)  // object
console.log(typeof arr2)  // object
```

<li>Array.of(...items) : Creates array from args</li>

```js
const arr = Array.of(7,2)
console.log(arr) // [ 7, 2 ]
const arr2 = Array.of(7)
console.log(arr2) // [ 7 ]
```

<li>Array.from(obj) :	Converts or Create string to array</li>

```js
let str = "kowsalya"
console.log(Array.from(str)) // ['k', 'o', 'w', 's', 'a', 'l', 'y', 'a' ]
```
</ol>

<h3>Iteration & Looping Methods : </h3>

<ol>

<li>flat() : Flattens a nested array into a single level array</li>

```js
let arr = [[1,2,3],[4,5],[6,6]]
console.log(arr.flat()) //[ 1, 2, 3, 4, 5, 6, 6 ]
```

<li>entries() : Returns iterator of [index,value] pairs</li>

```js
let arr = ["a","b","c"]
for(let [index, value] of arr.entries()){
  console.log(index, value)
}
// 0 a
// 1 b
// 2 c
```

<li>keys() : Returns iterator of all array indexes</li>

```js
let arr = ["a","b"]
for(let i of arr.keys()){
  console.log(i)
}
// 0
// 1
```

<li>values() : Returns iterator of all array values</li>

```js
let arr = ["a","b"]
for(let val of arr.values()){
  console.log(val)
}
// a
// b
```

<li>map(callback) : Transforms each element into a new array. Map will loop through every element for that specific operation.</li>

```js
let arr = [1,2,3,4,5]
let result = arr.map((n)=>{
  return n * 10
})
console.log(result)   // [ 10, 20, 30, 40, 50 ]
console.log(arr)      // [ 1, 2, 3, 4, 5 ]
```

<li>forEach(callback) : Executes each element but it doesn't return anying</li>

```js
let arr = [1,2,3]
let result = arr.forEach((n)=>{ // Incorrect 
  return n * 10                        
})     
let result2 = arr.forEach((n)=>{
  console.log(n * 10)
})  
// Correct 
// 10 
// 20 
// 30
console.log(result)  // undefined
console.log(result2) // undefined
console.log(arr) // [ 1, 2, 3 ]
```

<li>flatMap(callback) : First does a map , then flatten one level.</li>

```js
//Example 1 : Correct
let arr = [1,2,3]
let result = arr.flatMap((n)=>{
  return [ n , n * 10]
})
console.log(result) // [ 1, 10, 2, 20, 3, 30 ]
console.log(arr)    // [ 1, 2, 3 ]

//Example 2 : Incorrect, In this return statement using comma operator (only returns last). Use array bracket [] for both values.
let arr = [1,2,3]
let result = arr.flatMap((n)=>{
  return  n , n * 10
})
console.log(result) // [ 10, 20, 30 ]
console.log(arr)    // [ 1, 2, 3 ]
```

<li>filter(callback) : Returns a new array with filtered elements</li>

```js
let arr = [1,2,3,4,6,7,8,8,9]
let result = arr.filter((n)=>{
  return n > 3;
})
console.log(result) // [ 4, 6, 7, 8, 8, 9 ]
console.log(arr) // [ 1, 2, 3, 4, 6, 7, 8, 8, 9 ]
```

<li>reduce() : Reduce the array (left to right) and return a single value (like sum, product, etc)</li>

```js
let arr = [2,2,3]
let result = arr.reduce((acc,v)=>{
  return acc + v
},0) 
console.log(result) // 7
```

<li>reduceRight() : Reduce the array (right to left) and return a single value (like sum, product, etc)</li>

```js
let arr = [2,2,3]
let result = arr.reduceRight((acc,v)=>{
  return acc + v
},0) 
console.log(result) // 7
```
<ol>
