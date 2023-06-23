<?php 
// classe dashboard

class Dashboard {
    public $data_inicio;
    public $data_fim;
    public $numeroVendas;
    public $totalVendas;

    public function __get($atributo) {
        return $this->$atributo;
    }

    public function __set($atributo, $valor) {
        $this->atributo = $valor;
        return $this;
    }
}
// classe de conexao com o banco de dados
class Conexao {
    private $host = 'localhost';
    private $dbname = 'dashboard';
    private $user = 'root';
    private $pass = '';

    public function conectar() {
        try {

        } catch(PDOException $e) {
            echo 'p'.$e->getMessage().'p';
        }

    }
}
?>