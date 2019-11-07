$(document).ready(function(){
    $(".page #nav ul li:first-child").click(function(){
      $("#contenu").slideDown("slow");
      $("#formulaire").hide();
    });
    $("#test").click(function(){
      $("#formulaire").slideDown("slow");
      $("#contenu").hide();
    });
  });