// Initialize Firebase
var config = {
    apiKey: "AIzaSyAFpQy1ZMeGA4XFtxIHWHI2A_EAAEGRs2E",
    authDomain: "greenhouse-flexwork-monitor.firebaseapp.com",
    databaseURL: "https://greenhouse-flexwork-monitor.firebaseio.com",
    projectId: "greenhouse-flexwork-monitor",
    storageBucket: "greenhouse-flexwork-monitor.appspot.com",
    messagingSenderId: "394804551221"
};
firebase.initializeApp(config);
var root = firebase.database().ref();

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

function addUser(email, password, firstName, lastName, craft, proposition)
{
    //maak user aan
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) 
    {
        console.log(error.code + error.message);
    });

    //haal user ID
    

    //Maak profiel aan, link het met user
    root.child('Users').push().set(
    { 
        First_Name: firstName,
        Last_Name: lastName,
        Craft: craft,
        Proposition: proposition,
        Current_Zone: null,
        Score: 0,
        Achievements: {
            Achievement_1: 0,
            Achievement_2: 0,
            Achievement_3: 0 }
    })
    ;
}

//var getClass = document.getElementsByClassName('bigOne');