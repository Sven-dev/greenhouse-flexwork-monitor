/* REQUIRES 
backend/firebase_base.js
*/

// Create a root reference
var storageroot = firebase.storage().ref();

//Display the image at the url in the element
function getImage(path, element)
{
    storageroot.child(path).getDownloadURL().then(function(url)
    {
        element.src = url;
    }).catch(function(error) 
    {
        console.log(error.code + ": " +  error.message);
    });
}

function removeImage()
{

}