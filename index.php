<?php
    include 'header.php';
?>    

<div class="jumbotron text-center">
        <h1 id="bigOne"></h1>
        <h2 id="bigTwo"></h2>
        <button class="btn btn-primary" onclick="changeData('Object', 'Hello!')">Hello!</button>
        <button class="btn btn-success" onclick="changeData('Object', 'Byebye!')">ByeBye!</button>
</div>

    <div class="container">
       
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    
    </div>
    
    <script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
    <script src="backend/dbcon.js"></script>
    <script>
        linkData(document.getElementById('bigOne'), 'text');
        linkData(document.getElementById('bigTwo'), 'Object/Value');
    </script>
</body>
</html>