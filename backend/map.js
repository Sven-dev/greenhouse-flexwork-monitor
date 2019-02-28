/* REQUIRES 
backend/firebase_base.js
backend/firebase_database.js
*/

//Fields

//Elements
var search_bar = document.getElementById('search-colleague');

var group1 = document.getElementById('groep1');
var group2 = document.getElementById('groep2');
var group3 = document.getElementById('groep3');
var group4 = document.getElementById('groep4');

//Start
getUrlData();

//get name from url
//put spaces back
//get profile from database
//

function getUrlData()
{
  var url = window.location.href;
  var n = url.lastIndexOf('search=');
  if (n != -1)
  {
    var urlname = url.substring(n + 7);
    var username = urlname.split('-').join(' ');
    search_bar.value = username;
    getProfile(username);
  }
}

function getProfile(username)
{
    dbroot.child('Profiles').once('value').then(function(snapshot)
    {
        snapshot.forEach(function(colleague)
        {
            var profile = colleague.val();
            if (profile.Name == username)
            {
                dbroot.child('Profiles/' + profile.UID + "/Location").on('value', function(location)
                {
                    EnableBeacon(location.val());
                });
            }
        });
    });
}

function EnableBeacon(location)
{
    group1.style.display = "none";
    group2.style.display = "none";
    group3.style.display = "none";
    group4.style.display = "none";

    if (location == 1)
    {
        console.log("user is in zone 1");
        group1.style.display = "block";
    }
    else if (location == 2)
    {
        console.log("user is in zone 2");
        group2.style.display = "block";
    }
    else if (location == 3)
    {
        console.log("user is in zone 3");
        group3.style.display = "block";
    }
    else if (location == 4)
    {
        console.log("user is in zone 4");
        group4.style.display = "block";
    }
}