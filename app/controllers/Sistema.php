<?php 
//controlador del sistema o pagina estatica
class Sistema extends Controller{
    public function __construct()
    {     
    }
    public function index()
    {    
        $this->vista('sistema/index');        
    }
  
    
}
?>