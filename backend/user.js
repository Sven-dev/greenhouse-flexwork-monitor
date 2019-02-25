/* REQUIRES 
backend/firebase_base.js
firebase_databasebackend/firebase_database.js
*/

//Fields
var user;
var profile;

//Checks if a user is logged in
function logInCheck()
{
    //link to the currently logged in user
    firebase.auth().onAuthStateChanged(function(user) 
    {
        // User is signed in.          
        if (user) 
        {
            //Get the users profile
            profile = get('Profiles/' + user.uid);
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