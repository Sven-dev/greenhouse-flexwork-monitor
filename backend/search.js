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
    var max = 0;
    colleagues.forEach(function(profile)
    {
      var lname = profile.Name.toLowerCase();
      var lsearch = search.toLowerCase();
      if (lname.includes(lsearch))
      {
        if(max < 3)
        {
          displayData(profile);
          max++;
        }
      }
    });

    var urlname = search.split(' ').join('-');
    search_results.innerHTML += 
     '<a href="searchresults.php?search=' + urlname + '" class="btns-primary custom">Toon meer resultaten</a>';
  }
}

//Creates an HTML-element displaying the user data
function displayData(profile)
{
    search_results.innerHTML = "";    
    var index = 0;
    storageroot.child(profile.ProfilePicture).getDownloadURL().then(function(url)
    {
      var urlname = profile.Name.split(' ').join('-');
        search_results.innerHTML += 
        '<a class="search-link" href="map.php?search=' + urlname + '">' +
          '<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 search-block">' +
            '<div class="profile-pn">' + 
              '<div class="row">' + 
                  '<div class="col-md-3"><img class="profile-pic" src=' + url + '></div>' + 
                  '<div class="col-md-9"><p class="profile-name">' + profile.Name + '<br>' + profile.Craft + '</p></div>' +
              '</div>' + 
              '</div>' + 
          '</div>'+
        '</a>';
    }).catch(function(error) 
    {
        console.log(error.code + ": " +  error.message);
    });
}


