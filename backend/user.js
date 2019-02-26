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
            previewFile();           
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
function uploadProfilePicture()
{
    var input = document.querySelector("input[type=file]"); 
    //Queryselector gets the first element it can find, might break if new forms get added
    
    //Turn the input into a blob
    var blob = input.files[0].slice(0, input.files[0].size, 'image/png'); 
    var newFile = new File([blob], currentUser.uid + '.png', {type: 'image/png'});

    //Upload the blob to the database
    var test = uploadFile("Images/" + newFile.name, newFile);

    console.log(test);
    //Sets the location of the profilepicture in the database
    set("Profiles/" + currentUser.uid + "/ProfilePicture", "Images/" + currentUser.uid + ".png");
}

function previewFile()
{
    dbroot.child("Profiles/" + currentUser.uid + "/ProfilePicture").on('value', snap => temp(snap.val(), preview));
    
}

function temp(imageUrl, imgElement)
{
    storageroot.child(imageUrl).getDownloadURL().then(function(url)
    {
        // `url` is the download URL for 'images/stars.jpg'
        imgElement.src = url;
    }).catch(function(error) {
        // Handle any errors
    });
}