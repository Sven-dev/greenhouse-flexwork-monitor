<?php
    include 'header.php';
?>

<body onLoad="logInCheck()">
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<h1>Hello</h1>
			</div>
		</div>		
	</div>

	<script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
    <script src="backend/db.js"></script>
	<script src="backend/dbcon.js"></script>
    <script>
        logInCheck();
    </script>
</body>
</html>