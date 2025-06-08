### Date With Questions and Answers :

1. By default , diplay Indian Standard Time.
2. typeof (new Date) => Object.

```js
let x = new Date();
console.log(x)                 //Sun Jun 08 2025 07:34:12 GMT+0530 (India Standard Time)
console.log(typeof x)          //Object
console.log(x instanceof Date) //true
```

- 7 ways common create new Date object;

```js
const date2 = new Date("2025-06-08");          // ISO format
console.log(date2)
const date3 = new Date("June 8, 2025 10:00");  // Long format
console.log(date3)
const date4 = new Date(2025, 5, 8, 14, 30, 0); // June 8, 2025, 14:30:00 (2:30 PM)
console.log(date4)
const date5 = new Date("08/06/2025");          //Short format
console.log(date5);  
```

- Syntax (year,month,date,day,hours,minites,seconds,ms)

1. year ( yyyy )
2. month ( 0 - 11 )    => Jan - 0 (to) Dec - 11.
3. date ( 1 - 31 )
4. day ( 0 - 6 )       => Sunday - 0 (to) saturday - 6.
5. hours ( 0 - 23 )    
6. minites ( 0 -59 )
7. seconds ( 0 - 59)
8. ms ( 0 - 999 )
9. setTime, getTime => (ms) 1970-1-1.

- get methods is getting from to current date and time.
- set methods is setting output.
