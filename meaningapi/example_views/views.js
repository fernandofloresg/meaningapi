const GET_URL = "http://localhost:8000/api/sentimentcard/";
let sentimentCardAvailable = false;
function getSentimentCard(){
	$.get(GET_URL, function(data, status){
		data = data.objects[0]
		console.log(data);
		if(data != undefined){
			$('#card-media').empty().append('<img height="300px" width="300px" src="../' + data.media+ '"">');
		}else {
			$('#card-media').empty().append('<img height="300px" width="300px" src="http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg">');
		}
		
	});
}

$( document ).ready(function() {
	$('#textarea1').trigger('autoresize');//necesario para que funcione el textarea
	getSentimentCard();
})

let text; //text to be analyzied

$('#text-content').submit(function(event) {
	event.preventDefault();//evitar que el boton submit refresque la pagina
	text = $('#textarea1').val(); //obtiene el texto para analizar
	//JSON necesario para hacer la request 
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "http://api.meaningcloud.com/sentiment-2.1",
		"method": "POST",
		"headers": {
			"content-type": "application/x-www-form-urlencoded"
		},
		"data": {
			"key": "fb533b613c51a7126543025345cb06a6",
			"lang": "es",
			"txt": text,
			"txtf": "plain",
			"url": "",
			"doc": ""
		}
	}
	//Resultados para guardar

	$.ajax(settings).done(function (response) {
		console.log(response); //imprime la respuesta del API
	});
});

