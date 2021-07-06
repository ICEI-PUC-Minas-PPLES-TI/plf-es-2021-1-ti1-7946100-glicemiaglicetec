

$(function(){
    var operacao = "A"; //"A"=Adição; "E"=Edição
    var indice_selecionado = -1; //Índice do item selecionado na lista
    var tbUsuarios = localStorage.getItem("tbUsuarios");// Recupera os dados armazenados
    tbUsuarios = JSON.parse(tbUsuarios); // Converte string para objeto
    if(tbUsuarios == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    tbUsuarios = [];
});

function Adicionar(){
    var cliente = JSON.stringify({
        Nome     : $("#txtNome").val(),
        Telefone : $("#txtTelefone").val(),
        Email    : $("#txtEmail").val()
    });
    tbUsuarios.push(cliente);
    localStorage.setItem("tbUsuarios", JSON.stringify(tbUsuarios));
    alert("Registro adicionado.");
    return true;
}

function Editar(){
    tbUsuarios[indice_selecionado] = JSON.stringify({
            Codigo   : $("#txtCodigo").val(),
            Nome     : $("#txtNome").val(),
            Telefone : $("#txtTelefone").val(),
            Email    : $("#txtEmail").val()
        });//Altera o item selecionado na tabela
    localStorage.setItem("tbUsuarios", JSON.stringify(tbUsuarios));
    alert("Informações editadas.")
    operacao = "A"; //Volta ao padrão
    return true;
}

function Excluir(){
    tbUsuarios.splice(indice_selecionado, 1);
    localStorage.setItem("tbUsuarios", JSON.stringify(tbUsuarios));
    alert("Registro excluído.");
}

function Listar(){
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>"+
        "   <tr>"+
        "   <th></th>"+
        "   <th>Código</th>"+
        "   <th>Nome</th>"+
        "   <th>Telefone</th>"+
        "   <th>Email</th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        );
    for(var i in tbUsuarios){
        var cli = JSON.parse(tbUsuarios[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td><img src='edit.png' alt='"+i+"'class='btnEditar'/><img src='delete.png' alt='"+i+"'class='btnExcluir'/></td>");
        $("#tblListar tbody").append("<td>"+cli.Codigo+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Nome+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Telefone+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Email+"</td>");
        $("#tblListar tbody").append("</tr>");
    }
}

$("#frmCadastro").on("submit",function(){
    if(operacao == "A")
        return Adicionar();
    else
        return Editar();
});


$("#tblListar").on("click", ".btnEditar", function(){
    operacao = "E";
    indice_selecionado = parseInt($(this).attr("alt"));
    var cli = JSON.parse(tbUsuarios[indice_selecionado]);
    $("#txtCodigo").val(cli.Codigo);
    $("#txtNome").val(cli.Nome);
    $("#txtTelefone").val(cli.Telefone);
    $("#txtEmail").val(cli.Email);
$("#txtCodigo").attr("readonly","readonly");
    $("#txtNome").focus();
});

$("#tblListar").on("click", ".btnExcluir",function(){
    indice_selecionado = parseInt($(this).attr("alt"));
    Excluir();
    Listar();
});





/*
let xhr;
$(function() {
    var operação = "A";
    var indice_selecionado = -1;
    var tbUsuarios = localStorage.getItem("tbUsuarios");
    tbUsuarios = JSON.parse(tbUsuarios);
    if (tbUsuarios = null)
        tbUsuarios = [];
})

function Add() {
    var user = JSON.stringify({
        email: $("#txtemail").val(),
        usuario: $("#txtname").val(),
        senha: $("#txtpassword").val(),
        tipo: $("#txttipo").val(),
        frequencia: $("#txtFreq").val(),
        idade: $("#txtId").val()
    });
    tbUsuarios.push(user);
    localStorage.setItem("tbUsuarios", JSON.stringify(tbUsuarios));
    alert("Registro adicionado.");
    operação = "A";
    return true;
}

<<<<<<< Updated upstream
function validate() {
    user.usuario = document.getElementById(usuario);
    if (val() == 0)
        alert(Usuario_inexistente);
    else
        user.senha = document.getElementById(senha);
    if (val() == 0)
        alert(Senha_incorreta)
    else
        return "#btnEntrar";
}
=======
function editUser() {
    tbUsuarios[indice_selecionado] = JSON.stringify({


            }

            function validate() {
                var user = document.getElementById(usuario);
                if (val() == 0)
                    alert(Usuario_inexistente);
                else
                    var user = document.getElementById(senha);
                if (val() == 0)
                    alert(Senha_incorreta)
                else
                    return "#btnEntrar";
            }
>>>>>>> Stashed changes

            function show() {

<<<<<<< Updated upstream
    let data = JSON.parse(xhr.responseText);
    let textoHTML = '';
    if ($("#name").val() != 0) {
        textoHTML += '<div class="user"><p class = "user-name" >Olá, ${usuario} < /p> <i class = "fas fa-user-circle" > < /i> < /div > '
    } else {
        textoHTML += '<div class="user"> <p class = "user-name" > Olá, user< /p> <i class = "fas fa-user-circle" > < /i> < /div > '
    }
    document.getElementById('tela').innerHTML = textoHTML;
}

*/
=======
                let data = JSON.parse(xhr.responseText);
                let textoHTML = '';
                if ($("#name").val() != 0) {
                    textoHTML += '<div class="user"><p class = "user-name" >Olá, ${usuario} < /p> <i class = "fas fa-user-circle" > < /i> < /div > '
                } else {
                    textoHTML += '<div class="user"> <p class = "user-name" > Olá, user< /p> <i class = "fas fa-user-circle" > < /i> < /div > '
                }
                document.getElementById('tela').innerHTML = textoHTML;
            }
            $("#cadastro").on("submite", function() {
                if (operação == "A")
                    return Add();
                else
                    return alert("Cadastro já efetuado, faça login.");
            })
>>>>>>> Stashed changes
