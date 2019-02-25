<?php include 'header.php'; ?> 

<body>
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<form>
					<label for="email">Email address</label>
                    <input type="text" id="e-mail" name="mail" placeholder="Enter email">
                    
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Password">

                    <button type="button" class="btns-primary" id="account-btn" onclick="logIn(email.value, password.value);">Log in</button>
				</form>
			</div>
		</div>		
	</div>

	<script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
    <script src="backend/firebase_base.js"></script>
	<script src="backend/firebase_database.js"></script>
	<script src="backend/login.js"></script>
	<script>
        var email = document.getElementById('e-mail');
        var password = document.getElementById('password');
    </script>
</body>
</html>