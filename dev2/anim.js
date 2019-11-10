$(document).ready(function(){
  $(".page #nav ul li:first-child").click(function(){
      $("#contenu").slideDown("slow");
      $("#formulaire").hide();
      $("#map").hide();
  });
    $("#test").click(function(){
      $("#formulaire").slideDown("slow");
      $("#contenu").hide();
      $("#map").hide();
    });
    $("#mp").click(function(){
      $("#map").slideDown("slow");
      $("#contenu").hide();
      $("#formulaire").hide();
      $("#map").ready(function myMap() {
        // The location of Uluru
        var uluru = {lat: 46.3462, lng: -72.5788};
        // The map, centered at Uluru
       var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
      });
    });

});
