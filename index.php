<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Greenhouse flexwerk monitor</title>
</head>
<body>
    <h1 id="bigOne"></h1>
    <h2 id="bigTwo"></h2>
    
    <script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
    <script src="backend/dbcon.js"></script>
    <script>
        getData(document.getElementById('bigOne'), 'User/FirstName');
        getData(document.getElementById('bigTwo'), 'User/LastName');
    </script>
</body>
</html>