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
    
    <script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
    <script>
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAFpQy1ZMeGA4XFtxIHWHI2A_EAAEGRs2E",
        authDomain: "greenhouse-flexwork-monitor.firebaseapp.com",
        databaseURL: "https://greenhouse-flexwork-monitor.firebaseio.com",
        projectId: "greenhouse-flexwork-monitor",
        storageBucket: "greenhouse-flexwork-monitor.appspot.com",
        messagingSenderId: "394804551221"
    };
    firebase.initializeApp(config);

    var bigOne = document.getElementById('bigOne');
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => bigOne.innerText = snap.val());
    </script>
</body>
</html>