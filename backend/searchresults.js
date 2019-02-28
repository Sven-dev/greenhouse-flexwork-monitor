/* REQUIRES 
backend/firebase_base.js
backend/firebase_database.js
backend/firebase_storage.js
*/

//Fields
var previousQuery = "zgggfhdgkvds";
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

    getUrlData();
    updateSearchbar();
  });
}

function getUrlData()
{
  var url = window.location.href;
  var n = url.lastIndexOf('search=');
  if (n != -1)
  {
    var result = url.substring(n + 7);
    search_bar.value = result;
  }
}


//Checks every half second if the value of the searchbar has changed
function updateSearchbar()
{
  window.setInterval(function() 
  {
    var search = search_bar.value;
    if (search != previousQuery)
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
  }, 500);
}



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
      var urlName = profile.Name.split(' ').join('-');   
      search_results.innerHTML +=    
      '<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 history-block">' +
        '<a href=map.php?search=' + urlName + '>' + 
          '<div class="profile-pn">' + 
              '<img class="profile-pic" src=' + url + '>' + 
              '<p class="profile-name">' + profile.Name + '<br>' + profile.Craft + '</p>' +
          '</div>' + 
        '</a>' + 
      '</div>';
    }).catch(function(error) 
    {
        console.log(error.code + ": " +  error.message);
    });
    }