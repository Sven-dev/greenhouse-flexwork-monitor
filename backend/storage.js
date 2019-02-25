// Create a root reference
var storageroot = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('mountains.jpg');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('/mountains.jpg');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name            // true
mountainsRef.fullPath === mountainImagesRef.fullPath    // false


//Uploads an image to Firebase storage. Returns the image path
function uploadImage(image)
{
    var ref = storageroot.child("Images/");
    var file = "" // use the Blob or File API
    ref.put(file).then(function(snapshot) {
      return ref.fullPath;
    });
}