//Fields
//var currentUser;
var profile;

var _firstName;
var _lastName;
var _craft;
var _proposition;


// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAFpQy1ZMeGA4XFtxIHWHI2A_EAAEGRs2E",
    authDomain: "greenhouse-flexwork-monitor.firebaseapp.com",
    databaseURL: "https://greenhouse-flexwork-monitor.firebaseio.com",
    projectId: "greenhouse-flexwork-monitor",
    storageBucket: "greenhouse-flexwork-monitor.appspot.com",
    messagingSenderId: "394804551221"
});
root = firebase.database().ref();

function getData(field, query)
{ 
    root.child(query).on('value', snap => field.innerText = snap.val());
}

function changeData(query, text) 
{
    root.child(query).set({
      User: text
    });
}

//Maakt een account aan
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

//Log in op een account
function logIn(email, password)
{
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error)
    {
        console.log(error.code + ": " +  error.message);
    });
}

//Check of er een user is ingelogd
firebase.auth().onAuthStateChanged(function(user)
{
    //get user data
    if (user)
    {
        var currentUser = firebase.auth().currentUser;      
        return root.child('Profiles/' + currentUser.uid).once('value').then(function(snapshot)
        {
            profile = snapshot.val();            
            if (profile == null)
            {
                createProfile(currentUser, _firstName, _lastName, _craft, _proposition);
            }

            console.log(profile);
            console.log("User is logged in.");     
        });
    }
    else
    {
        currentUser = null;
        console.log("User is not logged in.");
    }
});

function createProfile(user, firstName, lastName, craft, proposition)
{
    user.displayName = firstName + " " + lastName;
    //foto

    //Maak profiel aan, link het met user
    root.child('Profiles/' + user.uid).set(
    {
        Craft: craft,
        Proposition: proposition,
        Current_Zone: null,
        Score: 0,
        Achievements: {
            Achievement_1: 0,
            Achievement_2: 0,
            Achievement_3: 0 }
    });

    return root.child('Profiles/' + user.uid).once('value').then(function(snapshot)
    {
        profile = snapshot.val();    
        console.log(profile);
        console.log("Account is created");     
    });
}



function logOut()
{
    firebase.auth().signOut().then(function() {
        console.log("Signed out");
       }, function(error) {
        console.log("Sign out: ???");
       });
}

//var getClass = document.getElementsByClassName('bigOne');