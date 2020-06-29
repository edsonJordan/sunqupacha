<?php 
//controlador del sistema o pagina estatica
class Web extends Controller{
    public function __construct()
    {
 
    }
    public function index()
    {    
        $this->vista('web/index');        
    }

}
?>