<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

   	<link rel="stylesheet" href="includes/fontawesome-free-5.7.2-web/css/all.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css">    

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	

    <title>header</title>
</head>

<body onLoad="logInCheck()">

	<div class="navigation-bar">
		<div class="profile-bar offset-10" onclick="myFunction()">

			<a class="dropdown-toggle" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Welcome Alies</a>

			<div class="dropdown-menu" id="myDropdown">
				<ul class="list-unstyled">
			        <li class="dropdown-item border-bottom"><a href="profile.php">Edit Profile</a></li>
			        <li class="dropdown-item border-bottom"><a href="#">Settings</a></li>
			        <li class="dropdown-item" onclick="logOut()"><a href="#">Log Out</a></li>
			    </ul>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<ul>
						<li class="active"><a href="#">Home</a></li>
						<li><a href="#">Map</a></li>
						<li><img src="image/logo-small.png" alt="Greenhouse Logo" width="50px" height="50px"></li>
						<li><a href="#">Game</a></li>
						<li><a href="#">People</a></li>
					</ul>
				</div>
			</div>	
		</div>

	</div>
	<script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}ever

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.profile-bar')) {
    var dropdowns = document.getElementsByClassName("list-unstyled");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>

	