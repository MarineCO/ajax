$("#show").click(function(){ 
	$.ajax({
		url: 'http://192.168.1.21:3000/places',
		type: 'GET',
		dataType: "html",
		success: function(response) {
			$("#places").html(response);
		},
		error: function() {
			console.log('Erreur');
		}
	});

});