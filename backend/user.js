/* REQUIRES 
backend/firebase_base.js
backend/firebase_database.js
*/

//Fields
var currentUser;
var profile;

//Elements
var headerName = document.getElementById("dropdownMenuButton");

//Start
logInCheck();

//Checks if a user is logged in
function logInCheck()
{
    //Link to the currently logged in user
    firebase.auth().onAuthStateChanged(function(user) 
    {
        // User is signed in.          
        if (user) 
        {
            //Get the users profile
            currentUser = user;

            dbroot.child('Profiles/' + user.uid).once('value').then(function(snapshot)
            {
                profile = snapshot.val();
                console.log(profile);
                showHeaderData();
            });
        }
        // No user is signed in.        
        else 
        {
            window.location.href = "login.php";
        }
    });
}

//Logs the user out, and returns to the login-page
function logOut()
{
    firebase.auth().signOut().then(function()
    {
        console.log("Signed out");
    }, function(error) 
    {
        console.log(error.code + ": " +  error.message);
    });
}

function showHeaderData()
{
    headerName.innerHTML = "Welcome " + profile.Name;
}

function displayImage(imageUrl, imgElement)
{
    storageroot.child(imageUrl).getDownloadURL().then(function(url)
    {
        imgElement.src = url;
    }).catch(function(error) 
    {
        console.log(error.code + ": " +  error.message);
    });
}