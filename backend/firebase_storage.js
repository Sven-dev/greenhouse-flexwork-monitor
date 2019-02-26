/* REQUIRES 
backend/firebase_base.js
*/

// Create a root reference
var storageroot = firebase.storage().ref();

//Uploads an image to Firebase storage. Returns the image path
function uploadFile(path, file)
{
    var ref = storageroot.child(path);
    ref.put(file).then(function(snapshot)
    {
      console.log(ref.name);
      console.log(ref.fullPath);
      //return ref.fullPath;
    });
}