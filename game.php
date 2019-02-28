<?php include 'header.php'; ?>

	<div class="gameBtns">
		<div class="popup-button">
			<!--Trigger button -->
			<button type="button" class="game-button" data-toggle="modal" data-target=".bd-example-modal-x2">Achievements</button>
		
		</div>
		
		<div class="popup-button">
			<!--Trigger button -->
			<button type="button" class="game-button" data-toggle="modal" data-target=".bd-example-modal-xl">Leaderboards</button>
		</div>
	</div>


<!-- Leaderboards modal -->

	<div class="container pushDown">
		<div class="modal-wrap modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-xl">
				<div class="modal-content">
					<div class="row">			
						<div class="col-md-12 modal-colomn">
							<div class="modal-header">
								<div class="tab tab-1">
									<h3>Teams</h3>
								</div>
								<div class=" tab2 tab-2">
									<h3>My position</h3>
								</div>
							<h4>Leaderboard</h4>
							<a id="closeButton" aria-label="Close" data-dismiss="modal"><i class="far fa-times-circle"></i></a>
						</div>
							<div class="modal-inner">
								<div class="modal-progression-leaderboard">
									<div class="modal-img">
										<img src="image/leaderboard.png" alt="">
									</div>				
								</div>
								<div class="modal-information">
									<img src="image/leaderboard-info.png" class="no-select no-drag" alt="Achievement progress">
								</div>
							</div>							
						</div>
					</div>
				</div>
			</div>
		</div>


<!-- Achievements modal -->

<div class="container pushDown">
		<div class="modal-wrap modal fade bd-example-modal-x2 "  class="modal hide fade in"  tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
			<div class="modal-dialog  modal-xl">
				<div class="modal-content">
					<div class="row">			
						<div class="col-md-12 modal-colomn">
							<div class="modal-header">
								<div class="tab tab-1">
									<h3>achievements</h3>
								</div>
								<div class=" tab2 tab-2">
									<h3>Daily</h3>
								</div>

							<h4>Achievement</h4>
							<a id="closeButton" aria-label="Close" data-dismiss="modal"><i class="far fa-times-circle"></i></a>
						</div>
						<div class="modal-inner">
							<div class="modal-progression">
								<div class="progress-bar-bg">
								<p>Achievements clear</p>
									<div class="progress-bar"></div>
										<div class="progress-circle">
											<img src="image/icon-reward.png" class="no-select no-drag" alt="reward icon" width="50px" height="50px">
										</div>
									</div>
							
							</div>
							<div class="modal-information">
								<img src="image/achievement.png" class="no-select no-drag" alt="Achievement progress">
							</div>							
						</div>
					</div>							
				</div>
			</div>
		</div>
	</div>
</div>



	<script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
    <script src="backend/firebase_base.js"></script>
	<script src="backend/firebase_database.js"></script>
	<script src="backend/user.js"></script>
	<script type="text/javascript">
		document.body.classList.add("bg-game");

	</script>
</body>
</html>