$(function() {
    var operação = "A";
    var indice_selecionado = -1;
    var tbUsuarios = localStorage.getItem("tbUsuarios");
    tbUsuarios = JSON.parse(tbUsuarios);
    if (tbUsuarios = null)
        tbUsuarios = [];
});

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

function editUser() {
    tbUsuarios[indice_selecionado] = JSON.stringify({
        usuario: $("txtname"),
        email: $("#txtemail").val(),
        usuario: $("#txtname").val(),
        senha: $("#txtpassword").val(),
        tipo: $("#txttipo").val(),
        frequencia: $("#txtFreq").val(),
    });
    localStorage.setItem("tbUsuarios", JSON.stringify(tbUsuarios));
    alert("Informações editadas.")
    operacao = "A";
    return true;
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

function show() {

    let data = JSON.parse(xhr.responseText);
    let textoHTML = '';
    if ($("#name").val() != 0) {
        textoHTML += '<div class="user"><p class = "user-name" >Olá, ${usuario} < /p> <i class = "fas fa-user-circle" > < /i> < /div > '
    } else {
        textoHTML += '<div class="user"> <p class = "user-name" > Olá, user< /p> <i class = "fas fa-user-circle" > < /i> < /div > '
    }
    document.getElementById('tela').innerHTML = textoHTML;
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
});