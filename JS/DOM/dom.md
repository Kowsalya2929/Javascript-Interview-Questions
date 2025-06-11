### DOM IN JavaScript (Document Object Modal):

- Allows us to access, modify and manipulate the content, structure, as well as style of a web page.

## Methods of JavaScript DOM :

1. getElementById() : Find an element by element id.
2. innerHTML : We can change html behaviour.

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=10">
    <title>Document</title>
</head>
<body>
<h1>Hi, How are you</h1>
<p id="name"></p>
<script>
document.getElementById("name").innerHTML = "Kowsalya"
</script>
</body>
</html>
```

3. getElementsByClassName() : Find elements by class name.

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=10">
    <title>Document</title>
</head>
<body>
<h1>Hi, how are you</h1>
<p class="name"></p>
<script>
document.getElementsByClassName("name")[0].innerHTML = "Kowsalya"
</script>
</body>
</html>
```

4. getElementsByTagName() : Find elements by tag name.
5. innerText() : text you can change it.

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=10">
    <title>Document</title>
</head>
<body>
<h1>Hi, how are you</h1>
<p></p>
<script>
document.getElementsByTagName("p")[0].innerText = "kowsalya"
</script>
</body>
</html>
```

6. getElementByName() : Find elements by name.

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>hi, how are you</h2>
    <input type="text" name="name">
    <script>
        document.getElementsByName("name")[0].value = "kowsalya"
    </script>
</body>
</html>
```

7. querySelector() : Returns the first matching element (single element).


```js
//Example 1
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h2 id="name">kowsi<h2>
<h2 id="name">kowsi</h2>
<script>
document.querySelector("#name").innerHTML = "kowsalya"
</script>
</body>
</html>
```

```js
//Example 2
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h2 class="name">kowsi<h2>
<h2 class="name">kowsi</h2>
<script>
document.querySelector(".name").innerHTML = "kowsalya"
</script>
</body>
</html>
```

8. querySelectorAll() : Returns all matching elements as a NodeList (like an array).You can loop through them using forEach() or for.

```js
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device=width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h2 class="name">kowsi</h2>
<h2 class="name">kowsi</h2>
<script>
document.querySelectorAll(".name")[0].innerHTML = "kowsalya"
</script>
</body>
</html>
```

```js
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device=width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h2 id="name">kowsi</h2>
<h2 id="name">kowsi</h2>
<script>
document.querySelectorAll("#name")[0].innerHTML = "<h3>kowsalya</h3>"
</script>
</body>
</html>
```

```js
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device=width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h2 id="name">kowsi</h2>
<h2 id="name">kowsi</h2>
<script>
let v1 = document.querySelectorAll("#name")
v1.forEach(p => {
    p.innerHTML = "kowsalya";
})
</script>
</body>
</html>
```

```js
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device=width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h2 class="name">kowsi</h2>
<h2 class="name">kowsi</h2>
<script>
let v1 = document.querySelectorAll(".name")
v1.forEach(p => {
    p.innerHTML = "kowsalya";
})
</script>
</body>
</html>
```

9. Changing the Value of an Attribute

```js
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h2 class="age">21</h2>
<script>
document.getElementsByClassName("age")[0].style.color = "red";
</script>
</body>
</html>
```

10. textContent : Gets or sets the plain text content 

```js
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h2 class="age">21</h2>
<script>
document.getElementsByClassName("age")[0].textContent = "22";
</script>
</body>
</html>
```

11. Difference between innerText and textContent :

```js
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="wisth=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<div id="demo">
    Visble text
    <span style="display:none">hidden text</span>
</div>
<script>
let v1 = document.getElementById("demo")
console.log(v1.innerText)
console.log(v1.textContent)
</script>
</body>
</html>
```

- Use **innerText** when you need what the user sees.

- Use **textContent** when you need all the text, visible or not.

11. className

```js
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h2 class="age">21</h2>
<script>
document.getElementsByClassName("age")
</script>
</body>
</html>
```