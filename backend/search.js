/* REQUIRES 
backend/firebase_base.js
basebackend/firebase_database.js
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
    filter(search);
  }

  previousQuery = search;
}, 500);

//Filters the colleagues by name with the search term
function filter(search)
{
  if (colleagues.length != 0)
  {  
    colleagues.forEach(function(profile)
    {
      var lname = profile.Name.toLowerCase();
      var lsearch = search.toLowerCase();
      if (lname.includes(lsearch))
      {
        //profile picture  
        search_results.innerHTML += "<div>" + profile.Name + ", " + profile.Craft + "</div>";
      }
    });

    //search_results.innerHTML += "</ul>";
  }
}

//Creates an HTML-element displaying the user data
function displayData(profile)
{
  search_results.innerHTML = "";
  storageroot.child(profile.ProfilePicture).getDownloadURL().then(function(url)
  {
      "<div>" + 
        "<img src=" + url + ">" + 
        "<p>" + profile.Name + "<br>" + profile.Craft + "</p>" +
      "</div>";
      

  }).catch(function(error) 
  {
      console.log(error.code + ": " +  error.message);
  });
}