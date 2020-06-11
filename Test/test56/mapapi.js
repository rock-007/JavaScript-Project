function initialize() {
	var mapOptions = {
	center: { lat: 41.865281, lng: -87.640093 },
	zoom: 13
	};
	
	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
		
	
	var squareOneInfo = new google.maps.InfoWindow({
		content:'<div id="infobox">' +  
				'<h1>Square One Bar</h1><h2>1400 S Michigan Ave</h2>' +
				'A great bar if you want to avoid the crowds.  ' +
				'It has a laid back atmosphere but a very welcoming staff.  ' +
				'It has great specials as well.' +
				'</div>'
	});
	
	var homeInfo = new google.maps.InfoWindow({
		content:'<div id="infobox">' +  
				'<h1 class="title">My Home!</h1><h2>18th St & Michigan ave</h2>' +
				'This is where I live! Smack dab in the South Loop.  ' +
				'It\'s a fantastic neighborhood with bars and restaurants.  ' +
				'And if you happen to be a Bears fan, you\'re right next to Soldier Field.' +
				'</div>'
	});
	
	var duseksInfo = new google.maps.InfoWindow({
		content:'<div id="infobox">' +  
				'<h1 class="title">Dusek\'s Punch Bar</h1><h2>1227 W 18th Street</h2>' +
				'This is by far one of my absolute favorite place\'s in the entire city.  ' +
				'Underneath the Dusek\'s Restuarant is a hidden gem where they serve eclectic punch mixes.  ' +
				'The ambience is amazing, and the drinks are strong.  Take an Uber or a taxi if you\'re heading over.' +
				'</div>'
	});
	
	var mercerInfo = new google.maps.InfoWindow({
		content:'<div id="infobox">' +  
				'<h1 class="title">Mercer 113</h1><h2>113 W Hubbard Street</h2>' +
				'A bar/nightclub that is perfect for going out on a Friday or Saturday night.  ' +
				'It\'s not a posh club but you\'ll still feel like your at a nice upscale bar.  ' +
				'Get there before the line builds and you\'ll have a great night!' +
				'</div>'
	});
	
	var squareOne = new google.maps.Marker({
		position: { lat: 41.864032, lng: -87.624293 },
		map: map,
		title: 'Square One'
	});
	
	var home = new google.maps.Marker({
		position: { lat: 41.858382, lng: -87.624017 },
		map: map,
		title: 'Home'
	});
	
	var duseks = new google.maps.Marker({
		position: { lat: 41.857886, lng: -87.657391 },
		map: map,
		title: 'Dusek\'s Punch House'
	});
	
	var mercer = new google.maps.Marker({
		position: { lat: 41.889927, lng: -87.631759 },
		map: map,
		title: 'Mercer 113'
	});
	
	google.maps.event.addListener(squareOne, 'click', function() {
		GuidedTour();
	});
	
	google.maps.event.addListener(home, 'click', function() {
		GuidedTour();
	});
	
	google.maps.event.addListener(duseks, 'click', function() {
		GuidedTour();
	});
	
	google.maps.event.addListener(mercer, 'click', function() {
		GuidedTour();
	});
	
	function GuidedTour() {
		mercerInfo.close(map,duseks);
		map.panTo(home.getPosition());
		homeInfo.open(map,home);
		window.setTimeout(function(){
		map.panTo(squareOne.getPosition());
		homeInfo.close(map,home);
		squareOneInfo.open(map,squareOne);}
		, 6000)
		window.setTimeout(function(){
		map.panTo(duseks.getPosition());
		squareOneInfo.close(map,squareOne);
		duseksInfo.open(map,duseks);}
		, 11000)
		window.setTimeout(function(){
		map.panTo(mercer.getPosition());
		duseksInfo.close(map,duseks);
		mercerInfo.open(map,mercer);}
		, 16000)
	}
}
google.maps.event.addDomListener(window, 'load', initialize);