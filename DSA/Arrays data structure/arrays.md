<h1>Arrays in Data Structure :</h1>

Arrays is a ordered collections of data.It stores multiple datatype values in a single variable.

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
<li>Add item at the start : Add one or more elements to the begining of an array.</li>

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
arr.splice(0,1,"a","b")
console.log(arr) // ["a","b",2,3]
```

<li>Non-mutating version of splice : Same as Splice , But returns a new array it doesn't modify the original array.</li>

```js
let arr = [1,2,4]
let arr2 = arr.toSpliced(0,1,"a","b")
console.log(arr2)  // ["a","b",2,4]
console.log(arr)   // [1,2,4]
```
</ol>

<h3>Sorting Methods :</h3>

<ol>
<li>Sort alphabetically - (mutates) :</li>
            
```js
let arr = ["banana","apple","chery"]
arr.sort() 
console.log(arr) // ["apple","banana","chery"]
```
<li>Sort numerically - (mutates)</li>
            
```js
let arr = [40,5,100,1] 
arr.sort() // Incorrect for numbers [1,100,40,5]
console.log(arr)
arr.sort((a,b)=> a-b) //ascending order // Correct numerical sort [1,5,40,100]
console.log(arr)
arr.sort((a,b)=> b-a) //desending order // Correct numerical sort [100,40,5,1]
console.log(arr)
```
<li>toSorted - (Non-mutates) : Returns new sorted array without changing original array.</li>
            
```js
let arr = [40,5,100,1]
let arr2 = arr.toSorted((a,b)=>a-b)
console.log(arr2)   // [ 1, 5, 40, 100 ]
console.log(arr)    // [ 40, 5, 100, 1 ]
```
<li>Reverse array - (mutates)</li>
            
```js
let arr = ["banana","apple","chery"]
arr.reverse()
console.log(arr) // [ 'chery', 'apple', 'banana' ]
```

<li>Reverse array - (Non-mutates) : Returns new reversed array without changing original array.</li>
            
```js
let arr = ["banana","apple","chery"]
let arr2 = arr.toReversed()
console.log(arr2) // [ 'chery', 'apple', 'banana' ]
console.log(arr)  // [ 'banana', 'apple', 'chery' ]
```

<h3>Search & Check Methods : (both are Non-mutates)</h3>

    [1]. Checks if the array contains specific content. return only true / false.          eg : arr.includes(2)
    [2]. Return the first index of value , or -1 if it's not found.                        eg : arr = ["a","b","c","a"]
          it will check (left to right).                                                        arr.indexOf("a")  //0
          -1 if it's not found.                                                                 arr.indexOf("z")  //-1
    [3]. If you wanna check (from right to left)                                           eg : arr.lastIndexOf("a") //3
    [4]. Returns the first element that satisfies the callback conditions.                 eg : arr.find(n => n > 2)
    [5]. Returns the first element index that satisfies the callback conditions.           eg : arr.findIndex(n => n > 2)
    [6]. At least one element passes the test.                                             eg : arr.some(n => n % 2 === 0)
    [7]. All element must passes the test.                                                 eg : arr.every(n => n % 2 === 0)

<h3>String & Utility Methods :</h3>

    [1]. Combine to String using sperator               eg : arr.join("*")  //1*2*3
                                                             arr.join()     //1,2,3
    [2]. Converts array to string with comma operator   eg : arr.toString() //1,2,3
    [3]. Returns number of elements                     eg : arr.length;

<h3>Extract & Copy Methods :</h3>

    [1]. slice(start,end) (Non-mutating)                             eg : arr = [10,20,30,40,50]
            Returns a shallow copy of an portion of an array.             arr.slice(0,3)       // [10,20,30]
            end is exclusive.                                             arr.slice(1,3)       // [20,30]
    [2]. concat(...arrays) 
            Merge array into a new one (non-mutating)                eg : arr.concat(arr2)
            Merge one or more arrays                                 eg : arr.concat(arr2,arr3)
    [3]. copyWithin(target,start,end)                                eg : arr.copyWithin(0,3)
            Mutates the original array, end is exclusive, overwrites the values at starting.
            It doesn't add and remove items, only replace.
    [4]. with(index, value)                                          eg : arr = [1,2,3]
            Returns a new array with one element replaced.                const arr2 = arr.with(1,99) //[1,99,3]
    [5]. fill(value,start,end)                                       eg : arr = [1,2,3,4]
            Mutates the array.                                        
            Replace value of the array with same value.              eg : arr.fil(99,0,2)  // [99,99,3,4]
            start is inclusive and end is exclusive.
            if start and end is not provided, it fills the entire array.   eg : arr.fill(99)  // [99,99,99,99]
    [6]. Array.from(obj)