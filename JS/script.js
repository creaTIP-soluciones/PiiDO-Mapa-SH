function initMap() {
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 26.50549170610216,
			lng: -100.17891786288878,
		},
		zoom: 18,
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
		['Tacos Los Cuates', 26.504035902851417, -100.18099243250852, 'IMG/taco.svg', 40, 40, "https://www.piido.mx/tacos-los-cuates/"],
		//['Just Sabinas', xxx, xxx, 'IMG/bienestar.svg', 40, 40, "https://www.piido.mx/just-sabinas/"],
		['Midori Sushi', 26.477938290524886, -100.17671726380911, 'IMG/oriental.svg', 40, 40, "https://www.piido.mx/midori-sushi/"],
		['Empanadas Esmeralda', 26.502086507066785, -100.17826088403251, 'IMG/pastel.svg', 40, 40, "https://www.piido.mx/empanadas-esmeralda/"],
		['MELYBET Lavanderia y Planchaduria', 26.502045100897426, -100.17827295397404, 'IMG/ropa.svg', 40, 40, "https://www.piido.mx/melybet-lavanderia-y-planchaduria/"],
		['Chorizo Artesanal El Corral', 26.508330403296664, -100.17026974476688, 'IMG/carne.svg', 40, 40, "https://www.piido.mx/chorizo-artesanal-el-corral/"],
		[
			'Bici-Cobos',
			26.506160396872755,
			-100.17972636444973,
			'IMG/herramientas.svg',
			40,
			40,
			"https://www.piido.mx/bici-cobos/",
		],
		//['GL Crafts & +', xxx, xxx, 'IMG/regalo.svg', 40, 40, "https://www.piido.mx/gl-crafts/"],
		['Servicios FRAGO', 26.523392703195633, -100.16666652024944, 'IMG/nota.svg', 40, 40, "https://www.piido.mx/servicios-frago/"],
		//['Playeras Sabinas', xxx, xxx, 'IMG/ropa.svg', 40, 40, "https://www.piido.mx/playeras-sabinas/"],
		['Chivis Repostería', 26.511683104490093, -100.18473624540519, 'IMG/pastel.svg', 40, 40, "https://www.piido.mx/chivis-reposteria/"],
		['Pastelería Irma', 26.507779761910452, -100.17902232817775, 'IMG/pastel.svg', 40, 40, "https://www.piido.mx/pasteleria-irma/"],
		['Julis Sushi', 26.49401213813881, -100.1800282158738, 'IMG/oriental.svg', 40, 40, "https://www.piido.mx/julis-sushi/"],
		['Fiscal Sabinas', 26.506800232755687, -100.19063633678377, 'IMG/nota.svg', 40, 40, "https://www.piido.mx/fiscal-sabinas/"],
		[
			"BeerBurger",
			26.500915919899782,
			-100.18749992718783,
			'IMG/burger.svg',
			40,
			40,
			"https://www.piido.mx/beerburger/",
		],
		['Alpha 3D', 26.50923579574474, -100.18257575889676, 'IMG/nota.svg', 40, 40, "https://www.piido.mx/alpha-3d/"],
		['La Waffleria', 26.504681916866325, -100.18571493368562, 'IMG/waffle.svg', 40, 40, "https://www.piido.mx/la-waffleria/"],
		['Polyburgers', 26.481736110076785, -100.18775643312067, 'IMG/burger.svg', 40, 40, "https://www.piido.mx/polyburgers/"],
		['Totopos Mr. Maíz', 26.49850329773291, -100.18561539870068, 'IMG/snack.svg', 40, 40, "https://www.piido.mx/totopos-mr-maiz/"],
		['Dental Care', 26.509175494991812, -100.17085591836452, 'IMG/dentista.svg', 40, 40, "https://www.piido.mx/dental-care/"],
		['YNNA Grosery Store', 26.48966929876741, -100.18743891288264, 'IMG/tienda.svg', 40, 40, "https://www.piido.mx/ynna-grosery-store/"],
		['Crazy Snacks', 26.49722669610493, -100.18671585890165, 'IMG/snack.svg', 40, 40, "https://www.piido.mx/crazy-snacks/"],
		['KIRAL Psicología y Terapia Ocupacional', 26.50470840780914, -100.17684506562728, 'IMG/consultorio.svg', 40, 40, "https://www.piido.mx/kiral/"],
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
