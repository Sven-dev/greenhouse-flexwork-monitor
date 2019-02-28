<?php include 'header.php'; ?>

	<div class="container pushDown search-wrap">
		<div class="row">
			<div class="col-md-12 text-center">
				<h1>Who are you looking for?</h1>
				<hr>
				<form action="searchresults.php">
					<div class="searchform">
						<input id="search-colleague" type="text" name="search" placeholder="Search..." autocomplete="off">
					</div>
				</form>

			</div>
		</div>		
	</div>

	<div class="container">
		<div class="row history-wrap">
			<div class="offset-md-3 offset-3 col-md-6 col-6">
				<div class="row results" id="search-results"></div>
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