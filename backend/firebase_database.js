/* REQUIRES 
backend/firebase_base.js
*/

var dbroot = firebase.database().ref();

//returns the thing on the location of path from the database 
function get(path)
{
    dbroot.child(path).once('value').then(function(snapshot)
    {
        return snapshot.val();
    });
}

//Changes the thing on the location of path. Also creates a new thing if it doesn't exist yet
function set(path, object)
{
    dbroot.child(path).set(object);
}

//connects the innertext of an element to a database value, and allows them to change eachother
function link(path, element)
{
    dbroot.child(path).on('value', snap => element.innerText = snap.val());
}