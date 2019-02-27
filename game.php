<?php include 'header.php'; ?>

	
	<div class="popup-button">

		<!--Trigger button -->
		<button type="button" class="game-button" data-toggle="modal" data-target="#achieveModal">Achievements</button>
	
	</div>


	<div class="container modal-wrap">
			<div class="row">			
				<div class="offset-md-2 col-md-8 modal-colomn">
					<div class="modal-header text-right">
						<div class="tab tab-1">
						</div>
						<div class="tab tab-2">
						</div>

						<h4>Achievement</h4>

					</div>

					<div class="modal-inner">
						<div class="modal-progression">
							<div class="progress-bar-bg">
							<p ="title">Achievements clear</p>
								<div class="progress-bar"></div>
								<div class="progress-circle">
									<img src="image/icon-reward.png" alt="reward icon" width="50px" height="50px">
								</div>
							<p>1 / 30</p>
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
		document.body.classList.add("bg-index");
	</script>
</body>
</html>