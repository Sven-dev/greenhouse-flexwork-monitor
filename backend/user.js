/* REQUIRES 
backend/firebase_base.js
backend/firebase_database.js
backend/firebase_storage.js
*/

//Fields
var currentUser;
var profile;

//Elements
var headerPicture = document.getElementById("headerProfilePicture");
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

            profile = dbroot.child('Profiles/' + user.uid).once('value').then(function(snapshot)
            {
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
    dbroot.child("Profiles/" + currentUser.uid + "/ProfilePicture").on('value', snap => getImage(snap.val(), headerPicture));   
    headerName.innerHTML = "Welcome " + profile.Name;
}