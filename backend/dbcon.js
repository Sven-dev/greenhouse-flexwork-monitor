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

//Fills field with database-data resulting from query
function linkData(field, query)
{
    var dbRef = firebase.database().ref().child(query);
    dbRef.on('value', snap => field.innerText = snap.val());
    dbRef.on('value', snap => console.log(snap.val()));
}

function changeData(query, data) 
{
    var dbRef = firebase.database().ref().child(query);
    dbRef.set({
      Value: data
    });
}