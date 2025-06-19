### String with Questions and Answers :

1. \'  =>  single quotes 

```js
let result = "she\'s a good girl"
console.log(result) //she's a good girl
```

2. \"  => double quotes

```js
let result = "she weared \"saree\""
console.log(result) //she weared "saree"
```

3. \\ => Backslash 

```js
let result = "5\\9"
console.log(result) //5\9
```

- Two ways to create string

```js
let x = "kowsalya"
let y = new String("kowsalya")
console.log(x)          //kowsalya
console.log(typeof x)   //string
console.log(y)          //[String: 'kowsalya']
console.log(typeof y)   //object
```

- Find out length of the string : including space also it takes.

```js
let str = "kowsalya loganathan"
console.log(str.length) //19
```

- Methods in String :-

1. charAt() : allow positive indexes and not allow negative indexes.
2. [] : allow positive indexes and not allow negative indexes.
3. at() : access both positive and negative indexes also allow.
4. charCodeAt() : gives unicode value (UTF-16) and negative indexes not allow.

- Unicode values
- ("0" to "9") = (48 to 57)
- ("A" to "Z") = (65 to 90) //ASCII VALUES (American Standard Code Information Interchange)
- ("a" to "z") = (97 to 122)

5. toUpperCase() : Gives Upper case value
6. toLowerCase() : Gives lower case value
7. text.concat(text2) : Concat one or more texts
8. text.trim() : Removing whitespace at start and end only and not remove space with words in center.
9. text.trimStart() : Removing whitespace at start only end and center will not remove whitespace.
10. text.trimEnd() : Removing whitespace at end only start and center will not remove whitespace.
11. text.split() : It splits with words or char what you give in center.
12. text.padStart() and text.padEnd()
13. text.repeat() : Returns a new string. Does not change the original string.

```js
//charAt() : allow positive indexes and not allow negative indexes.
let name = "kowsalya"
console.log(name.charAt("4")) //a
console.log(name.charAt(0))   //k
console.log(name.charAt(4))   //a
console.log(name.charAt("-4")) //NO OUTPUT 
console.log(name.charAt(-0))   //k
console.log(name.charAt(-4))   //NO OUTPUT
```

```js
//[] : allow positive indexes and not allow negative indexes.
let name = "kowsalya"
console.log(name["4"]) //a
console.log(name[0])   //k
console.log(name[4])   //a
console.log(name["-4"]) //undefined 
console.log(name[-0])   //k
console.log(name[-4])   //undefined
```

```js
//at() : access both positive and negative indexes.
let name = "kowsalya"
console.log(name.at("4")) //a
console.log(name.at(0))   //k
console.log(name.at(4))   //a
console.log(name.at("-4")) //a 
console.log(name.at(-0))   //k
console.log(name.at(-4))   //a
```

```js
//charCodeAt() : gives unicode value (UTF-16) and negative indexes not allow.
// - Unicode values
// - ("0" to "9") = (48 to 57)
// - ("A" to "Z") = (65 to 90) //ASCII VALUES (American Standard Code Information Interchange)
// - ("a" to "z") = (97 to 122)
let name = "kowsalya"
console.log(name.charCodeAt("4")) //97
console.log(name.charCodeAt(0))   //107
console.log(name.charCodeAt(4))   //97
console.log(name.charCodeAt("-4")) //NaN 
console.log(name.charCodeAt(-0))   //107
console.log(name.charCodeAt(-4))   //NaN
```

```js
//toUpperCase() : Gives Upper case value
let name = "kowsalya"
console.log(name.toUpperCase()) //KOWSALYA
```

```js
//toLowerCase() : Gives lower case value
let name = "KOWSALYA"
console.log(name.toLowerCasw()) //kowsalya
```

```js
//text1.concat(text2) : concat one or more texts
let text1 = "Hi"
let text2 = "I"
let text3 = "am"
let text4 = "Kowsalya"
console.log(text1.concat(" ",text2," ",text3," ",text4)) //Hi I am Kowsalya
```

```js
//text.trim() : Removing whitespace to front and end only not remove space with words in center.
let text = "          Kowsalya loganathan    " 
console.log(text.trim())  //Kowsalya loganathan
```

```js
//text.trimStart() : Removing whitespace at start only end and center will not remove whitespace.
let text = "          Kowsalya loganathan    " 
console.log(text.trim())  //"Kowsalya loganathan     "
```

```js
//text.trimStart() : Removing whitespace at end only start and center will not remove whitespace.
let text = "          Kowsalya loganathan    " 
console.log(text.trim())  //"          Kowsalya loganathan"
```

```js
//text.split() : It splits with words or char what you give in center. A string can be converted to an array.
let text = "Hi,i am kowsalya"
console.log(text.split())    //[ 'Hi,i am kowsalya' ]
console.log(text.split(""))    //['H', 'i', ',', 'i',' ', 'a', 'm', ' ','k', 'o', 'w', 's','a', 'l', 'y', 'a']
console.log(text.split(" "))   //[ 'Hi,i', 'am', 'kowsalya' ]
console.log(text.split(","))   //[ 'Hi', 'i am kowsalya' ]
console.log(text.split("a"))   //[ 'Hi,i ', 'm kows', 'ly', '' ]
```

```js
//text.padStart() and text.padEnd() 
let text = "5"
console.log(text.padStart(4,"0"))  //0005
console.log(text.padEnd(4,"x"))    //5xxx
console.log(text.padStart(4,0))  //0005
console.log(text.padEnd(4,0))    //5000
// To pad a number, convert the number to a string first.
let text2 = 5;
text2 = text2.toString()
console.log(text2.padStart(4,"0"))  //0005
console.log(text2.padEnd(4,"0"))    //5000
console.log(text2.padStart(4,0))  //0005
console.log(text2.padEnd(4,0))    //5000
```

```js
//text.repeat() : Returns a new string. Does not change the original string.
//syntax : string.repeat(count)
let text = "Hello"
console.log(text.repeat(3)) //HelloHelloHello
let text2 = text.repeat(6)  
console.log(text)           //Hello
console.log(text2)          //HelloHelloHelloHelloHelloHello
```

```js
//replace() : Returns a new string. Replaces only the first match. If you want to replace all matches, use a regular expression with the /g flag set. 
let text = "Please visit Microsoft and Microsoft!"
console.log(text.replace("Microsoft","our course"))  //Please visit our course and Microsoft!
console.log(text)  //Please visit Microsoft and Microsoft!
let text2 = text.replace("Microsoft","our course")
console.log(text2) //Please visit our course and Microsoft!
//i flag (insensitive)
//g flag (global match)
```

<h3>Write a JavaScript program to find the length of a string</h3>

```js
const str = "Kowsalya Loganthan"

console.log(str.length) //18
```

<h3> Write a JavaScript program to convert a string to uppercase</h3>

```js
const str = "Kowsalya Loganthan"

console.log(str.toUpperCase()) //KOWSALYA LOGANATHAN
```

<h3> Write a JavaScript program to check if a string contains a specific word.</h3>

```js
function f1(str,word){
    return str.toLowerCase().includes(word.toLowerCase())
}
const str = "i am a software developer"
const word = "am"
console.log(f1(str,word))
```

<h3>Write a JavaScript program to extract a substring from a string</h3>

```js
const str = "i am a developer"
console.log("hi," + str.slice(7)) //hi,developer
```

<h3> Write a JavaScript program to replace a word in a string with another word</h3>

```js
const str = "i am an developer"

str = str.replace("an","a")

console.log(str) //i am a developer
```