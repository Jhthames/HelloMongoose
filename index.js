<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="/users" onsubmit="return validateForm()" method="post">
        Name: <input type="text" name="fname">
        Age: <input type="text" name="age">
        <input type="submit" value="Submit">
    </form>
</body>
</html>
