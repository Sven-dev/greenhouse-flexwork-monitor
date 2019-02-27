/* REQUIRES 
backend/firebase_base.js
backend/firebase_database.js
backend/firebase_storage.js
*/

//Fields
var currentUser;
var profile;

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
            profile = get('Profiles/' + user.uid);
            showProfilePicture(preview);           
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

//
function uploadProfilePicture(input, imgElement)
{  
    //Turn the input into a blob
    var blob = input.files[0].slice(0, input.files[0].size, 'image/png'); 
    var newFile = new File([blob], input.files[0].name, {type: 'image/png'});
    var imgPath = "Images/" + currentUser.uid + "/" + newFile.name;

    //Upload the blob to the database
    storageroot.child(imgPath).put(newFile).then(function()
    {
        set("Profiles/" + currentUser.uid + "/ProfilePicture", imgPath);
    });
}

function showProfilePicture(imgElement)
{
    dbroot.child("Profiles/" + currentUser.uid + "/ProfilePicture").on('value', snap => displayImage(snap.val(), imgElement));   
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