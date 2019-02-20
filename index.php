<?php
    include 'header.php';
?>    

<div class="jumbotron text-center">
        <!-- <h1 id="bigOne"></h1>
        <h2 id="bigTwo"></h2> -->

        <button class="btn btn-primary" onclick="createAccount('SharonaSteevens@gmail.com', 'password',  'Sharona', 'Steevens', 'Media', 'Smart Services')">Nieuwe user</button>
        <button class="btn btn-primary" onclick="logIn('svenjanssen12321@gmail.com', 'password')">Log in</button>
        <button class="btn btn-primary" onclick="logOut()">Log out</button>
        
</div>

    <div class="container form-wrap">
        <div class="row">
            <div class="col-md-12 text-center">
                <form>
                    <label for="email">Email address</label>
                    <input type="text" id="e-mail" name="mail" placeholder="Enter email">
                    
                    <label for="password1">Password</label>
                    <input type="password" id="password1" placeholder="Password">
                    
                    <label for="password2">Password</label>
                    <input type="password" id="password2" placeholder="Password">
                    
                    <label for="firstname">First name</label>
                    <input type="text" id="firstname" name="firstname" placeholder="Enter first name">
                    
                    <label for="lastname">Last name</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Enter last name">
                    
                    <label for="craft">Select your craft:</label>                     
                      <select id="craft">                     
                        <option>Creative</option>
                        <option>Data</option>
                        <option>Media</option>
                        <option>Technology</option>
                      </select>

                    <label for="propositie">Select your proposition:</label>
                      <select id="propositie">                     
                        <option>Consultancy</option>
                        <option>Smart services</option>
                      </select>

                    <button type="button" class="btn btn-primary" id="account-btn" onclick="createAccount(email.value, password.value, firstname.value, lastname.value, craft.value, propositie.value);">Submit</button>
                </form>
        <!-- <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form> -->
            </div>
        </div>
    </div>
    
    <script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
    <script src="backend/dbcon.js"></script>
    <script>
        // getData(document.getElementById('bigOne'), 'text');
        // getData(document.getElementById('bigTwo'), 'Object/Value');
        var email = document.getElementById('e-mail');
        var password = document.getElementById('password1');
        var firstname = document.getElementById('firstname');
        var lastname = document.getElementById('lastname');
        var craft = document.getElementById('craft');
        var propositie = document.getElementById('propositie');

    </script>
</body>
</html>