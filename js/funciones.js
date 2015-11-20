function registro(){
                //DOM
                pass1 = document.getElementById('password').value;
                pass2 = document.getElementById('password2').value;
                //Validacion contraseñas
                if(pass1 == pass2){
                //alert('Las contraseñas no coinciden');
                usuario = document.getElementById('usuario').value;
                email = document.getElementById('email').value;
                //GUARDAR LOCALMENTE
                //setItem(llave,valor)
                localStorage.setItem('usuario',usuario);
                localStorage.setItem('password',pass1);
                localStorage.setItem('email',email);
                //Mostrar mensaje
                mensaje = document.getElementById('mensaje');
                mensaje.style.opacity = "1";
                mensaje.style.transition = ".6s all";
                mensaje.innerHTML = "Usuario Registrado :v";
                
                //Redirigir
                //SetTimeout (function,retraso)
                setTimeout(
                    function(){
                        window.location.assign('login.html');
                    },2000);
            }
            else{
                //Las contraseñas no coinciden
                document.getElementById('password').style.border="3px solid red";
                document.getElementById('password2').style.border="3px solid red";
                //Mostrar mensaje
                mensaje = document.getElementById('mensaje');
                mensaje.style.opacity = "1";
                mensaje.style.transition = ".6s all";
                mensaje.innerHTML = "Revisa tus contraseñas";

                
            }
        }

function login(){
            //Capturar los Datos Escritos
            usuario = document.getElementById('usuario').value;
            password = document.getElementById('password').value;
            
            //Comparar con valores almacenados
            usuarioAlmacenado = localStorage.getItem('usuario');
            passwordAlmacenado = localStorage.getItem('password');
            
            if(usuario == usuarioAlmacenado && password == passwordAlmacenado){
                window.location.assign('main.html')
            }else{
                alert('ERROR: El usuario no existe');
                document.getElementById('usuario').style.border="3px solid red";
                document.getElementById('password').style.border="3px solid red";
                //Mostrar mensaje
                mensaje = document.getElementById('mensaje');
                mensaje.style.opacity = "1";
                mensaje.style.transition = ".6s all";
                mensaje.innerHTML = "ERROR: Usuario no valido";
                navigator.vibrate('100');
                navigator.vibrate('200');
            }
        }

function valorStar(radio) {
	if(radio.checked==true){
		document.getElementById('estrellas').value=radio.value;
	}
}

var x=document.getElementById("mapa");

          function cargarmap(){
          navigator.geolocation.getCurrentPosition(showPosition,showError);
          function showPosition(position)
           {
               lat=position.coords.latitude;
               lon=position.coords.longitude;
               latlon=new google.maps.LatLng(lat, lon)
               mapholder=document.getElementById('mapholder')
               mapholder.style.height='250px';
               mapholder.style.width='320px';
               var myOptions={
               center:latlon,zoom:16,
               mapTypeId:google.maps.MapTypeId.ROADMAP,
               mapTypeControl:false,
			   scaleControl: false,
               navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
             };
            var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
            var marker=new google.maps.Marker({position:latlon,map:map,title:"Tu aqui"});
  }
function showError(error)
  {
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      x.innerHTML="Denegada la peticion de Geolocalización en el navegador."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML="La información de la localización no esta disponible."
      break;
    case error.TIMEOUT:
      x.innerHTML="El tiempo de petición ha expirado."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML="Ha ocurrido un error desconocido."
      break;
    }
  }}


function almacenarLugar()
        {   
			localizacion = "";
            lugar = document.getElementById('lugar').value;
            precios = document.getElementById('precios').value;
			estrellas = document.getElementById('estrellas').value;
			categoria = document.getElementById('categoria').value;
        
        //crear cadena de texto
        //creamos la cadena de texto para que quede de la siguiente manera
        //titulo-contenido/titulo-contenido/etc...
        //despues alamcenamos la cadena en la llave (key) notas
        if(!localStorage.getItem('notas'))
        {
        
            //alert('no hay notas');
            //no hay notas
            notas = localizacion + '-' + lugar + '-' + precios + '-' + estrellas + '-' + categoria + '/';
            localStorage.setItem('notas',notas);
        
        }
        else
        {
           // alert('si hay notas');
            //si hay notas
            //Primero que nada obtenemos lo que habia guardado en notas
            //concatenamos lo nuevo al final de la cadena ya existente
            //almacenamos ;a nueva cadena de notas
            notas = localStorage.getItem('notas');
            notas += localizacion + '-' + lugar + '-' + precios + '-' + estrellas + '-' + categoria + '/';
            localStorage.setItem('notas',notas);
        }
            document.getElementById('lugar').value = "";
            document.getElementById('precios').value = "";
			document.getElementById('estrellas').value = "";
			document.getElementById('categoria').value = "";
            cargarNotas();
        
        }
        
        
        //addEventer (evento, funcion, burbujas)
        window.addEventListener('load', cargarNotas,true);
       
        
        function cargarNotas()
        { 
            //limipar
            document.getElementById('lugares-almacenados').innerHTML="";
            cadenaNotas = localStorage.getItem('notas');
            //separar por Notas
            notas = cadenaNotas.split('/');
            //crear notas
            i = 0;
            numeroNotas = notas.length -1;
            while (i < numeroNotas)
            {
                //alert(notas[i]);
                contenedorNotas = document.getElementById('lugares-almacenados');
                nota = notas [i].split('-');
				localizacionNota = nota[0];
                lugarNota = nota[1];
                preciosNota =  nota[2];
				estrellasNota =  nota[3];
				categoriaNota =  nota[4];
                //contendero de notas en su innerhtml
                contenedorNotas.innerHTML +=    "<div class = 'nota'>"+
					                            "<img src=http://maps.googleapis.com/maps/api/staticmap?center=Queretaro&zoom=15&scale=1&size=288x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:G%7CQueretaro>"+
                                                "<h1>" + lugarNota+"</h1>"+
                                                "<p>" + preciosNota+"</p>"+
					                            "<h4>" + estrellasNota+"</h4>"+
					                            "<h3>" + categoriaNota+"</h3>"+
                                                "</div>";


                i++;
            }
            
            
        }

function loginpage(){
                        window.location.assign('login.html');
}

function mainpage(){
                        window.location.assign('main.html');
}

function lugarespage(){
                        window.location.assign('lugares.html');
}

function indexpage(){
                        window.location.assign('index.html');
}

function creditospage(){
                        window.location.assign('creditos.html');
}


