//Fields
var user;
var profile;

var _firstName;
var _lastName;
var _craft;
var _proposition;

//Create a user
function createAccount(email, password, firstName, lastName, craft, proposition)
{
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) 
    {
        console.log(error.code + ": " +  error.message);
    });

    _firstName = firstName;
    _lastName = lastName;
    _craft = craft;
    _proposition = proposition;
}

//Log in as a user
function logIn(email, password)
{
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error)
    {
        console.log(error.code + ": " +  error.message);
    });

    console.log("User is logged in.");    
}

function getUser()
{
    firebase.auth().currentUser;
}

//Check if a user is logged in
function logInCheck()
{
    getUser().then(function(user) 
    {
        //If the user is logged in
        if (user != null) 
        {
            //Get the user profile        
            console.log("User is logged in.");        
            profile = get('Profiles/' + user.uid);
        } 
        //If the iser is not logged in
        else
        {
            //Return to the login page
            console.log("User is not logged in");        
        }

        console.log(user);
    });
}

//Check of er een user is ingelogd
firebase.auth().onAuthStateChanged(function(user)
{   
    //console.log("User: " + user);
    /*    
    //If user is logged in
    if (user)
    {
        profile = get('Profiles/' + user.uid)

            //If the user doesn't have a profile yet        
            if (profile == null)
            {
                //Create a profile
                createProfile(user, _firstName, _lastName, _craft, _proposition);
                //Redirect to homepage
                window.location.href = "/test.php";
            }
            else
            {
                console.log(profile);
                console.log("User is logged in.");

                window.location.href = "/test2.php";
            }  
    }
    //If user is not logged in
    else
    {
        //Redirect to login page
        console.log("User is not logged in.");
    }
*/   
});


//Creates a new profile in the database, and links it to the user
function createProfile(user, firstName, lastName, craft, proposition)
{
    user.displayName = firstName + " " + lastName;
    //foto

    //Maak profiel aan, link het met user
    set('Profiles/' + user.uid, {
        Craft: craft,
        Proposition: proposition,
        Current_Zone: null,
        Score: 0,
        Achievements: {
            Achievement_1: 0,
            Achievement_2: 0,
            Achievement_3: 0 
        }});
}

//Gets the profile of the user parameter
function getProfile(user)
{
    profile = get('Profiles/' + user.uid);
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

//var getClass = document.getElementsByClassName('bigOne');