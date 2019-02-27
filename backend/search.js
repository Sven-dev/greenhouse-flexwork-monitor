/* REQUIRES 
backend/firebase_base.js
backend/firebase_database.js
backend/firebase_storage.js
*/

//Fields
var previousQuery = "";
var colleagues = [];

//Elements
var search_bar = document.getElementById('search-colleague');
var search_results = document.getElementById('search-results');

//Start
getColleagues();

//Gets all colleagues whose name starts with the given search term
function getColleagues()
{ 
  dbroot.child("Profiles").orderByKey().once('value').then(function(snapshot)
  {  
    snapshot.forEach(function(profile)
    {
      colleagues.push(profile.val());
    });
  });
}

//Checks every second if the value of the searchbar has changed
window.setInterval(function() 
{
  var search = search_bar.value;
  if (search == "")
  {
    search_results.innerHTML = "";
  }
  else if (search != previousQuery)
  {
    search_results.innerHTML = "";
    filter(search);
  }

  previousQuery = search;
}, 500);

//Filters the colleagues by name with the search term
function filter(search)
{
  if (colleagues.length != 0)
  {  
    var lsearch = search.toLowerCase();    
    colleagues.forEach(function(profile)
    {
      var lname = profile.Name.toLowerCase();
      if (lname.includes(lsearch))
      { 
        displayData(profile);
      }
    });
  }
}

//Creates an HTML-element displaying the user data
function displayData(profile)
{
  storageroot.child(profile.ProfilePicture).getDownloadURL().then(function(url)
  {
      search_results.innerHTML += 
      "<div>" + 
        "<img src=" + url + ">" + 
        "<p>" + profile.Name + "<br>" + profile.Craft + "</p>" +
      "</div>";

  }).catch(function(error) 
  {
      console.log(error.code + ": " +  error.message);
  });
}