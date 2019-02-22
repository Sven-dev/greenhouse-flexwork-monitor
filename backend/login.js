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