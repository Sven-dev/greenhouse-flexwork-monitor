<?php include 'header.php'; ?>

	<div class="banner">

	</div>

	<div class="container pushDown searchresults-wrap">
		<div class="row">
			<div class="col-md-12 text-center">
				<form>
					<div class="searchform">
						<input id="search-colleague" type="text" name="search" placeholder="You are looking for...">
					</div>
				</form>
			</div>
		</div>
		<div class="row history-wrap">
			<div class="col-md-12">
				<h2>Search results</h2>
				<hr>
				<div class="row" id="search-results">
				</div>
			</div>
		</div>		
	</div>
	<script src="backend/searchresults.js"></script>
	<script type="text/javascript">
		document.body.classList.add("bg-searchresults");
	</script>
</body>
</html>