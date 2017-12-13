const GET_URL = "http://localhost:8000/api/sentimentcard/";
const GET_UTL = "https://my-json-server.typicode.com/fernandofloresg/demo/db"
let sentimentCardAvailable = false;
let sentimentcard;

function getSentimentCard(){
	$.get(GET_URL, function(data, status){
		data = data.objects[0]
		console.log(data);
		sentimentcard = data;
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
		var answer = getScoreData(response);
		answer.sentiment_card_id = sentimentcard.id;
		console.log(answer);
		//var student = JSON.parse(window.localStorage.getItem("fb_session")); //to save session
		//answer.student_id = student.id;
	});
});

function sendData(answer) {
	//This may require the ``json2.js`` library for older browsers.
	var data = JSON.stringify(answer);

	$.ajax({
		url: 'http://localhost:8000/api/v1/entry/',
		type: 'POST',
		contentType: 'application/json',
		data: data,
		dataType: 'json',
		processData: false
	})
}

function getScoreData (response) {
	var text = "";
	response.sentence_list.forEach(function(element, index) {
		text += element.text;
	});
	return {text : text, score_tag: response.score_tag};
}