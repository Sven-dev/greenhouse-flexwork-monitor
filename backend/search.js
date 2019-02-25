$(document).ready(function() {

  // // Haalt pokemon.json op.
  // $.getJSON("/pokedex/pokemon.json", function(result){
  //   window.pokemons = result;
  // });
  
  $('.search_btn').click(function(e) {
    // Zorgt ervoor dat de event niet doet wat hij normaal doet maar dat je zelf, door middel van de onderstaande code, hem dingen kan laten doen.
    e.preventDefault();
    
    // Verwijderd alle vorige resulaten (Collega).
    $('.collega').html('');
    
    // Pakt de value uit de searchbar.
    var searchValue = $('.search_bar').val();
    
    // Zorgt ervoor dat hij steeds als er op de zoek button word geklikt alles wat er als tekst instaat word verwijderd.
    $('.search_bar').val('');
    
    // Zoekt in de array van pokemons en zorgt ervoor dat de tekst die in de searchbar is getypt overeenkomt met een van de pokemons.
    var filteredPokemons = window.pokemons.filter(function(pokemon) {
      return pokemon.Name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });
    
    // Deze code is ervoor zodat ik zelf kan bepalen werlke informatie uit de json bestand word gehaald en deze loopt hij in de browser.
    $.each(filteredPokemons, function(index, value) {
      var template = [
        "<div class='collega'>",
        "<strong>Naam:</strong> " + value.Name + "<br />",
        "<strong>Type 1:</strong> " + value["Type 1"] + "<br />",
      ]; // Als Type 2 bestaat dan de type door pushen naar de rest van de template. Dit heb ik gedaan omdat niet elke pokemon een tweede type heeft.
      if (value.hasOwnProperty('Type 2') && value["Type 2"] !== "") {
        template.push("<strong>Type 2:</strong> " + value["Type 2"] + "<br />");
      }
        // Dit ook voor description.
      if (value.hasOwnProperty('Description')) {
        template.push("<strong>Beschrijving:</strong> " + value.Description + "<br />");
      }
        // Dit ook voor afbeelding.
      if (value.hasOwnProperty('Picture')) {
        template.push("<img src='" + value.Picture + "' />");
      }
      // Pushed laatste stukje HTML aan de template toe zodat de div(pokemon) word afgesloten.
      template.push("</div>");
      // Zorgt ervoor dat alle lossen delen code hierboven aan elkaar worden geplakt zodat het een valid code word die als HTML word gezien.
      $('.collega').append(template.join(""));
    });
  });
  
});