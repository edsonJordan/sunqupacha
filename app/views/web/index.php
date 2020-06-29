<?php $pagina = "Inicio";
require RUTA_APP . '/views/templates/head.php';?>
	<header>
		<div class="headerdiv">			
			<div class="navegador">	
			<input class="menu-btn" type="checkbox"  id="menu-btn" />	
							<label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
							<a href=""><img class="img-logo" src="<?php echo IMAGEN; ?>imagotipo2.png">	</a>
							<label class="search" id="label" for="inpt_search">
						<input id="inpt_search"  type="text" />       
						</label>        	
				<ul class="menu" id="menu">																																					
					<li><a href="#dont">INICIO</a></li>
					<li><a href="#forget">SIGUENOS</a></li>
					<li><a href="#subscribe">CONTACTANOS</a></li>
					<li><a href="#comment">COMENTARIOS</a></li> 										
				</ul>  																								
			</div>
		</div>
	</header>
<div class="slider slider--full">
	<div class="slider__inner">
			<input type="radio" name="slider__radiobox" id="slider__radiobox--1" class="slider__radiobox slider__radiobox--1"><label for="slider__radiobox--1" class="slider__radiobox-label slider__radiobox-label--item slider__radiobox-label--item--1"></label><label for="slider__radiobox--4" class="slider__radiobox-label slider__radiobox-label--prev slider__radiobox-label--prev--4"></label><label for="slider__radiobox--2" class="slider__radiobox-label slider__radiobox-label--next slider__radiobox-label--next--2"></label>
			<input       type="radio" name="slider__radiobox" id="slider__radiobox--2" class="slider__radiobox slider__radiobox--2"><label for="slider__radiobox--2" class="slider__radiobox-label slider__radiobox-label--item slider__radiobox-label--item--2"></label><label for="slider__radiobox--1" class="slider__radiobox-label slider__radiobox-label--prev slider__radiobox-label--prev--1"></label><label for="slider__radiobox--3" class="slider__radiobox-label slider__radiobox-label--next slider__radiobox-label--next--3"></label>
			<input      type="radio" name="slider__radiobox" id="slider__radiobox--3" class="slider__radiobox slider__radiobox--3"><label for="slider__radiobox--3" class="slider__radiobox-label slider__radiobox-label--item slider__radiobox-label--item--3"></label><label for="slider__radiobox--2" class="slider__radiobox-label slider__radiobox-label--prev slider__radiobox-label--prev--2"></label><label for="slider__radiobox--4" class="slider__radiobox-label slider__radiobox-label--next slider__radiobox-label--next--4"></label>
			<input      type="radio" name="slider__radiobox" id="slider__radiobox--4" class="slider__radiobox slider__radiobox--4"><label for="slider__radiobox--4" class="slider__radiobox-label slider__radiobox-label--item slider__radiobox-label--item--4"></label><label for="slider__radiobox--3" class="slider__radiobox-label slider__radiobox-label--prev slider__radiobox-label--prev--3"></label><label for="slider__radiobox--1" class="slider__radiobox-label slider__radiobox-label--next slider__radiobox-label--next--1"></label>				
		<div class="slider__slides">
			<div class="slider__slide slider__slide--1"> 		
						<img src="<?php echo IMAGEN; ?>slider/slider02-01.png" width="100%" height="120%"  alt=""> 
			</div>	
			<div class="slider__slide slider__slide--2"> 					
				<img class="img-slider2"  src="<?php echo IMAGEN; ?>slider/slider02.png" width="100%" height="120%">
					<h1 class="h1-slider2" id="asd123"><i>Sistemas Personalizados </i></h1> 	
					<h1 class="h2-slider2" for=""><i>Para agilizar procesos internos</i></h1>
						<h2 class="h3-slider2"  for="">Diseño de paginas Web empresariales</h2> 
					<a href="#" class="form-contactar">Contactar</a> 
			</div>
		<div class="slider__slide slider__slide--3 "> <img class="imagen-slider03" src="<?php echo IMAGEN; ?>slider/trabajo04.jpg"  width="100%" height="120%" > 
			<h1 class="h1-slider3" id="asd123"><i>Sistemas auto-administrables </i></h1> 	
			<h1 class="h2-slider3" for=""><i>Aplicaciones en cms y codigo puro</i></h1>
				<h2 class="h3-slider3"  for="">Diseño de logotipos y creacion de fanpage.</h2> 
	</div>
		<div class="slider__slide slider__slide--4"> <img src="<?php echo IMAGEN; ?>slider/trabajo02.jpg" width="100%" height="120%"   alt=""> 
		<h1 class="h1-slider4" id="asd123"><i>Soporte las 24/7 </i></h1> 	
			<h1 class="h2-slider4" for=""><i>Mantenimiento de sistemas</i></h1>
			<h2 class="h3-slider4"  for="">Atención de requerimientos adicionales.</h2> 	
			</div>				
		</div>
	</div>	
	<div class="seccion2">
		<h1>Diseño de Paginas Web Empresariales</h1>	
		<h2>Certificación SSL gratis</h2>		
	</div>
	<br>
	<br>
	<div class="seccion3">
		<h1>Proyectos terminados</h1>	
		<hr class="hr-1">
		<div class="contenedor">
	  	<div class="contenedor-cards">            
		    <div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="<?php echo IMAGEN;?>proyectos/defensoria.universitaria.jpg"  alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
		    </div>
		    <div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="<?php echo IMAGEN;?>proyectos/seguimiento.universitaria.jpg"  alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
		    </div>
		    <div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="<?php echo IMAGEN;?>proyectos/comercial-azañero.jpg" alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
		    </div>
		    <div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="<?php echo IMAGEN;?>proyectos/web-sol.jpg" alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
		    </div>
		    <div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="<?php echo IMAGEN;?>proyectos/web-sol-sistema.jpg" alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
		    </div>
		    <div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="<?php echo IMAGEN;?>proyectos/web-clinica.jpg" alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
			</div>
			<div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="<?php echo IMAGEN;?>proyectos/web-clinica-sistema.jpg" alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
			</div>
			<div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="<?php echo IMAGEN;?>proyectos/inventario-sistema.jpg" alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
			</div>
			<div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="<?php echo IMAGEN;?>proyectos/web-clinica-sistema.jpg" alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
			</div>

	   	</div>
	</div> 

		
	</div>
	

	<div class="seccion4">
		<h1>Sistemas gratuitos</h1>	
		<hr class="hr-1">
		<!-- <div class="contenedor">
	  	<div class="contenedor-cards">            
		    <div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea" alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
		    </div>
		    <div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea" alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
		    </div>
		    <div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32" alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
		    </div>
		    <div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="https://images.unsplash.com/photo-1440335680360-79703e7032f9" alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
		    </div>
		    <div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="https://images.unsplash.com/photo-1455461491901-a0990c10d84c" alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
		    </div>
		    <div class="contenedor-card-item">
		      	<div class="contenedor-card-item-wrapper">
		        	<img src="https://images.unsplash.com/photo-1454997423871-b5215756e54d" alt="">
		        	<div class="contenedor-info">
		          		<div class="info">
		            		<p class="titulo">Titulo</p>
		            		<span class="categoria">Categoría</span>
		          		</div>
		          		<div class="fondo"></div>
		        	</div>
		      	</div>
		    </div>
	   	</div>
	</div>  -->
	</div>
		<div class="seccion5">
			<h1>Precios por proyectos</h1>	
			<hr class="hr-1">


				<div class="precios">
  				
				<div class="carta">    
			    		<div style=" align-content: center;" class="lado frente">
							  <h3>Sitio web professional basica </h3>
						
			       			<img src="http://silvestregustolatino.com/magento/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/causa_camaron.jpg" alt="">
			    		</div>    
			    	<div class="lado atras">
						  <h3>Sitio web professional basica </h3>
						  <h5>Administración <i style="color:red;" >no disponible</i> </h5>
        				<ul>
							  <li>Hosting (anual).</li>
							  <li>Certificación SSL</li>
			          		<li>Diseño web (html5).</li>
			          		<li>Adaptable para celulares.</li>
			          		<li>Banner animado en el home.</li>
							  <li>Hasta 5 secciones.</li>
							  <li>6 correos corporativos.</li>
			          		<li>Localización en mapa google</li>
							  <li>Formulario de contáctenos.</li>
							  <li>Integración con redes sociales.</li>
			          
						 </ul>
					</div>
				</div>	

				<div class="carta">    
			    		<div class="lado frente">
      						<h3>Catalogo de productos</h3>
			       			<img src="http://silvestregustolatino.com/magento/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/causa_camaron.jpg" alt="">
			    		</div>    
			    	<div class="lado atras">
						  <h3>Catalogo de productos</h3>
						  <h5>Administrable </h5>
        				<ul>
						<li>Hosting (anual).</li>
							<li>Certificación SSL</li>
			          		<li>Diseño web Administrable</li>
			          		<li>Adaptable para celulares.</li>
			          		<li>Catalogo de productos</li>
							<li>Hasta 12 secciones.</li>
							<li>Correos ilimitados</li>
							<li>Localización en mapa google</li>
							<li>Formulario de contáctenos.</li>
							<li>Sección post-artículos.</li>
							<li>Creación fan page comercial.</li>
							  <li>SEO Intermedio </li>
							  <li>Integración con redes sociales.</li>
			          		<li>botones de redes sociales</li>
						 </ul>
					</div>
				</div>	
				
				<div class="carta">    
			    		<div class="lado frente">
      						<h3>Sistemas de gestión</h3>
			       			<img src="http://silvestregustolatino.com/magento/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/causa_camaron.jpg" alt="">
			    		</div>    
			    	<div class="lado atras">
						  <h3>Sistemas de gestión</h3>
						  <h5>Administrable</h5>
        				<ul>
							<li>Hosting (anual).</li>
							<li>Certificación SSL</li>
			          		<li>Diseño web administrable</li>
							<li>Adaptable para dispositivos</li>							  
							<li>Analisis de requerimientos</li>
							<li>Diseño sistema adicional</li>
							<li>Hasta 15 secciones</li>
							<li>Correos ilimitados</li>
							<li>SEO Intermedio</li>
							<li>Localización en mapa google</li>
							<li>Creacion de logotipo</li>
			          		<li>Creacion de banners</li>
							<li>Soporte las 24/7</li>
							<li>Hasta 2 post-requerimientos</li>
							<li>Creación fan page comercial</li>
							<li>Integración con redes sociales.</li>
							<li>botones de redes sociales</li>			          		
						</ul>
					</div>
				</div>
			</div>

			
		
		</div>
	

				

		<div class="seccion6">
			<h1>Formas de Pago</h1>	
			<hr class="hr-1">
		</div>
<body>   


</body>

<?php  require RUTA_APP . '/views/templates/footer.php'; ?>