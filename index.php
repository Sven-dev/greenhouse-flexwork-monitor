<?php include 'header.php'; ?>

<body onLoad="logInCheck()">
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<h1>Hello</h1>
                <button class="btns-primary" onclick="logOut()">Log out</button>
			</div>
		</div>		
	</div>

	<script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
    <script src="backend/firebase_base.js"></script>
	<script src="backend/firebase_database.js"></script>
	<script src="backend/user.js"></script>
</body>
</html>