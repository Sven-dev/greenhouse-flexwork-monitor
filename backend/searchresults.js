/* REQUIRES 
backend/firebase_base.js
backend/firebase_database.js
backend/firebase_storage.js
*/

//Fields
var previousQuery = "tsvnybssvrsnls";
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

    updateSearchbar();
  });
}

function updateSearchbar()
{
  window.setInterval(function() 
  {
    var search = search_bar.value;

    (search != previousQuery)
    {
      search_results.innerHTML = "";
      if (search == "")
      {
        colleagues.forEach(function(profile)
        {
          displayData(profile);
        });
      }
      else
      { 
        filter(search);   
      }

      previousQuery = search;
    }

    console.log("Search: " + search  + ", previous search: " + previousQuery);
  }, 500);
}
//Checks every second if the value of the searchbar has changed


//Filters the colleagues by name with the search term
function filter(search)
{
  if (search.length > 0)
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
        '<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 history-block">' +
            '<div class="profile-pn">' + 
                '<img class="profile-pic" src=' + url + '>' + 
                '<p class="profile-name">' + profile.Name + '<br>' + profile.Craft + '</p>' +
            '</div>' + 
        '</div>';
    }).catch(function(error) 
    {
        console.log(error.code + ": " +  error.message);
    });
    }