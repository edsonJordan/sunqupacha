	var radio = "slider__radiobox--";
	var n = 0;
	var conteos= 1;
	var id = setInterval(function(){
	n++; 
	//clearInterval(id);
	if (n <= 4){	
		document.getElementById(radio+n).checked = true; 
		console.log(n);
		console.log(radio+n);	
		//	clearInterval(id);
	}
	if(n == 5){
		 n = 0;
	}		  		
},5000);
/* ICONO DE LUPA PARA  BUSQUEDA*/
inpt_search.onfocus = function() {
	console.log("foco on");
	var elemento = document.getElementById("label");
		elemento.classList.add('active');
};
inpt_search.onblur = function() {
	miCampoTexto = document.getElementById("inpt_search").value;
	if (miCampoTexto.length  == 0) {
		var elemento = document.getElementById("label");
		elemento.classList.remove('active');
  }
};
/* TERMINA ICONO DE LUPA PARA BUSQUEDA */








