<?php
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
	<title>uqtr_loisirs</title>
    <meta value="authors" content="Jeremie Cyrille / Josué Lubaki / Niang Malick / Sarr Badara / Raissa Mbikayi"/>
    <link rel="stylesheet" href="style_2ND_dev.css" type="text/css"/>
	<script src="jquery-3.4.1.js"></script>
	<script async defer
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBv0C3UMlUhyLlkv97wu6ZyvlbQM5SUpWI&callback=initMap"></script>
	<script src="anim.js"></script>
</head>

<body>
	<header>
		<image alt="logo UQTR" src="https://www.uqtr.ca/images/logos/logo-uqtr.png"></image>
		<a><image id="us" alt="us flag" src="https://cdn1.iconfinder.com/data/icons/rounded-flat-country-flag-collection-1/2000/us-01.png"></image>
		<image id="fr" alt="fr flag" src="https://icon2.cleanpng.com/20180524/rrh/kisspng-flag-of-france-flag-of-france-french-seat-arona-fr-national-dish-5b072005a8c087.3538517615271936056912.jpg"></image></a>
        <p>Loisirs pour les étudiants!</p>
        
	</header>
	<div class="page">
		<section id="nav">
			<ul>
				<li><a href=#> Accueil </a></li>
				<li id="test"><a href=#> S'inscrire </a></li>
				<li id="mp"><a href=#> carte </a></li>
			</ul>
		</section>

		<section id="contenu">

			<h1>Notre but:</h1>

			<p>Notre site propose aux étudiants désireux de réaliser une ou plusieurs activités de loisir de rejoindre les
				différentes activités proposées dans la liste suivante en 3 étapes:</p>
			<ul>
				<li> S'inscrire</li>
				<li> Choisir une ou plusieur activite</li>
				<li> Commencer les activite en groupe</li>
			</ul>
			<p>Les différentes activités des groupes sont sous la responsabilite de professionelles. Il s'agit de passionnés du domaine 
				qui vont feront découvrir des pans inédit de leurs loisirs préférés. Qu'attendez-vous...? Rejoignez-nous!</p>
			
			<h2>Liste des activités disponibles</h2>
			<table id="table"></table>
	
		</section>
		<div id="formulaire">
			<form>
			<p>inscrivez vous</p>
			<p>Nom  <input type="text" size="50"value=""> </p>
			<p>Prenom  <input type="text" size="50"value=""> </p>
			<p>Date de naissance  <input type="date" value="date" > </p>
			<p>Sexe <input type="radio" value="homme"name="homme">Homme <input type="radio" value="femme"name="femme">Femme </p>
			<p>Activite  <input list="activite" name="activite">
				<datalist id="activite">
				<option value="Natation">
				<option value="Randonnée">
				<option value="Badminton">
				<option value="Echec">
				<option value="Vélo">
				<option value="Kayak">
				</datalist></p>
			<p>Motivation  <input type="text" size="50"> </p>
			<p><input type="submit" value="valider"> <input type="reset" value="reboot"> </p>
			</form>
		</div>
		<div id="map"></div>
	</div>
	
</body>
</html>

?> 