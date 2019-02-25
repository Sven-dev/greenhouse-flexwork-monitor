/* REQUIRES 
backend/firebase_base.js
firebase_databasebackend/firebase_database.js
*/

var previousQuery = "";
var colleagues = [];

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
  if (search != "" && search != previousQuery)
  {
    filter(search);
    previousQuery = search;  
  }
}, 500);

//Filters the colleagues by name with the search term
function filter(search)
{
  colleagues.forEach(function(profile)
  {
    if (profile.Name.includes(search))
    {
      //profile picture
      console.log(profile.Name + ", " + profile.Craft);
    }
  });
}