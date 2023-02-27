function initMap() {
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 26.50549170610216,
			lng: -100.17891786288878,
		},
		zoom: 17,
		mapId: 'c9b8fd842dc062ef',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});

	// Name
	// Latitude, Longitude
	// Image URL
	// scaledSize width, height
	const markers = [
		[
			"BeerBurger",
			26.500915919899782,
			-100.18749992718783,
			'IMG/burger.svg',
			38,
			31,
			"https://www.piido.mx/beerburger/",
		],
		[
			'Bici-Cobos',
			26.506160396872755,
			-100.17972636444973,
			'IMG/herramientas.svg',
			35,
			35,
			"https://www.piido.mx/bici-cobos/",
		],
		[
			'Ghost House',
			34.66832715150856,
			135.43292762674864,
			'ghosthouse.svg',
			40,
			48,
		],
		['Castle', 34.66775608022106, 135.43139547897843, 'castle.svg', 40, 53],
		['Warp Pipe', 34.66739738878135, 135.43225049775214, 'pipe.svg', 38, 42.5],
		['Star World', 34.667959023359266, 135.42866400953733, 'star.svg', 38, 38],
		[
			'Donut Plains',
			34.66830355359945,
			135.4320565322381,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
	];


	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const contentString =
			'<center>' + currMarker[0] + '<br /><a href="' + currMarker[6] + '" target="_blank">' + "Quiero saber más</a></center> ";

		const infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}
