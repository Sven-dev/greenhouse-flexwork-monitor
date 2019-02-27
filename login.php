<?php include 'header_nologin.php'; ?> 

<div class="login-card">
	<div class="bg-light">
		
		<div class="container">
			
			<div class="row">
				
				<div class="offset-md-2 offset-xs-1 col-md-10 col-xs-11 card-white">
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
								<div class="align-middle">
									<ul class="list-unstyled">
										<li><a class="forgotPassword" href="#">Forgot password?</a></li>
										<li><a class="createAccount" href="createaccount.php">Create account</a></li>
									</ul>
								</div>
											
							</div>
						</form>						
					<img src="image/logo.png" class="greenhouse-logo float-left" alt="Greenhouse logo">	
				</div>
			</div>		
		</div>
	</div>
</div>

	<script src="backend/login.js"></script>
	<script>
		document.body.classList.add("bg-loginpage");
    </script>
</body>
</html>