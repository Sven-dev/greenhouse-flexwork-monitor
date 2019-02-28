<?php include 'map-location.php'; ?>
<?php include 'header.php'; ?>

	<div class="floor">
		<h2 class="text-center">Floor 3 <i class="fas fa-filter"></i></h2>
	</div>

	<div class="container map-wrap">
		<div class="row">
			<div class="col-md-12">
			<form>
				<div class="searchform text-center">
					<input id="search-colleague" type="text" name="search" placeholder="Search colleague...">
				</div>
			</form>
				<!-- <h1>Greenhouse map</h1> -->
				<div class=" groep1 mapblok">
				</div>
				<div class="groep2 mapblok">
				</div>
				<div class="groep3 mapblok">
				</div>
				<div class="groep4 mapblok">
				</div>
				<svg version="1.1" id="Laag_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1115 534" style="enable-background:new 0 0 1115 534;" xml:space="preserve">
			<style type="text/css">
				.st0{fill:white;stroke:#000000;stroke-miterlimit:10;}
			</style>
			<g> 
				<line class="st0" x1="4.5" y1="331.5" x2="4.5" y2="528.5"/>
			</g>
			<line class="st0" x1="1109.5" y1="528.5" x2="4.5" y2="528.5"/>
			<line class="st0" x1="1109.5" y1="331.5" x2="1109.5" y2="528.5"/>
			<line class="st0" x1="952.5" y1="331.5" x2="1109.5" y2="331.5"/>
			<line class="st0" x1="952.5" y1="157.5" x2="952.5" y2="331.5"/>
			<line class="st0" x1="851.5" y1="157.5" x2="952.5" y2="157.5"/>
			<line class="st0" x1="851.5" y1="4.5" x2="851.5" y2="157.5"/>
			<line class="st0" x1="107.5" y1="331.5" x2="4.5" y2="331.5"/>
			<line class="st0" x1="107.5" y1="4.5" x2="107.5" y2="331.5"/>
			<line class="st0" x1="851.5" y1="4.5" x2="107.5" y2="4.5"/>
			<rect x="1043.5" y="444.5" class="st0 rect1 rect" width="66" height="84" onclick="showTable()"/>
			<rect x="901.5" y="331.5" class="st0 rect2 rect" width="208" height="69" onclick="showTable()"/>
			<rect x="952.5" y="444.5" class="st0 rect3 rect" width="91" height="84" onclick="showTable()"/>
			<rect x="868.5" y="444.5" class="st0 rect4 rect" width="84" height="84" onclick="showTable()"/>
			<rect x="851.5" y="157.5" class="st0 rect5 rect" width="101" height="101" onclick="showTable()"/>
			<rect x="122.5" y="45.5" class="st0 rect6 rect" width="173" height="55" onclick="showTable()"/>
			<rect x="314.5" y="4.5" class="st0 rect7 rect" width="102" height="122" onclick="showTable()"/>
			<rect x="416.5" y="4.5" class="st0 rect8 rect" width="75" height="122" onclick="showTable()"/>
			<rect x="491.5" y="4.5" class="st0 rect9 rect" width="87" height="122" onclick="showTable()"/>
			<rect x="578.5" y="4.5" class="st0 rect10 rect" width="66" height="122" onclick="showTable()"/>
			<rect x="670.5" y="37.5" class="st0 rect11 rect" width="151" height="131" onclick="showTable()"/>
			<rect x="122.5" y="258.5" class="st0 rect12 rect" width="108" height="73" onclick="showTable()"/>
			<rect x="314.5" y="258.5" class="st0 rect13 rect" width="73" height="73" onclick="showTable()"/>
			<rect x="416.5" y="258.5" class="st0 rect14 rect" width="73" height="73" onclick="showTable()"/>
			<rect x="517.5" y="295.5" class="st0 rect15 rect" width="94" height="44" onclick="showTable()"/>
			<rect x="517.5" y="244.5" class="st0" width="94" height="14"/>
			<rect x="644.5" y="258.5" class="st0 rect17 rect" width="73" height="73" onclick="showTable()"/>
			<rect x="742.5" y="258.5" class="st0 rect18 rect" width="73" height="73" onclick="showTable()"/>
			<rect x="4.5" y="414.5" class="st0 rect16 rect" width="144" height="79" onclick="showTable()"/>
			<rect x="182.5" y="414.5" class="st0 rect19 rect" width="113" height="79" onclick="showTable()"/>
			<rect x="629.5" y="444.5" class="st0 rect20 rect" width="173" height="49" onclick="showTable()"/>
			<rect x="542.5" y="414.5" class="st0 rect21 rect" width="60" height="114" onclick="showTable()"/>
			<rect x="314.5" y="414.5" class="st0 rect22 rect" width="92" height="79" onclick="showTable()"/>
			<rect x="424.5" y="414.5" class="st0 rect23 rect" width="85" height="79" onclick="showTable()"/>
			</svg>
			</div>

		</div>
		
	</div>

	<script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
	<script src="backend/custom.js"></script>
    <script src="backend/firebase_base.js"></script>
	<script src="backend/firebase_database.js"></script>
	<script src="backend/user.js"></script>
	<script type="text/javascript">
		document.body.classList.add("bg-map-page");
	</script>
</body>
</html>