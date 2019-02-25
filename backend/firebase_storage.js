/* REQUIRES 
backend/firebase_base.js
*/

// Create a root reference
var storageroot = firebase.storage().ref();

//Uploads an image to Firebase storage. Returns the image path
function uploadImage(image)
{
    var ref = storageroot.child("Images/");
    var file = "" // use the Blob or File API
    ref.put(file).then(function(snapshot) {
      return ref.fullPath;
    });
}