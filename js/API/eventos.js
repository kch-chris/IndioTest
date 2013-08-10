// Eventos
$(document).ready(function(){
	document.addEventListener("deviceready",function(){
		$('#imagen1').tap(function(){
				navigator.notification.alert('Respuesta Correcta',null,"Correcto","Aceptar");
		});
		$('#imagen2').tap(function(){
				navigator.notification.alert('Respuesta Incorrecta',null,"Incorrecto","Aceptar");
		});
		
		},false);
	});
	