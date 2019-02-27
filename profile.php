<?php include 'header.php'; ?>
    <div class="container form-wrap">
        <div class="row">
            <div class="col-md-3">
                <div class="profiel">
                    <div class="status">
                    </div>
                        <input class="uploadPicture" type="file" onchange="uploadProfilePicture(input, preview)">
                    <div class="profilePicture">
                        <img src="" id="profilepicture">
                    </div>
                    
                    <div class="name">
                        <h2>Alies van Hout</h2>
                        <span>Media Design</span>
                    </div>
                    <div class="subSettings">
                        <ul>
                            <li><div class="testIcon"></div><p>alies@greenhouse.com</p></li>
                            <li><div class="testIcon"></div><p>064566798</p></li>
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
                    <div class="crafts selected col-md-6">
                        Creative
                    </div>
                    <div class="crafts col-md-6">
                        Media
                    </div>

                </div>
                <h2>Propositions</h2>                   
                <select id="propositions">                     
                    <option>Consultancy</option>
                    <option>Smart Services</option>
                    <option>Full Service marketing</option>
                    <option>Tech Support</option>
                </select>
                <div class="changeButtons row">
                    <div class="col-md-6">
                        <a href="#" class="cancel_button">Cancel</a>
                    </div>
                    <div class="col-md-6">
                        <a href="#">Save changes</a>
                    </div>
                </div>


            </div>
        </div>
    </div>
    
    <script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
    <script src="backend/firebase_base.js"></script>
    <script src="backend/firebase_database.js"></script>
    <script src="backend/firebase_storage.js"></script>
    <script src="backend/user.js"></script>
    <script>
        var input = document.querySelector("input[type=file]"); 
        var preview = document.getElementById("profilepicture"); 
        document.body.classList.add("bg-profilepage");
    </script>
</body>
</html>