$(document).ready(function(){
  $(".page #nav ul li:first-child").click(function(){
      $("#contenu").slideToggle(1000);
      $("#formulaire").hide();
      $("#map").hide();
      $(this).css("background-color", "white");
      $(".page #nav ul li:first-child a").css("color", "green");
      $("#test").css("background-color", "green");
      $("#test a").css("color", "white");
      $("#mp").css("background-color", "green");
      $("#mp a").css("color", "white");
  });

  $("#test").click(function(){
    $("#formulaire").slideToggle(1000);
    $("#contenu").hide();
    $("#map").hide();
    $("#test").css("background-color", "white");
    $("#test a").css("color", "green");
    $(".page #nav ul li:first-child").css("background-color", "green");
    $(".page #nav ul li:first-child a").css("color", "white");
    $("#mp").css("background-color", "green");
    $("#mp a").css("color", "white");
  });

  $("#mp").click(function(){
    $("#map").slideToggle(1000);
    $("#contenu").hide();
    $("#formulaire").hide();
    $("#mp").css("background-color", "white");
    $("#mp a").css("color", "green");
    $(".page #nav ul li:first-child").css("background-color", "green");
    $(".page #nav ul li:first-child a").css("color", "white");
    $("#test").css("background-color", "green");
    $("#test a").css("color", "white");
    $("#map").ready(function myMap() {
    // The location of Uluru
      var uluru = {lat: 46.3462, lng: -72.5788};
    // The map, centered at Uluru
      var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
    });
  });      
  var data=[{"order":1,"activity":"Natation","manager":"Michel Provencher","numofsub":7},
            {"order":2,"activity":"Badminton","manager":"Daniel Lefevbre","numofsub":15},
            {"order":3,"activity":"Randonnée","manager":"Catherine Pelletier","numofsub":10},
            {"order":4,"activity":"Kayak","manager":"Josée Coté","numofsub":14},
            {"order":5,"activity":"Velo","manager":"Jean-Yves Surroy","numofsub":22},
            {"order":6,"activity":"Echecs","manager":"Emilie Simard","numofsub":11}]; 

    $("table").ready(function GFG_FUN() { 
      
        var cols = []; 
          
        for (var i = 0; i < data.length; i++) { 
            for (var k in data[i]) { 
                if (cols.indexOf(k) === -1) { 
                      
                    // Push all keys to the array 
                    cols.push(k); 
                } 
            } 
        } 
          
        // Create a table element 
        var table = document.createElement("table"); 
          
        // Create table row tr element of a table 
        var tr = table.insertRow(-1); 
          
        for (var i = 0; i < cols.length; i++) { 
              
            // Create the table header th element 
            var theader = document.createElement("th"); 
            theader.innerHTML = cols[i]; 
              
            // Append columnName to the table row 
            tr.appendChild(theader); 
        } 
          
        // Adding the data to the table 
        for (var i = 0; i < data.length; i++) { 
              
            // Create a new row 
            trow = table.insertRow(-1); 
            for (var j = 0; j < cols.length; j++) { 
                var cell = trow.insertCell(-1); 
                  
                // Inserting the cell at particular place 
                cell.innerHTML = data[i][cols[j]]; 
            } 
        } 
          
        // Add the newely created table containing json data 
        var el = document.getElementById("table"); 
        el.innerHTML = ""; 
        el.appendChild(table); 
      });
                  
    
      
});     
