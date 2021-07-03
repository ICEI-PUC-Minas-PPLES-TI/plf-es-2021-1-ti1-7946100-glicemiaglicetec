<?php

$nome = "";
$nascimento = "";
$email = "";
$diabete = "";
$foto = "http://ssl.gstatic.com/accounts/ui/avatar_2x.png";

// Verificar se foi enviando dados via POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = filter_input(INPUT_POST, 'id');
    $nome = filter_input(INPUT_POST, 'nome');
    $nascimento = filter_input(INPUT_POST, 'nascimento');
    $email = filter_input(INPUT_POST, 'email');
    $pass = filter_input(INPUT_POST, 'pass');
    $diabete = filter_input(INPUT_POST, 'diabete');
    $foto = filter_input(INPUT_POST, 'foto');
    
   
} else if (!isset($id)) {
// Se não se não foi setado nenhum valor para variável $id
    $id = (isset($_GET["id"]) && $_GET["id"] != null) ? $_GET["id"] : "";
}

// Cria a conexão com o banco de dados
try {
    $conexao = new PDO('mysql:host=localhost;dbname=glicetec', "glicetec", "glicetec123");
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexao->exec("set names utf8");
} catch (PDOException $erro) {
    echo "<p class=\"bg-danger\">Erro na conexão:" . $erro->getMessage() . "</p>";
}

// Bloco If que Salva os dados no Banco - atua como Create e Update
if (isset($_REQUEST["act"]) && $_REQUEST["act"] == "upd" && $nome != "") {
   
    $stmt = $conexao->prepare("UPDATE usuario SET nome=?, nascimento=?,email=?, foto=?, pass=?, diabete=? WHERE id = ?");
    $stmt->bindParam(7, $id);

    $stmt->bindParam(1, $nome);
    $stmt->bindParam(2, $nascimento);
    $stmt->bindParam(3, $email);
    $stmt->bindParam(4, $foto);
    $stmt->bindParam(5, $pass);
    $stmt->bindParam(6, $diabete);
   
    if ($stmt->execute()) {
        if ($stmt->rowCount() > 0) {
                echo "<p class=\"bg-success\">Dados cadastrados com sucesso!</p>";
              
        } else {
                echo "<p class=\"bg-danger\">Erro ao tentar editar o perfil</p>";
        }
    }
    
}

// Bloco if que vê as informações no formulário, etapa utilizada pelo Update
if (isset($_REQUEST["act"]) && $_REQUEST["act"] == "view" && $id != "") {
    $sql = "SELECT * FROM usuario where id = $id";
    $result = $conexao->query( $sql );
    $row= $result->fetchAll();
    $nome = $row[0][1];
    $nascimento = $row[0][2];
    $email = $row[0][3];
    $foto = $row[0][4];
    $pass = $row[0][5];
    $diabete = $row[0][6];
}


// Bloco if utilizado pela etapa Delete
if (isset($_REQUEST["act"]) && $_REQUEST["act"] == "del" && $id != "") {
    try {
        $stmt = $conexao->prepare("DELETE FROM usuario WHERE id = ?");
        $stmt->bindParam(1, $id, PDO::PARAM_INT);
        if ($stmt->execute()) {
            echo "<p class=\"bg-success\">Registo foi excluído com êxito</p>";
            $id = null;
        } else {
            echo "<p class=\"bg-danger\">Erro: Não foi possível executar a declaração sql</p>";
        }
    } catch (PDOException $erro) {
        echo "<p class=\"bg-danger\">Erro: " . $erro->getMessage() . "</a>";
    }
}

?>