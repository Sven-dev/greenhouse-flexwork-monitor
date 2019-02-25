<?php include 'header.php'; ?>

<body onLoad="logInCheck()">
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<h1>Hello</h1>
				<div class="input-group">
					<input type="search" class="search_bar" placeholder="Naam van collega..." />
					<button class="search_btn">Zoek</button>
				</div>
				<div class="collega">

				</div>
                <button class="btns-primary" onclick="logOut()">Log out</button>
			</div>
		</div>		
	</div>

	<script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
    <script src="backend/db.js"></script>
	<script src="backend/user.js"></script>
	<script src="backend/search.js"></script>
</body>
</html>