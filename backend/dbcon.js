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

//Fills a field with database-data resulting from the query 
function getData(field, Query)
{
    var dbRef = firebase.database().ref().child(Query);
    dbRef.on('value', snap => field.innerText = snap.val());
}