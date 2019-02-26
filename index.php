<?php include 'header.php'; ?>

	<div class="container search-wrap">
		<div class="row">
			<div class="col-md-12 text-center">
				<h1>Who are you looking for?</h1>
				<hr>
				<form>
					<div class="searchform">
						<input id="search-colleague" type="text" name="search" placeholder="Search...">
					</div>
					<!-- <button class="btns-primary" type="button" name="find-colleague">Find</button> -->
					<div id="search-results"></div>
				</form>
			</div>
		</div>		
	</div>

	<img class="explosion-img" src="image/explosion-klein.png" alt="explosion">

	<!-- <div class="container">
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
	</div> -->

	<script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
    <script src="backend/firebase_base.js"></script>
	<script src="backend/firebase_database.js"></script>
	<script src="backend/user.js"></script>
	<script src="backend/search.js"></script>
	<script>
		document.body.classList.add("bg-index");
		var search_bar = document.getElementById('search-colleague');
		var search_results = document.getElementById('search-results');
	</script>
</body>
</html>