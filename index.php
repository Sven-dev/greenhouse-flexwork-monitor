<?php include 'header.php'; ?>

	<div class="container pushDown search-wrap">
		<div class="row">
			<div class="col-md-12 text-center">
				<h1>Who are you looking for?</h1>
				<hr>
				<form action="searchresults.php">
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

	<script src="backend/search.js"></script>
	<script>
		document.body.classList.add("bg-index");
	</script>
</body>
</html>