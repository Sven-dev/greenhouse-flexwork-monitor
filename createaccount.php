<?php include 'header_nologin.php'; ?>
    <div class="container form-wrap">
      <div class="bg-light p-5">
        <div class="row">
          <img src="image/logo.png" class="greenhouse-logo float-left offset-1" alt="Greenhouse logo">
            <div class="col-md-12 p-5 text-center">
              <form>  
                <div class="form-row">
                  <div class="form-group offset-md-3 col-md-3 offset-xs-0 col-xs-12">
                    <label for="firstname">First name</label>
                      <input type="text" id="firstname" name="firstname" placeholder="Enter first name">
                    </div>

                  <div class="form-group col-md-3">
                    <label for="lastname">Last name</label>
                      <input type="text" id="lastname" name="lastname" placeholder="Enter last name">
                  </div>
                </div>

                    <div class="styledSelect">                  
                      <label for="email">Email address</label>
                        <input class="fullwidth-input" type="text" id="e-mail" name="mail" placeholder="Enter email">
                    </div>

                    <div class="form-row">
                      <div class="form-group offset-md-3 col-md-3 offset-xs-0 col-xs-12">
                      <label for="password1">Password</label>
                      <input type="password" id="password1" placeholder="Password">
                      </div>
                      
                      <div class="form-group col-md-3">
                      <label for="password2">Password</label>
                      <input type="password" id="password2" placeholder="Password">
                      </div>
                    </div>
                
                    <div class="styledSelect"> 
                      <label for="phonenumber">Phone number</label>
                      <input class="fullwidth-input input-lg" type="number" placeholder="Ex. 0612345678" id="phone" name="phone" required>
                    </div>

                    <div class="styledSelect"> 
                      <label for="craft">Select your craft:</label>   
                          <select class="input-lg" id="craft">                     
                            <option>Creative</option>
                            <option>Data</option>
                            <option>Media</option>
                            <option>Technology</option>
                          </select>
                    </div>

                    <span class="fas fa-caret-down"></span>

                    <div class="styledSelect"> 
                      <label for="propositie">Select your proposition:</label>
                          <select class="input-lg" data-style="btn-primary" id="propositie">                     
                              <option>Consultancy</option>
                              <option>Smart services</option>
                          </select>
                          <span class="fa fa-sort-desc"></span>
                    </div>

                    <button type="button" class="btns-primary mt-5" id="account-btn" onclick="createAccount(email.value, password.value, firstname.value, lastname.value, craft.value, propositie.value);">Sign up account</button>
                  </form>
              </div>
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
        // add class to body tag
        document.body.classList.add("bg-createaccount");
    </script>
</body>
</html>
