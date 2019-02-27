/* REQUIRES 
backend/firebase_base.js
backend/firebase_database.js
backend/firebase_storage.js
*/

//Fields
var currentUser;
var profile;

//Elements
var input = document.querySelector("input[type=file]"); 

//Start
getUser();

//Checks if a user is logged in
function getUser()
{
    //Link to the currently logged in user
    firebase.auth().onAuthStateChanged(function(user)
    {      
        //Get the users profile
        currentUser = user;
        profile = get('Profiles/' + user.uid);
        
        showProfilePicture(document.getElementById("profilepicture"));
    });
}

//uploads a new profile picture to storage, and links it to profile
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
    dbroot.child("Profiles/" + currentUser.uid + "/ProfilePicture").on('value', snap => getImage(snap.val(), imgElement));   
}