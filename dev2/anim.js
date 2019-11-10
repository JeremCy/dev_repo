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
 var uluru = {lat: -25.344, lng: 131.036};
 // The map, centered at Uluru
 var map = new google.maps.Map(
     document.getElementById('map'), {zoom: 4, center: uluru});
 
});
});
});