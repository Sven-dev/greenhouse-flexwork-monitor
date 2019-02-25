<?php include 'header.php'; ?>

	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<h1>Hello</h1>
				<div class="input-group">
					<input type="search" id="search_bar" class="search_bar" placeholder="Naam van collega..."  onchange="filter()"/>
					<button class="search_btn">Zoek</button>
				</div>
				<div class="colleague" id="search_results">

				</div>
                <button class="btns-primary" onclick="logOut()">Log out</button>
			</div>
		</div>		
	</div>

	<script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
    <script src="backend/firebase_base.js"></script>
	<script src="backend/firebase_database.js"></script>
	<script src="backend/user.js"></script>
	<script src="backend/search.js"></script>
	<script>
		var search_bar = document.getElementById('search_bar');
		var search_results = document.getElementById('search_results');
	</script>
</body>
</html>