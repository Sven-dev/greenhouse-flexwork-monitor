<?php include 'header.php'; ?>

	<div class="banner">

	</div>

	<div class="container searchresults-wrap">
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
					<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 history-block">
						<div class="profile-pn">
							<img class="profile-pic" src="image/profile-pic.jpg">
							<p class="profile-name">Chick Ken <br>Technology</p>
							<i class="fas fa-info-circle"></i>
						</div>
					</div>
					<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 history-block">
						<div class="profile-pn mx-3">
							<img class="profile-pic" src="image/profile-pic.jpg">
							<p class="profile-name">Chick Ken <br>Technology</p>
							<i class="fas fa-info-circle"></i>
						</div>
					</div> 
					<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 history-block">
						<div class="profile-pn test">
							<img class="profile-pic" src="image/profile-pic.jpg">
							<p class="profile-name">Chick Ken <br>Technology</p>
							<i class="fas fa-info-circle"></i>
						</div>
					</div>
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