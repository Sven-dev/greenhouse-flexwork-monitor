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

var userEmail = document.getElementById("useremail");
var userPhone = document.getElementById("userphone");

var userName = document.getElementById("username");
var userCraft = document.getElementById("usercraft");

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
            displayUserData();

            dbroot.child('Profiles/' + user.uid).once('value').then(function(snapshot)
            {
                profile = snapshot.val();
                displayImage(profile.ProfilePicture);
                displayProfileData();
            });
        }
    });
}

//uploads a new profile picture to storage, and links it to profile
function uploadProfilePicture()
{  
    //Turn the input into a blob
    var blob = input.files[0].slice(0, input.files[0].size, 'image/png'); 
    var newFile = new File([blob], input.files[0].name, {type: 'image/png'});
    var imgPath = "Images/" + currentUser.uid + "/" + newFile.name;

    //Upload the blob to the database
    storageroot.child(imgPath).put(newFile).then(function()
    {
        dbroot.child("Profiles/" + currentUser.uid + "/ProfilePicture").set(imgPath).then(function(){
            profile.ProfilePicture = imgPath;
            displayImage(profile.ProfilePicture);
        });
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

function displayUserData()
{
    if (currentUser.phoneNumber != null)
    {
        userPhone.innerHTML = currentUser.phoneNumber;
    }
    else
    {
        userPhone.innerHTML = "Phone number unknown";
    }

    if (currentUser.email != null)
    {
        userEmail.innerHTML = currentUser.email;
    }
    else
    {
        userEmail.innerHTML = "Email adress unknown";
    }
}

function displayProfileData()
{
    if (profile.Name != null)
    {
        userName.innerHTML = profile.Name;
    }
    else
    {
        userName.innerHTML = "Name unknown";
    }

    if (profile.Craft != null)
    {
        userCraft.innerHTML = profile.Craft;
    }
    else
    {
        userCraft.innerHTML = "Craft unknown";
    }
}