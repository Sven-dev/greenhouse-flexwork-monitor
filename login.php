<?php include 'header_nologin.php'; ?> 

<div class="login-card">
	<div class="bg-light">
		<div class="container">
			<div class="row">
				<div class="offset-md-3 col-md-9 test">
					<h3>Sign in</h3>
						<form>
							<div class="text-center">
								<label for="email">Email address</label>
								<input type="text" id="e-mail" name="mail" placeholder="Enter email">
								
								<label for="password">Password</label>
								<input type="password" id="password" placeholder="Password">

								<div class="custom-control custom-checkbox mb-3">
								<input type="checkbox" class="custom-control-input" id="customCheck" name="Keep-loggedIn">
								<label class="custom-control-label" for="customCheck">Keep me signed in</label>
								</div>
							
								
								<div class="styledSelect"> 
								<button type="button" class="btns-primary" id="account-btn" onclick="logIn(email.value, password.value);">Log in</button>
								</div>		

								<hr class="login">

								<a class="forgotPassword" href="#">Forgot password?</a>
							</div>
						</form>
					</div>
				</div>		
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
		document.body.classList.add("bg-loginpage");
    </script>
</body>
</html>