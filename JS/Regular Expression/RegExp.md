### Regular Expression with Questions and Answers :

```js
//Example 1
let pattern1 = /test/
let input = "test"
const didMatch = pattern1.test(input)
const matches = input.match(pattern1)
console.log(didMatch) //true
console.log(matches) //[ 'test', index: 0, input: 'test', groups: undefined ]

//Example 2
let pattern2 = /test/
input = "the testing"  // "test" => true  // "Test" => true  // "TEST" => false
console.log(pattern2.test(input)) //true

//Example 3
let pattern3 = /[a-z]/;  //square inside anyone character
let input = "          d    33#";
console.log(pattern3.test(input)) //true

//[A-Z] anyone char capital
//[a-z] anyone char small
//[d]  anyone char d
//[3]  anyone num 3
//[0-9] anyone number
//[#]  anyone char
//[4-5] anyone char
//[c] anyone char
//[a-d] anyone char
//[35] anyone number
//[a-zA-Z] anyone char (caps or small) //"Z" => true //"z" => true
//[a-z5] anyone char
//[a-z5-6] anyone char
//[a-z][5] both will match
//[a-z]+[0-5] one or more matches
//[a-z]*[0-5] optional * anyone
//[b-d]?[0-5] optional * anyone
//[b-d]{1}[0-5] only one char
//[b-d]{2,5}[0-5] min=2,max=5
//[b-d]{1,}[0-5] min=1,max=infinity

//Example 3
const pattern4 = /[a-z][5]/
input = "a    c    5#"   
console.log(pattern4.test(input))    //false
input = "    a5    c 5#" 
console.log(pattern4.test(input))    //true

//Example 4
pattern5 = /[a-z]+[0-5]/
input = "abz5"   
console.log(pattern5.test(input))    //true
input = "aa"
console.log(pattern5.test(input))    //false


//Example 5
const pattern6 = /[a-d]*[0-5]/
input = "5"  
console.log(pattern6.test(input))    //true
input = "ae5"
console.log(pattern6.test(input))    //true

//Example 6
const pattern7 = /[b-d]?[0-5]/
input = "ab2"  
console.log(pattern7.test(input))    //true
input = "aa2"
console.log(pattern7.test(input))    //true

//Example 7
const pattern8 = /[b-d]{1}[0-5]/
input = "      g d2" 
console.log(pattern8.test(input))    //true
input = "      g d 2" 
console.log(pattern8.test(input))    //false

//Example 8
const pattern9 = /[b-d]{2,5}[0-5]/  
input = "      g d2"
console.log(pattern9.test(input))    //false
input = "      g dddd2" 
console.log(pattern9.test(input))    //true

//Example 9
const pattern10 = /[b-d]{1,}[0-5]/  
input = "      g ddddd2"
console.log(pattern10.test(input))    //true
input = "      g 2" 
console.log(pattern10.test(input))    //false


```