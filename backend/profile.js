/* REQUIRES 
backend/firebase_base.js
backend/firebase_database.js
backend/firebase_stoarge.js
*/

//Fields
var currentUser;
var profile;

//Elements
var input = document.querySelector("input[type=file]"); 
var pictureFrame = document.getElementById("profilepicture");

//Start
getUser();

function getUser()
{
    //Link to the currently logged in user
    firebase.auth().onAuthStateChanged(function(user) 
    {        
        if (user) 
        {
            //Get the users profile
            currentUser = user;

            dbroot.child('Profiles/' + user.uid).once('value').then(function(snapshot)
            {
                profile = snapshot.val();

                displayImage(profile.ProfilePicture);
            });
        }
    });
}

function displayImage(imageUrl)
{
    storageroot.child(imageUrl).getDownloadURL().then(function(url)
    {
        pictureFrame.src = url;
    }).catch(function(error) 
    {
        console.log(error.code + ": " +  error.message);
    });
}