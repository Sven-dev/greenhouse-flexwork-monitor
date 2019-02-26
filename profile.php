<?php include 'header_nologin.php'; ?>
    <div class="container form-wrap">
        <div class="row">
            <div class="col-md-3">
                <div class="profiel">
                    <div class="profilePicture">
                        <!--img here -->
                    </div>
                    <div class="name">
                        <h2>Alies van Hout</h2>
                        <span>Media Design</span>
                    </div>
                    <div class="subSettings">
                        <ul>
                            <li>alies@greenhouse.com</li>
                            <li>064566798</li>
                        </ul>
                    </div>
                    <a href="#" class="button">Change password</a>
                </div>
               
            </div>
            <div class="editProfile offset-md-1 col-md-8">
                <h2>Crafts</h2>
                <div class="row">
                    <div class="crafts col-md-6">
                        Tech
                    </div>
                    <div class="crafts col-md-6">
                        Data
                    </div>
                    <div class="crafts col-md-6">
                        Creative
                    </div>
                    <div class="crafts col-md-6">
                        Media
                    </div>

                </div>
                <h2>Propositions</h2>

            </div>
        </div>
    </div>
    
    <script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
    <script src="backend/db.js"></script>
    <script src="backend/dbcon.js"></script>
    <script>
        var email = document.getElementById('e-mail');
        var password = document.getElementById('password1');
        var firstname = document.getElementById('firstname');
        var lastname = document.getElementById('lastname');
        var craft = document.getElementById('craft');
        var propositie = document.getElementById('propositie');
        document.body.classList.add("bg-profilepage");
    </script>
</body>
</html>