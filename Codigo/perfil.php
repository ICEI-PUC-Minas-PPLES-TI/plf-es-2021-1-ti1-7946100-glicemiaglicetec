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
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Glicetec</title>
    <link href="assets/css/bootstrap.css" type="text/css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="style.css" media="screen" />
    <script src="assets/js/bootstrap.js" type="text/javascript"></script>
</head>

<body>

    <div id="perfil" class="container">
        <div class="row">
            <div id="formulario" class="col-md-8 col-md-offset-2">
                <div id="titulo">
                    <h2>Perfil</h2>
                </div>

                <div class="panel panel-default">
                    <div class="panel-heading">

                    </div>
                    <div class="panel-body">

                        <div class="box box-info">
                            <form action="?act=upd" method="POST" name="form1" class="form-horizontal">
                                <div class="box-body">
                                    <div class="col-sm-12">
                                        <div align="center"> <img alt="User Pic" src="<?php echo $foto;  ?>"
                                                id="profile-image1" class="img-circle img-responsive">
                                            Trocar foto de perfil
                                        </div>
                                        <label for="foto" class="col-sm-4 control-label"></label>
                                        <div class="col-md-5">
                                            <input type="file" name="foto" value="<?php
                                        // Preenche o foto no campo foto com um valor "value"
                                        echo (isset($foto) && ($foto != null || $foto != "")) ? $foto : '';
                                        ?>" class="form-control" />
                                        </div>
                                        <br>

                                        <!-- /input-group -->
                                    </div>

                                    <input type="hidden" name="id" value="<?php
                                        // Preenche o diabete no campo diabete com um valor "value"
                                        echo (isset($id) && ($id != null || $id != "")) ? $id : '';

                                        ?>" class="form-control" />

                                    <div class="clearfix"></div>
                                    <hr style="margin:5px 0 5px 0;">
                                    <div class="clearfix">
                                        <div class="bot-border">

                                            <div for="nome" class="col-sm-5 col-xs-6 tital ">Nome</div>
                                            <div class="col-sm-5">
                                                <input type="text" name="nome" value="<?php
                                        // Preenche o diabete no campo diabete com um valor "value"
                                        echo (isset($nome) && ($nome != null || $nome != "")) ? $nome : '';

                                        ?>" class="form-control" />
                                            </div>


                                            <div for="nascimento" class="col-sm-5 col-xs-6 tital ">Nascimento</div>
                                            <div class="col-sm-5">
                                                <input type="text" name="nascimento" value="<?php
                                        // Preenche o diabete no campo diabete com um valor "value"
                                        echo (isset($nascimento) && ($nascimento != null || $nascimento != "")) ? $nascimento : '';

                                        ?>" class="form-control" />
                                            </div>
                                        </div>

                                        <div for="email" class="col-sm-5 col-xs-6 tital ">Email</div>
                                        <div class="col-sm-5">
                                            <input type="text" name="email" value="<?php
                                        // Preenche o diabete no campo diabete com um valor "value"
                                        echo (isset($email) && ($email != null || $email != "")) ? $email : '';

                                        ?>" class="form-control" />
                                        </div>
                                    </div>

                                    <div for="diabete" class="col-sm-5 col-xs-6 tital ">Diabetes</div>
                                    <div class="col-sm-5">
                                        <input type="text" name="diabete" value="<?php
                                        // Preenche o diabete no campo diabete com um valor "value"
                                        echo (isset($diabete) && ($diabete != null || $diabete != "")) ? $diabete : '';

                                        ?>" class="form-control" />
                                    </div>
                                </div>

                                <div for="pass" class="col-sm-5 col-xs-6 tital ">Senha</div>
                                <div class="col-sm-5">
                                    <input type="password" name="pass" value="<?php
                                        // Preenche o diabete no campo diabete com um valor "value"
                                        echo (isset($pass) && ($pass != null || $pass != "")) ? $pass : '';

                                        ?>" class="form-control" />
                                </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-10 col-sm-offset-2">

                                <center>
                                    <div class="pull-right">
                                        <button type="submit" class="btn btn-primary" /><span
                                            class="glyphicon glyphicon-ok"></span> Editar</button>
                                    </div>
                                </center>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        <!-- Lista os usuarios do banco de dados  -->
        <br><br>
        <div class="row">
            <div class="panel panel-default">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Nascimento</th>
                            <th>Email</th>
                            <th>Diabetes</th>
                            <th>Senha</th>
                            <th>Foto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                                /**
                                 *  Bloco que realiza o papel do Read - recupera os dados e apresenta na tela
                                 */
                                try {
                                    $stmt = $conexao->prepare("SELECT * FROM usuario");
                                    if ($stmt->execute()) {
                                        while ($rs = $stmt->fetch(PDO::FETCH_OBJ)) {

                                            ?><tr>
                            <td><?php echo $rs->nome; ?></td>
                            <td><?php echo $rs->nascimento; ?></td>
                            <td><?php echo $rs->email; ?></td>
                            <td><?php echo $rs->pass; ?></td>
                            <td><?php echo $rs->diabete; ?></td>
                            <td><?php echo $rs->foto; ?></td>
                            <td>
                                <center>
                                    <a href="?act=view&id=<?php echo $rs->id; ?>" class="btn btn-default btn-xs"><span
                                            class="glyphicon glyphicon-eye-open"></span> Ver</a>
                                    <a href="?act=del&id=<?php echo $rs->id; ?>" class="btn btn-danger btn-xs"><span
                                            class="glyphicon glyphicon-remove"></span> Excluir</a>
                                </center>
                            </td>
                        </tr>
                        <?php
                                    }
                                } else {
                                    echo "Erro: Não foi possível recuperar os dados do banco de dados";
                                }
                            } catch (PDOException $erro) {
                                echo "Erro: " . $erro->getMessage();
                            }

                            ?>
                    </tbody>
                </table>
            </div>
        </div>
        </article>
    </div>
    <div id="footer">
        <div id="footer-left">
            <div id="link" style="font-size:130%; text-align: center; ">Copyright (c) 2003 Company Name <b
                    style="color: rgb(184, 78, 78)">Glicetec</b>
            </div>
        </div>
    </div>
</body>

</html>
