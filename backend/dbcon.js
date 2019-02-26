//Fields
var user;
var profile;

function getUsers(searchbarvalue)
{
    var ref = root.child("Profiles");    
    ref.orderByKey().startAt(searchbarvalue).once('value').then(function(snapshot)
    {
        console.log(snapshot.val());
    });

    /*
    // Find all dinosaurs whose height is exactly 25 meters.    
    var ref = firebase.database().ref("dinosaurs");
    ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
    console.log(snapshot.key);
    });
    */
}

//creates an account
function createAccount(email, password, firstName, lastName, craft, proposition)
{
    //create a user 
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function()
    {
        //Get the newly created user
        var user = firebase.auth().currentUser;

        //Create a profile
        createProfile(user, firstName, lastName, craft, proposition);

        //Go to the homepage
        window.location.href = "home.php";
    })
    .catch(function(error) 
    {
        console.log(error.code + ": " +  error.message);
    });
}

//Log in as a user
function logIn(email, password)
{
    //Sign in
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function()
    {
        //Redirect to home
        window.location.href = "home.php";        
    })    
    .catch(function(error)
    {
        console.log(error.code + ": " +  error.message);
    });
}

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
            Achievement_3: 0 }
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

//var getClass = document.getElementsByClassName('bigOne');