document.getElementById('closeButton').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.style.display = 'none';
}, false);

var personen = document.getElementById("map-location-wrap");

function showTable(){
    personen.style.display = 'block';
}