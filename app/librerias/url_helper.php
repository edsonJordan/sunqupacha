<?php 
//para redireccionar pagina
function rediccionar($pagina){
    header('location: ' . RUTA_URL . $pagina);
}

function rediccionarsuccess($pagina){
    header('location: ' . RUTA_URL . $pagina.'?success=true');
}
?>