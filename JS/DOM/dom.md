### DOM IN JavaScript (Document Object Modal):

- Allows us to access, modify and manipulate the content, structure, as well as style of a web page.

## Methods of JavaScript DOM :

1. getElementById() : Find an element by element id.
2. innerHTML : We can change html behaviour.

```js
<!DOCTYPE html>
<html>
<head>
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
<html>
<head>
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
<html>
<head>
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
<html>
</html>
<body>
<h1>Hi how are you</h1>
<input type="text" name="t1">
<script>
document.getElementsByName("t1").innerText = "kowsalya"
</script>
</body>

