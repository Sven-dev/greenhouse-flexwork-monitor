<?php include 'header.php'; ?>

	<div class="container pushDown search-wrap">
		<div class="row">
			<div class="col-md-12 text-center">
				<h1>Who are you looking for?</h1>
				<hr>
				<form>
					<div class="searchform">
						<input id="search-colleague" type="text" name="search" placeholder="Search...">
					</div>
					<!-- <button class="btns-primary" type="button" name="find-colleague">Find</button> -->
				</form>

			</div>
		</div>		
	</div>

	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<div id="search-results"></div>
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

	<script src="backend/search.js"></script>
	<script>
		document.body.classList.add("bg-index");
	</script>
</body>
</html>