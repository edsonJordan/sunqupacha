<?php 
    //Configurar de acceso a la base de datos
    define('DB_HOST', 'localhost');
    define('DB_USER', 'root');
    define('DB_PASSWORD', '');
    define('DB_NAME', 'db_transporte');
    
    //RUTA DE LA APLICACION
    define('RUTA_APP', dirname(dirname(__FILE__)));
    //RUTA URL EJEMPLO C:\wamp64\www\Tesis\framework\app http://localhost:8080/Tesis/framework
    define('RUTA_URL', 'http://localhost:8080/sunqupacha/');
    define('NOMBRESITIO', 'Sunqupacha');
    define('IMAGEN', RUTA_URL.'public/img/');
?>